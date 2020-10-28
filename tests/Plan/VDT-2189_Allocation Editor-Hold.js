import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/navigationPanel"
import { tree,SignIn,editOption,Login, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, model } from '../../pages/common';
import navigationPanel0 from "../../pages/navigationPanel";
import { PlanTab_VDT_2189 } from '../../pages/urlPage';
const signInPlan = Role(PlanTab_VDT_2189, signIn, { preserveUrl: true })
fixture `Plan`
.meta('ID','VDT-2189')
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
    .meta('ID','VDT-2189')
    .meta('SEVERITY','blocker')
    ('Allocation Editor-Hold', async t => {
        await SignIn()  
        await t
        .useRole(signInPlan)
        await switchToMainWindow()
        await t
        .wait(75000)
        await editOption()
        await t
        .wait(25000)
        await switchToIframe()
        //Locking in Plan Tab
        await plan()
        await t
        .click(Selector('#minimodal button').withText('Lock'))
        .click(Selector('#minimodal button').withText('Submit'))
        //Indian Node Allocation-Equals by 10%
        .click(Selector('#sandbox-host div').withText('20').nth(27))
        .click(Selector('#sandbox-host .quick-input-text'))
        .typeText(Selector('#sandbox-host .quick-input-text'),'+10%')
        .click(Selector('#sandbox-host .toolbar-icon.constant').nth(1))
        .wait(5000)
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'ValueChange1')
        //Changing decimal values of all nodes to 2
        await t
        await model()
        await t
        .click(Selector('#sandbox-host div').withText('Unlock').nth(15))
        .click(Selector('#modal-root button').withText('Yes'))
        .click(Selector('#sandbox-host div').withText('NSUMME: Overall Result').nth(22))
        .click(Selector('i.icon.icon--AutoEnhanceOn.node-menu-icon'))
        .click(Selector('div.confirm-reset-btn').find('button').withText('Yes'))
        .doubleClick(Selector('#sandbox-host div').withText('NChina: China').nth(22))
        .click(Selector('#modal-root span').withText('Values'))
        .click(Selector('#modal-root .bf-ui-form-select.form-select').nth(1))
        .click(Selector('#modal-root option').withText('3'))
        .click(Selector('#modal-root button').withText('Finish'))
        .doubleClick(Selector('#sandbox-host div').withText('NJapan: Japan').nth(22))
        .click(Selector('#modal-root span').withText('Values'))
        .click(Selector('#modal-root .bf-ui-form-select.form-select').nth(1))
        .click(Selector('#modal-root option').withText('3'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Decimal_Change')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .doubleClick(Selector('#sandbox-host div').withText('NIndia: India').nth(22))
        .click(Selector('#modal-root span').withText('Values'))
        .click(Selector('#modal-root .bf-ui-form-select.form-select').nth(1))
        .click(Selector('#modal-root option').withText('3'))
        .click(Selector('#modal-root button').withText('Finish'))
        .doubleClick(Selector('#sandbox-host div').withText('NSUMME: Overall Result').nth(22))
        .click(Selector('#modal-root span').withText('Values'))
        .click(Selector('#modal-root .bf-ui-form-select.form-select').nth(1))
        .click(Selector('#modal-root option').withText('3'))
        .click(Selector('#modal-root button').withText('Finish'))
        await plan()
        await t
        .click(Selector('#minimodal button').withText('Lock'))
        .click(Selector('#minimodal button').withText('Okay'))
        //India Node Lock
        await plan()
        await t
        .click(Selector('#sandbox-host div').withText('264').nth(10))
        .click(Selector('#sandbox-host .toolbar-icon.lock'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'IndiaHold')
        //Top Node Allocation-Weights-10% Increase
        await t
        .click(Selector('#sandbox-host div').withText('1,224').nth(10))
        .click(Selector('#sandbox-host .quick-input-text'))
        for(var i=0; i<6; i=i+1){
            await t
            .pressKey('backspace')
        }
        await t
        .typeText(Selector('#sandbox-host .quick-input-text'),'1,224+15%')
        .click(Selector('#sandbox-host div').withText('Weight').nth(13))
        .click(Selector('#minimodal button').withText('Apply'))
        .wait(5000)
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'ValueChange2')
       
       
    });