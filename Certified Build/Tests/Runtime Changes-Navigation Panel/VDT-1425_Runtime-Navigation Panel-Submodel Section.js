import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../../Util/vrtUtil";
import signIn from "../../../pages/signIn";
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../../pages/checkboxes"
import { tree, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, model } from '../../../pages/common';

fixture `Sanity-Certified`
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/4cc3e35f-3b06-4beb-8cb3-486adf5c7b8a/ReportSection`
.meta('ID','VDT-1425')
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
    .meta('ID','VDT-1425')
    .meta('SEVERITY','blocker')
    ('Submodel Section', async t => {
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
    //.click(Selector('div.appBarContent.appThemeable.light-mode.ng-star-inserted').find('button.actionBarBtn.hideAtMediumSize.showAtXXLargeSize.ng-star-inserted').nth(1))
    
    await switchToIframe()
    await t
    .click(Selector('#wizbar span').withText('Model'))
    .click(Selector('#sandbox-host span').withText('New'))
    .click(Selector('#sandbox-host div').withText('Load valQ model with sample data').nth(17))
    .click(Selector('#modal-root button').withText('Yes'))
    .click(Selector('#modal-root div').withText('Mining Industry').nth(10))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree_Creation')
    await model()
    await t
    .click(Selector('#sandbox-host span').withText('Settings'))
    .click(Selector('#sandbox-host div').withText('Navigation Panel').nth(15))
    .click(Selector('#sandbox-host .icon.icon--ChevronRight.navPanelLabelPaddingRight'))
    .click(Selector('#sandbox-host .icon.icon--Cancel.close-0'))
    .click(Selector('#sandbox-host .icon.icon--Cancel.close-0'))
    .click(Selector('#sandbox-host .icon.icon--Cancel.close-0'))
    .click(Selector('#sandbox-host .icon.icon--Cancel.close-0'))
    .click(Selector('#sandbox-host .form-multi-select-popup-selection-box'))
    .click(Selector('#sandbox-host span').withText('NTOP: Net Profit'))
    .click(Selector('#sandbox-host span').withText('N1: Revenue'))
    .click(Selector('#sandbox-host span').withText('N2: Copper Sold'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SubModel_Selection')
    await t
    .click(Selector('#sandbox-host .icon.icon--Cancel').nth(1))
    .click(Selector('#sandbox-host button').withText('Save'))
    .click(Selector('#wizbar span').withText('Simulate'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Submodel1_View')
    await t
    .click(Selector('div.sectionContent').find('div.d2VDTNavItem.d2VDTNavBg.sub-model-item').find('div.d2VDTNavItemTitle').withText('Revenue'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SubModel2_View')
    await t
    .click(Selector('div.sectionContent').find('div.d2VDTNavItem.d2VDTNavBg.sub-model-item').find('div.d2VDTNavItemTitle').withText('Copper Sold'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SubModel3_View')
    });