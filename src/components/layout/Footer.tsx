import Link from "next/link";
import { Brand } from "@/components/ui/Brand";
import { siteConfig } from "@/content/site";
import { navigationServices } from "@/content/services";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Brand />
          <p>
            Residential heating & cooling.
            <br />
            Great Falls and the communities around it.
          </p>
          <a className="footer-phone" href={`tel:${siteConfig.phoneE164}`}>
            {siteConfig.phoneDisplay}
          </a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
        <div>
          <h2>Services</h2>
          {navigationServices.map((s) => (
            <Link key={s.route} href={s.route}>
              {s.title}
            </Link>
          ))}
        </div>
        <div>
          <h2>Useful information</h2>
          <Link href="/rebates/2026-montana-hvac-rebates">
            2026 Montana rebates
          </Link>
          <Link href="/about">About Great Falls Heating & Air</Link>
          <Link href="/contact">Contact & estimates</Link>
          <Link href="/privacy">Privacy policy</Link>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>
          © {new Date().getFullYear()} {siteConfig.businessName}
        </span>
        <span>Great Falls, MT</span>
      </div>
    </footer>
  );
}
