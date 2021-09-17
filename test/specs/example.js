describe('Bug test', () => {
    it('Hero text can be matched with toHaveText method', async () => {
        await browser.url('./');
        const elem = await $('.hero__subtitle')
        expect(elem).toHaveText('Next-gen browser and mobile automation test framework for Node.js')
    });

    it('Hero text can be matched with waitUntil getText method', async () => {
        await browser.url('./');
        const elem = await $('.hero__subtitle')
        await elem.waitUntil(async () => {
            return (await this.getText()) === 'Next-gen browser and mobile automation test framework for Node.js'
        }, {
            timeout: 5000,
            timeoutMsg: 'Could not match text'
        });
    });
})