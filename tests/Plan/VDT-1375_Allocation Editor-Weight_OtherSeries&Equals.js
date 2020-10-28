import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
//import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/checkboxes"
import { tree,SignIn,editOption,Login, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, model } from '../../pages/common';
import { PlanTab_SimpleModel, PlanTab_VDT_1373_VDT_1375 } from '../../pages/urlPage';
const signInPlan = Role(PlanTab_VDT_1373_VDT_1375, signIn, { preserveUrl: true })
fixture `Plan`
.meta('ID','VDT-1375')
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
    .meta('ID','VDT-1375')
    .meta('SEVERITY','blocker')
    ('Allocation Editor-Weight,OtherSeries&Equals', async t => {
        await t
        .useRole(signInPlan)
        .wait(75000)
        .click(Selector('#editBtn'))
        .wait(30000)
        await switchToIframe()
        await model()
        await t
        .click(Selector('#sandbox-host span').withText('New'))
        .click(Selector('#sandbox-host div').withText('Create a Simple Model').nth(17))
        .click(Selector('#modal-root button').withText('Yes'))
        await plan()
        await t
        .click(Selector('#minimodal button').withText('Lock'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Plan_Lock')
        await t
        .click(Selector('#minimodal button').withText('Submit'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Plan_Tab')
        await t
        .click(Selector('#sandbox-host .hier.icon.collapsed'))
        //Sales revenue-Weight-Based on Primary Series
        await t
        // .click(Selector('#sandbox-host div').withText('Other Revenue').nth(11))
        // .click(Selector('#sandbox-host div').withText('Release').nth(10))
        .click(Selector('#sandbox-host div').withText('960').nth(10))
        .click(Selector('#sandbox-host .toolbar-icon.weight'))
        .click(Selector('#minimodal .bf-ui-form-input.form-input'))
        .click(Selector('#minimodal button').withText('Budget'))
        .click(Selector('#minimodal button').withText('Apply'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sales_Revenue-Change')
        //Locking Other Revenue
        await t
        .click(Selector('#sandbox-host div').withText('Other Revenue').nth(11))
        .click(Selector('#sandbox-host .toolbar-icon.lock'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Other_Revenue-Lock')
        //Total Revenue Allocation-Equals
        await t
        .click(Selector('#sandbox-host div').withText('1,200').nth(21))
        .click(Selector('#sandbox-host .quick-input-text'))
        for(var i=0; i<8; i=i+1){
            await t
            .pressKey('backspace')
        }
        await t
        .typeText(Selector('#sandbox-host .quick-input-text'),'1,200+10%')
        .click(Selector('#sandbox-host .toolbar-icon.equals'))
        .click(Selector('#minimodal button').withText('Apply'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'TotalRevenue-Inc')
        //Cost of Sales-Based on Total of Sales Revenue
        await t
        .click(Selector('#sandbox-host div').withText('480').nth(22))
        .click(Selector('#sandbox-host label').withText('Weight'))
        .click(Selector('#minimodal .bf-ui-form-input.form-input').nth(1))
        .click(Selector('#minimodal span').withText('NSales__Revenue__Total__revenue: Sales Revenue'))
        .click(Selector('#minimodal button').withText('Apply'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Cost_of_Sales')

    });







