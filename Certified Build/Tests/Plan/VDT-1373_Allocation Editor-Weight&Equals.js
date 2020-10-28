import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
//import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/checkboxes"
import { SignIn,tree, model,table,Login, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, editIcon, editOption } from '../../pages/common';

fixture `Plan`
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/6eb0d07e-9801-4481-9d23-dbb4d37e12d4/ReportSectionc81c7946077b0be99046`
.meta('ID','VDT-1373')
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
    .meta('ID','VDT-1373')
    .meta('SEVERITY','blocker')
    ('Allocation Editor-Weight&Equals', async t => {
    await SignIn()  
    await t
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
    .click(Selector('#sandbox-host .hier.icon.collapsed'))
    //Locking Other Revenue Node
    .click(Selector('#sandbox-host div').withText('Other Revenue').nth(12))
    .click(Selector('#sandbox-host .toolbar-icon.lock'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Revenue_Lock')
    //Altering Total of Total Revenue-Weights
    await t
    .click(Selector('#sandbox-host div').withText('1,200').nth(21))
    .click(Selector('#sandbox-host .quick-input-text'))
    for(var i=0; i<10; i=i+1){
        await t
        .pressKey('backspace')
    }
    await t
    .typeText(Selector('#sandbox-host .quick-input-text'),'1,200+10%')
    .click(Selector('#sandbox-host .toolbar-icon.weight'))
    .click(Selector('#minimodal button').withText('Apply'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'TotalRevenue_Change')
    //Altering total of CostOfSales-Equals
    await t
    .click(Selector('#sandbox-host div').withText('28').nth(10))
    .click(Selector('#sandbox-host .quick-input-text'))
    for(var i=0; i<8; i=i+1){
        await t
        .pressKey('backspace')
    }
    await t
    .typeText(Selector('#sandbox-host .quick-input-text'),'28+10%')
    .click(Selector('#sandbox-host .toolbar-icon.constant').nth(1))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'CostofSales_Change')
    //Altering OtherCost-Trend-By value
    await t
    .click(Selector('#sandbox-host div').withText('20').nth(59))
    .click(Selector('#sandbox-host .quick-input-text'))
    for(var i=0; i<4; i=i+1){
        await t
        .pressKey('backspace')
    }
    await t
    .typeText(Selector('#sandbox-host .quick-input-text'),'20+2%')
    .click(Selector('#sandbox-host .toolbar-icon.trend'))
    .click(Selector('#minimodal .bf-ui-form-input.form-input'))
    .typeText(Selector('#minimodal .bf-ui-form-input.form-input'),'2')
    .click(Selector('#minimodal button').withText('Apply'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'OtherCost_Chage')
    //Altering Rent-Total-Equals
    await t
    .click(Selector('#sandbox-host div').withText('120').nth(22))
    .click(Selector('#sandbox-host .quick-input-text'))
    for(var i=0; i<8; i=i+1){
        await t
        .pressKey('backspace')
    }
    await t
    .typeText(Selector('#sandbox-host .quick-input-text'),'120+10%')
    .click(Selector('#sandbox-host .toolbar-icon.equals'))
    .click(Selector('#minimodal button').withText('Apply'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Rent_Change1')
    //Altering Rent-Total-Equals
    await t
    .click(Selector('#sandbox-host div').withText('11').nth(37))
    .click(Selector('#sandbox-host .quick-input-text'))
    for(var i=0; i<8; i=i+1){
        await t
        .pressKey('backspace')
    }
    await t
    .typeText(Selector('#sandbox-host .quick-input-text'),'11+5%')
    .click(Selector('#sandbox-host .toolbar-icon.constant').nth(1))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Rent_Change2')
    });