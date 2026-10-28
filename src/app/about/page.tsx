import Link from "next/link";
import { TrustMarks } from "@/components/ui/TrustMarks";
import { buildMetadata } from "@/lib/seo/metadata";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FinalDarkCTA } from "@/components/sections/FinalDarkCTA";
import styles from "./about.module.css";

export const metadata = buildMetadata({
  title: "Meet Robert Ross | About Greatfalls Heating and Air",
  description:
    "Meet Robert Ross, owner of Greatfalls Heating and Air LLC, a veteran-owned HVAC company serving Great Falls, Montana, and surrounding communities.",
  canonicalPath: "/about",
});

export default function Page() {
  return (
    <>
      <div className="wrap interior">
        <Breadcrumbs items={[{ name: "About", url: "/about" }]} />
        <article className={styles.introduction} aria-labelledby="owner-heading">
          <header className={styles.heading}>
            <p className="eyebrow">About Greatfalls Heating and Air LLC</p>
            <h1 id="owner-heading">
              Meet Robert Ross,
              <span>Owner of Greatfalls Heating and Air</span>
            </h1>
            <p className={styles.lead}>
              Greatfalls Heating and Air LLC is a veteran-owned heating and cooling
              company serving Great Falls, Montana, and surrounding communities.
            </p>
          </header>
          <div className={styles.story}>
            <p>
              I’m Robert Ross, the owner. I’m a United States military veteran with
              more than 20 years of experience in the HVAC industry. I started this
              company with a straightforward goal: give customers the service and
              quality of work they’re paying for.
            </p>
            <p>
              When your heating or cooling system needs attention, you deserve
              clear answers. You should understand what’s wrong, what work is
              recommended, and what the quote covers. You should also be able to
              count on someone showing up when they say they will and treating your
              home or business with respect.
            </p>
            <p>
              Taking shortcuts might save a contractor time, but it doesn’t serve
              the customer. My approach is to take the time the job requires,
              explain the work, and complete it carefully.
            </p>
            <p className={styles.commitment}>
              That’s what “customers deserve better” means to me. Respect your time.
              Be straightforward about the price. Do the work properly. Those are
              the expectations I want Greatfalls Heating and Air to be known for.
            </p>
          </div>
          <footer className={styles.closing}>
            <ul className={styles.values} aria-label="Company values">
              <li>Veteran-Owned</li>
              <li>Locally Operated</li>
              <li>Built on Integrity</li>
            </ul>
            <p>Proudly serving Great Falls, Montana, and surrounding communities!</p>
            <Link className="text-link" href="/contact">
              Start a conversation →
            </Link>
          </footer>
        </article>
        <TrustMarks />
      </div>
      <FinalDarkCTA />
    </>
  );
}
