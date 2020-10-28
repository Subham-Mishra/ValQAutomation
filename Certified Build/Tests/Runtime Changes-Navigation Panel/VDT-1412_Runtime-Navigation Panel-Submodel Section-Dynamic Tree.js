import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../../Util/vrtUtil";
import signIn from "../../../pages/signIn";
//import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/checkboxes"
import { tree, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan } from '../../../pages/common';

fixture `Sanity-Certified`
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/81271bdc-81f4-4e22-aedd-9cc08e30de85`
.meta('ID','VDT-1412')
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
    .meta('ID','VDT-1412')
    .meta('SEVERITY','blocker')
    ('Submodel Section-Dynamic Tree', async t => {
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
    .click(Selector('#sandbox-host span').withText('Settings'))
    .click(Selector('#sandbox-host div').withText('Navigation Panel').nth(15))
    .click(Selector('#sandbox-host .icon.icon--ChevronRight.navPanelLabelPaddingRight'))
    .click(Selector('#sandbox-host div').withText('Manage Selection').nth(20))
    .click(Selector('#sandbox-host span').withText('NSUMME: Overall Result'))
    .click(Selector('#sandbox-host .icon.icon--Cancel').nth(1))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Submodel_DesTime1')
    await t
    .click(Selector('#sandbox-host button').withText('Save'))
    .click(Selector('#wizbar span').withText('Simulate'))
    .click(Selector('div.d2VDTSection.topNode').find('div.d2VDTNavItem.d2VDTNavBg.sub-model-item').find('div.d2VDTNavItemTitle').withText('Others'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Submodel_Runtime1')
    await t
    .click(Selector('#wizbar span').withText('Model'))
    .click(Selector('#sandbox-host span').withText('New'))
    .click(Selector('#sandbox-host div').withText('Load valQ model with sample data').nth(17))
    .click(Selector('#modal-root button').withText('Yes'))
    .click(Selector('#modal-root div').withText('Perform what-if analysis on your salary, taxes, re').nth(11))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Model_Created')
    await t
    .click(Selector('#wizbar span').withText('Simulate'))
    .click(Selector('#wizbar span').withText('Model'))
    .click(Selector('#sandbox-host span').withText('Data Series'))
    .click(Selector('#sandbox-host button').withText('Settings'))
    .click(Selector('#sandbox-host div').withText('Navigation Panel').nth(15))
    .click(Selector('#sandbox-host .icon.icon--ChevronRight.navPanelLabelPaddingRight'))
    .click(Selector('#sandbox-host .icon.icon--Cancel.close-0'))
    .click(Selector('#sandbox-host .icon.icon--Cancel.close-0'))
    .click(Selector('#sandbox-host .icon.icon--Cancel.close-0'))
    .click(Selector('#sandbox-host .icon.icon--Cancel.close-0'))
    .click(Selector('div.expandedFormItems').find('DIV.form-multi-select-popup-selection-box'))
    .click(Selector('#sandbox-host span').withText('NTOP: Savings'))
    .click(Selector('#sandbox-host span').withText('N1: Income'))
    .click(Selector('#sandbox-host .icon.icon--Cancel'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Submodel_DesTime2')
    await t
    .click(Selector('#sandbox-host button').withText('Save'))
    .click(Selector('#wizbar span').withText('Simulate'))
    .click(Selector('div.col-multi').find('div.d2VDTNavItem.d2VDTNavBg.sub-model-item').withText('Income'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Submodel_Runtime2')
    });