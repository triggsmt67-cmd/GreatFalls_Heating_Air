import Image from "next/image";
export function Photo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={`editorial-photo ${className}`}>
      <div>
        <Image
          src="/images/winter-equipment.webp"
          alt="AI-generated illustration of unbranded HVAC equipment beside a home in winter; not a company installation"
          fill
          preload={priority}
          sizes="(max-width: 767px) 100vw, 55vw"
          className="object-cover"
        />
      </div>
      <figcaption>
        Temporary AI-generated image · Not a company installation
      </figcaption>
    </figure>
  );
}
