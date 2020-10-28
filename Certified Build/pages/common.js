import {t, Selector,ClientFunction} from 'testcafe'
const log = require('../config/logging').default


const waitForIframeLoad = ClientFunction((iframeSelector) => new Promise((resolve, reject) => {
    var i = 0;
    var intervalId = null;

    intervalId = window.setInterval(() => {
        var iframeElement = document.querySelector(iframeSelector);
        if (iframeElement
            && iframeElement.contentWindow
            && iframeElement.contentWindow.location.href !== 'about:blank'
            && iframeElement.contentDocument) {
            window.clearInterval(intervalId);
            resolve();
        }
        if (i > 120) {
            window.clearInterval(intervalId);
            reject(new Error('Iframe content loading timeout'))
        }
        i++;
    }, 3000);
}));


export const model = async () => {await t.click(Selector('span').withText('Model'))
log.debug('Page : Model : Click => Clicked on Model')}

export const simulate = async () => {await t.click(Selector('span').withText('Simulate'))
log.debug('Page : Simulate : Click => Clicked on Simulate')}

export const plan = async () => {await t.click(Selector('span').withText('Plan'))
log.debug('Page : Plan : Click => Clicked on Plan')}

export const analyze = async () => {await t.click(Selector('span').withText('Analyze'))
log.debug('Page : Analyze : Click => Clicked on Analyze')}

export const tree = async () => {
    //const iframeSelector = 'iframe.visual-sandbox';
    //await waitForIframeLoad(iframeSelector);
    await t
    .click(Selector('div.d2VDTSwitchVis').find('.d2VDTSwitchVisItem.d2VDTSwitchTree',{visibilityCheck:true}))
    .expect(Selector('div[id^=tree]> div.d2VDTCtr',{visibilityCheck: true}).exists).eql(true).wait(3000)
    log.debug('Canvas : Switch View : Mode => Tree')}

export const Login = async () => {
    await switchToMainWindow()
    await t
    .click(Selector('.ng-pristine.ng-untouched.ng-valid.ng-not-empty').nth(1))
    .click(Selector('.undefined.primary'))
    .wait(32000)
    await switchToIframe()
    log.debug('Login Successful!')}   

export const table = async () => {
    //const iframeSelector = 'iframe.visual-sandbox';
    //await waitForIframeLoad(iframeSelector);
    await t
    .click(Selector('.d2VDTSwitchVisItem.d2VDTSwitchTable[title="Table"][data-value="Table"]',{visibilityCheck:true}))
    .expect(Selector('.grid-cell',{visibilityCheck: true}).exists).eql(true).wait(3000)
    log.debug('Canvas : Switch View : Mode => Table')}

export const SignIn = async () => {
    await t
    .click(Selector('a').withText('SIGN IN'))
    .maximizeWindow()
    .typeText(Selector('#i0116'), 'valqtestuser@visualbi.com')
    .click(Selector('#idSIButton9'))
    .typeText(Selector('#i0118'), 'acdee@421')
    .click(Selector('#idSIButton9'))
    .click(Selector('#idSIButton9'))  }

export const save = async () => await t.click(Selector('button').withText('Save'))

export const editIcon = async () => await t.click(Selector('[class^="overFlowIcn mat-icon notranslate pbi-glyph-font-f"]'))

export const editOption = async () => {
    await switchToMainWindow()
     await t.click(Selector('#editBtn'))}

export const switchToIframe = async () =>{  
    const iframeSelector = 'iframe.visual-sandbox';
    await waitForIframeLoad(iframeSelector);
    await t.switchToIframe(Selector('.visual-sandbox[name="visual-sandbox"]')).wait(10000)
}

export const switchToMainWindow = async () => await t.switchToMainWindow()

   
export const wait5000 = async () => await t.wait(5000)

export const wait6000 = async () => await t.wait(6000)

export const wait3000 = async () => await t.wait(3000)


