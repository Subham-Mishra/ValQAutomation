import {Role, Selector} from 'testcafe';
import doVisualRegression from '../../Util/vrtUtil';
import signIn from '../../pages/signIn';
import { VDT2673_SummaryCase_NodeLineage_NodeDescription } from '../../pages/urlPage';
import { switchToIframe, wait5000, switchToMainWindow,SignIn, tree, table, plan, simulate, model } from '../../pages/common';
import { VDTAnalysisChartMenu, VDTChartMenu, trendOfChildren, trend, trendOfCalculationComponents, varianceBreakdown, simulationImpact, NTOP } from '../../pages/detailsPage';
import { Formula_Sub_Without_Simulation, Formula_Sub_With_Simulation } from '../../pages/reportPages';


if(process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv')
    dotenv.config()
}

const log = require('../../config/logging').default

fixture `Details Page`
       .page(VDT2673_SummaryCase_NodeLineage_NodeDescription)
        .meta('ID','VDT-2673')
        .meta({'author': 'Automation','Date':'12-Mar-2020'})
        .meta('SEVERITY','Critical')
        .meta('TEST_RUN','1.7.0')
    .meta({
        testPlanKey: ''|| process.env.TEST_PLAN_KEY,               // ** Compulsory ** //
        testExecutionKey: ''|| process.env.TEST_EXECUTION_KEY,     // ** Needs when you update the execution ** //  
        testEnvironments:['QA']                                    // ** Compulsory ** //
      })

