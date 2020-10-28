import { Role, Selector } from 'testcafe';
import doVisualRegression from '../../Util/vrtUtil';
import signIn from '../../pages/signIn';
import { VDT2871_SummaryCase_TrendChart_SummaryTable } from '../../pages/urlPage';
import { switchToIframe, wait5000, switchToMainWindow,SignIn, tree, table, simulate, plan } from '../../pages/common';
import { VDTAnalysisChartMenu,trendChartMaximize, VDTChartMenu, trendOfChildren, trend, trendOfCalculationComponents, varianceBreakdown, simulationImpact, NTOP, visualExpand, visualShrink, expensesNode } from '../../pages/detailsPage';
import { Formula_Multiply_Without_Simulation, Formula_Multiply_With_Simulation } from '../../pages/reportPages';
import { navigationPanel0, navigationPanelFullYear, navigationPanelJanuary, navigationPanelSimMths } from '../../pages/navigationPanel';


if(process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv')
    dotenv.config()
}

const log = require('../../config/logging').default

// const signInDetailsPageMultiply = Role(VDT1472_02_Simulation_DetailsPage_Multiplication, signIn, { preserveUrl: true })

fixture `Details Page`
       .page(VDT2871_SummaryCase_TrendChart_SummaryTable)
    .meta('ID','VDT-2871')
    .meta({'author': 'Automation','Date':'12-Mar-2020'})
    .meta('SEVERITY','Critical')
    .meta('TEST_RUN','1.7.0')
    .meta({
        testPlanKey: ''|| process.env.TEST_PLAN_KEY,               // ** Compulsory ** //
        testExecutionKey: ''|| process.env.TEST_EXECUTION_KEY,     // ** Needs when you update the execution ** //  
        testEnvironments:['QA']                                    // ** Compulsory ** //
      })

test
    .meta('ID','VDT-2871')
    .meta('SEVERITY','blocker')
    // .before(async ctx  => {
    //     log.debug('Test started..',ctx.testRun.test.name);
    // })
    // .after(async ctx  => {
    //     log.debug('Test Ended..',ctx.testRun.test.name);
    // }) 
    ('SummaryCase-Trend Chart&Summary Table', async t => {
        await SignIn()
        await t
        //.wait(40000)
        await switchToMainWindow()
        await t
        .wait(70000)
        .click(Selector('#editBtn'))
        .wait(35000)
        await switchToIframe()
        await t
        .click(Selector('#wizbar span').withText('Model'))
        .click(Selector('#sandbox-host span').withText('New'))
        .click(Selector('#sandbox-host div').withText('Load valQ model with sample data').nth(17))
        .click(Selector('#modal-root button').withText('Yes'))
        .click(Selector('#modal-root div').withText('Personal Finance').nth(11))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree_Created')
        await tree()
        await t
        .click(Selector(Selector('#N12').find('path.d2VDTNode.d2VDTFocus')))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Expense_BeforeSim')
        await trendChartMaximize()
        await t
        .click(Selector('#sandbox-host span').withText('☰').nth(2))
        .click(Selector('#sandbox-host li').withText('Trend of Children').nth(1))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Trend_BeforeSim')
        await visualExpand()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Visual_Expand')
    });

    test
    .page`https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/ec0c4271-2cb9-4fc9-84d1-e3bdce3867de/ReportSection`
    .meta('ID','VDT-2871')
    .meta('SEVERITY','blocker')
    // .before(async ctx  => {
    //     log.debug('Test started..',ctx.testRun.test.name);
    // })
    // .after(async ctx  => {
    //     log.debug('Test Ended..',ctx.testRun.test.name);
    // }) 
    ('SummaryCase-Trend Chart&Summary Table-AfterSim', async t => {
        await SignIn()
        await t
        //.wait(40000)
        await switchToMainWindow()
        await t
        .wait(70000)
        .click(Selector('#editBtn'))
        .wait(35000)
        await switchToIframe()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Simulation')
        await simulate()
        await navigationPanel0()
        await navigationPanelJanuary()
        await navigationPanelSimMths()
        await expensesNode()
        await trendChartMaximize()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Trend_SimMnths')
        await t
        .click(Selector('div.analysis-chart-switch').find('span.analysis-chart-minimize'))
        await plan()
        await simulate()
        await navigationPanelFullYear()
        await expensesNode()
        await trendChartMaximize()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Trend_FYear')
        await plan()
        await t
        .click(Selector('#minimodal button').withText('Lock'))
        .click(Selector('#minimodal button').withText('Submit'))
        await simulate()
        await t
        .click(Selector('#wizbar div').withText('Performance').nth(6))
        .click(Selector('#wizbar div').withText('Additional1').nth(6))
        .click(Selector('#wizbar div').withText('Benchmark').nth(8))
        .click(Selector('#wizbar div').withText('New Series 1').nth(8))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Series_Switch')
        await t
        .click(Selector('#N12').find('path.d2VDTNode.d2VDTFocus'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NewSeries_Trend')
    
    }).meta({testKey:'' || process.env.TEST_KEY})