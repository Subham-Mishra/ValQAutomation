import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../../Util/vrtUtil";
import signIn from "../../../pages/signIn";
//import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../../pages/checkboxes"
import { tree, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan } from '../../../pages/common';

fixture `Sanity-Certified`
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/76aedc5e-1457-4271-9222-d7c49e6187e3`
.meta('ID','VDT-1924')
    .meta({'author': 'Automation','Date':'21-Seot-2020'})
    .meta('SEVERITY','Critical')
    .meta('TEST_RUN','1.9.0')

// .before(async ctx  => {
//     ctx.someProp = 123;
//     console.log('Test started..',currentFixture);
// })
// .after(async ctx  => {
//     console.log(ctx.newProp); // > abc
//     console.log('Test Ended..',currentFixture);
// });

test
    .meta('ID','VDT-1924')
    .meta('SEVERITY','blocker')
    ('ValQ with paste option', async t => {
    await t
    .maximizeWindow()
    .click(Selector('a').withText('SIGN IN'))
    .typeText(Selector('#i0116'), 'valqtestuser@visualbi.com')
    .click(Selector('#idSIButton9'))
    .typeText(Selector('#i0118'), 'acdee@421')
    .click(Selector('#idSIButton9'))
    .click(Selector('#idSIButton9'))
    .click(Selector('#editBtn'))
    .wait(20000)
    await switchToIframe()
    await t
    .click(Selector('#wizbar span').withText('Model'))
    .click(Selector('#sandbox-host span').withText('New'))
    
    .click(Selector('#sandbox-host div').withText('Import an Advanced Model').nth(17))
    .click(Selector('#modal-root button').withText('Yes'))
    .click(Selector('#modal-root .bf-ui-form-textarea.form-input.form-textarea'))
    .typeText(Selector('#modal-root .bf-ui-form-textarea.form-input.form-textarea'),'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')
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Config-Typed')
    await t
    .click(Selector('#modal-root button').withText('Finish'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'ImportedTree')
    });