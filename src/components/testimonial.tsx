const testimonials = [
  {
    quote:
      "A short testimonial about bringing clarity to a complicated product idea will go here.",
    name: "Client name",
    title: "Founder, Company",
  },
  {
    quote:
      "A short testimonial about the collaboration, communication, and process will go here.",
    name: "Client name",
    title: "Product Lead, Company",
  },
  {
    quote:
      "A short testimonial about a successful launch and its impact will go here.",
    name: "Client name",
    title: "Director, Company",
  },
];

function PlaceholderAvatar({ name }: { name: string }) {
  const initial = name.trim().charAt(0).toUpperCase() || "?";

  return (
    <span
      aria-hidden="true"
      className="flex size-10 shrink-0 items-center justify-center rounded-full border border-accent/25 bg-accent/10 font-semibold text-accent"
    >
      {initial}
    </span>
  );
}

export default function Testimonial() {
  return (
    <section aria-labelledby="testimonials-heading" className="page-shell pb-20 sm:pb-28 py-8">
      <div className="reveal-header mb-10">
        <p className="eyebrow">Testimonials</p>
        <h2 id="testimonials-heading" className="section-title mt-4">
          Hear from people I&apos;ve worked with.
        </h2>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.quote}
            className="card flex min-h-64 flex-col p-6 sm:p-8"
          >
            <span
              className="font-serif text-3xl font-semibold leading-none text-accent"
              aria-hidden="true"
            >
              “
            </span>
            <blockquote className="mt-4">
              <p className="text-pretty text-lg font-medium leading-7">
                {testimonial.quote}
              </p>
            </blockquote>
            <figcaption className="mt-auto flex items-center gap-3 pt-8">
              <PlaceholderAvatar name={testimonial.name} />
              <div className="min-w-0 text-xs">
                <cite className="block truncate font-semibold not-italic">
                  {testimonial.name}
                </cite>
                <span className="mt-0.5 block truncate uppercase tracking-[0.08em] text-muted-foreground">
                  {testimonial.title}
                </span>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
