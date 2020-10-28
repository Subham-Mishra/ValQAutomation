import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/navigationPanel"
import { tree,SignIn,editOption,Login, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, model } from '../../pages/common';
import {navigationPanel0,navigationPanelFullYear, navigationPanelJanuary,navigationPanelMarch,navigationPanel0k,navigationPanelSimMths,navigationPanel0_0b,navigationPanel0_0m, navigationPanelYtD } from "../../pages/navigationPanel";
fixture `Secondary KPI Formatting`

.meta('ID','VDT-1903')
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
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/536a0532-abb7-4f0d-bc5e-8e12f4be33ba/ReportSection`

    .meta('ID','VDT-1903')
    .meta('SEVERITY','blocker')
    ('Summary Case-Part 1', async t => {
        await SignIn()  
        await switchToMainWindow()
        await t
        .wait(80000)
        .click(Selector('#editBtn'))
        .wait(25000)
        await switchToIframe()
        //Income and Expense KPI-Tree
        await model()
        await t
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income&Expense_KPI')
        //Investment-Sec KPI 1-Template(Toggle OFF)
        await t
        .click(Selector('#sandbox-host .expand-collapse.node-collapsed'))
        .doubleClick(Selector('#sandbox-host div').withText('N7: Investment and Others').nth(22))
        .click(Selector('#modal-root span').withText('Secondary KPI'))
        .click(Selector('#modal-root h3').withText('KPI 1'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Investment_TempKPI')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        //Investment-Sec KPI 1-No reflect
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Invest&Exp-SameKPI')
        //Checking the Config of Rental Income
        await t
        .doubleClick(Selector('#sandbox-host div').withText('N6: Rental Income').nth(22))
        .click(Selector('#modal-root span').withText('Configuration'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Rental_Config')
        //Checking the Config of Income
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .doubleClick(Selector('#sandbox-host div').withText('N1: Income').nth(22))
        .click(Selector('#modal-root span').withText('Configuration'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_Config')
        //Expense-Template KPI
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .doubleClick(Selector('#sandbox-host div').withText('N12: Expenses').nth(22))
        .click(Selector('#modal-root span').withText('Secondary KPI'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Expense_TempKPI')
        //Checking Salary Net Income Config(KPI TOGGLE OFF)
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .doubleClick(Selector('#sandbox-host div').withText('N2: Salary Net Income').nth(22))
        .click(Selector('#modal-root span').withText('Configuration'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SalNetIncome-Temp')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SalNetIncome-No KPI')
       
    });






    test
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/a34b228e-73ad-484b-8e44-500bd7076650/ReportSection`

    .meta('ID','VDT-1903')
    .meta('SEVERITY','blocker')
    ('Summary Case-Part 2', async t => {
        await SignIn()  
        await t
        
        await switchToMainWindow()
        await t
        .wait(80000)
        .click(Selector('#editBtn'))
        .wait(35000)
        await switchToIframe()
        await model()
        //Savings KPI-Tree
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_KPI')
        await simulate()
        await navigationPanelSimMths()
        await navigationPanelMarch()
        await model()
        //Savings KPI 1
        await t 
        .doubleClick(Selector('#sandbox-host div').withText('NTOP: Savings').nth(22))
        .click(Selector('#modal-root span').withText('Secondary KPI'))
        .click(Selector('#modal-root h3').withText('KPI 1'))
        .click(Selector('#modal-root .bf-ui-form-select.form-select'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_None')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        //Validating Savings KPI for Scaling-0,0k,0m,0b
        await simulate()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_None0')
        await navigationPanel0k()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_None0k')
        await navigationPanel0_0m()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_None0m')
        await navigationPanel0_0b()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_None0b')
        await navigationPanel0()
        await model()
        //Changing value of KPI 1 of Savings to user Select
        await t
        .doubleClick(Selector('#sandbox-host div').withText('NTOP: Savings').nth(22))
        .click(Selector('#modal-root span').withText('Secondary KPI'))
        .click(Selector('#modal-root h3').withText('KPI 1'))
        .click(Selector('#modal-root .bf-ui-form-select.form-select'))
        .click(Selector('#modal-root option').withText('User selected'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_UserSelect')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        //Validating Savings KPI for Scaling-0,0k,0m,0b
        await simulate()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_UserSelect0')
        await navigationPanel0k()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_UserSelect0k')
        await navigationPanel0_0m()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_UserSelect0m')
        await navigationPanel0_0b()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_UserSelect0b')
        await navigationPanel0()
        await model()
        //Changing value of KPI 1 of Savings to 0m
        await t
        .doubleClick(Selector('#sandbox-host div').withText('NTOP: Savings').nth(22))
        .click(Selector('#modal-root span').withText('Secondary KPI'))
        .click(Selector('#modal-root h3').withText('KPI 1'))
        .click(Selector('#modal-root .bf-ui-form-select.form-select'))
        .click(Selector('#modal-root option').withText('0m'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_0m')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        //Validating Savings KPI for Scaling-0,0k,0m,0b
        await simulate()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_0m-0')
        await navigationPanel0k()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_0m-0k')
        await navigationPanel0_0m()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_0m-0m')
        await navigationPanel0_0b()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_0m-0b')
        await navigationPanel0()
        await model()
        //Changing value of KPI 1 of Savings to 0k
        await t
        .doubleClick(Selector('#sandbox-host div').withText('NTOP: Savings').nth(22))
        .click(Selector('#modal-root span').withText('Secondary KPI'))
        .click(Selector('#modal-root h3').withText('KPI 1'))
        .click(Selector('#modal-root .bf-ui-form-select.form-select'))
        .click(Selector('#modal-root option').withText('0k'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_0k')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        //Validating Savings KPI for Scaling-0,0k,0m,0b
        await simulate()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_0k-0')
        await navigationPanel0k()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_0k-0k')
        await navigationPanel0_0m()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_0k-0m')
        await navigationPanel0_0b()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_0k-0b')
        await navigationPanel0()
        //Changing value of KPI 1 of Savings to Pct
        await model()
        await t
        .doubleClick(Selector('#sandbox-host div').withText('NTOP: Savings').nth(22))
        .click(Selector('#modal-root span').withText('Secondary KPI'))
        .click(Selector('#modal-root h3').withText('KPI 1'))
        .click(Selector('#modal-root .bf-ui-form-select.form-select'))
        .click(Selector('#modal-root option').withText('Pct'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_Pct')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        //Validating Savings KPI for Scaling-0,0k,0m,0b
        await simulate()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_Pct0')
        await navigationPanel0k()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_Pct0k')
        await navigationPanel0_0m()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_Pct0m')
        await navigationPanel0_0b()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_Pct0b')
        
    });