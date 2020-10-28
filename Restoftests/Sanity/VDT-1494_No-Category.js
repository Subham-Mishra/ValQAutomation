import { Selector, Role} from 'testcafe';
//import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
//import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/checkboxes"
import { tree, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan } from '../../pages/common';

fixture `Sanity`

// .meta('ID','VDT-1373')
//     .meta({'author': 'Automation','Date':'31-Aug-2020'})
//     .meta('SEVERITY','Critical')
//     .meta('TEST_RUN','1.7.0')

// .before(async ctx  => {
//     ctx.someProp = 123;
//     console.log('Test started..',currentFixture);
// })
// .after(async ctx  => {
//     console.log(ctx.newProp); // > abc
//     console.log('Test Ended..',currentFixture);
// });

test
.page ` https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/dffafa80-d6d4-4dfa-a5a2-dc1cc3f3467d`
    // .meta('ID','VDT-1373')
    // .meta('SEVERITY','blocker')
    ('No-Category 1', async t => {
    await t
   .maximizeWindow()
    .click(Selector('a').withText('SIGN IN'))
    .typeText(Selector('#i0116'), 'valqtestuser@visualbi.com')
    .click(Selector('#idSIButton9'))
    .typeText(Selector('#i0118'), 'acdee@421')
    .click(Selector('#idSIButton9'))
    .click(Selector('#idSIButton9'))
    await switchToIframe()
    await t
    .click(Selector('#wizbar div').withText('Login to Workspace').nth(5))
    await switchToMainWindow()
    await t
    .click(Selector('.undefined.primary'))
    .wait(25000)
    .click(Selector('#editBtn'))
    .wait(100000)
    await switchToIframe()
    await t
    .click(Selector('#wizbar span').withText('Model'))
    .click(Selector('#sandbox-host span').withText('Data Series'))
    .click(Selector('#sandbox-host div').withText('Data Series Manager').nth(16))
    .click(Selector('#modal-root .bf-ui-form-input.form-input'))
    .pressKey('backspace')
    .pressKey('backspace')
    .typeText(Selector('#modal-root .bf-ui-form-input.form-input'),'7')
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'DS_Manager')
    .click(Selector('#modal-root .icon.icon--Cancel'))
    .hover(Selector('#NRevenue').find('path.d2VDTNode.d2VDTFocus'))
    .click(Selector('rect.d2VDTshowSim'))
    .click(Selector('g').find('text.d2VDTIcon'))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .doubleClick(Selector('.grid-cell').nth(17), {
    caretPos: 0
    })
    .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '19')
    .click(Selector('.grid-fixed-virtualized'))
    .click(Selector('.d2VDTClose'))
    .hover(Selector('#NTotal__Cost').find('path.d2VDTNode.d2VDTFocus'))
    .click(Selector('g').find('rect.d2VDTshowSim'))
    .click(Selector('g').find('text.d2VDTIcon'))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .doubleClick(Selector('.grid-cell').nth(17), {
    caretPos: 0
    })
    .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '-27')
    .click(Selector('.grid-fixed-virtualized'))
    .click(Selector('.d2VDTClose'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sim_Scenario1')
    .click(Selector('#wizbar div').withText('Simulate').nth(3))
    .click(Selector('div.d2VDTSection.scenarios').find('div.d2VDTIconButton.newScenario'))
    .hover(Selector('#NRevenue').find('path.d2VDTNode.d2VDTFocus'))
    .click(Selector('g').find('rect.d2VDTshowSim'))
    .click(Selector('g').find('text.d2VDTIcon'))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .doubleClick(Selector('.grid-cell').nth(17), {
    caretPos: 0
    })
    .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '-44')
    .click(Selector('.grid-fixed-virtualized'))
    .click(Selector('.d2VDTClose'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sim_Scenario2')
    });
    
    
    test
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/024055bf-884e-4a96-bd11-bcc1231cb0ac/ReportSection`;


    // .meta('ID','VDT-1494')
    // .meta('SEVERITY','blocker')
    ('No-Category 2', async t => {
    await t

    .maximizeWindow()
    .click(Selector('a').withText('SIGN IN'))
    .typeText(Selector('#i0116'), 'valqtestuser@visualbi.com')
    .click(Selector('#idSIButton9'))
    .typeText(Selector('#i0118'), 'acdee@421')
    .click(Selector('#idSIButton9'))
    .click(Selector('#idSIButton9'))
    await switchToIframe()
    await t
    .click(Selector('div.user-section.false').find('span').withText('Read-only'))
    .click(Selector('div.sync-action-container').find('div.login-button').withText('Login'))
    await switchToMainWindow()
    await t
    .click(Selector('.undefined.primary'))
    .wait(35000)
    await switchToMainWindow()
    await t
    .click(Selector('button.mat-menu-trigger').find('.overFlowIcon.mat-icon.notranslate.pbi-glyph-font-face.pbi-glyph-more.mat-icon-no-color'))
    .click(Selector('#mat-menu-panel-7 button').withText('Edit'))
    await switchToIframe()
    await t
    .click(Selector('#wizbar span').withText('Model'))
    .click(Selector('#sandbox-host span').withText('Data Series'))
    .click(Selector('#sandbox-host div').withText('Data Series Manager').nth(16))
    .click(Selector('#modal-root .bf-ui-form-input.form-input'))
    .pressKey('backspace')
    .pressKey('backspace')
    .typeText(Selector('#modal-root .bf-ui-form-input.form-input'),'7')
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'DS_Manager')
    await t
    .click(Selector('#modal-root .icon.icon--Cancel'))
    .click(Selector('#NIndia .d2VDTToggleOverlay'))
    .hover(Selector('#NTN__India').find('path.d2VDTNode.d2VDTFocus'))
   .click(Selector('g').find('rect.d2VDTshowSim'))
   .click(Selector('g').find('text.d2VDTIcon'))
   .click(Selector('#sandbox-host .cell-view').nth(2))
   .click(Selector('#sandbox-host .cell-view').nth(2))
   .doubleClick(Selector('.grid-cell').nth(17), {
    caretPos: 0
    })
    .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '23')
    .click(Selector('.grid-fixed-virtualized'))
    .click(Selector('.d2VDTClose'))
    .hover(Selector('#NUP__India').find('path.d2VDTNode.d2VDTFocus'))
    .click(Selector('g').find('rect.d2VDTshowSim'))
    .click(Selector('g').find('text.d2VDTIcon'))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .doubleClick(Selector('.grid-cell').nth(17), {
    caretPos: 0
    })
    .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '26')
    .click(Selector('.grid-fixed-virtualized'))
    .click(Selector('.d2VDTClose'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sim_Scenario1')
    await t
    .click(Selector('#wizbar div').withText('Baseline').nth(6))
    .click(Selector('#wizbar div').withText('Measure 1 4').nth(6))
    .click(Selector('#wizbar div').withText('Comparison').nth(8))
    .click(Selector('#wizbar div').withText('Measure 1 3').nth(8))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SSwitch1')
    await t
    .click(Selector('#wizbar .topBar-icon.icon--split'))
    .click(Selector('div.d2VDTSection.scenarios').find('div.d2VDTIconButton.newScenario'))
    .hover(Selector('#NIndia').find('path.d2VDTNode.d2VDTFocus'))
    .click(Selector('g').find('rect.d2VDTshowSim'))
    .click(Selector('g').find('text.d2VDTIcon'))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .doubleClick(Selector('.grid-cell').nth(17), {
    caretPos: 0
    })
    .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '-23')
    .click(Selector('.grid-fixed-virtualized'))
    .click(Selector('.d2VDTClose'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sim_Scenario2')
    await t
    .click(Selector('#navpanel-IIBODzP-2 div').withText('[to]').nth(4))
    .click(Selector('#navpanel-IIBODzP-2 div').withText('Mar').nth(5))
    .click(Selector('#navpanel-IIBODzP-2 div').withText('Jul').nth(5))
    .click(Selector('#navpanel-IIBODzP-2 div').withText('Mar').nth(5))
    .click(Selector('#navpanel-IIBODzP-2 div').withText('Sim.Mths').nth(5))
    .click(Selector('#navpanel-IIBODzP-2 div').withText('0').nth(11))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Period_Agg')
    await t
    .click(Selector('#wizbar span').withText('Plan'))
    .click(Selector('#minimodal button').withText('Lock'))
    .click(Selector('#minimodal div').withText('Baseline').nth(8))
    .click(Selector('#minimodal span').withText('Comparison | Additional'))
    .click(Selector('#minimodal button').withText('Submit'))
    .click(Selector('#sandbox-host .hier.icon.collapsed'))
    .click(Selector('#sandbox-host div').withText('8,583').nth(11))
    .click(Selector('#sandbox-host label').withText('Copy-to').nth(1))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Plan_Tab')
    await t
    .click(Selector('#wizbar span').withText('Simulate'))
    .click(Selector('#wizbar div').withText('Measure 1 4').nth(6))
    .click(Selector('#wizbar div').withText('New Series 1').nth(6))
    .click(Selector('#wizbar span').withText('Analyze'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SSwitch2')
    await t
    .click(Selector('#wizbar div').withText('Variance Analysis').nth(7))
    .click(Selector('#sandbox-host .form-icon').nth(16))
    .click(Selector('#sandbox-host .navToggle.arrow-icon').nth(4))
    .click(Selector('#sandbox-host .form-icon').nth(12))
    .click(Selector('#sandbox-host .va-toggle-toolbar-btn.toolbar-btn.horizontal.sm'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_Periodic')
    await t
    .click(Selector('#sandbox-host .toolbar-icon.toolbar-hide'))
    .click(Selector('#sandbox-host .navToggle.arrow-icon').nth(4))
    .click(Selector('#sandbox-host .form-icon').nth(10))
    .click(Selector('#sandbox-host .form-icon').nth(5))
    .click(Selector('#sandbox-host .toolbar-icon.toolbar-show'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_YrToDate')
    await t
    .click(Selector('#sandbox-host .toolbar-icon.toolbar-hide'))
    .click(Selector('#sandbox-host .navToggle.arrow-icon').nth(4))
    .click(Selector('#sandbox-host .form-icon').nth(11))
    .click(Selector('#sandbox-host .form-icon').nth(10))
    .click(Selector('#sandbox-host .va-toggle-toolbar-btn.toolbar-btn.horizontal.sm'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_YrToGo')
    await t
    .click(Selector('#sandbox-host .toolbar-icon.toolbar-hide'))
    .click(Selector('#sandbox-host .navToggle.arrow-icon').nth(4))
    .click(Selector('#sandbox-host .form-icon').nth(12))
    .click(Selector('#sandbox-host .form-icon').nth(11))
    .click(Selector('#sandbox-host .toolbar-icon.toolbar-show'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_FullYr')
    
    });