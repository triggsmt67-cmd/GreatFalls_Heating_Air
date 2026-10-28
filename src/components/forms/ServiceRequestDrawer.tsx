"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { LeadForm } from "./LeadForm";
import type { FormIntent } from "@/lib/validation/leadFormSchema";
import styles from "./ServiceRequestDrawer.module.css";

const RequestContext = createContext<((intent: FormIntent) => void) | null>(null);

export function ServiceRequestProvider({ children }: { children: React.ReactNode }) {
  const [request, setRequest] = useState<FormIntent | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!request) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    const previousRootOverflow = document.documentElement.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousRootOverflow;
      if (trigger.current?.isConnected) trigger.current.focus({ preventScroll: true });
      else document.querySelector<HTMLButtonElement>(".mobile-toggle")?.focus({ preventScroll: true });
    };
  }, [request]);

  useEffect(() => { dialog.current?.close(); }, [pathname]);

  function open(intent: FormIntent) {
    trigger.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setRequest(intent);
  }

  return (
    <RequestContext.Provider value={open}>
      {children}
      <dialog
        ref={dialog}
        id="service-request-drawer"
        className={styles.drawer}
        aria-label="Request service"
        onClose={() => setRequest(null)}
        onClick={event => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.current?.close();
        }}
      >
        <div className={styles.top}>
          <span>Great Falls Heating and Air</span>
          <button type="button" aria-label="Close service request" onClick={() => dialog.current?.close()}>
            <X size={22} /><span>Close</span>
          </button>
        </div>
        <div className={styles.content}>
          {request && <LeadForm initialIntent={request} sourceRoute={pathname} headline="Request service" />}
        </div>
      </dialog>
    </RequestContext.Provider>
  );
}

export function RequestServiceLink({ children, className, intent = "general", onOpen }: {
  children: React.ReactNode;
  className?: string;
  intent?: FormIntent;
  onOpen?: () => void;
}) {
  const open = useContext(RequestContext);
  return (
    <a
      href={`/contact?intent=${intent}`}
      className={className}
      aria-haspopup="dialog"
      aria-controls="service-request-drawer"
      onClick={event => {
        if (!open || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        open(intent);
        onOpen?.();
      }}
    >{children}</a>
  );
}
