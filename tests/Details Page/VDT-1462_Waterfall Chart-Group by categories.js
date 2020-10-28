import { Role, Selector } from 'testcafe';
import doVisualRegression from '../../Util/vrtUtil';
import signIn from '../../pages/signIn';
import { VDT1462_WaterfallChart} from '../../pages/urlPage';
import { switchToIframe, switchToMainWindow, tree, table, SignIn,wait5000 } from '../../pages/common';
import { VDTAnalysisChartMenu, VDTChartMenu, trendOfChildren, trend, trendOfCalculationComponents, varianceBreakdown, simulationImpact, NTOP } from '../../pages/detailsPage';
import { Formula_Division_Without_Simulation, Formula_Division_With_Simulation } from '../../pages/reportPages';

if(process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv')
    dotenv.config()
}

const log = require('../../config/logging').default

fixture `Details Page`
    .page (VDT1462_WaterfallChart)
    .meta('ID','VDT-1462')
    .meta({'author': 'Automation','Date':'12-Mar-2020'})
    .meta('SEVERITY','Critical')
    .meta('TEST_RUN','1.7.0')
    .meta({
        testPlanKey: ''|| process.env.TEST_PLAN_KEY,               // ** Compulsory ** //
        testExecutionKey: ''|| process.env.TEST_EXECUTION_KEY,     // ** Needs when you update the execution ** //  
        testEnvironments:['QA']                                    // ** Compulsory ** //
      })

test
    .meta('ID','VDT-1462')
    .meta('SEVERITY','blocker')
    // .before(async ctx  => {
    //     log.debug('Test started..',ctx.testRun.test.name);
    // })
    // .after(async ctx  => {
    //     log.debug('Test Ended..',ctx.testRun.test.name);
    // })
     ('Waterfall Chart-Group by Category-BeforeSimulation', async t => {
        await SignIn()
        await t
        //.wait(20000)
        await switchToMainWindow()
        await t
        .wait(70000)
        .click(Selector('#editBtn'))
        .wait(35000)
        await switchToIframe()
        await t
        .click(Selector(Selector('#NConsumer').find('path.d2VDTNode.d2VDTFocus')))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Consumer-BeforeSim')
     });
     test
     .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/28656a5e-3f76-4a70-a6ee-a9607ae65786/ReportSection`
    .meta('ID','VDT-1462')
    .meta('SEVERITY','blocker')
    // .before(async ctx  => {
    //     log.debug('Test started..',ctx.testRun.test.name);
    // })
    // .after(async ctx  => {
    //     log.debug('Test Ended..',ctx.testRun.test.name);
    // })
     ('Waterfall Chart-Group by Category-AfterSimulation', async t => {
        await SignIn()
        await t
        //.wait(20000)
        await switchToMainWindow()
        await t
        .wait(70000)
        .click(Selector('#editBtn'))
        .wait(35000)
        await switchToIframe()
        await t
        .hover(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTshowSim'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Consumer-AfterSim')
        await t
        .click(Selector('#sandbox-host .d2VDTClose'))
        .click(Selector('div.sectionHeader').find('div.bf-ui-flex.sectionActions').find('div.d2VDTIconButton.compareScenario'))
        .click(Selector('#minimodal div').withText('Select All').nth(4))
        .click(Selector('#minimodal button').withText('Compare'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Compare-Scenario')

    
    }).meta({testKey:'' || process.env.TEST_KEY})