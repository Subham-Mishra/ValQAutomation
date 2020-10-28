import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/navigationPanel"
import { tree,SignIn,editOption,Login, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, model } from '../../pages/common';
import navigationPanel0 from "../../pages/navigationPanel";
import { PlanTab_VDT_3478 } from '../../pages/urlPage';
const signInPlan = Role(PlanTab_VDT_3478, signIn, { preserveUrl: true })
fixture `Plan`

.meta('ID','VDT-3478')
    .meta({'author': 'Automation','Date':'31-Aug-2020'})
    .meta('SEVERITY','Critical')
    .meta('TEST_RUN','1.7.0')

test
    .meta('ID','VDT-3478')
    .meta('SEVERITY','blocker')
    ('Restore to this Step&Reset All', async t => {
        await t
        .useRole(PlanTab_VDT_3478) 
        //check before and after values, new series
        await switchToMainWindow()
        await t
        .wait(75000)
        await editOption()
        await t
        .wait(25000)
        await switchToIframe()
        //Lock mode in Plan Tab
        await plan()
        await t
        .click(Selector('#minimodal button').withText('Lock'))
        .click(Selector('#minimodal button').withText('Submit'))
        //Random Allocation to view update in Allocation History
        .click(Selector('#sandbox-host div').withText('267m').nth(10))
        .click(Selector('#sandbox-host .quick-input-text'))
        .selectText(Selector('#sandbox-host .quick-input-text'),12,0)
        .pressKey('backspace')
        .typeText(Selector('#sandbox-host .quick-input-text'),'300m')
        .click(Selector('#sandbox-host .toolbar-icon.weight'))
        .click(Selector('#minimodal button').withText('Apply'))
        .wait(5000)
        //Viewing Allocation History for update and Restore is disabled for recent allocation
        .click(Selector('#sandbox-host label').withText('View Allocation History'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Restore_Disable')
        //Allocation for Reset All
        await t
        .click(Selector('#close-sync-modal'))
        .click(Selector('#sandbox-host div').withText('41m').nth(10))
        .selectText(Selector('#sandbox-host .quick-input-text'),11,0)
        .typeText(Selector('#sandbox-host .quick-input-text'),'50m',{
            caretPos:0
        })
        .click(Selector('#sandbox-host .toolbar-icon.constant.down'))
        .wait(5000)
        //Reset all Allocations
        .click(Selector('#sandbox-host label').withText('View Allocation History'))
        .click(Selector('#server-sync div').withText('Reset All').nth(9))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'ResetAll_Option')
        await t
        .click(Selector('#minimodal button').withText('Yes'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'ResetAll1')
        //Random allocation
        await t
        .click(Selector('#sandbox-host div').withText('135m').nth(22))
        .selectText(Selector('#sandbox-host .quick-input-text'),11,0)
        .typeText(Selector('#sandbox-host .quick-input-text'),'200m',{
            caretPos:0
        })
        .click(Selector('#sandbox-host div').withText('Weight').nth(13))
        .click(Selector('#minimodal button').withText('Apply'))
        .click(Selector('#sandbox-host div').withText('48m').nth(10))
        .selectText(Selector('#sandbox-host .quick-input-text'),11,0)
        .typeText(Selector('#sandbox-host .quick-input-text'),'55m',{
            caretPos:0
        })
        .click(Selector('#sandbox-host .toolbar-icon.weight'))
        .click(Selector('#minimodal button').withText('Apply'))
        //Allocation series Deletion
        .click(Selector('#sandbox-host .series-icon.configure'))
        .click(Selector('#sandbox-host label').withText('Delete'))
        .click(Selector('#minimodal button').withText('Submit'))
        //Allocation in Newly Created Series
        .click(Selector('#sandbox-host div').withText('25m').nth(13))
        .selectText(Selector('#sandbox-host .quick-input-text'),11,0)
        .typeText(Selector('#sandbox-host .quick-input-text'),'40m',{
            caretPos:0
        })
        .click(Selector('#sandbox-host .toolbar-icon.constant.down'))
        .click(Selector('#sandbox-host div').withText('471m').nth(11))
        .selectText(Selector('#sandbox-host .quick-input-text'),12,0)
        .typeText(Selector('#sandbox-host .quick-input-text'),'600m',{
            caretPos:0
        })
        .click(Selector('#sandbox-host div').withText('Weight').nth(13))
        .click(Selector('#minimodal button').withText('Apply'))
        .wait(5000)
        .click(Selector('#sandbox-host label').withText('View Allocation History'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'OtherSeries')
        await t
        .click(Selector('#server-sync div').withText('New Series 2').nth(12))
        .click(Selector('#server-sync div').withText('New Series 1').nth(12))
        .click(Selector('#server-sync div').withText('New Series 1').nth(12))
        .click(Selector('#server-sync div').withText('New Series 2').nth(12))
        .click(Selector('#server-sync div').withText('Reset All').nth(9))
        //On clicking NO in Reset all, Allocations are maintained
        .click(Selector('#minimodal button').withText('No'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'No_Reset')
        await t
        .click(Selector('#close-sync-modal'))
        //Setting New Series as Primary
        .click(Selector('#sandbox-host .toolbar-input').nth(1))
        .rightClick(Selector('#sandbox-host label').withText('New Series 2'))
        .click(Selector('#sandbox-host label').withText('Set as Primary'))
        .click(Selector('#sandbox-host div').withText('27m').nth(10))
        .selectText(Selector('#sandbox-host .quick-input-text'),11,0)
        .typeText(Selector('#sandbox-host .quick-input-text'),'20m',{
            caretPos:0
        })
        .click(Selector('#sandbox-host .toolbar-icon.constant.down'))
        await simulate()
        //Checking Tree View
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree_View1')
        await table()
        //Checking Table View
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_View1')
        await plan()
        await t
        .wait(5000)
        //Viewing Allocation History for New Series
        .click(Selector('#sandbox-host label').withText('View Allocation History'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Alloc_Hist')
        await t
        //Resetting All allocations in new Series
        .click(Selector('#server-sync div').withText('Reset All').nth(9))
        .click(Selector('#minimodal button').withText('Yes'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'ResetAll2')
        await simulate()
        //Table View after Resetting All Allocations
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_View2')
        await tree()
        //Tree View after Resetting All Allocations
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree_View2')
        
        
    });