import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { VDT1680_Math_Functions } from "../../pages/urlPage"
import { tree, table, switchToIframe } from '../../pages/common';

const signInMath = Role(VDT1680_Math_Functions, signIn, { preserveUrl: true })

fixture `Formula`
    .meta('ID','VDT-1680')
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
    .meta('ID','VDT-1680')
    .meta('SEVERITY','blocker')
    ('Math Functions', async t => {
    await t
        .useRole(signInMath)
        .switchToMainWindow()
        .click(Selector('span').withText('Min'))
        .wait(3000)
        await switchToIframe()
        await t    
        .hover(Selector('#N1 .d2VDTNode.d2VDTFocus'))
        .click(Selector('#N1 .d2VDTshowSim').nth(1))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Math Functions- Minimum')    
    await t
        .switchToMainWindow()
        .click(Selector('span').withText('Max'))
        await switchToIframe()
        await t
        .hover(Selector('#N1 .d2VDTNode.d2VDTFocus'))
        .click(Selector('#N1 .d2VDTshowSim').nth(1))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Math Functions- Maximum')    
    await t
        .switchToMainWindow()
        .click(Selector('span').withText('Count'))
        await switchToIframe()
        await t
        .hover(Selector('#N1 .d2VDTNode.d2VDTFocus'))
        .click(Selector('#N1 .d2VDTshowSim').nth(1))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Math Functions- Count')    
    await t   
        .switchToMainWindow()
        .click(Selector('span').withText('ABS'))
        await switchToIframe()
        await t
        .hover(Selector('#N1 .d2VDTNode.d2VDTFocus'))
        .click(Selector('.d2VDTshowSim').nth(1))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Math Functions- ABS')    
    await t 
        .switchToMainWindow()
        .click(Selector('span').withText('Average'))
        await switchToIframe()
        await t
        .hover(Selector('#N1 .d2VDTNode.d2VDTFocus'))
        .click(Selector('.d2VDTshowSim').nth(1))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Math Functions- Average')    
    await t 
        .switchToMainWindow()
        .click(Selector('span').withText('SQRT'))
        await switchToIframe()
        await t
        .hover(Selector('#N1 .d2VDTNode.d2VDTFocus'))
        .click(Selector('.d2VDTshowSim').nth(1))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Math Functions- SQRT')    
    await t 
        .switchToMainWindow()
        .click(Selector('span.itemName').withText('Power'))
        await switchToIframe()
        await t
        .hover(Selector('#N1 .d2VDTNode.d2VDTFocus'))
        .click(Selector('.d2VDTshowSim').nth(1))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Math Functions- Power')    
    await t 
        .switchToMainWindow()
        .click(Selector('span').withText('Sum - Formula - Sum'))
        await switchToIframe()
        await t
        .hover(Selector('#N1 .d2VDTNode.d2VDTFocus'))
        .click(Selector('.d2VDTshowSim').nth(1))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Math Functions- Sum-Formula-Sum')    
    await t 
        .switchToMainWindow()
        .click(Selector('span[title="Exp"]').withText('Exp'))
        await switchToIframe()
        await t
        .hover(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTshowSim'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Math Functions- Exponential')    
    await t
    .switchToMainWindow()
});