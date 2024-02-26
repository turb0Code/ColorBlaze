import nock from "nock";
import { JSDOM } from "jsdom";
import fetchAndFindColor from "../src/routes/api/ncs/+server.js";

describe('fetchAndFindColor', () => {
    beforeEach(() => {
        nock.cleanAll();
    });

    it('should return the NCS color value when present', async () => {
        const mockHTML = '<html><body>NCS Color value: <b>123456</b></body></html>';
        nock('http://example.com')
            .get('/test')
            .reply(200, mockHTML);

        const result = await fetchAndFindColor('http://example.com/test');
        expect(result).toBe('123456');
    });

    it('should throw an error when the NCS color value is not present', async () => {
        const mockHTML = '<html><body>No color value here</body></html>';
        nock('http://example.com')
            .get('/test')
            .reply(200, mockHTML);

        await expect(fetchAndFindColor('http://example.com/test')).rejects.toThrow('NCS color value not found');
    });

    it('should throw an error when the HTTP status is not OK', async () => {
        nock('http://example.com')
            .get('/test')
            .reply(404);

        await expect(fetchAndFindColor('http://example.com/test')).rejects.toThrow('HTTP error! status: 404');
    });

    it('should return null when fetch fails', async () => {
        nock('http://example.com')
            .get('/test')
            .replyWithError('Network error');

        const result = await fetchAndFindColor('http://example.com/test');
        expect(result).toBeNull();
    });
});