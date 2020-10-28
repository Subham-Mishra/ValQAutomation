import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/navigationPanel"
import { tree,SignIn,editOption,Login, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, model } from '../../pages/common';
import {navigationPanel0,navigationPanelFullYear, navigationPanelJanuary,navigationPanelMarch,navigationPanel0k,navigationPanelSimMths,navigationPanel0_0b,navigationPanel0_0m, navigationPanelYtD, navigationPanelMonth } from "../../pages/navigationPanel";
fixture `Secondary KPI Formatting`

.meta('ID','VDT-2040')
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
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/37118507-7c0a-4f6e-8e05-11523e6f878d/ReportSection`

    .meta('ID','VDT-2040')
    .meta('SEVERITY','blocker')
    ('Formula-1 Part 1', async t => {
        await SignIn()  
        await t
        .wait(40000)
        await switchToMainWindow()
        await t
        .click(Selector('#editBtn'))
        .wait(5000)
        await switchToIframe()
        await model()
        //Income KPI 1-Toggle OFF
        await t
        .doubleClick(Selector('#sandbox-host div').withText('N1: Income').nth(22))
        .click(Selector('#modal-root span').withText('Secondary KPI'))
        .click(Selector('#modal-root h3').withText('KPI 1'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_KPI1')
        //Income KPI 1-No reflect
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_KPI1-NoReflect')
    });
    
    
    test
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/079ce930-6989-48bf-952d-3c6e6e59be1f/ReportSection`

    .meta('ID','VDT-2040')
    .meta('SEVERITY','blocker')
    ('Formula-1Part 2', async t => {
        await SignIn()  
        await t
        .wait(40000)
        await switchToMainWindow()
        await t
        .click(Selector('#editBtn'))
        .wait(5000)
        await switchToIframe()
        //Income KPI-Toggle OFF
        await model()
        await t
        .doubleClick(Selector('#sandbox-host div').withText('N1: Income').nth(22))
        .click(Selector('#modal-root span').withText('Secondary KPI'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SecKPI-ToggleOFF')
        //Income KPI-No Update
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'ToggleOFF-NoUpdate')
    });


    test
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/6ca66601-4513-4d86-a7be-10d2a13a9e8c/ReportSection`

    .meta('ID','VDT-2040')
    .meta('SEVERITY','blocker')
    ('Formula-1Part 3', async t => {
        await SignIn()  
        await t
        .wait(40000)
        await switchToMainWindow()
        await t
        .click(Selector('#editBtn'))
        .wait(5000)
        await switchToIframe()
        //Income KPI 1
        await model()
        await t
        .doubleClick(Selector('#sandbox-host div').withText('N1: Income').nth(22))
        .click(Selector('#modal-root span').withText('Secondary KPI'))
        .click(Selector('#modal-root h3').withText('KPI 1'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_KPI1')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        //Income KPI 2
        await t
        .doubleClick(Selector('#sandbox-host div').withText('N1: Income').nth(22))
        .click(Selector('#modal-root span').withText('Secondary KPI'))
        .click(Selector('#modal-root h3').withText('KPI 2'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_KPI2')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        //Income KPI 3
        await t
        .doubleClick(Selector('#sandbox-host div').withText('N1: Income').nth(22))
        .click(Selector('#modal-root span').withText('Secondary KPI'))
        .click(Selector('#modal-root h3').withText('KPI 3'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_KPI3')
        //Income KPI 1,2,3-Tree View
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        //Validating Savings KPI for Scaling-0,0k,0m,0b
        await simulate()
        await navigationPanelJanuary()
        await navigationPanelMarch()
        await navigationPanelSimMths()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_KPI3-SimMnths')
        await navigationPanelYtD()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_KPI3-YtD')
        await navigationPanelFullYear()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_KPI3-FullYr')
        await navigationPanelMonth()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_KPI3-Month')
        await navigationPanel0()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_KPI3-0')
        await navigationPanel0k()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_KPI3-0k')
        await navigationPanel0_0m()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_KPI3-0m')
        await navigationPanel0_0b()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_KPI3-0b')

    });








    test
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/d70f1af8-a2f7-4cff-8a51-7f15281aabd3/ReportSection`

    .meta('ID','VDT-2040')
    .meta('SEVERITY','blocker')
    ('Formula-2 Part 1', async t => {
        await SignIn()  
        await t
        .wait(40000)
        await switchToMainWindow()
        await t
        .click(Selector('#editBtn'))
        .wait(5000)
        await switchToIframe()
        //Savings-KPI 1
        await t
        .click(Selector('#wizbar span').withText('Model'))
        await t
        .doubleClick(Selector('#sandbox-host div').withText('NTOP: Savings').nth(22))
        .click(Selector('#modal-root span').withText('Secondary KPI'))
        .click(Selector('#modal-root h3').withText('KPI 1'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_KPI1')
        //Savings KPI 2
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .doubleClick(Selector('#sandbox-host div').withText('NTOP: Savings').nth(22))
        .click(Selector('#modal-root span').withText('Secondary KPI'))
        .click(Selector('#modal-root h3').withText('KPI 2'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_KPI2')
        //Savings KPI 3
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .doubleClick(Selector('#sandbox-host div').withText('NTOP: Savings').nth(22))
        .click(Selector('#modal-root span').withText('Secondary KPI'))
        .click(Selector('#modal-root h3').withText('KPI 3'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_KPI3')
        //Savings KPI 1,2,3-Tree
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Savings_KPI-Tree')
    });




    test
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/bdea7fd7-07f3-4d9c-8b0e-4fc1c029f403/ReportSection`

    .meta('ID','VDT-2040')
    .meta('SEVERITY','blocker')
    ('Formula-2 Part 2', async t => {
        await SignIn()  
        await t
        .wait(40000)
        await switchToMainWindow()
        await t
        .click(Selector('#editBtn'))
        .wait(15000)
        await switchToIframe()
        await t
        .click(Selector('#wizbar span').withText('Model'))
        //Savings KPI 3-After Node ID Change
        await t
        .doubleClick(Selector('#sandbox-host div').withText('NTOP123: Savings').nth(22))
        .click(Selector('#modal-root span').withText('Secondary KPI'))
        .click(Selector('#modal-root h3').withText('KPI 3'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'KPI3_Change')
        //Savings KPI 1-After Node ID change
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .doubleClick(Selector('#sandbox-host div').withText('NTOP123: Savings').nth(22))
        .click(Selector('#modal-root span').withText('Secondary KPI'))
        .click(Selector('#modal-root h3').withText('KPI 1'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'KPI1_Change')
        //Savings KPI 3-After Node ID Change
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .doubleClick(Selector('#sandbox-host div').withText('NTOP123: Savings').nth(22))
        .click(Selector('#modal-root span').withText('Secondary KPI'))
        .click(Selector('#modal-root h3').withText('KPI 2'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'KPI2_Change')
        //Savings KPI 1,2,3-After Node ID Change-Tree View
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'KPI-Tree')
       

    });





    test
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/aba6988e-0470-4ad0-aa3a-bb8535323524/ReportSection7e334855eb19eff045a3`

    .meta('ID','VDT-2040')
    .meta('SEVERITY','blocker')
    ('Customer Issue', async t => {
        await SignIn()  
        await t
        .wait(40000)
        await switchToMainWindow()
        await t
        .click(Selector('#editBtn'))
        .wait(15000)
        await switchToIframe()
        //Cleaning/Organizing KPI1
        await model()
        await t
        .click(Selector('#sandbox-host .expand-collapse.node-collapsed'))
        .click(Selector('#sandbox-host .expand-collapse.node-collapsed'))
        .doubleClick(Selector('#sandbox-host div').withText('NCleaning_Organising: Cleaning/Organising').nth(22))
        .click(Selector('#modal-root span').withText('Secondary KPI'))
        .click(Selector('#modal-root h3').withText('KPI 1'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'CleanOrg1_KPI1')
        //Training 1-KPI 1
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .doubleClick(Selector('#sandbox-host div').withText('NTraining: Training').nth(22))
        .click(Selector('#modal-root span').withText('Secondary KPI'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Training1_KPI1')
        //Supervise 1-KPI 1
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .doubleClick(Selector('#sandbox-host div').withText('NSupervision: Supervision').nth(22))
        .click(Selector('#modal-root span').withText('Secondary KPI'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Supervise1_KPI1')
        //Expense Hours children KPI-Tree
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'ExpenseHours_KPI-Tree')
        //Cleaning KPI 1
        await t
        .click(Selector('#sandbox-host .expand-collapse.node-expanded').nth(1))
        .click(Selector('#sandbox-host .expand-collapse.node-collapsed').nth(1))
        .click(Selector('#sandbox-host .expand-collapse.node-collapsed').nth(1))
        .doubleClick(Selector('#sandbox-host div').withText('NCleaning: Cleaning').nth(22))
        .click(Selector('#modal-root span').withText('Secondary KPI'))
        .click(Selector('#modal-root h3').withText('KPI 1'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Cleaning_KPI1')
        //Training Node 2-KPI 1
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .doubleClick(Selector('#sandbox-host div').withText('NTrainig: Trainig').nth(22))
        .click(Selector('#modal-root span').withText('Secondary KPI'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Training2_KPI1')
        //Supervide Node 2-KPI 1
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .doubleClick(Selector('#sandbox-host div').withText('NSupervision7: Supervision').nth(22))
        .click(Selector('#modal-root span').withText('Secondary KPI'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Supervise2_KPI1')
        //Total Expense KPI-Tree
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'TotalExp_KPI-Tree')
        //Template Node 2-Configuration View
        await t
        .click(Selector('#sandbox-host .expand-collapse.node-expanded').nth(1))
        .doubleClick(Selector('#sandbox-host div').withText('NCQN41001N4010: Template').nth(22))
        .click(Selector('#modal-root span').withText('Configuration'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Template2_Config')
        //Template Node 2-No KPI Available
        await t
        .click(Selector('#modal-root span').withText('Conditional Formatting'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Template2_NoKPI')
        

    });