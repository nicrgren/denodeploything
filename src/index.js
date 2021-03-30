


addEventListener("fetch", (event) => {
    const response = new Response("Deno helloer", { headers: { "content-type": "text/plain"}});
    event.respondWith(response)
});