import { Selector, Role} from 'testcafe';
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
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/e6c5f87a-3a6c-4fda-8beb-b1ecc99aa99b/ReportSection`

    .meta('ID','VDT-3145')
    .meta('SEVERITY','blocker')
    ('Global Conditional Format-Disabled Compare Series-Sim1', async t => {
        await SignIn()  
        await t
        //.wait(40000)
        await switchToMainWindow()
        await t
        .wait(60000)
        .click(Selector('#editBtn'))
        .wait(5000)
        await switchToIframe()
        await t
        .click(Selector('#wizbar span').withText('Model'))
        .click(Selector('#sandbox-host span').withText('New'))
        .click(Selector('#sandbox-host div').withText('Load valQ model with sample data').nth(17))
        .click(Selector('#modal-root button').withText('Yes'))
        .click(Selector('#modal-root div').withText('Personal Finance').nth(11))
        await model()
        await t
        .click(Selector('#sandbox-host span').withText('Settings'))
        .click(Selector('#sandbox-host div').withText('Conditional Formatting').nth(15))
        .click(Selector('#sandbox-host .bf-ui-form-input.form-input'))
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#sandbox-host .bf-ui-form-input.form-input'),'-10')
        .click(Selector('#sandbox-host .bf-ui-form-input.form-input').nth(1))
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#sandbox-host .bf-ui-form-input.form-input').nth(1),'20')
        .click(Selector('#sandbox-host .bf-ui-form-input.form-input').nth(2))
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#sandbox-host .bf-ui-form-input.form-input').nth(1),'40')
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Settings-CF')
        await t
        .click(Selector('#sandbox-host button').withText('Save'))
        await model()
        await t
        .doubleClick(Selector('#sandbox-host div').withText('N1: Income').nth(22))
        .click(Selector('#modal-root span').withText('Conditional Formatting'))
        .click(Selector('#modal-root .form-icon').nth(2))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income-CFDisable')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .hover(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .doubleClick(Selector('#sandbox-host .grid-cell').nth(17))
        .click(Selector('#sandbox-host .grid-cell').nth(17))
        .pressKey('3')
        .pressKey('0')
        .click(Selector('.d2VDTClose'))
        .hover(Selector('#N12').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .doubleClick(Selector('#sandbox-host .grid-cell').nth(17))
        .click(Selector('#sandbox-host .grid-cell').nth(17))
        .pressKey('3')
        .pressKey('0')
        .click(Selector('.d2VDTClose'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Simulation1-Tree')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Simulation1-Table')
        await tree()
        await t
        .click(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income-DetPg')
        await plan()
        await model()
        await t
        .click(Selector('#N12').find('path.d2VDTNode.d2VDTFocus'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Expense-DetPg')
        await t
        .click(Selector('#sandbox-host span').withText('Settings'))
        .click(Selector('#sandbox-host div').withText('Conditional Formatting').nth(15))
        .click(Selector('#sandbox-host .form-icon'))
        .click(Selector('#sandbox-host button').withText('Save'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NoCF-Tree')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NoCF-Table')
        await tree()
        await t
        .click(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NoCF-IncomeDetPg')
        await plan()
        await model()
        await t
        .click(Selector('#N12').find('path.d2VDTNode.d2VDTFocus'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NoCF-ExpenseDetPg')

    });


    test
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/e6c5f87a-3a6c-4fda-8beb-b1ecc99aa99b/ReportSection`

    .meta('ID','VDT-3145')
    .meta('SEVERITY','blocker')
    ('Global Conditional Format-Disabled Compare Series-Sim2', async t => {
        await SignIn()  
        await t
        //.wait(40000)
        await switchToMainWindow()
        await t
        .wait(60000)
        .click(Selector('#editBtn'))
        .wait(25000)
        await switchToIframe()
        await t
        .click(Selector('#wizbar span').withText('Model'))
        .click(Selector('#sandbox-host span').withText('New'))
        .click(Selector('#sandbox-host div').withText('Load valQ model with sample data').nth(17))
        .click(Selector('#modal-root button').withText('Yes'))
        .click(Selector('#modal-root div').withText('Personal Finance').nth(11))
        .doubleClick(Selector('#sandbox-host div').withText('N1: Income').nth(22))
        .click(Selector('#modal-root span').withText('Conditional Formatting'))
        .click(Selector('#modal-root span').withText('Value').nth(1))
        .click(Selector('#modal-root .bf-ui-form-input.form-input'))
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input'),'17000')
        .click(Selector('#modal-root .bf-ui-form-input.form-input').nth(1))
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'18000')
        .click(Selector('#modal-root .bf-ui-form-input.form-input').nth(2))
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(2),'21000')
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Settings-CF')
        .click(Selector('#sandbox-host span').withText('Settings'))
        .click(Selector('#sandbox-host div').withText('Conditional Formatting').nth(15))
        .click(Selector('#sandbox-host .form-icon'))
        .click(Selector('#sandbox-host button').withText('Save'))
        .hover(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .doubleClick(Selector('#sandbox-host .grid-cell').nth(17))
        .click(Selector('#sandbox-host .grid-cell').nth(17))
        .pressKey('1')
        .pressKey('1')
        .click(Selector('.d2VDTClose'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income-Sim2Tree')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income-Sim2Table')
        await tree()
        await t
        .click(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income-Sim2DetPg')

    });