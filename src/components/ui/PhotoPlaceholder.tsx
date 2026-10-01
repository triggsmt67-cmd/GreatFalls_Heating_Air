import Image from "next/image";

type PhotoPlaceholderProps = {
  slot: string;
  subject: string;
  dimensions: string;
  crop?: string;
  ratio?: "hero" | "landscape" | "portrait" | "wide";
  tone?: "light" | "blue" | "dark";
  className?: string;
  src?: string;
  alt?: string;
  caption?: string;
  priority?: boolean;
  sizes?: string;
};

export function PhotoPlaceholder({
  slot,
  subject,
  dimensions,
  crop = "",
  ratio = "landscape",
  tone = "light",
  className = "",
  src,
  alt,
  caption,
  priority = false,
  sizes,
}: PhotoPlaceholderProps) {
  if (src) {
    return (
      <figure
        className={`photo-slot photo-slot--has-image photo-slot--${ratio} ${className}`}
      >
        <div className="photo-real-frame">
          <Image
            src={src}
            alt={alt || subject}
            fill
            priority={priority}
            sizes={
              sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
            }
            className="photo-real-img"
          />
        </div>
        {caption && (
          <figcaption className="photo-real-caption">{caption}</figcaption>
        )}
      </figure>
    );
  }
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
        <span className="photo-registration" aria-hidden="true">+</span>
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
