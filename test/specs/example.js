describe('Bug test', () => {
    it('should wait until text has changed', async () => {
        await browser.url('./');
        const elem = await $('.hero__subtitle')
        await elem.waitUntil(async () => {
            return (await this.getText()) === 'I am now different'
        }, {
            timeout: 5000,
            timeoutMsg: 'expected text to be different after 5s'
        });
    });
})