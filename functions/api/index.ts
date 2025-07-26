// Auto-generated index.ts for Pages Functions routing
import type { Request } from 'itty-router';


export async function onRequest({ request }: { request: Request }): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;


  return new Response("Not found", { status: 404 });
}
