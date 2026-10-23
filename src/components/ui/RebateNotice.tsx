import Link from "next/link";
import { rebateChangeNotice } from "@/content/rebates";

export function RebateNotice() {
  return <p className="rebate-notice"><strong>Before counting a rebate:</strong> {rebateChangeNotice}{" "}<Link className="text-link" href="/rebates/2026-montana-hvac-rebates">Review verified program details →</Link></p>;
}
