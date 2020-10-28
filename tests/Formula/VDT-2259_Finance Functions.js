import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { VDT2259_Finance_Functions } from "../../pages/urlPage"

const signInFinance = Role(VDT2259_Finance_Functions, signIn, { preserveUrl: true })

fixture `Formula`
    .meta('ID','VDT-2259')
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
    .meta('ID','VDT-2259')
    .meta('SEVERITY','blocker')
    ('Finance Functions', async t => {
    await t
        .useRole(signInFinance)
        .click(Selector('span').withText('Finance_Functions'))
        .switchToIframe(Selector('.visual-sandbox[name="visual-sandbox"]')).wait(6000)
        .click(Selector('#nodeSearch'))
        .typeText(Selector('#nodeSearch'), 'irr')
        .click(Selector('p').withText('IRR_Internal Rate of Return'))
        .typeText(Selector('#nodeSearch'), 'p')
        .typeText(Selector('#nodeSearch'), 'ri')
        .click(Selector('.searchNodeText[title=" Principal and No of Periods"]'))
        .click(Selector('#nodeSearch'))
        .typeText(Selector('#nodeSearch'), 'pv')
        .click(Selector('[data-val="N13"][data-title=" PV_Present Value"].nodeSearchSuggestion').find('p').withText('FINANCE FUNCTIONS'))
        .typeText(Selector('#nodeSearch'), 'emi')
        .click(Selector('[data-val="N18"][data-title=" EMI"].nodeSearchSuggestion.selected'))
        .typeText(Selector('#nodeSearch'), 'p')
        .typeText(Selector('#nodeSearch'), 'pm')
        .click(Selector('p').withText('PPMT'));
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Finance Functions- Finance_Functions')          
    await t
    .switchToMainWindow()
});