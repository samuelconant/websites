"use client";

/**
 * Inline script that runs during HTML parsing, before first paint.
 * Per the Next.js "Preventing flash before hydration" guide: executable on
 * the server render, inert (`text/plain`) on the client so React doesn't
 * warn about rendering a script tag.
 */
export default function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
