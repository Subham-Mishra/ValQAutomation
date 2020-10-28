import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../../Util/vrtUtil";
import signIn from "../../../pages/signIn";
//import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/checkboxes"
import { tree, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, model } from '../../../pages/common';

fixture `Sanity-Certified`
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/dcc5e24a-4d05-4e8e-be82-c57ccaa6cfdd/ReportSectionef4fe6f2109b4681c37d`
.meta('ID','VDT-1411')
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
    .meta('ID','VDT-1411')
    .meta('SEVERITY','blocker')
    ('Scenarios Section', async t => {
    await t
    .maximizeWindow()
    .click(Selector('a').withText('SIGN IN'))
    .typeText(Selector('#i0116'), 'valqtestuser@visualbi.com')
    .click(Selector('#idSIButton9'))
    .typeText(Selector('#i0118'), 'acdee@421')
    .click(Selector('#idSIButton9'))
    .click(Selector('#idSIButton9'))
    .click(Selector('#editBtn > span'))
    .click(Selector('exploration-footer-modern div').withText('Page 1').nth(4))
    await switchToIframe()
    await t
    .click(Selector('#wizbar span').withText('Model'))
    .click(Selector('#sandbox-host span').withText('New'))
    .click(Selector('#sandbox-host div').withText('Load valQ model with sample data').nth(17))
    .click(Selector('#modal-root button').withText('Yes'))
    .click(Selector('#modal-root div').withText('Personal Finance').nth(10))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree_Creation')
    await simulate()
    await t
    .click(Selector('div.sectionContent').find('div.d2VDTNavItem.d2VDTNavBg.d2Selected').find('div.navMoreActions'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Scenario_Popup')
    await t
    .hover(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
    .click(Selector('g').find('rect.d2VDTshowSim'))
    .click(Selector('g').find('text.d2VDTIcon'))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .doubleClick(Selector('.grid-cell').nth(17), {
    caretPos: 0
    })
    .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '20')
    .click(Selector('.grid-fixed-virtualized'))
    .click(Selector('.d2VDTClose'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Simulation1')
    await t
    .click(Selector('div.sectionContent').find('div.d2VDTNavItem.d2VDTNavBg.d2Selected').find('div.navMoreActions'))

    .click(Selector('#scenarioContextMenu div').withText('Copy Scenario').nth(1))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Copied_Scenario')
    await t
    .click(Selector('div.sectionContent').find('div.d2VDTNavItem.d2VDTNavBg.d2Selected').find('div.navMoreActions'))
    .click(Selector('#scenarioContextMenu div').withText('Edit'))
    .selectText(Selector('#minimodal .bf-ui-form-input.form-input.edit-scenario-input'),10,0)
    .typeText(Selector('#minimodal .bf-ui-form-input.form-input.edit-scenario-input'),'Simulation Copied Scenario')
    .click(Selector('#minimodal button').withText('Save'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Scenario_Namechange')
    await t
    .click(Selector('div.sectionContent').find('div.d2VDTNavItem.d2VDTNavBg.d2Selected').find('div.navMoreActions'))
    .click(Selector('#scenarioContextMenu div').withText('Delete').nth(1))
    await switchToMainWindow()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Deleted_Scenario')
     await switchToMainWindow()
    await t
    .click(Selector('exploration-footer-modern div').withText('Page 2').nth(4))
    await switchToIframe()
    await t
    //.wait(30000)
    .click(Selector('#wizbar span').withText('Model'))
    .click(Selector('#sandbox-host div').withText('NSUMME: Overall Result').nth(22))
    .click(Selector('#sandbox-host .icon.icon--AutoEnhanceOn.node-menu-icon'))
    .click(Selector('#modal-root button').withText('Yes'))
    .click(Selector('#sandbox-host .expand-collapse.node-collapsed'))
    .click(Selector('#sandbox-host div').withText('NConsumer__East: Consumer').nth(22))
    .hover(Selector('#NConsumer__East').find('path.d2VDTNode.d2VDTFocus'))
    .click(Selector('g').find('rect.d2VDTshowSim'))
    .click(Selector('g').find('text.d2VDTIcon'))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .doubleClick(Selector('.grid-cell').nth(17), {
    caretPos: 0
    })
    .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '10')
    .click(Selector('.grid-fixed-virtualized'))
    .click(Selector('.d2VDTClose'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Simulation2')
    await t
    .click(Selector('#sandbox-host .expand-collapse.node-expanded').nth(1))
    .click(Selector('#sandbox-host .expand-collapse.node-collapsed').nth(1))
    .click(Selector('#sandbox-host div').withText('NConsumer__Midwest: Consumer').nth(22))
    .hover(Selector('#NConsumer__Midwest').find('path.d2VDTNode.d2VDTFocus'))
    .click(Selector('g').find('rect.d2VDTshowSim'))
    .click(Selector('g').find('text.d2VDTIcon'))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .doubleClick(Selector('.grid-cell').nth(17), {
    caretPos: 0
    })
    .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '10')
    .click(Selector('.grid-fixed-virtualized'))
    .click(Selector('.d2VDTClose'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Simulation3')
    await simulate()
    await t
    .click(Selector('div.sectionContent').find('div.d2VDTNavItem.d2VDTNavBg.d2Selected').find('div.navMoreActions'))
    .click(Selector('#scenarioContextMenu div').withText('Copy Scenario').nth(1))
    .hover(Selector('#NConsumer__Midwest').find('path.d2VDTNode.d2VDTFocus'))
    .click(Selector('g').find('rect.d2VDTshowSim'))
    .click(Selector('g').find('text.d2VDTIcon'))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .doubleClick(Selector('.grid-cell').nth(17), {
    caretPos: 0
    })
    .pressKey('delete')
    .pressKey('delete')
    .pressKey('backspace')
    .pressKey('backspace')
    .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '20')
    .click(Selector('.grid-fixed-virtualized'))
    .click(Selector('.d2VDTClose'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Simulation4')
    await t
    .click(Selector('div.sectionContent').find('div.d2VDTNavItem.d2VDTNavBg').find('div.d2VDTNavItemTitle').withText('Scenario 1'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Value_Compare')
    });