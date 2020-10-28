import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { VDT2225_Variables } from "../../pages/urlPage"
import { switchToIframe } from '../../pages/common';

const signInVariables = Role(VDT2225_Variables, signIn, { preserveUrl: true })

fixture `Formula`
    .meta('ID','VDT-2225')
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
    .meta('ID','VDT-2225')
    .meta('SEVERITY','blocker')
    ('Variables', async t => {
    await t
    .wait(10000)
    .click(Selector('a').withText('SIGN IN'))
    .maximizeWindow()
    .typeText(Selector('#i0116'), 'valqtestuser@visualbi.com')
    .click(Selector('#idSIButton9'))
    .typeText(Selector('#i0118'), 'acdee@421')
    .click(Selector('#idSIButton9'))
    .click(Selector('#idSIButton9'))
    .click(Selector('span').withText('Variables'))
    await switchToIframe()
    await t
    .wait(10000)
    .typeText(Selector('#nodeSearch'), 'N3')
    .click(Selector('p').withText('Node Title'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Variables- Variables1')    
    await t
    .typeText(Selector('#nodeSearch'), 'curren')
    .click(Selector('p').withText('Node Title'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Variables- Variables2')    
    await t
    .typeText(Selector('#nodeSearch'), 'pare')
    .click(Selector('p').withText('PARENT'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Variables- Variables3')    
    await t
    .click(Selector('#nodeSearch'))
    .typeText(Selector('#nodeSearch'), 'all')
    .click(Selector('p').withText('ALL_PERIODS'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Variables- Variables4')    
    await t
    .typeText(Selector('#nodeSearch'), 'range_act')
    // .click(Selector('p').withText(' RANGE_ACT'))
    .click(Selector('[data-val="N14"][data-title=" RANGE_ACT"]'));
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Variables- Variables5')    
    await t
    .switchToMainWindow()
}); 