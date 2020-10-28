import { Selector, Role, t} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/navigationPanel"
import { tree,SignIn,editOption,Login, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, model } from '../../pages/common';
import {navigationPanel0,navigationPanelFullYear, navigationPanelJanuary, navigationPanelYtD } from "../../pages/navigationPanel";
fixture `Conditional Formatting`

.meta('ID','VDT-3145')
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
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/c0a589c9-ca96-4efb-adb3-8c292c936c09/ReportSection`
    .meta('ID','VDT-3145')
    .meta('SEVERITY','blocker')
    ('Summary Case-Different types of Nodes-1', async t => {
        await SignIn()  
        await t
        .wait(40000)
        await switchToMainWindow()
        await t
        .click(Selector('#editBtn'))
        .wait(15000)
        await t
        .click(Selector('#pvExplorationHost [class^="btn collapseIcon pbi-borderless-button glyphicon g"]'))
        .click(Selector('#pvExplorationHost [class^="btnIcon glyphicon pbi-glyph-chevronrightmedium gly"]').nth(1))
        .click(Selector('#pvExplorationHost [class^="btnIcon glyphicon pbi-glyph-chevronrightmedium gly"]'))
        await switchToIframe()
        await simulate()
        await navigationPanel0()
        await model()
        //report loaded with Income-> 17k,18k,21k Expense->linked to income, CF-> -10%,5%,10%
        await t
        //Checking CF for Income node
        .doubleClick(Selector('#sandbox-host div').withText('N1: Income').nth(22))
        .click(Selector('#modal-root span').withText('Conditional Formatting'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income-CF')
        //Checking config for Expense
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .doubleClick(Selector('#sandbox-host div').withText('N12: Expenses').nth(22))
        .click(Selector('#modal-root span').withText('Configuration'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Expense-Config')
        //Checking CF for Expense
        await t
        .click(Selector('#modal-root span').withText('Conditional Formatting'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Expense-CF')
        //Cecking Tree after updating CF for Income and Expense
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'CF-UpdatedTree')
        //Simulating income to 11%
        await t
        .hover(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .doubleClick(Selector('#sandbox-host .grid-cell').nth(17))
        .click(Selector('#sandbox-host .grid-cell').nth(17))
        .typeText(Selector('#sandbox-host .grid-cell').nth(17),'11')
        .click(Selector('.d2VDTClose'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income-Simulation')
        //Simulating expense to -10%
        await t
        .hover(Selector('#N12').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .doubleClick(Selector('#sandbox-host .grid-cell').nth(17))
        .click(Selector('#sandbox-host .grid-cell').nth(17))
        .pressKey('1')
        .pressKey('backspace')
        .typeText(Selector('#sandbox-host .grid-cell').nth(17),'-10')
        .click(Selector('.d2VDTClose'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Expense-Simulation')
        //Table view
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table-AftSim')
        //Viewing Income Detail Pg
        await tree()
        await t
        .click(Selector('#N1 .d2VDTNode.d2VDTFocus'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income-DetPg')
        //Viewing Expense DetPg
        await simulate()
        await t
        .click(Selector('#N12 .d2VDTNode.d2VDTFocus'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Expense-DetPg')
       
    });





    test
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/c8df7cfa-60a5-4a80-9593-ddecf3c7e0a3/ReportSection`
    .meta('ID','VDT-3145')
    .meta('SEVERITY','blocker')
    ('Summary Case-Different types of Nodes-2', async t => {
        await SignIn()  
        await t
        .wait(40000)
        await switchToMainWindow()
        await t
        .click(Selector('#editBtn'))
        .wait(15000)
        await t
        .click(Selector('#pvExplorationHost [class^="btn collapseIcon pbi-borderless-button glyphicon g"]'))
        .click(Selector('#pvExplorationHost [class^="btnIcon glyphicon pbi-glyph-chevronrightmedium gly"]').nth(1))
        .click(Selector('#pvExplorationHost [class^="btnIcon glyphicon pbi-glyph-chevronrightmedium gly"]'))
        await switchToIframe()
        await simulate()
        await navigationPanel0()
        await model()
        //Report loaded with EXPENSE-> Config-Constant, Calc Method-Manual(Base-1200,Comp-600), CF-1200,1400,1600
        await t
        //Viewing config of Expense Node
        .doubleClick(Selector('#sandbox-host div').withText('N12: Expenses').nth(22))
        .click(Selector('#modal-root span').withText('Configuration'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Expense-Config')
        //Viewing CF of Expense Node
        await t
        .click(Selector('#modal-root span').withText('Conditional Formatting'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Expense-CF')
        //Viewing Tree after CF
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree-After CF')
        //Changing value of Expense Node to -1300
        await t
        .doubleClick(Selector('#sandbox-host div').withText('N12: Expenses').nth(22))
        .click(Selector('#modal-root span').withText('Configuration'))
        .click(Selector('#modal-root .bf-ui-form-input.form-input.manual-input-value'))
        .selectText(Selector('#modal-root .bf-ui-form-input.form-input.manual-input-value'),5,0)
        .pressKey('backspace')
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input.manual-input-value'),'-1300')
        .click(Selector('#modal-root button').withText('Finish'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree-AftSim')
        //Viewing Table after Sim
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table-AftSim')
        //Viewing Expense DetPg after Sim
        await tree()
        await t
        .click(Selector('#N12 .d2VDTNode.d2VDTFocus'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Expense-DetPg')

    });



    

    test
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/55a4f771-2707-43b7-9b05-9f02076db1dc/ReportSection`
    .meta('ID','VDT-3145')
    .meta('SEVERITY','blocker')
    ('Summary Case-Different types of Nodes-3', async t => {
        await SignIn()  
        await t
        .wait(40000)
        await switchToMainWindow()
        await t
        .click(Selector('#editBtn'))
        .wait(15000)
        await t
        .click(Selector('#pvExplorationHost [class^="btn collapseIcon pbi-borderless-button glyphicon g"]'))
        .click(Selector('#pvExplorationHost [class^="btnIcon glyphicon pbi-glyph-chevronrightmedium gly"]').nth(1))
        .click(Selector('#pvExplorationHost [class^="btnIcon glyphicon pbi-glyph-chevronrightmedium gly"]'))
        await switchToIframe()
        await simulate()
        await navigationPanel0()
        await model()
        //Report loaded with EXPENSE-> Config-Constant, Calc Method-Manual(Base-1200,Comp-600), CF-1200,1400,1600
        await t
        //Viewing Expense Config
        .doubleClick(Selector('#sandbox-host div').withText('N12: Expenses').nth(22))
        .click(Selector('#modal-root span').withText('Configuration'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Expense-Config')
        //Viewing Expense CF
        await t
        .click(Selector('#modal-root span').withText('Conditional Formatting'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Expense-CF')
        //Viewing Tree after CF
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree-AfterCF')
        //Changing value of Expense to -1199
        await t
        .doubleClick(Selector('#sandbox-host div').withText('N12: Expenses').nth(22))
        .click(Selector('#modal-root span').withText('Configuration'))
        .click(Selector('#modal-root .bf-ui-form-input.form-input.manual-input-value'))
        .selectText(Selector('#modal-root .bf-ui-form-input.form-input.manual-input-value'),5,0)
        .pressKey('backspace')
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input.manual-input-value'),'-1199')
        .click(Selector('#modal-root button').withText('Finish'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree-AfterSim')
        //Viewing Table after Sim
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table-AfterSim')
        //Viewing Expense Det Pg
        await tree()
        await t
        .click(Selector('#N12 .d2VDTNode.d2VDTFocus'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Expense-DetPg')

    });




    test
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/6195ac66-170b-46dd-985d-42742160e8be/ReportSection`
    .meta('ID','VDT-3145')
    .meta('SEVERITY','blocker')
    ('Summary Case-Different types of Nodes-4', async t => {
        await SignIn()  
        await t
        .wait(40000)
        await switchToMainWindow()       
        await t
        .click(Selector('#editBtn'))
        .wait(15000)
        await t
        .click(Selector('#pvExplorationHost [class^="btn collapseIcon pbi-borderless-button glyphicon g"]'))
        .click(Selector('#pvExplorationHost [class^="btnIcon glyphicon pbi-glyph-chevronrightmedium gly"]').nth(1))
        .click(Selector('#pvExplorationHost [class^="btnIcon glyphicon pbi-glyph-chevronrightmedium gly"]'))
        await switchToIframe()
        await simulate()
        await navigationPanel0()
        await model()
        //report loaded with INCOME-> CF 17k,18k,21k, EXPENSE->Config-Template based on Income
        await t
        //Viewing Income CF
        .doubleClick(Selector('#sandbox-host div').withText('N1: Income').nth(22))
        .click(Selector('#modal-root span').withText('Conditional Formatting'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income-CF')
        //Viewing Expense Config
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .doubleClick(Selector('#sandbox-host div').withText('N12: Expenses').nth(22))
        .click(Selector('#modal-root span').withText('Configuration'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Expense-Config')
        //Viewing CF of Expense(Template)based on income
        await t
        .click(Selector('#modal-root span').withText('Conditional Formatting'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Expense-CF-Template')
        //Viewing Tree  after CF
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree-AfterCF')

    });