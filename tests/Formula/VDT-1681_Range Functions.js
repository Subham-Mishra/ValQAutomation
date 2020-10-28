import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { VDT1681_Range_Functions } from '../../pages/urlPage';
import {Allure} from 'testcafe-reporter-allure';

const signInRange = Role(VDT1681_Range_Functions, signIn, { preserveUrl: true })

fixture `Formula`
    .meta('ID','VDT-1681')
    .meta({'author': 'Automation','Date':'12-Mar-2020'})
    .meta('SEVERITY','Critical')
    .meta('TEST_RUN','1.7.0')

// .before(async ctx  => {
//     ctx.someProp = 123;
//     console.log('Test started..',currentFixture);
// })
// .after(async ctx  => {
//     console.log(ctx.newProp); // > abc
//     console.log('Test Ended..',currentFixture);
// });

test
    .meta('ID','VDT-1681')
    .meta('SEVERITY','blocker')
    ('Range Functions', async t => {
    await t
        .useRole(signInRange)
        .click(Selector('span').withText('Range'))
        .switchToIframe(Selector('.visual-sandbox[name="visual-sandbox"]')).wait(5000)
        .hover(Selector('#N1').find('.d2VDTInfo.d2VDTvariance1.varLabel'))
        .click(Selector('.d2VDTshowSim').nth(1))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Range Functions- Range')    
    await t 
        .switchToMainWindow()
        .click(Selector('span').withText('LastNPeriods'))
        .switchToIframe(Selector('.visual-sandbox[name="visual-sandbox"]')).wait(5000)
        .hover(Selector('#N1').find('.d2VDTInfo.d2VDTvariance1.varLabel'))
        .click(Selector('.d2VDTshowSim').nth(1))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Range Functions- LastNPeriods')    
    await t 
        .switchToMainWindow()
        .click(Selector('span[title="Get"]').withText('Get'))
        .switchToIframe(Selector('.visual-sandbox[name="visual-sandbox"]')).wait(5000)
        .hover(Selector('#N1').find('.d2VDTInfo.d2VDTvariance1.varLabel'))
        .click(Selector('.d2VDTshowSim').nth(1))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Range Functions- Get')    
    await t
    .switchToMainWindow()
});