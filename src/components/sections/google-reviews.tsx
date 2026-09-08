import Script from "next/script";

// Renders nothing until the Elfsight Google Reviews widget is set up:
// 1. Sign up free at elfsight.com, add a "Google Reviews" widget, and
//    connect it to this business's Google listing (place ID
//    0x3994fb368e65dacb:0xd14d230e6f8c4371 / kgmid /g/11zgm108jj).
// 2. Elfsight gives you a snippet like:
//      <div class="elfsight-app-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"></div>
//    Copy just that class name into NEXT_PUBLIC_ELFSIGHT_WIDGET_CLASS in
//    .env.local (and in the hosting provider's env settings for prod).
const WIDGET_CLASS = process.env.NEXT_PUBLIC_ELFSIGHT_WIDGET_CLASS;

export function GoogleReviews() {
  if (!WIDGET_CLASS) return null;

  return (
    <section id="reviews" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary">
            Verified On Google
          </span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Reviews From Our Customers
          </h2>
        </div>
        <div className={WIDGET_CLASS} data-elfsight-app-lazy />
      </div>
      <Script src="https://static.elfsight.com/platform/platform.js" strategy="lazyOnload" />
    </section>
  );
}
