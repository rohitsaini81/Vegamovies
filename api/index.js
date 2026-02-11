let astroHandlerPromise;

export default async function handler(req, res) {
  astroHandlerPromise ||= import('../frontend/dist/server/entry.mjs').then((mod) => mod.handler);
  const astroHandler = await astroHandlerPromise;
  return astroHandler(req, res);
}
