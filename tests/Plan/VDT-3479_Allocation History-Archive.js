import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/navigationPanel"
import { tree,SignIn,editOption,Login, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, model } from '../../pages/common';
import navigationPanel0 from "../../pages/navigationPanel";
import { PlanTab_VDT_1379_VDT_3479 } from '../../pages/urlPage';
const signInPlan = Role(PlanTab_VDT_1379_VDT_3479, signIn, { preserveUrl: true })
fixture `Plan`
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/34e18f9b-8d0e-4338-b6ef-3ba67cb3fe6f/ReportSection`
.meta('ID','VDT-3479')
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
    .meta('ID','VDT-3479')
    .meta('SEVERITY','blocker')
    ('Allocation History-Archive', async t => {
        //create alloc series and then validate
        await t
        .useRole(signInPlan)
        await t
        .wait(75000)
        await switchToMainWindow()
        await editOption()
        await t
        .wait(25000)
        await switchToIframe()
        await model()
        await t
        //Changing the model from Dynamic to Advanced
        .click(Selector('#sandbox-host div').withText('NSUMME: Overall Result').nth(22))
        .click(Selector('i.icon.icon--AutoEnhanceOn.node-menu-icon'))
        .click(Selector('div.confirm-reset-btn').find('button').withText('Yes'))
        //Adding a child node for Other Costs
        .click(Selector('#sandbox-host div').withText('NOther__Costs: Other Costs').nth(22))
        .click(Selector('#sandbox-host .icon.icon--Add.node-menu-icon'))
        //Renaming the Node to Test_Node
        .doubleClick(Selector('#sandbox-host div').withText('N1: Copy of Other Costs').nth(22))
        .selectText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),19,0)
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'Test Node')
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NodeCreated')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        await t
        .wait(5000)
        .click(Selector('#wizbar .topBar-icon.icon--more.sync-action-icons'))
        .click(Selector('#wizbar span').withText('History Log'))
        //Checking History Log after Node Creation
        .click(Selector('div.sync-action-container').find('i.topBar-icon.icon--clock.sync-action-icons'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NodeCreate_Log')
        await t
        .click(Selector('#close-sync-modal'))
        //Allocating Values for Calculation(Manual)
        .doubleClick(Selector('#sandbox-host div').withText('N1: Test Node').nth(22))
        .click(Selector('#modal-root span').withText('Configuration'))
        .click(Selector('#modal-root .form-icon').nth(1))
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'20')
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(2),'40')
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'ConfigChange')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .wait(5000)
        .click(Selector('#wizbar .topBar-icon.icon--more.sync-action-icons'))
        .click(Selector('#wizbar span').withText('History Log'))
        //Checking History Log after Configuration Change
        .click(Selector('div.sync-action-container').find('i.topBar-icon.icon--clock.sync-action-icons'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'ConfigChange_Log')
        await t
        .click(Selector('#close-sync-modal'))
        //Changing calculation type of test Node to Sum of Children
        .doubleClick(Selector('#sandbox-host div').withText('N1: Test Node').nth(22))
        .click(Selector('#modal-root span').withText('Configuration'))
        .click(Selector('#modal-root .form-icon'))
        .click(Selector('#modal-root .bf-ui-form-select.form-select'))
        .click(Selector('#modal-root option').withText('Sum Children (a+b+c+...)'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'CalChange')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .wait(5000)
        .click(Selector('#wizbar .topBar-icon.icon--more.sync-action-icons'))
        .click(Selector('#wizbar span').withText('History Log'))
        //Checking History Log after Configuration Change
        .click(Selector('div.sync-action-container').find('i.topBar-icon.icon--clock.sync-action-icons'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'CalChange_Log')
        await t
        .click(Selector('#close-sync-modal'))
        //Changing Display of Test Node
        .doubleClick(Selector('#sandbox-host div').withText('N1: Test Node').nth(22))
        .click(Selector('#modal-root span').withText('Display'))
        .click(Selector('#modal-root .form-icon').nth(1))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'DispChange')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .wait(5000)
        .click(Selector('#wizbar .topBar-icon.icon--more.sync-action-icons'))
        .click(Selector('#wizbar span').withText('History Log'))
        //Checking History Log after Display Change
        .click(Selector('div.sync-action-container').find('i.topBar-icon.icon--clock.sync-action-icons'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'DispChange_Log')
        await t
        .click(Selector('#close-sync-modal'))
        //Changing Data Series in Data Series Manager from 12 to 7
        .click(Selector('#sandbox-host span').withText('Data Series'))
        .click(Selector('#sandbox-host div').withText('Data Series Manager').nth(16))
        .click(Selector('#modal-root .bf-ui-form-input.form-input'))
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input'),'7')
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'DSChange')
        await t
        .click(Selector('#modal-root .icon.icon--Cancel'))
        .wait(5000)
        .click(Selector('#wizbar .topBar-icon.icon--more.sync-action-icons'))
        .click(Selector('#wizbar span').withText('History Log'))
        //Checking History Log after Data Series Change
        .click(Selector('div.sync-action-container').find('i.topBar-icon.icon--clock.sync-action-icons'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'DSChange_Log')
        await t
        .click(Selector('#close-sync-modal'))
        //Deleting Test Node
        .click(Selector('#sandbox-host span').withText('Node'))
        .click(Selector('#sandbox-host .icon.icon--Delete.node-menu-icon'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NodeDelete')
        await t
        .click(Selector('#modal-root button').withText('Yes'))
        .wait(5000)
        .click(Selector('#wizbar .topBar-icon.icon--more.sync-action-icons'))
        .click(Selector('#wizbar span').withText('History Log'))
        //Checking History Log after Node Deletion
        .click(Selector('div.sync-action-container').find('i.topBar-icon.icon--clock.sync-action-icons'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NodeDel_Log')

    });