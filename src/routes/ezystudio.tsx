import {createFileRoute} from '@tanstack/react-router';

import ezystudioHtml from '../../public/ezystudio.html?raw';

/**
 * `/ezystudio` is a self-contained promo page (own <html>, styles, script),
 * served byte-for-byte the same way `/` serves the portfolio — see
 * `src/routes/index.tsx` for why a GET handler answers directly instead of
 * going through the route component tree.
 *
 * Any in-app link to this page must stay a plain `<a href="/ezystudio">`,
 * never a `<Link>`: the client router never issues this request.
 */
export const Route = createFileRoute('/ezystudio')({
  server: {
    handlers: {
      GET: () =>
        new Response(ezystudioHtml, {
          headers: {'Content-Type': 'text/html; charset=utf-8'},
        }),
    },
  },
});
