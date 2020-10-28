import { Role, Selector } from 'testcafe';
import doVisualRegression from '../../Util/vrtUtil';
import signIn from '../../pages/signIn';
import { VDT1472_SummaryCase_DetailsPage } from '../../pages/urlPage';
import { switchToMainWindow, tree, table, SignIn,switchToIframe, wait5000, plan, simulate} from '../../pages/common';
import {VDTAnalysisChartMenu, VDTChartMenu, trendOfChildren, trend,analysisChartMaximize,analysisChartMaxFlip,visualExpand,visualShrink, trendOfCalculationComponents, varianceBreakdown,incomeNode,expensesNode, simulationImpact, NTOP, analysisChartMinFlip} from '../../pages/detailsPage';
import {Formula_Add_Without_Simulation, Formula_Add_With_Simulation} from '../../pages/reportPages';
import { navigationPanel0, navigationPanel0k, navigationPanel0_0m, navigationPanelFullYear, navigationPanelJanuary, navigationPanelMonth, navigationPanelSimMths, navigationPanelYtD } from '../../pages/navigationPanel';


if(process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv')
    dotenv.config()
}

const log = require('../../config/logging').default

// const signInDetailsPageAdd = Role(VDT1472_02_Simulation_DetailsPage_Addition, signIn, { preserveUrl: true })

fixture `Details Page`
       .page (VDT1472_SummaryCase_DetailsPage)
        .meta('ID','VDT-1472')
        .meta({'author': 'Automation','Date':'12-Mar-2020'})
        .meta('SEVERITY','Critical')
        .meta('TEST_RUN','1.7.0')
    .meta({
        testPlanKey: ''|| process.env.TEST_PLAN_KEY,               // ** Compulsory ** //
        testExecutionKey: ''|| process.env.TEST_EXECUTION_KEY,     // ** Needs when you update the execution ** //  
        testEnvironments:['QA']                                    // ** Compulsory ** //
      })
 
test
    .meta('ID','VDT-1472')
    .meta('SEVERITY','blocker')
    // .before(async ctx  => {
    //     log.debug('Test started..',ctx.testRun.test.name);
    // })
    // .after(async ctx  => {
    //     log.debug('Test Ended..',ctx.testRun.test.name);
    // })
     ('Summary Case-DetailsPage-BeforeSim', async t => {
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
        await navigationPanelJanuary()
        await navigationPanelFullYear()
        await navigationPanel0()
        await expensesNode()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Expense_DetailPg')
        await analysisChartMinFlip()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Chart_Horizontal')
        await analysisChartMaximize()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Chart-Maximize')
        await analysisChartMaxFlip()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Chart_Vertical')
        await visualExpand()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Visual_Expand')
     });
        
     test
     .page`https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/28779837-09a6-4c67-b521-33e5e417eab1/ReportSection`
     .meta('ID','VDT-1472')
     .meta('SEVERITY','blocker')
     // .before(async ctx  => {
     //     log.debug('Test started..',ctx.testRun.test.name);
     // })
     // .after(async ctx  => {
     //     log.debug('Test Ended..',ctx.testRun.test.name);
     // })
      ('Summary Case-DetailsPage-AftSim1', async t => {
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
        .click(Selector('#N12 .d2VDTToggleOverlay'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Expense_Simulate')
        await expensesNode()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'DetailPg_AftSim')
        await VDTAnalysisChartMenu()
        await varianceBreakdown()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Variance_AftSim')
        await analysisChartMaximize()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Chart_Maximize')
        await analysisChartMaxFlip()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Chart_Horizontal')
        await t
        .click(Selector('div.d2VDTDetailBg.wide').find('div.analysis-chart-switch').find('span.analysis-chart-minimize'))
        await VDTAnalysisChartMenu()
        await simulationImpact()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sim_Impact')
        await visualExpand()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Visual_Exand')
        await visualShrink()
        await plan()  //Detail page close selector error
        await simulate()
        await t
        .hover(Selector('#N12A').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTReset'))
        .hover(Selector('#N93T').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTReset'))
        .hover(Selector('#N80').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTReset'))
        .hover(Selector('#N84').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTReset'))
        .click(Selector('#N12').find('path.d2VDTNode.d2VDTFocus'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Expense_BeforeSim')

     });


     test
     .page`https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/536f3f33-26da-4e16-97f0-42390787957c/ReportSection`
     .meta('ID','VDT-1472')
     .meta('SEVERITY','blocker')
      ('Summary Case-DetailsPage-AftSim2', async t => {
            await SignIn()
            await t
            //.wait(40000)
            await switchToMainWindow()
            await t
            .wait(70000)
            .click(Selector('#editBtn'))
            .wait(35000)
            await switchToIframe()
            await simulate()
            await navigationPanelSimMths()
            await navigationPanel0k()
            await t
            .click(Selector('#N12').find('path.d2VDTNode.d2VDTFocus'))
            await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Expense_SimMths')
            await plan()
            await simulate()
            await navigationPanelMonth()
            await navigationPanel0()
            await t
            .click(Selector('#N12').find('path.d2VDTNode.d2VDTFocus'))
            await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Expense_Month')
            await plan()
            await simulate()
            await navigationPanelYtD()
            await navigationPanel0_0m()
            await t
            .click(Selector('#N12').find('path.d2VDTNode.d2VDTFocus'))
            await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Expense_YTD')
          
  
    }).meta({testKey:'' || process.env.TEST_KEY})