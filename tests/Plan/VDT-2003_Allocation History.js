import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/navigationPanel"
import { tree,SignIn,editOption,Login, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, model } from '../../pages/common';
import navigationPanel0 from "../../pages/navigationPanel";
const signInPlan = Role(PlanTab_VDT_1379_VDT_3479, signIn, { preserveUrl: true })
fixture `Plan`
.meta('ID','VDT-2003')
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
    .meta('ID','VDT-2003')
    .meta('SEVERITY','blocker')
    ('Allocation History', async t => {
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
        //New Series Creation
        await t
        .click(Selector('#minimodal button').withText('Lock'))
        .click(Selector('#minimodal button').withText('Submit'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SeriesCreation')
        //Random Allocation for Checking Update in History Log
        await t
        .click(Selector('#sandbox-host div').withText('267m').nth(10))
        .click(Selector('#sandbox-host .quick-input-text'))
        .selectText(Selector('#sandbox-host .quick-input-text'),12,0)
        .pressKey('backspace')
        .typeText(Selector('#sandbox-host .quick-input-text'),'124m')
        .click(Selector('#sandbox-host .toolbar-icon.weight'))
        .click(Selector('#minimodal button').withText('Apply'))
        .wait(5000)
        //Viewing Allocation History in Plan
        .click(Selector('#sandbox-host label').withText('View Allocation History'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'PlanHistory1')
        await simulate()
        await t
        .wait(5000)
        // .click(Selector('#wizbar .topBar-icon.icon--more.sync-action-icons'))
        // .wait(5000)
        //Viewing History in Simulate Tab
        .click(Selector('div.sync-action-container').find('i.topBar-icon.icon--clock.sync-action-icons'))
        //.click(Selector('#wizbar div').withText('History Log').nth(7))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SimHistory1')
        //Viewing Comments in Simulate Tab
        await t
        // .click(Selector('#server-sync span').withText('Planning'))
        .click(Selector('div.sync-action-container').find('i.topBar-icon.icon--chat-bubble.sync-action-icons'))

        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SimComments')

    });