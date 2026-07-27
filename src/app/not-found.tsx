import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-shell text-center">
      <p className="eyebrow">404</p>
      <h1 className="section-title mt-4">That page is not part of the product.</h1>
      <p className="lede mx-auto mt-5 max-w-xl">
        The link may be old, or the page may have moved during the redesign.
      </p>
      <Link href="/" className="button-primary mt-8">
        Return home
      </Link>
    </section>
  );
}
