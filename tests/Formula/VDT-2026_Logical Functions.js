import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { VDT2026_Logical_Functions } from '../../pages/urlPage';
import { plan, simulate, switchToIframe } from '../../pages/common';

const signInLogical = Role(VDT2026_Logical_Functions, signIn, { preserveUrl: true })

fixture `Formula`
    .meta('ID','VDT-2026')
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
    .meta('ID','VDT-2026')
    .meta('SEVERITY','blocker')
    ('Logical Functions', async t => {
    await t
        .useRole(signInLogical)
        .wait(15000)
        .click(Selector('span[title="Switch"]').withText('Switch'))
        .wait(5000)
        await switchToIframe()
        await t
        .click(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
        await plan()
        await simulate()
        await t
        //.click(Selector('div.d2VDTDetailBg.wide').find('div.d2VDTClose'))
        .hover(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTshowSim'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Logical Functions- Switch')    
    await t 
        .switchToMainWindow()
        .click(Selector('span[title="IF"]').withText('IF'))
        .wait(5000)
        await switchToIframe()
        await t
        .hover(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTshowSim'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Logical Functions- IF')    
    await t 
        .switchToMainWindow()
        .click(Selector('span[title="Logical"]').withText('Logical'))
        .wait(5000)
        await switchToIframe()
        await t
        .hover(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTshowSim'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Logical Functions- Logical')    
    await t
    .switchToMainWindow()
});