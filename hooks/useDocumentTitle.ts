import { useEffect } from "react";

/**
 * Base title appended to every page. Kept in one place so we can tweak
 * the separator or branding without grepping the component tree.
 */
const SITE_TITLE = "Abhinav Srivastav";

/**
 * Sets `document.title` for the lifetime of the calling component.
 *
 * - Pass `null`/`undefined` for `pageTitle` to render just the site
 *   title (useful on the home page).
 * - On unmount the previous title is restored so stale page titles
 *   don't linger when a page is swapped out mid-transition.
 */
export function useDocumentTitle(pageTitle?: string | null): void {
  useEffect(() => {
    const previous = document.title;
    document.title = pageTitle ? `${pageTitle} — ${SITE_TITLE}` : SITE_TITLE;
    return () => {
      document.title = previous;
    };
  }, [pageTitle]);
}
