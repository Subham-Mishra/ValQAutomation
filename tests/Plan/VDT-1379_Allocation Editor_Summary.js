import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/navigationPanel"
import { tree,SignIn,editOption,Login, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, model } from '../../pages/common';
import { navigationPanel0, navigationPanelMonth } from "../../pages/navigationPanel";
import { PlanTab_VDT_1379_VDT_3479 } from '../../pages/urlPage';
const signInPlan = Role(PlanTab_VDT_1379_VDT_3479, signIn, { preserveUrl: true })
fixture `Plan`

.meta('ID','VDT-1379')
    .meta({'author': 'Automation','Date':'31-Aug-2020'})
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
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/34e18f9b-8d0e-4338-b6ef-3ba67cb3fe6f/ReportSection`

    .meta('ID','VDT-1379')
    .meta('SEVERITY','blocker')
    ('Allocation Editor-Summary_1', async t => {
        await t
        .useRole(signInPlan)
        await switchToMainWindow()
        await t
        .wait(100000)
        .click(Selector('#editBtn'))
        .wait(20000)
        .click(Selector('#pvExplorationHost [class^="btn collapseIcon pbi-borderless-button glyphicon g"]'))
        .click(Selector('#pvExplorationHost [class^="btnIcon glyphicon pbi-glyph-chevronrightmedium gly"]'))
        .click(Selector('#pvExplorationHost [class^="btnIcon glyphicon pbi-glyph-chevronrightmedium gly"]'))  
        await switchToIframe()
        await plan()
        await t
        .click(Selector('#minimodal button').withText('Lock'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Plan_Lock')
        //Series Namechange functionality
        await t
        .click(Selector('#minimodal .bf-ui-form-input.form-input'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SeriesCreation_NameCh')
        await t
        .click(Selector('#minimodal button').withText('Submit'))
        .click(Selector('#sandbox-host .series-icon.configure'))
        //Renaming Plan Seris to Allocation_Primary
        .click(Selector('#sandbox-host label').withText('Rename'))
        for(var i=0; i<14; i++){
            await t
            .pressKey('backspace')
        }
        await t
        .click(Selector('#sandbox-host .series-name-input'))
        .typeText(Selector('#sandbox-host .series-name-input'),'Allocation_Primary')
        .click(Selector('#sandbox-host .series-icon.apply'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Series_NameCh')
        //Validating NameChange in Weights Popup
        await t
        .click(Selector('#sandbox-host div').withText('267m').nth(22))
        .click(Selector('#sandbox-host div').withText('Weight').nth(13))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Weights_Check')
        await t
        .click('#minimodal .modal-close')
        await simulate()
        //Validating Name Change in Series Switcher Primary
        await t
        .click(Selector('#wizbar div').withText('Budget').nth(6))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Primary_Check')
        //Validating Name Change in Series Switcher Comparison
        await t
        .click(Selector('#wizbar div').withText('Forecast').nth(10))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Comparison_Check')
        await plan()
        //Seiing Allocation Series as Primary in Plan Tab
        await t
        .rightClick(Selector('#sandbox-host label').withText('Allocation_Primary'))
        .click(Selector('#sandbox-host label').withText('Set as Primary'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SetasPrimary')
        await simulate()
        //Validating Primary Series name in Details Page
        await t
        .click(Selector('#NSales__Revenue ').find('path.d2VDTNode.d2VDTFocus'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'DetailPg_Check')
        await plan()
        //Viewing Allocation History in Plan Tab
        await t
        .click(Selector('#sandbox-host label').withText('View Allocation History'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Alloc_History1')
        //Checking if delete is disabled in Plan Tab
        await t
        .click(Selector('#close-sync-modal'))
        .rightClick(Selector('#sandbox-host label').withText('Allocation_Primary'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Delete_disabled')
        await simulate()
        //Changing Primary series from Allocation to Budget
        await t
        .click(Selector('#wizbar div').withText('Allocation_Primary').nth(6))
        .click(Selector('#wizbar div').withText('Budget').nth(6))
        await plan()
        await t
        //Deleting Allocation Series
        .rightClick(Selector('#sandbox-host label').withText('Allocation_Primary'))
        .click(Selector('#sandbox-host label').withText('Delete'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Series_Deleted')
        await simulate()
        //Checking if Allocation Series is not visible in Series Switcher-Base
        await t
        .click(Selector('#wizbar div').withText('Budget').nth(6))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Primary_Check2')
        //Checking if Allocation Series is not visible in Series Switcher-Comparison
        await t
        .click(Selector('#wizbar div').withText('Forecast').nth(10))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Comparison_Check2')
        await plan()
        //New Series Creation
        await t
        .click(Selector('#minimodal button').withText('Lock'))
        .click(Selector('#minimodal button').withText('Submit'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'New_Series')
        //Viewing comments from Plan Tab
        await t
        .click('#wizbar .topBar-icon.icon--chat-bubble.sync-action-icons')
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Comments')
        //Random allocation for viewing Allocation History
        await t
        .click(Selector('#close-sync-modal'))
        .click(Selector('#sandbox-host div').withText('12m').nth(19))
        .click(Selector('#sandbox-host .quick-input-text'))
        .selectText(Selector('#sandbox-host .quick-input-text'),11,0)
        .pressKey('backspace')
        .typeText(Selector('#sandbox-host .quick-input-text'),'19m')
        .click(Selector('#sandbox-host .toolbar-icon.weight'))
        .click(Selector('#minimodal button').withText('Apply'))
        .wait(5000)
        //Viewing Allocation History to view Updates
        .click(Selector('#sandbox-host label').withText('View Allocation History'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Alloc_History2')
    });

    test
        .meta('ID','VDT-1379')
        .meta('SEVERITY','blocker')
        ('Allocation Editor-Summary_2', async t => {
            await t
            .useRole(signInPlan)
            await switchToMainWindow()
            await t
            .wait(75000)
            await editOption()
            await t
            .wait(25000)
            await switchToIframe()
            await plan()
            //Plan Tab Lock
            await t
            .click(Selector('#minimodal button').withText('Lock'))
            .click(Selector('#minimodal button').withText('Submit'))
            await model()
            //Changing Data Series in Data series Manager from 12 to 6
            await t
            .click(Selector('#sandbox-host span').withText('Data Series'))
            .click(Selector('#sandbox-host div').withText('Data Series Manager').nth(16))
            .click(Selector('#modal-root .bf-ui-form-input.form-input'))
            .pressKey('backspace')
            .pressKey('backspace')
            .typeText(Selector('#modal-root .bf-ui-form-input.form-input'),'6')
            .click(Selector('#modal-root .icon.icon--Cancel'))
            //Viewing Plan Tab to check Data Series Change
            await plan()
            await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Periods1')
            await model()
            //Changing Data Series in Data series Manager from 6 to 12
            await t
            .click(Selector('#sandbox-host span').withText('Data Series'))
            .click(Selector('#sandbox-host div').withText('Data Series Manager').nth(16))
            .click(Selector('#modal-root .bf-ui-form-input.form-input'))
            .pressKey('backspace')
            .pressKey('backspace')
            .typeText(Selector('#modal-root .bf-ui-form-input.form-input'),'12')
            .click(Selector('#modal-root .icon.icon--Cancel'))
            await plan()
            await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Periods2')
            //Refreshing DataSource in Plan Tab
            await t
            .click(Selector('#sandbox-host label').withText('Refresh Datasource'))
            .click(Selector('#minimodal button').withText('Yes'))
            await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'RefreshedDS')
            //Searching Node in Plan Tab
            await t
            .click(Selector('#sandbox-host .quick-search-input'))
            .typeText(Selector('#sandbox-host .quick-search-input'),'other')
            .click(Selector('#sandbox-host p').withText('NOther__Costs: Other Costs'))
            await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SearchNode1')
            //Clearing Search
            await t
            .click(Selector('#sandbox-host .quick-search-clear'))
            .click(Selector('#sandbox-host .quick-search-input'))
            .click(Selector('#sandbox-host p').withText('NCost__of__Sales: Cost of Sales'))
            await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SearchNode2')
            //Clearing Search
            await t
            .click(Selector('#sandbox-host .quick-search-clear'))
            //Setting Allocation Series as Primary
            .rightClick(Selector('#sandbox-host label').withText('New Series 1'))
            .click(Selector('#sandbox-host label').withText('Set as Primary'))
            await simulate()
            //Changes in nav Panel-Month, Scaling to 0
            await navigationPanelMonth()
            await navigationPanel0()
            await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'AllocSeries_Changes')



    });