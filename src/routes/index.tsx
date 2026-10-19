import {createFileRoute} from '@tanstack/react-router';

import portfolioHtml from '../../public/portfolio.html?raw';

/**
 * `/` is the portfolio page, served byte-for-byte. It's a complete,
 * self-contained document (own <html>, styles, script) with nothing in common
 * with the community chrome in `__root`, so a GET handler answers the raw
 * request directly instead of going through the route component tree — the
 * same content already reachable as a static asset at `/portfolio.html`.
 *
 * Any in-app link to `/` must stay a plain `<a href="/">`, never a `<Link>`:
 * the client router never issues this request, so a SPA navigation would
 * render nothing instead of this response.
 */
export const Route = createFileRoute('/')({
  server: {
    handlers: {
      GET: () =>
        new Response(portfolioHtml, {
          headers: {'Content-Type': 'text/html; charset=utf-8'},
        }),
    },
  },
});
