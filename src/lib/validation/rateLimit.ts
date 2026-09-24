export type RateLimitResult = "allowed" | "limited" | "unavailable";
export interface LeadRateLimiter {
  check(key: string): Promise<RateLimitResult>;
}

// Local development only. A shared durable implementation must replace this
// adapter before production submissions are enabled. No env flag bypass.
const attempts = new Map<string, number[]>();
export const leadRateLimiter: LeadRateLimiter = {
  async check(key) {
    if (process.env.NODE_ENV === "production") return "unavailable";
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
