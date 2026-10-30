import "server-only";

export type RateLimitResult = "allowed" | "limited" | "unavailable";
export interface LeadRateLimiter {
  check(key: string): Promise<RateLimitResult>;
}

// Basic abuse protection without a database: five attempts per IP in ten
// minutes per server instance. Counters reset on restarts and are not shared
// across Vercel instances. Validation and the honeypot remain separate checks.
const attempts = new Map<string, number[]>();
export const leadRateLimiter: LeadRateLimiter = {
  async check(key) {
    const now = Date.now();
    for (const [ip, times] of attempts) {
      const recent = times.filter((t) => now - t < 600_000);
      if (recent.length) attempts.set(ip, recent);
      else attempts.delete(ip);
    }
    const recent = attempts.get(key) || [];
    if (recent.length >= 5) return "limited";
    if (attempts.size >= 10_000 && !attempts.has(key)) return "unavailable";
    attempts.set(key, [...recent, now]);
    return "allowed";
  },
};
