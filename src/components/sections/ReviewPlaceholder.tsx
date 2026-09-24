export function ReviewPlaceholder() {
  if (process.env.NODE_ENV === "production") return null;
  return (
    <p className="resource-notice">
      Internal preview: verified customer reviews are pending. No testimonials
      are displayed.
    </p>
  );
}
