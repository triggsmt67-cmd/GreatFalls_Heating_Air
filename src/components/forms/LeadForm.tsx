"use client";
import { useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Flame,
  Calculator,
  Wrench,
  MessageCircle,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { siteConfig } from "@/content/site";
import {
  FormIntent,
  LeadFormData,
  validateLeadForm,
} from "@/lib/validation/leadFormSchema";
import { trackEvent } from "@/lib/analytics/events";
const intents = [
  { value: "emergency", label: "Emergency Repair", icon: Flame },
  { value: "estimate", label: "New Estimate", icon: Calculator },
  { value: "maintenance", label: "Maintenance", icon: Wrench },
  { value: "general", label: "General Question", icon: MessageCircle },
] as const;
export function LeadForm({
  initialIntent = "estimate",
  sourceRoute = "/",
  className = "",
  headline = "Request service or an estimate",
  progressive = false,
}: {
  initialIntent?: FormIntent;
  sourceRoute?: string;
  className?: string;
  headline?: string;
  progressive?: boolean;
}) {
  const router = useRouter(),
    id = useId(),
    summary = useRef<HTMLDivElement>(null);
  const [intent, setIntent] = useState<FormIntent>(initialIntent),
    [expanded, setExpanded] = useState(!progressive),
    [started, setStarted] = useState(false);
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    preferredContact: "phone",
    message: "",
    consent: false,
    honeypot: "",
  });
  const [errors, setErrors] = useState<
      Partial<Record<keyof LeadFormData, string>>
    >({}),
    [error, setError] = useState(""),
    [busy, setBusy] = useState(false);
  function change(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setData((d) => ({
      ...d,
      [name]:
        e.target.type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
    setErrors((v) => ({ ...v, [name]: undefined }));
    if (!started) {
      setStarted(true);
      trackEvent({
        name: "lead_form_start",
        properties: { intent, route: sourceRoute },
      });
    }
  }
  function report(
    message: string,
    fields: Partial<Record<keyof LeadFormData, string>> = {},
  ) {
    setError(message);
    setErrors(fields);
    requestAnimationFrame(() => summary.current?.focus());
  }
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    setError("");
    const validation = validateLeadForm({ ...data, intent, sourceRoute });
    if (!validation.isValid) {
      report("Please check the fields below.", validation.errors);
      return;
    }
    setBusy(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, intent, sourceRoute }),
      });
      const result = await res.json();
      if (res.ok && result.success) {
        trackEvent({
          name: "lead_form_submit_success",
          properties: { intent, route: sourceRoute },
        });
        router.push(result.simulated ? "/thank-you?preview=1" : "/thank-you");
      } else
        report(
          result.error || "Your request could not be sent. Please call.",
          result.fieldErrors,
        );
    } catch {
      report(
        `Connection problem. Your details are still here. Please try again or call ${siteConfig.phoneDisplay}.`,
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className={`lead-form ${className}`}>
      <h2>{headline}</h2>
      <p className="form-intro">
        {progressive
          ? "Choose a service need to get started."
          : "Tell us a little about your home and how to reach you."}
      </p>
      <div className="intent-options" role="group" aria-label="Service need">
        {intents.map(({ value, label, icon: Icon }) => (
          <button
            key={value}
            type="button"
            className="intent-option"
            aria-pressed={expanded && intent === value}
            aria-expanded={expanded && intent === value}
            aria-controls={`${id}-fields`}
            onClick={() => {
              setIntent(value);
              setExpanded(true);
            }}
          >
            <Icon aria-hidden="true" />
            <span>{label}</span>
            <ArrowRight size={14} aria-hidden="true" />
          </button>
        ))}
      </div>
      <div
        id={`${id}-fields`}
        hidden={!expanded}
        className={expanded ? "form-reveal" : ""}
      >
        {intent === "emergency" && (
          <div className="form-alert" role="status">
            <strong>For urgent heating or cooling help, please call.</strong>
            <p>
              Forms are not continuously monitored. If you smell gas or a carbon
              monoxide alarm sounds, leave the home and contact emergency
              services from a safe location.
            </p>
            <a
              className="button button-orange"
              href={`tel:${siteConfig.phoneE164}`}
            >
              Call {siteConfig.phoneDisplay}
            </a>
          </div>
        )}
        {error && (
          <div
            ref={summary}
            tabIndex={-1}
            role="alert"
            className="error-summary"
          >
            {error}
          </div>
        )}
        <form onSubmit={submit} noValidate aria-busy={busy}>
          <div className="sr-only" aria-hidden="true">
            <label htmlFor={`${id}-hp`}>Leave empty</label>
            <input
              id={`${id}-hp`}
              name="honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={data.honeypot}
              onChange={change}
            />
          </div>
          <div className="form-fields">
            {(
              [
                {
                  name: "fullName",
                  label: "Full name",
                  type: "text",
                  autoComplete: "name",
                },
                {
                  name: "phone",
                  label: "Phone number",
                  type: "tel",
                  autoComplete: "tel",
                },
                {
                  name: "email",
                  label: "Email address",
                  type: "email",
                  autoComplete: "email",
                },
                {
                  name: "location",
                  label: "Town or ZIP code",
                  type: "text",
                  autoComplete: "postal-code",
                },
              ] as const
            ).map((f) => (
              <div className="form-field" key={f.name}>
                <label htmlFor={`${id}-${f.name}`}>{f.label} *</label>
                <input
                  id={`${id}-${f.name}`}
                  name={f.name}
                  type={f.type}
                  autoComplete={f.autoComplete}
                  required
                  value={data[f.name]}
                  onChange={change}
                  aria-invalid={!!errors[f.name]}
                  aria-describedby={
                    errors[f.name] ? `${id}-${f.name}-error` : undefined
                  }
                />
                {errors[f.name] && (
                  <p className="field-error" id={`${id}-${f.name}-error`}>
                    {errors[f.name]}
                  </p>
                )}
              </div>
            ))}
            <div className="form-field form-wide">
              <label htmlFor={`${id}-message`}>
                What’s happening with your system? *
              </label>
              <textarea
                id={`${id}-message`}
                name="message"
                rows={3}
                required
                maxLength={2500}
                value={data.message}
                onChange={change}
                aria-invalid={!!errors.message}
                aria-describedby={
                  errors.message ? `${id}-message-error` : undefined
                }
              />
              {errors.message && (
                <p className="field-error" id={`${id}-message-error`}>
                  {errors.message}
                </p>
              )}
            </div>
          </div>
          <fieldset className="contact-method">
            <legend>How should we contact you?</legend>
            <div>
              {["phone", "email", "text"].map((method) => (
                <label key={method}>
                  <input
                    type="radio"
                    name="preferredContact"
                    value={method}
                    checked={data.preferredContact === method}
                    onChange={change}
                  />
                  {method === "phone"
                    ? "Phone"
                    : method === "email"
                      ? "Email"
                      : "Text"}
                </label>
              ))}
            </div>
          </fieldset>
          <label className="consent-label">
            <input
              type="checkbox"
              name="consent"
              checked={data.consent}
              onChange={change}
              required
              aria-invalid={!!errors.consent}
              aria-describedby={
                errors.consent ? `${id}-consent-error` : undefined
              }
            />
            <span>
              I agree to the <Link href="/privacy">privacy policy</Link> and
              authorize contact about this inquiry.
            </span>
          </label>
          {errors.consent && (
            <p id={`${id}-consent-error`} className="field-error">
              {errors.consent}
            </p>
          )}
          <div className="form-submit-row">
            <button
              className="button button-blue"
              type="submit"
              disabled={busy}
            >
              {busy ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending…
                </>
              ) : (
                "Send request →"
              )}
            </button>
            <small>* Required fields</small>
          </div>
        </form>
      </div>
    </div>
  );
}
