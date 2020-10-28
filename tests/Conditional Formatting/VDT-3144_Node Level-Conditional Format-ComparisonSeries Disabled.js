import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/navigationPanel"
import { tree,SignIn,editOption,Login, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, model } from '../../pages/common';
import {navigationPanel0,navigationPanelFullYear, navigationPanelJanuary, navigationPanelYtD } from "../../pages/navigationPanel";
import { VDTAnalysisChartMenu,trendChartMaximize, VDTChartMenu, trendOfChildren, trend, trendOfCalculationComponents, varianceBreakdown, simulationImpact, NTOP, visualExpand, visualShrink, expensesNode } from '../../pages/detailsPage';
fixture `Conditional Formatting`

.meta('ID','VDT-3144')
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

    .meta('ID','VDT-3144')
    .meta('SEVERITY','blocker')
    ('NodeLevel Conditional Format-Disabled Compare Series-Sim1', async t => {
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
        await model()
        await t
        .click(Selector('#sandbox-host span').withText('Data Series'))
        .click(Selector('#sandbox-host div').withText('Data Series Manager').nth(16))
        .click(Selector('#modal-root .form-icon'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'DS-Disable')
        await t
        .click(Selector('#modal-root .icon.icon--Cancel'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'DS-DisabledTree')
        await t
        .click(Selector('#sandbox-host span').withText('Node'))
        .doubleClick(Selector('#sandbox-host div').withText('N1: Income').nth(22))
        .click(Selector('#modal-root span').withText('Conditional Formatting'))
        .click(Selector('#modal-root span').withText('Custom rule: Overwrites default or any inherited r'))
        .click(Selector('#modal-root span').withText('Apply To Descendants'))
        .click(Selector('#modal-root .bf-ui-form-input.form-input').nth(1))
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'10')
        .click(Selector('#modal-root .bf-ui-form-input.form-input').nth(2))
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'20')
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income-CF')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income-CFTree')
        await t
        .click(Selector('#sandbox-host .expand-collapse.node-collapsed'))
        .doubleClick(Selector('#sandbox-host div').withText('N2: Salary Net Income').nth(22))
        .click(Selector('#modal-root span').withText('Conditional Formatting'))
        .hover(Selector('#modal-root .bf-ui-form-input.form-input.disabled').nth(1))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SalNetIncome-CFDisable')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .hover(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .click(Selector('#sandbox-host .cell-view').nth(2))
        .click(Selector('#sandbox-host .cell-view').nth(2))
        .doubleClick(Selector('.grid-cell').nth(17), {
        caretPos: 0
        })
        .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '11')
        .click(Selector('.grid-fixed-virtualized'))
        .click(Selector('.d2VDTClose'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income-Sim')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income-Tree')
        await tree()
        await t
        .click(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income-DetPg')
        await VDTChartMenu()
        await trendOfChildren()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income-TrendofCh')
        await VDTChartMenu()
        await trendOfCalculationComponents()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income-TrendofCalcComp')

    });



    test
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/e6c5f87a-3a6c-4fda-8beb-b1ecc99aa99b/ReportSection`

    .meta('ID','VDT-3144')
    .meta('SEVERITY','blocker')
    ('NodeLevel Conditional Format-Disabled Compare Series-Sim2', async t => {
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
        await model()
        await t
        .click(Selector('#sandbox-host span').withText('Data Series'))
        .click(Selector('#sandbox-host div').withText('Data Series Manager').nth(16))
        .click(Selector('#modal-root .form-icon'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'DS_Disabled')
        await t
        .click(Selector('#modal-root .icon.icon--Cancel'))
        await t
        .click(Selector('#sandbox-host span').withText('Node'))
        .doubleClick(Selector('#sandbox-host div').withText('N1: Income').nth(22))
        .click(Selector('#modal-root span').withText('Conditional Formatting'))
        .click(Selector('#modal-root span').withText('Custom rule: Overwrites default or any inherited r'))
        .click(Selector('#modal-root span').withText('Apply To Descendants'))
        .click(Selector('#modal-root .bf-ui-form-input.form-input').nth(1))
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'10')
        .click(Selector('#modal-root .bf-ui-form-input.form-input').nth(2))
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'20')
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_CF1')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
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
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_CF2')
        await t
        .hover(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .click(Selector('#sandbox-host .cell-view').nth(2))
        .click(Selector('#sandbox-host .cell-view').nth(2))
        .doubleClick(Selector('.grid-cell').nth(17), {
        caretPos: 0
        })
        .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '11')
        .click(Selector('.grid-fixed-virtualized'))
        .click(Selector('.d2VDTClose'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_Sim1-Tree')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_Sim1-Table')
        await tree()
        await t
        .click(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_Sim1-DetPg')
        await VDTChartMenu()
        //Trend of Children
        await trendOfChildren()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_Sim1-TOC')
        //Trend of Calculation Components
        await VDTChartMenu()
        await trendOfCalculationComponents()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_Sim1-TOCC')
    });



    test
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/e6c5f87a-3a6c-4fda-8beb-b1ecc99aa99b/ReportSection`

    .meta('ID','VDT-3144')
    .meta('SEVERITY','blocker')
    ('NodeLevel Conditional Format-Disabled Compare Series-Sim3', async t => {
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
        await model()
        await t
        .click(Selector('#sandbox-host span').withText('Data Series'))
        .click(Selector('#sandbox-host div').withText('Data Series Manager').nth(16))
        .click(Selector('#modal-root .form-icon'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'DS-Disabled')
        await t
        .click(Selector('#modal-root .icon.icon--Cancel'))
        await t
        .click(Selector('#sandbox-host span').withText('Node'))
        .doubleClick(Selector('#sandbox-host div').withText('N1: Income').nth(22))
        .click(Selector('#modal-root span').withText('Conditional Formatting'))
        .click(Selector('#modal-root span').withText('Custom rule: Overwrites default or any inherited r'))
        .click(Selector('#modal-root span').withText('Apply To Descendants'))
        .click(Selector('#modal-root .bf-ui-form-input.form-input').nth(1))
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'10')
        .click(Selector('#modal-root .bf-ui-form-input.form-input').nth(2))
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'20')
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_CF')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
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
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_CF2')
        await t
        .hover(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .click(Selector('#sandbox-host .cell-view').nth(2))
        .click(Selector('#sandbox-host .cell-view').nth(2))
        .doubleClick(Selector('.grid-cell').nth(17), {
        caretPos: 0
        })
        .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '5')
        .click(Selector('.grid-fixed-virtualized'))
        .click(Selector('.d2VDTClose'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_Sim2-Tree')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_Sim2-Table')
        await tree()
        await t
        .click(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_Sim2-DetPg')
        await VDTChartMenu()
        await trendOfChildren()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_Sim2-TOC')
        await VDTChartMenu()
        await trendOfCalculationComponents()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_Sim2-TOCC')

    });



    test
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/e6c5f87a-3a6c-4fda-8beb-b1ecc99aa99b/ReportSection`

    .meta('ID','VDT-3144')
    .meta('SEVERITY','blocker')
    ('NodeLevel Conditional Format-Disabled Compare Series-Sim4', async t => {
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
        await model()
        await t
        .click(Selector('#sandbox-host span').withText('Data Series'))
        .click(Selector('#sandbox-host div').withText('Data Series Manager').nth(16))
        .click(Selector('#modal-root .form-icon'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'DS-Disabled')
        await t
        .click(Selector('#modal-root .icon.icon--Cancel'))
        await t
        .click(Selector('#sandbox-host span').withText('Node'))
        .doubleClick(Selector('#sandbox-host div').withText('N1: Income').nth(22))
        .click(Selector('#modal-root span').withText('Conditional Formatting'))
        .click(Selector('#modal-root span').withText('Custom rule: Overwrites default or any inherited r'))
        .click(Selector('#modal-root span').withText('Apply To Descendants'))
        .click(Selector('#modal-root .bf-ui-form-input.form-input').nth(1))
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'10')
        .click(Selector('#modal-root .bf-ui-form-input.form-input').nth(2))
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'20')
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_CF')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
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
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_CF2')
        await t
        .hover(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .click(Selector('#sandbox-host .cell-view').nth(2))
        .click(Selector('#sandbox-host .cell-view').nth(2))
        .doubleClick(Selector('.grid-cell').nth(17), {
        caretPos: 0
        })
        .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '-10')
        .click(Selector('.grid-fixed-virtualized'))
        .click(Selector('.d2VDTClose'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_Sim3-Tree')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_Sim3-Table')
        await tree()
        await t
        .click(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_Sim3-DetPg')
        await VDTChartMenu()
        await trendOfChildren()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_Sim3-TOC')
        await VDTChartMenu()
        await trendOfCalculationComponents()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_Sim-TOCC')

    });



    test
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/e6c5f87a-3a6c-4fda-8beb-b1ecc99aa99b/ReportSection`

    .meta('ID','VDT-3144')
    .meta('SEVERITY','blocker')
    ('NodeLevel Conditional Format-Disabled Compare Series-Sim5', async t => {
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
        await model()
        await t
        .click(Selector('#sandbox-host span').withText('Data Series'))
        .click(Selector('#sandbox-host div').withText('Data Series Manager').nth(16))
        .click(Selector('#modal-root .form-icon'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'DS_Disabled')
        await t
        .click(Selector('#modal-root .icon.icon--Cancel'))
        await t
        .click(Selector('#sandbox-host span').withText('Node'))
        .doubleClick(Selector('#sandbox-host div').withText('N1: Income').nth(22))
        .click(Selector('#modal-root span').withText('Conditional Formatting'))
        .click(Selector('#modal-root span').withText('Custom rule: Overwrites default or any inherited r'))
        .click(Selector('#modal-root span').withText('Apply To Descendants'))
        .click(Selector('#modal-root .bf-ui-form-input.form-input').nth(1))
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'10')
        .click(Selector('#modal-root .bf-ui-form-input.form-input').nth(2))
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'20')
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_CF')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
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
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_CF2')
        await t
        .hover(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .click(Selector('#sandbox-host .cell-view').nth(2))
        .click(Selector('#sandbox-host .cell-view').nth(2))
        .doubleClick(Selector('.grid-cell').nth(17), {
        caretPos: 0
        })
        .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '-20')
        .click(Selector('.grid-fixed-virtualized'))
        .click(Selector('.d2VDTClose'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_Sim4-Tree')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_Sim4-Table')
        await tree()
        await t
        .click(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_Sim4-DetPg')
        await VDTChartMenu()
        await trendOfChildren()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_Sim4-TOC')
        await VDTChartMenu()
        await trendOfCalculationComponents()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_Sim4-TOCC')

    });