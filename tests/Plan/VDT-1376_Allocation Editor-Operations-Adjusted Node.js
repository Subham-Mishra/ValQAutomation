import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
//import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/checkboxes"
import { tree,SignIn,editOption,Login, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, model } from '../../pages/common';
import { PlanTab_AdjustedNode, PlanTab_VDT_1376 } from '../../pages/urlPage';
const signInPlan = Role(PlanTab_VDT_1376, signIn, { preserveUrl: true })
fixture `Plan`
.meta('ID','VDT-1376')
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
    .meta('ID','VDT-1376')
    .meta('SEVERITY','blocker')
    ('Allocation Editor-Adjusted Node', async t => {
        await t
        .useRole(signInPlan)
        await switchToMainWindow()
        await t
        .wait(75000)
        await editOption()
        await t
        .wait(35000)
        await switchToIframe()
        await model()
        await t
        .click(Selector('#sandbox-host .icon.icon--Add'))
        .click(Selector('#sandbox-host div').withText('Import an Advanced Model').nth(17))
        .click(Selector('#modal-root button').withText('Yes'))
        .click('#import')
        .setFilesToUpload('#import', ['..\\..\\..\\Scenario_4.txt'])
        .click(Selector('#modal-root button').withText('Finish'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'ImportedTree')
        await t
        .click(Selector('span').withText('Plan'))
        .click(Selector('#minimodal button').withText('Lock'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Plan_Lock')
        //New Series creation
        await t
        .click(Selector('#minimodal button').withText('Submit'))
        //Revenue Increase-Weights
        .click(Selector('#sandbox-host div').withText('2,136,000').nth(14))
        .click(Selector('#sandbox-host div').withText('Weight').nth(13))
        .click(Selector('#minimodal .change-to.change-to-input'), {
        caretPos: 6
        })
        for(var i=0; i<10; i++){
            await t
            .pressKey('right')
        }
        await t
        .typeText(Selector('#minimodal .change-to.change-to-input'),'+10%')
        .click(Selector('#minimodal button').withText('Apply'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NewSeries1')
        await simulate()
        await t
        //Setting Alloc Series as Primary in Series Switcher
        .click(Selector('#wizbar div').withText('Baseline').nth(6))
        .click(Selector('#wizbar div').withText('New Series 1').nth(6))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Primary_Series')


    });