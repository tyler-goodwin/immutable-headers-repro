import { SELF, fetchMock } from 'cloudflare:test';
import { it, expect, beforeAll, afterEach } from 'vitest';

beforeAll(() => {
	fetchMock.activate();
	fetchMock.disableNetConnect();
});

afterEach(() => fetchMock.assertNoPendingInterceptors());

it('attempts to update immutable header and errors', async () => {
	fetchMock.get("https://example.com").intercept({ path: '/' }).reply(200, "Mocked")
	const response = await SELF.fetch('https://example.com');
	expect(response.status).toBe(500)
});

