// netlify/edge-functions/redirect.js

export default async (request, context) => {
  let url = new URL(request.url);
  url.hostname = "snapshots.slint.dev";
  url.pathname.replace("/1.9.0/", "/master/");
  const response = await fetch(url.toString());

  // Create a new response with the fetched content and set CORS headers
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: {
      ...response.headers,
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "no-store",
    },
  });
};

export const config = { path: "/1.9.0/wasm-interpreter/slint_wasm_interpreter.js" };
