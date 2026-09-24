type PhotoPlaceholderProps = {
  slot: string;
  subject: string;
  dimensions: string;
  crop: string;
  ratio?: "hero" | "landscape" | "portrait" | "wide";
  tone?: "light" | "blue" | "dark";
  className?: string;
};

export function PhotoPlaceholder({
  slot,
  subject,
  dimensions,
  crop,
  ratio = "landscape",
  tone = "light",
  className = "",
}: PhotoPlaceholderProps) {
  const accessibleDescription = `Photo ${slot} placeholder: ${subject}. Recommended source size ${dimensions}. ${crop}`;

  return (
    <figure
      className={`photo-slot photo-slot--${ratio} photo-slot--${tone} ${className}`}
    >
      <div
        className="photo-slot-frame"
        role="img"
        aria-label={accessibleDescription}
      >
        <svg
          className="photo-slot-wind"
          viewBox="0 0 600 240"
          fill="none"
          aria-hidden="true"
        >
          <path d="M-30 82C92 24 166 137 286 75s221-35 344 14" />
          <path d="M-20 130c105-52 205 49 312-1s207-49 329 17" />
          <path d="M-40 184c134-55 210 35 328-7s211-25 351 11" />
        </svg>
        <span className="photo-slot-index">Photo {slot}</span>
        <div className="photo-slot-copy">
          <strong>Image here</strong>
          <span>{dimensions} minimum</span>
          <small>{subject}</small>
        </div>
        <span className="photo-slot-corner" aria-hidden="true" />
      </div>
      <figcaption>{crop}</figcaption>
    </figure>
  );
}
