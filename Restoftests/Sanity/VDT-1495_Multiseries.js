import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/checkboxes"
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
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/86211fac-ceed-47b2-a63d-b634ce41a471/ReportSection`
    // .meta('ID','VDT-1373')
    // .meta('SEVERITY','blocker')
    ('Multiseries', async t => {
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
    await t
    await switchToMainWindow()
    await t
    .click(Selector('#editBtn'))
    .wait(100000)
    await switchToIframe()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Init_Tree')
    await t.click(Selector('.d2VDTSwitchVis').find('div.d2VDTSwitchVisItem.d2VDTSwitchTable'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Init_Table')
    await t.
    click(Selector('.d2VDTSwitchVis').find('div.d2VDTSwitchVisItem.d2VDTSwitchTree'))
    //.click(Selector('#NSUMME').find('text.nodeTitle').find('tspan').withText('Overall Result'))
    //await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Init_DetailPg')
    //.click(Selector('div.d2VDTPopUpBg').find('div.d2VDTDetailBg.wide').find('div.d2VDTClose'));
//     await t
//    .click(Selector('.d2VDTSwitchVis').find('div.d2VDTSwitchVisItem.d2VDTSwitchTree'))
await t
   .hover(Selector('#NJuices').find('path.d2VDTNode.d2VDTFocus'))
   .click(Selector('g').find('rect.d2VDTshowSim'))
   .click(Selector('g').find('text.d2VDTIcon'))
   .click(Selector('#sandbox-host .cell-view').nth(2))
   .click(Selector('#sandbox-host .cell-view').nth(2))
   .doubleClick(Selector('.grid-cell').nth(17), {
    caretPos: 0
    })
    .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '27')
    .click(Selector('.grid-fixed-virtualized'))
    .click(Selector('.d2VDTClose'));
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sim_Scenario1')
    await t
    .click(Selector('div.d2VDTSection.scenarios').find('div.d2VDTIconButton.newScenario'))
    .hover(Selector('#NSoda').find('path.d2VDTNode.d2VDTFocus'))
   .click(Selector('g').find('rect.d2VDTshowSim'))
   .click(Selector('g').find('text.d2VDTIcon'))
   .click(Selector('#sandbox-host .cell-view').nth(2))
   .click(Selector('#sandbox-host .cell-view').nth(2))
   .doubleClick(Selector('.grid-cell').nth(17), {
    caretPos: 0
    })
    .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '24')
    .click(Selector('.grid-fixed-virtualized'))
    .click(Selector('.d2VDTClose'));
    await t
    .hover(Selector('#NSparking__Water').find('path.d2VDTNode.d2VDTFocus'))
   .click(Selector('g').find('rect.d2VDTshowSim'))
   .click(Selector('g').find('text.d2VDTIcon'))
   .click(Selector('#sandbox-host .cell-view').nth(2))
   .click(Selector('#sandbox-host .cell-view').nth(2))
   .doubleClick(Selector('.grid-cell').nth(17), {
    caretPos: 0
    })
    .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '-27')
    .click(Selector('.grid-fixed-virtualized'))
    .click(Selector('.d2VDTClose'));
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sim_Scenario2')
    await t
    .click(Selector('#wizbar span').withText('Model'))
    .click(Selector('#sandbox-host span').withText('Data Series'))
    .click(Selector('#sandbox-host div').withText('Data Series Manager').nth(16))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Addnl1_Periods')
    await t
    .click(Selector('#modal-root div').withText('Additional 2').nth(7))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Addnl2_Periods')
    await t
    .click(Selector('#modal-root div').withText('Additional 3').nth(8))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Addnl3_Periods')
    await t
    .click(Selector('#modal-root div').withText('Budget').nth(7))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Budget_Periods')
    await t
    .click(Selector('#modal-root div').withText('Forecast').nth(7))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Forecast')
    await t
    .click(Selector('#wizbar span').withText('Plan'))
    .click(Selector('#minimodal button').withText('Lock'))
    .click(Selector('#minimodal div').withText('Additional 1').nth(8))
    .click(Selector('#minimodal span').withText('Additional 3'))
    .click(Selector('#minimodal button').withText('Submit'))
    .click(Selector('#sandbox-host div').withText('Auto Forecast').nth(8))
    .typeText(Selector('#minimodal .bf-ui-form-input.form-input'),'soda')
    .click(Selector('#minimodal button').withText('NSoda: Soda'))
    .click(Selector('#minimodal .calendar-icon'))
    .click(Selector('#minimodal div').withText('Jan').nth(9))
    .click(Selector('#minimodal div').withText('Dec').nth(9))
    .click(Selector('#minimodal div').withText('None').nth(12))
    .click(Selector('#minimodal span').withText('Absolute growth'))
    .typeText(Selector('#minimodal .bf-ui-form-input.form-input.input-forecast-growth'),'13')
    .click(Selector('#minimodal div').withText('Add data series').nth(15))
    .click(Selector('#minimodal span').withText('Additional 3'))
    .click(Selector('#minimodal span').withText('Additional 2'))
    .click(Selector('#minimodal .calendar-icon').nth(1))
    .click(Selector('#minimodal div').withText('Jun').nth(11))
    .click(Selector('#minimodal div').withText('Dec').nth(15))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Plan_Tab')
    await t
    .click(Selector('#minimodal button').withText('Preview'))
    .click(Selector('#minimodal button').withText('Apply'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'AutoForecast')
    await t
    .click(Selector('#wizbar span').withText('Simulate'))
    .click(Selector('#wizbar div').withText('Additional 2').nth(6))
    .click(Selector('#wizbar div').withText('Additional 1').nth(6))
    .click(Selector('#wizbar div').withText('Forecast').nth(8))
    .click(Selector('#wizbar div').withText('Additional 2').nth(8))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SeriesSwitch')
    await t
    .click(Selector('#NNot__assigned .d2VDTToggle'))
    .hover(Selector('#NBonus__Not__assigned').find('path.d2VDTNode.d2VDTFocus'))
   .click(Selector('g').find('rect.d2VDTshowSim'))
   .click(Selector('g').find('text.d2VDTIcon'))
   .click(Selector('#sandbox-host .cell-view').nth(2))
   .click(Selector('#sandbox-host .cell-view').nth(2))
   .doubleClick(Selector('.grid-cell').nth(17), {
    caretPos: 0
    })
    .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '-31')
    .click(Selector('.grid-fixed-virtualized'))
    .click(Selector('.d2VDTClose'));
    await t
    .hover(Selector('#NTraining__Not__assigned').find('path.d2VDTNode.d2VDTFocus'))
   .click(Selector('g').find('rect.d2VDTshowSim'))
   .click(Selector('g').find('text.d2VDTIcon'))
   .click(Selector('#sandbox-host .cell-view').nth(2))
   .click(Selector('#sandbox-host .cell-view').nth(2))
   .doubleClick(Selector('.grid-cell').nth(17), {
    caretPos: 0
    })
    .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '34')
    .click(Selector('.grid-fixed-virtualized'))
    .click(Selector('.d2VDTClose'));
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sim_Scenario2')
    await t
    .click(Selector('#navpanel-z0WN5FA-2 div').withText('Scenario 1').nth(5))
    .hover(Selector('#NJuices').find('path.d2VDTNode.d2VDTFocus'))
    .click(Selector('g').find('rect.d2VDTshowSim'))
    .click(Selector('g').find('text.d2VDTIcon'))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .doubleClick(Selector('.grid-cell').nth(17), {
    caretPos: 0
    })
    .pressKey('backspace')
    .pressKey('backspace')
    .pressKey('backspace')
    .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '16')
    .click(Selector('.grid-fixed-virtualized'))
    .click(Selector('.d2VDTClose'));
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sim_Scenario1')
    await t
    .click(Selector('#navpanel-z0WN5FA-2 .d2VDTIconButton.compareScenario'))
    .click(Selector('#minimodal div').withText('Select All').nth(4))
    .click(Selector('#minimodal button').withText('Compare'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'CompScenario1')
    await t
    .click(Selector('#wizbar div').withText('Additional 1').nth(6))
    .click(Selector('#wizbar div').withText('Forecast').nth(6))
    .click(Selector('#sandbox-host .d2VDTClose'))
    .click(Selector('#navpanel-z0WN5FA-2 .d2VDTIconButton.compareScenario'))
    .click(Selector('#minimodal button').withText('Compare'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'CompScenario2')
});
    

    test
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/e9b5750d-54c5-49d8-906d-75c05d57ded7`
    .meta('ID','VDT-1495')
    .meta('SEVERITY','blocker')
    ('Multiseries_2', async t => {
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
    .click(Selector('#editBtn'))
    .wait(100000)
    await switchToIframe()
    await t
    .click(Selector('div.series-dropdown-root-container').find('div.series-dropdown-placeholder.is-selected').withText('Baseline'))
    .click(Selector('div.series-dropdown-root-container.is-open').find('div.series-dropdown-menu').find('div.series-dropdown-option').withText('Comparison'))
    .click(Selector('div.series-dropdown-root-container').find('div.series-dropdown-placeholder.is-selected').withText('Baseline'))
    .click(Selector('div.series-dropdown-root-container.is-open').find('div.series-dropdown-menu').find('div.series-dropdown-option').withText('Series 6'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SSwitch1')
    .click(Selector('#wizbar span').withText('Model'))
    .click(Selector('#sandbox-host span').withText('Data Series'))
    .click(Selector('#sandbox-host div').withText('Data Series Manager').nth(16))
    .click(Selector('#modal-root .bf-ui-form-input.form-input'))
    .pressKey('backspace')
    .pressKey('backspace')
    .typeText(Selector('#modal-root .bf-ui-form-input.form-input'),'8')
    .doubleClick(Selector('div.list-item').find('div.series-label').withText('Series 3'))
    .selectText(Selector('div.list-item').find('div.series-label').withText('Series 3'),8,0)
    .pressKey('backspace')
    .typeText(Selector('div.list-item').find('div.series-label'),'Additional Series 1')
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'DS_Manager')
    await t
    .click(Selector('#modal-root .icon.icon--Cancel'))
    await simulate()
    await t
    .hover(Selector('#NChina').find('path.d2VDTNode.d2VDTFocus'))
    .click(Selector('g').find('rect.d2VDTshowSim'))
    .click(Selector('g').find('text.d2VDTIcon'))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .doubleClick(Selector('.grid-cell').nth(17), {
    caretPos: 0
    })
    .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '30')
    .click(Selector('.grid-fixed-virtualized'))
    .click(Selector('.d2VDTClose'))
    await t
    .click(Selector('div.d2VDTSection.scenarios').find('div.d2VDTIconButton.newScenario'))
    .hover(Selector('#NAsia').find('path.d2VDTNode.d2VDTFocus'))
    .click(Selector('g').find('rect.d2VDTshowSim'))
    .click(Selector('g').find('text.d2VDTIcon'))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .doubleClick(Selector('.grid-cell').nth(17), {
    caretPos: 0
    })
    .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '-33')
    .click(Selector('.grid-fixed-virtualized'))
    .click(Selector('.d2VDTClose'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sim_Scenario2')
    await t
    .click(Selector('div.d2VDTSection.scenarios').find('div.d2VDTIconButton.newScenario'))
    .hover(Selector('#NUsa').find('path.d2VDTNode.d2VDTFocus'))
    .click(Selector('g').find('rect.d2VDTshowSim'))
    .click(Selector('g').find('text.d2VDTIcon'))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .doubleClick(Selector('.grid-cell').nth(17), {
    caretPos: 0
    })
    .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '-29')
    .click(Selector('.grid-fixed-virtualized'))
    .click(Selector('.d2VDTClose'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sim_Scenario3')
    await plan()
    await t
    .click(Selector('#minimodal button').withText('Lock'))
    .click(Selector('#minimodal div').withText('Baseline').nth(8))
    .click(Selector('#minimodal span').find('div.dropdown-option').find('span').withText('Additional Series 1'))
    .click(Selector('div.dropdown-menu').withText('Submit'))
    .click(Selector('#sandbox-host span').withText('New Series'))
    .click(Selector('div.form-input-container').find('div.dropdown-control').find('div.dropdown-placeholder.is-selected').withText('Baseline'))
    .click(Selector('div.form-input-container').find('div.dropdown-menu').find('div.dropdown-option').find('span').withText('Series 6'))
    .click(Selector('#minimodal button').withText('Submit'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Plan_Tab')
    await simulate()
    await t
    .click(Selector('div.series-dropdown-root-container').find('div.series-dropdown-control').find('div.series-dropdown-placeholder.is-selected').withText('Comparison'))
    .click(Selector('div.series-dropdown-root-container.is-open').find('div.series-dropdown-menu').find('div.series-dropdown-option').withText('New Series 2'))
    .click(Selector('#navpanel-IIBODzP-2 div').withText('[to]').nth(4))
    .click(Selector('#navpanel-IIBODzP-2 div').withText('Jul').nth(5))
    .click(Selector('#navpanel-IIBODzP-2 div').withText('Feb').nth(5))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sim_Period')
    .click(Selector('#wizbar span').withText('Analyze'))
    .click(Selector('#wizbar div').withText('Variance Analysis').nth(7))
    await t
    .click(Selector('.va-row.va-period-type'))
    await fullYear()
    await t
    .click(Selector('span.resize-column'))
    .click(Selector('#sandbox-host .toolbar-icon.toolbar-show'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_Periodic')
    await t
    .click(Selector('#sandbox-host .toolbar-icon.toolbar-hide'))
    .click(Selector('.va-row.va-period-type'))
    await yearToDate()
    await period()
    await t
    .click(Selector('span.resize-column'))
    .click(Selector('#sandbox-host .toolbar-icon.toolbar-show'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_Year-to-date')
    await t
    .click(Selector('#sandbox-host .toolbar-icon.toolbar-hide'))
    .click(Selector('.va-row.va-period-type'))
    await yearToGo()
    await yearToDate()
    await t
    .click(Selector('span.resize-column'))
    .click(Selector('#sandbox-host .toolbar-icon.toolbar-show'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_Year-to-go')
    await t
    .click(Selector('#sandbox-host .toolbar-icon.toolbar-hide'))
    .click(Selector('.va-row.va-period-type'))
    await fullYear()
    await yearToGo()
    await t
    .click(Selector('span.resize-column'))
    .click(Selector('#sandbox-host .toolbar-icon.toolbar-show'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_Full Year')

    });