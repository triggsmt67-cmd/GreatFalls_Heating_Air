import Link from "next/link";
import Image from "next/image";
import { Brand } from "@/components/ui/Brand";
import { siteConfig } from "@/content/site";
import { navigationServices } from "@/content/services";
import styles from "./Footer.module.css";

function SocialIcon({ platform }: { platform: "facebook" | "instagram" }) {
  return platform === "facebook" ? (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.096 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.972h-1.513c-1.49 0-1.956.931-1.956 1.887v2.262h3.328l-.532 3.49h-2.796V24C19.612 23.096 24 18.1 24 12.073Z" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.contact}>
          <Link href="/" className={styles.wordmark} aria-label={`${siteConfig.businessName} — home`}>
            <span>Great Falls</span>
            <span>Heating and Air LLC</span>
          </Link>
          <p>Residential heating & cooling.<br />Great Falls and the communities around it.</p>
          <a className={styles.phone} href={`tel:${siteConfig.phoneE164}`}>{siteConfig.phoneDisplay}</a>
          <a className={styles.email} href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <p className={styles.location}>{siteConfig.locality}, {siteConfig.region}</p>
          <p className={styles.hours}>{siteConfig.hours}<br />{siteConfig.emergencyAvailability}</p>
          <div className={styles.logo}><Brand hideText /></div>
        </div>
        <nav className={styles.links} aria-label="Footer services">
          <h2>Services</h2>
          {navigationServices.map((s) => <Link key={s.route} href={s.route}>{s.title}</Link>)}
        </nav>
        <div>
          <nav className={styles.links} aria-label="Footer information">
            <h2>Useful information</h2>
            <Link href="/rebates/2026-montana-hvac-rebates">2026 Montana rebates</Link>
            <Link href="/about">About Robert Ross</Link>
            <Link href="/contact">Contact & estimates</Link>
            <Link href="/privacy">Privacy policy</Link>
          </nav>
          <div className={styles.socials} aria-label="Social media">
            {(["facebook", "instagram"] as const).map((platform) => {
              const url = siteConfig.socials[platform];
              const label = platform === "facebook" ? "Facebook" : "Instagram";
              const content = <><SocialIcon platform={platform} /><span>{label}</span></>;
              return url.startsWith("https://") ? (
                <a key={platform} href={url} target="_blank" rel="noopener noreferrer">{content}</a>
              ) : (
                <span key={platform} className={styles.pendingSocial} aria-disabled="true" title={`${label} profile link coming soon`}>
                  {content}<span className={styles.srOnly}> — profile link coming soon</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.landscape} aria-hidden="true">
        <Image src="/images/great-falls-neighborhood-footer.png" alt="" width={2172} height={724} sizes="100vw" />
      </div>
      <div className={styles.bottom}>
        <div className={`wrap ${styles.bottomInner}`}>
          <span>© {new Date().getFullYear()} {siteConfig.businessName}</span>
          <span>Great Falls, MT</span>
          <Link className={styles.credit} href="/sitemap.xml">Sitemap</Link>
          <a className={styles.credit} href="https://truepath406.com" target="_blank" rel="noopener noreferrer">
            Powered by TruePath Digital
          </a>
        </div>
      </div>
    </footer>
  );
}
