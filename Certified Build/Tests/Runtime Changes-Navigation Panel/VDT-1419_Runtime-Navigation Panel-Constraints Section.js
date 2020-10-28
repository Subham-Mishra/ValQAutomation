import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../../Util/vrtUtil";
import signIn from "../../../pages/signIn";
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../../pages/checkboxes"
import { tree, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, model } from '../../../pages/common';
import{navigationPanelMonth,navigationPanel0k,navigationPanel0_0m,navigationPanel0_0b,navigationPanelYtD,navigationPanelFullYear,navigationPanelSimMths,navigationPanel0} from '../../../pages/navigationPanel';
fixture `Sanity-Certified`
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/4cc3e35f-3b06-4beb-8cb3-486adf5c7b8a/ReportSection`
.meta('ID','VDT-1419')
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
    .meta('ID','VDT-1419')
    .meta('SEVERITY','blocker')
    ('Constraints Section', async t => {
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
    .click(Selector('#modal-root div').withText('Personal Finance').nth(10))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree_Creation')
    await t
    .click(Selector('#sandbox-host span').withText('Settings'))
    .click(Selector('#sandbox-host div').withText('Navigation Panel').nth(15))
    .click(Selector('#sandbox-host .icon.icon--ChevronRight.navPanelLabelPaddingRight').nth(5))
    .click(Selector('#sandbox-host .icon.icon--Cancel.close-0'))
    .click(Selector('#sandbox-host .form-multi-select-popup-selection-box'))
    .typeText(Selector('#sandbox-host .bf-ui-form-input.form-input'),'inv')
    .click(Selector('#sandbox-host span').withText('N7: Income Investment and Others'))
    .click(Selector('#sandbox-host .icon.icon--Cancel').nth(1))
    .click(Selector('#sandbox-host button').withText('Save'))
    .click(Selector('#N1 .d2VDTToggleOverlay'))
    .hover(Selector('#N7').find('path.d2VDTNode.d2VDTFocus'))
    .click(Selector('g').find('rect.d2VDTshowSim'))
    .click(Selector('g').find('text.d2VDTIcon'))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .doubleClick(Selector('.grid-cell').nth(17), {
    caretPos: 0
    })
    .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '69')
    .click(Selector('.grid-fixed-virtualized'))
    .click(Selector('.d2VDTClose'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Higher_Sim')
    await t
    .hover(Selector('#N7').find('path.d2VDTNode.d2VDTFocus'))
    .click(Selector('g').find('rect.d2VDTshowSim'))
    .click(Selector('g').find('text.d2VDTIcon'))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .doubleClick(Selector('.grid-cell').nth(17), {
    caretPos: 0
    })
    .pressKey('backspace')
    .pressKey('backspace')
    .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '-94')
    .click(Selector('.grid-fixed-virtualized'))
    .click(Selector('.d2VDTClose'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Lower_Sim')
    await t
    .hover(Selector('#N7').find('path.d2VDTNode.d2VDTFocus'))
    .click(Selector('#N7 .d2VDTReset').nth(1))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Deleted_Sim')
    
    });