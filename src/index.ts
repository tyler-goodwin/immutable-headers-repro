export default {
	async fetch(request, env, ctx): Promise<Response> {
		try {
			const response = await fetch("https://example.com")
			// This will error in deployed worker without cloning the response
			response.headers.set("X-Test", 'test-value')
			return response;
		} catch (err) {
			// This branch should be hit due to immutable headers from fetch
			return new Response("Error!", { status: 500 })
		}
	},
} satisfies ExportedHandler<Env>;