test
    .meta('ID','VDT-2673')
    .meta('SEVERITY','blocker')
    // .before(async ctx  => {
    //     log.debug('Test started..',ctx.testRun.test.name);
    // })
    // .after(async ctx  => {
    //     log.debug('Test Ended..',ctx.testRun.test.name);
    // })
     ('NodeLineage&NodeDescription-Sample Model', async t => {
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
        .click(Selector('#modal-root div').withText('Mining Industry').nth(11))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree_Created')
        await t
        .click(Selector('#nodeSearch'))
        .typeText(Selector('#nodeSearch'),'truck capacity')
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Node-Search')
        await t
        .click(Selector('div.nodeSearchSuggestions.searchResultsContainer').find('div p b').withText('Truck Capacity'))
        await t
        .hover(Selector('#N28').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('#N28').find('path.d2VDTNode.d2VDTFocus'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'TruckCapacity-DetPg')
        await t
        .click(Selector('#sandbox-host span').withText('...'))
        .click(Selector('#sandbox-host .bar.current'))
        .hover(Selector('#sandbox-host div').withText('Truck Capacity').nth(9))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'TruckCapacity-NodeHierarchy')
        await plan()
        await model()
        await t
        .click(Selector('#sandbox-host .bf-ui-form-input.form-input.node-search-input'))
        .typeText(Selector('#sandbox-host .bf-ui-form-input.form-input.node-search-input'),'truck capacity')
        .doubleClick(Selector('#sandbox-host div').withText('N28: Truck Capacity').nth(22))
        .click(Selector('#modal-root span').withText('Business Definition'))
        .click(Selector('#modal-root .bf-ui-form-input.form-input'))
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input'),'Truck Capacity Header')
        .click(Selector('#modal-root .bf-ui-form-input.form-input').nth(1))
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'Truck Capacity Footer')
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'TruckCapacity-BusinessDefn')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .hover(Selector('#N28').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('#N28').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('#sandbox-host div').withText('Truck Capacity').nth(31))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'BusinessDefn-DetPg')
    });



    test
    .meta('ID','VDT-2673')
    .meta('SEVERITY','blocker')
     ('NodeLineage&NodeDescription-Dynamic Model', async t => {
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
        .click(Selector('#sandbox-host div').withText('Create a Simple Model').nth(17))
        .click(Selector('#modal-root button').withText('Yes'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Dynamic Tree')
        await t
        .hover(Selector('#NConsumer').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('#NConsumer').find('path.d2VDTNode.d2VDTFocus'))
        .hover(Selector('#sandbox-host div').withText('Consumer').nth(21))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NodeName-TTip1')
        await plan()
        await model()
        await t
        .click(Selector('#sandbox-host div').withText('NSUMME: Overall Result').nth(22))
        .click(Selector('#sandbox-host .icon.icon--AutoEnhanceOn.node-menu-icon'))
        .click(Selector('#modal-root button').withText('Yes'))
        .click(Selector('#sandbox-host .expand-collapse.node-collapsed'))
        .doubleClick(Selector('#sandbox-host div').withText('NConsumer: Consumer').nth(22))
        .click(Selector('#modal-root span').withText('Business Definition'))
        .click(Selector('#modal-root .bf-ui-form-textarea.form-input.form-textarea'))
        .typeText(Selector('#modal-root .bf-ui-form-textarea.form-input.form-textarea'),'This is Node Description')
        .click(Selector('#modal-root .bf-ui-form-input.form-input'))
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input'),'Node Header')
        .click(Selector('#modal-root .bf-ui-form-input.form-input').nth(1))
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'Node Footer')
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Consumer-BusDefn')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .click(Selector('#nodeSearch'))
        .typeText(Selector('#nodeSearch'),'Consumer')
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Node-Search')
        await t
        .click(Selector('div.nodeSearchSuggestions.searchResultsContainer').find('div p b').withText('Consumer'))
        await t
        .hover(Selector('#NConsumer').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('#NConsumer').find('path.d2VDTNode.d2VDTFocus'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Consumer-DetPg')
        await t
        .hover(Selector('#sandbox-host div').withText('Consumer').nth(44))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NodeName-TTip2')
     });



     test
     .meta('ID','VDT-2673')
     .meta('SEVERITY','blocker')
      ('NodeLineage&NodeDescription-Tree from Scratch', async t => {
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
         .click(Selector('#sandbox-host div').withText('Build a model from scratch').nth(17))
         .click(Selector('#modal-root button').withText('Yes'))
         await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree_Build')
         await t
         .doubleClick(Selector('#sandbox-host div').withText('NTOP: Node Title').nth(22))
         .selectText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),10,0)
         .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'Node 1')
         .click(Selector('#modal-root div').withText('Configuration').nth(7))
         .click(Selector('#modal-root .bf-ui-form-select.form-select'))
         .click(Selector('#modal-root option').withText('Sum Children (a+b+c+...)'))
         .click(Selector('#modal-root button').withText('Finish'))
         .click(Selector('#sandbox-host .icon.icon--Add.node-menu-icon'))
         .doubleClick(Selector('#sandbox-host div').withText('N1: Copy of Node 1').nth(22))
         .selectText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),14,0)
         .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'Node 2')
         .click(Selector('#modal-root span').withText('Configuration'))
         .click(Selector('#modal-root button').withText('Finish'))

         .doubleClick(Selector('#sandbox-host div').withText('NTOP: Node 1').nth(22))
         .click(Selector('#modal-root span').withText('Configuration'))
         .click(Selector('#modal-root .bf-ui-form-select.form-select'))
         .click(Selector('#modal-root option').withText('Manual'))
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]'),'1')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(1),'2')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(2),'3')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(3),'4')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(4),'5')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(5),'6')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(6),'7')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(7),'8')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(8),'9')
         .click(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(9))
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(9),'10')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(10),'11')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(11),'12')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(12),'2')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(13),'4')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(14),'6')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(15),'8')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(16),'10')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(17),'12')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(18),'14')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(19),'16')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(20),'18')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(21),'20')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(22),'22')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(23),'24')
         .click(Selector('#modal-root button').withText('Finish'))
         await t
         .doubleClick(Selector('#sandbox-host div').withText('N1: Node 2').nth(22))
         .click(Selector('#modal-root span').withText('Configuration'))
         .click(Selector('#modal-root .bf-ui-form-select.form-select'))
         .click(Selector('#modal-root option').withText('Manual'))
         .click(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]'))
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]'),'3')
         .click(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]'))
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(1),'6')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(2),'9')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(3),'12')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(4),'15')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(5),'18')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(6),'21')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(7),'24')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(8),'27')
         .click(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(9))
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(9),'30')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(10),'33')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(11),'36')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(12),'4')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(13),'8')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(14),'12')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(15),'16')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(16),'20')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(17),'24')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(18),'28')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(19),'32')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(20),'36')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(21),'40')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(22),'44')
         .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(23),'48')
         .click(Selector('#modal-root button').withText('Finish'))
         await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree_Created')
         await t
         .hover(Selector('#NTOP').find('path.d2VDTNode.d2VDTFocus'))
         .click(Selector('#NTOP').find('path.d2VDTNode.d2VDTFocus'))
         await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NTOP-DetPg')
         await t
         .hover(Selector('#sandbox-host div').withText('Node 1').nth(30))
         await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'DetPg_TTip')
         await plan()
         await model()
         await t
         .doubleClick(Selector('#sandbox-host div').withText('NTOP: Node 1').nth(22))
         .click(Selector('#modal-root span').withText('Business Definition'))
         .click(Selector('#modal-root .bf-ui-form-textarea.form-input.form-textarea'))
         .typeText(Selector('#modal-root .bf-ui-form-textarea.form-input.form-textarea'),'Node 1 Description')
         .click(Selector('#modal-root .bf-ui-form-input.form-input'))
         .typeText(Selector('#modal-root .bf-ui-form-input.form-input'),'Node 1 Header')
         .click(Selector('#modal-root .bf-ui-form-input.form-input').nth(1))
         .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'Node 1 Footer')
         await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Node1-BusDefn')
         await t
         .click(Selector('#modal-root button').withText('Finish'))
         .click(Selector('#nodeSearch'))
         .typeText(Selector('#nodeSearch'),'Node 1')
         await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Node-Search')
         await t
         .click(Selector('div.nodeSearchSuggestions.searchResultsContainer').find('div p b').withText('Node 1'))
         await t
         .hover(Selector('#NTOP').find('path.d2VDTNode.d2VDTFocus'))
         .click(Selector('#NTOP').find('path.d2VDTNode.d2VDTFocus'))
         await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NTOP-DetPg')
         await t
         .hover(Selector('#sandbox-host div').withText('Node 1').nth(34))
         await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NTOP-TTip')

      });




      test
     .meta('ID','VDT-2673')
     .meta('SEVERITY','blocker')
      ('NodeLineage&NodeDescription-Tree Upload', async t => {
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
    
         .click(Selector('#sandbox-host div').withText('Import an Advanced Model').nth(17))
         .click(Selector('#modal-root button').withText('Yes'))
         .click('#import')
         .setFilesToUpload('#import', ['..\\..\\Scenario_1.txt'])
         .click(Selector('#modal-root button').withText('Finish'))
         await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'ImportedTree')
         await t
         .hover(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
         .click(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
         await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'CostofSales-DetPg1')
         await plan()
         await model()
         await t
         .doubleClick(Selector('#sandbox-host div').withText('N1').nth(22))
         .click(Selector('#modal-root span').withText('Business Definition'))
         .click(Selector('#modal-root .bf-ui-form-textarea.form-input.form-textarea'))
         .typeText(Selector('#modal-root .bf-ui-form-textarea.form-input.form-textarea'),'Cost of Sales Description')
         .click(Selector('#modal-root .bf-ui-form-input.form-input'))
         .typeText(Selector('#modal-root .bf-ui-form-input.form-input'),'Cost of Sales Header')
         .click(Selector('#modal-root .bf-ui-form-input.form-input').nth(1))
         .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'Cost of Sales Footer')
         await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'CostofSales-BusDefn')
         await t
         .click(Selector('#modal-root button').withText('Finish'))
         .click(Selector('#nodeSearch'))
         .typeText(Selector('#nodeSearch'),'Cost of Sales')
         await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Node-Search')
         await t
         .click(Selector('div.nodeSearchSuggestions.searchResultsContainer').find('div p b').withText('Cost of Sales'))
         await t
         .hover(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
         .click(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
         await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'CostofSales-DetPg2')
         await t
         .hover(Selector('#sandbox-host div').withText('Cost of Sales').nth(33))
         await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'CostofSales-TTip')

      });