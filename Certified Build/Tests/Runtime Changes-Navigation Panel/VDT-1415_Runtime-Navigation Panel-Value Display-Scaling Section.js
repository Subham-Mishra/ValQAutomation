import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../../Util/vrtUtil";
import signIn from "../../../pages/signIn";
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../../pages/checkboxes"
import { tree, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, model } from '../../../pages/common';
import{navigationPanelMonth,navigationPanel0k,navigationPanel0_0m,navigationPanel0_0b,navigationPanelYtD,navigationPanelFullYear,navigationPanelSimMths,navigationPanel0} from '../../../pages/navigationPanel';
fixture `Sanity-Certified`
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/4cc3e35f-3b06-4beb-8cb3-486adf5c7b8a/ReportSection`
.meta('ID','VDT-1415')
    .meta({'author': 'Automation','Date':'21-Sept-2020'})
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
    .meta('ID','VDT-1415')
    .meta('SEVERITY','blocker')
    ('Value Display-Scaling Section', async t => {
    await t
    .maximizeWindow()
    .click(Selector('a').withText('SIGN IN'))
    .typeText(Selector('#i0116'), 'valqtestuser@visualbi.com')
    .click(Selector('#idSIButton9'))
    .typeText(Selector('#i0118'), 'acdee@421')
    .click(Selector('#idSIButton9'))
    .click(Selector('#idSIButton9'))
    .click(Selector('#editBtn'))
    .wait(100000)
    
    await switchToIframe()
    await t
    .click(Selector('#wizbar span').withText('Model'))
    .click(Selector('#sandbox-host span').withText('New'))
    .click(Selector('#sandbox-host div').withText('Load valQ model with sample data').nth(17))
    .click(Selector('#modal-root button').withText('Yes'))
    .click(Selector('#modal-root div').withText('Personal Finance').nth(10))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree_Creation')
    await simulate()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'DefaultScale_Tree')
    await table()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'DefaultScale_Table')
    await tree()
    await navigationPanel0() 
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Scaling0_Tree')
    await table()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Scaling0_Table')
    await tree()
    await navigationPanel0k()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Scaling0k_Tree')
    await table()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Scaling0k_Table')
    await tree()
    await navigationPanel0_0m()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Scaling0m_Tree')
    await table()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Scaling0m_Table')
    await tree()
    await navigationPanel0_0b()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Scaling0b_Tree')
    await table()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Scaling0b_Table')
    });