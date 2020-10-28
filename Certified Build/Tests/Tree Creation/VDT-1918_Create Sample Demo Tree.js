import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../../Util/vrtUtil";
import signIn from "../../../pages/signIn";
//import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/checkboxes"
import { tree, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan } from '../../../pages/common';

fixture `Sanity-Certified`
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/465b068f-0eba-4f2f-ac28-43bb3756a831/ReportSection`
.meta('ID','VDT-1918')
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
    .meta('ID','VDT-1918')
    .meta('SEVERITY','blocker')
    (' Sample Demo Tree', async t => {
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
    .click(Selector('#sandbox-host div').withText('Load valQ model with sample data').nth(17))
    .click(Selector('#modal-root button').withText('Yes'))
    .click(Selector('#modal-root div').withText('Personal Finance').nth(10))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree_Creation')
    await t
    .click(Selector('div.d2VDTToolCtr').find('div.d2VDTToolItem.d2VDTNodeLevel').find('span').withText('Go to level'))
    .click(Selector('div.nodeLevelList').find('div.levelItem').find('span').withText('5'))
    .click(Selector('#sandbox-host span').withText('Settings'))
    .click(Selector('#sandbox-host div').withText('Canvas').nth(15))
    .click(Selector('#sandbox-host .bf-ui-form-input.form-input').nth(1))
    .pressKey('backspace')
    .pressKey('backspace')
    .pressKey('backspace')
    .typeText(Selector('#sandbox-host .bf-ui-form-input.form-input').nth(1),'20')
    .click(Selector('#sandbox-host button').withText('Save'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree_View')
    await t
    .click(Selector('div.d2VDTSimCtr').find('div.d2VDTSwitchVisItem.d2VDTSwitchTable'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_View')
    });
