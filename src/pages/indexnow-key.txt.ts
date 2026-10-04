import { SITE } from '../lib/site';

// The deploy workflow reads the IndexNow key from here; public/<key>.txt is the file search engines check.
export const GET = () => new Response(SITE.indexNowKey, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
