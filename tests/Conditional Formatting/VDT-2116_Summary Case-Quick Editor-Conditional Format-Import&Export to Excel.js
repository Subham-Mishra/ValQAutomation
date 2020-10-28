import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/navigationPanel"
import { tree,SignIn,editOption,Login, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, model } from '../../pages/common';
import {navigationPanel0,navigationPanelFullYear, navigationPanelJanuary, navigationPanelYtD } from "../../pages/navigationPanel";
fixture `Conditional Formatting`

.meta('ID','VDT-2116')
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
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/e6c5f87a-3a6c-4fda-8beb-b1ecc99aa99b/ReportSection`

    .meta('ID','VDT-2116')
    .meta('SEVERITY','blocker')
    ('Summary Case-Import&Export to Excel', async t => {
        await SignIn()  
        await t
        .wait(40000)
        await switchToMainWindow()
        await t
        .click(Selector('#editBtn'))
        .wait(15000)
        .click(Selector('#pvExplorationHost [class^="btn collapseIcon pbi-borderless-button glyphicon g"]'))
        .click(Selector('#pvExplorationHost [class^="btnIcon glyphicon pbi-glyph-chevronrightmedium gly"]').nth(1))
        .click(Selector('#pvExplorationHost [class^="btnIcon glyphicon pbi-glyph-chevronrightmedium gly"]'))
        await switchToIframe()
        await simulate()
        await navigationPanel0()
        await model()
        //Export to excel via Quick Editor
        await t
        .click(Selector('#sandbox-host div').withText('Quick Editor').nth(15))
        .click(Selector('#modal-root div').withText('Manage Columns').nth(5))
        .click(Selector('#modal-root div').withText('Select all').nth(3))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'QuickEditor-ExportT')
        //Checking CF of Income
        await t
        .click(Selector('#modal-root button').withText('Apply'))
        .click(Selector('#modal-root button').withText('Save'))
        .doubleClick(Selector('#sandbox-host div').withText('N1: Income').nth(22))
        .click(Selector('#modal-root span').withText('Conditional Formatting'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income-CF')
        //Checking CF of Sal Net Income
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .click(Selector('#sandbox-host .expand-collapse.node-collapsed'))
        .doubleClick(Selector('#sandbox-host div').withText('N2: Salary Net Income').nth(22))
        .click(Selector('#modal-root span').withText('Conditional Formatting'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SalNetIncome-CF')
        //Checking CF of Essentials
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .click(Selector('#sandbox-host .expand-collapse.node-collapsed').nth(1))
        .doubleClick(Selector('#sandbox-host div').withText('N12A: Essentials').nth(22))
        .click(Selector('#modal-root span').withText('Conditional Formatting'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Essentials-CF')
        //Checking CF of Groceries
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .click(Selector('#sandbox-host .expand-collapse.node-collapsed').nth(1))
        .doubleClick(Selector('#sandbox-host div').withText('N26: Groceries').nth(22))
        .click(Selector('#modal-root span').withText('Conditional Formatting'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Groceries-CF')
        //Salary Net Income Simulation
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .hover(Selector('#N26').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .doubleClick(Selector('#sandbox-host .grid-cell').nth(17))
        .click(Selector('#sandbox-host .grid-cell').nth(17))
        .pressKey('1')
        .pressKey('backspace')
        .typeText(Selector('#sandbox-host .grid-cell').nth(17),'-1')
        .click(Selector('.d2VDTClose'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SalNetIncome-Sim1-Tree')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SalNetIncome-Sim1-Table')
        await tree()
        await t
        .hover(Selector('#N26').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .doubleClick(Selector('#sandbox-host .grid-cell').nth(17))
        .click(Selector('#sandbox-host .grid-cell').nth(17))
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#sandbox-host .grid-cell').nth(17),'8')
        .click(Selector('.d2VDTClose'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SalNetIncome-Sim2-Tree')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SalNetIncome-Sim2-Table')
        await tree()
        await t
        .hover(Selector('#N26').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .doubleClick(Selector('#sandbox-host .grid-cell').nth(17))
        .click(Selector('#sandbox-host .grid-cell').nth(17))
        .pressKey('backspace')
        .typeText(Selector('#sandbox-host .grid-cell').nth(17),'20')
        .click(Selector('.d2VDTClose'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SalNetIncome-Sim3-Tree')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SalNetIncome-Sim3-Table')
        await tree()
        await t
        .hover(Selector('#N26').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .doubleClick(Selector('#sandbox-host .grid-cell').nth(17))
        .click(Selector('#sandbox-host .grid-cell').nth(17))
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#sandbox-host .grid-cell').nth(17),'-20')
        .click(Selector('.d2VDTClose'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SalNetIncome-Sim4-Tree')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SalNetIncome-Sim4-Table')
        await tree()
        //Essentials Node Simulation
        await t
        .hover(Selector('#N12A').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .doubleClick(Selector('#sandbox-host .grid-cell').nth(17))
        .click(Selector('#sandbox-host .grid-cell').nth(17))
        .typeText(Selector('#sandbox-host .grid-cell').nth(17),'21')
        .click(Selector('.d2VDTClose'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Essentials-Sim1-Tree')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Essentials-Sim1-Table')
        await tree()
        await t
        .hover(Selector('#N12A').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .doubleClick(Selector('#sandbox-host .grid-cell').nth(17))
        .click(Selector('#sandbox-host .grid-cell').nth(17))
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#sandbox-host .grid-cell').nth(17),'-11')
        .click(Selector('.d2VDTClose'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Essentials-Sim2-Tree')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Essentials-Sim2-Table')
        await tree()
        //Maintenance Node Simulation
        await t
        .hover(Selector('#N30').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .doubleClick(Selector('#sandbox-host .grid-cell').nth(17))
        .click(Selector('#sandbox-host .grid-cell').nth(17))
        .pressKey('9')
        .pressKey('backspace')
        .typeText(Selector('#sandbox-host .grid-cell').nth(17),'-12')
        .click(Selector('.d2VDTClose'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Maintenance-Sim1-Tree')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Maintenance-Sim1-Table')
        await tree()
        await t
        .hover(Selector('#N30').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .doubleClick(Selector('#sandbox-host .grid-cell').nth(17))
        .click(Selector('#sandbox-host .grid-cell').nth(17))
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#sandbox-host .grid-cell').nth(17),'-25')
        .click(Selector('.d2VDTClose'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Maintenance-Sim2-Tree')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Maintenance-Sim2-Table')
       
    });