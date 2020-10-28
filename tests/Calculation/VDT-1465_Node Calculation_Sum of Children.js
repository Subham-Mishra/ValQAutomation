import { Role } from 'testcafe';
import doVisualRegression from '../../Util/vrtUtil';
import signIn from '../../pages/signIn';
import { VDT1465_Node_Calculation_Sum_of_Children } from '../../pages/urlPage';
import { navigationPanelMonth, navigationPanelYtD, navigationPanelFullYear, navigationPanelSimMths, navigationPanelJanuary, navigationPanelJune, navigationPanel0, navigationPanel0k, navigationPanel0_0m, navigationPanel0_0b } from '../../pages/navigationPanel';
import { tree, table, switchToIframe } from '../../pages/common';
import { SumCummulative, SumAverage, SumLast, SumSOP } from '../../pages/reportPages';
import fs from "fs-extra";
import path from "path";

if(process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv')
    dotenv.config()
}

const log = require('../../config/logging').default

const signInSum = Role(VDT1465_Node_Calculation_Sum_of_Children, signIn, { preserveUrl: true })

fixture `Node Calculation - Sum of Children`
    .meta('ID','VDT-1466')
    .meta({'author': 'Automation','Date':'12-Mar-2020'})
    .meta('SEVERITY','Critical')
    .meta('TEST_RUN','1.7.0')
  .meta({
    testPlanKey: ''|| process.env.TEST_PLAN_KEY,               // ** Compulsory ** //
    testExecutionKey: ''|| process.env.TEST_EXECUTION_KEY,     // ** Needs when you update the execution ** //  
    testEnvironments:['QA']                                    // ** Compulsory ** //
  })
  

test
    .meta('ID','VDT-1465')
    .meta('SEVERITY','blocker')
    .before(async ctx  => {
        log.debug('Test started..',ctx.testRun.test.name);
    //     const actualScreenshotAbsolutePath = path.join(
    //         __dirname,
    //         "../.././screenshots/",
    //         process.env.IMAGE_COMPARISIOM,
    //         ctx.testRun.test.testFile.currentFixture.name, 
    //         ctx.testRun.test.name     
    //         )
    //   console.log('act: '+ actualScreenshotAbsolutePath)
    //   fs.emptyDir(actualScreenshotAbsolutePath)
    })
    .after(async ctx  => {
        log.debug('Test Ended..',ctx.testRun.test.name);
    }) ('Sum of Children - Sum of Periods (SOP)', async t => {
    await t
        .useRole(signInSum)
        await SumSOP()

        await switchToIframe()
        await tree()
        await navigationPanelJanuary()
        await navigationPanelMonth()
        await navigationPanel0()        
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-SOP_Month_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-SOP_Month_Scale_0')

     
        await navigationPanel0k()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-SOP_Month_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-SOP_Month_Scale_0k')

        await navigationPanel0_0m()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-SOP_Month_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-SOP_Month_Scale_0.0m')

        
        await navigationPanel0_0b()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-SOP_Month_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-SOP_Month_Scale_0.0b')

        
        await navigationPanelJune()
        await navigationPanelYtD()
        await navigationPanel0()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-SOP_Ytd_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-SOP_Ytd_Scale_0')

        
        await navigationPanel0k()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-SOP_Ytd_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-SOP_Ytd_Scale_0k')

        await navigationPanel0_0m()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-SOP_Ytd_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-SOP_Ytd_Scale_0.0m')

        await navigationPanel0_0b()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-SOP_Ytd_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-SOP_Ytd_Scale_0.0b')

       
        await navigationPanelJanuary()
        await navigationPanelFullYear()
        await navigationPanel0()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-SOP_FullYear_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-SOP_FullYear_Scale_0')

        
        await navigationPanel0k()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-SOP_FullYear_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-SOP_FullYear_Scale_0k')

        await navigationPanel0_0m()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-SOP_FullYear_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_SOP_FullYear_Scale_0.0m')

        await navigationPanel0_0b()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-SOP_FullYear_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-SOP_FullYear_Scale_0.0b')

        await navigationPanelSimMths()
        await navigationPanel0()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-SOP_Sim.Mths_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-SOP_Sim.Mths_Scale_0')

        await navigationPanel0k()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-SOP_Sim.Mths_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-SOP_Sim.Mths_Scale_0k')

        await navigationPanel0_0m()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-SOP_Sim.Mths_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-SOP_Sim.Mths_Scale_0.0m')

        await navigationPanel0_0b()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-SOP_Sim.Mths_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-SOP_Sim.Mths_Scale_0.0b')

}).meta({testKey:'' || process.env.TEST_KEY})

test
    .meta('ID','VDT-1465')
    .meta('SEVERITY','blocker')
    .before(async ctx  => {
        log.debug('Test started..',ctx.testRun.test.name);
        //const actualScreenshotAbsolutePath = path.join(
        //    __dirname,
        //    "../.././screenshots/",
        //    process.env.IMAGE_COMPARISIOM,
        //    ctx.testRun.test.testFile.currentFixture.name, 
        //    ctx.testRun.test.name     
        //    )
      //console.log('act: '+ actualScreenshotAbsolutePath)
      //fs.emptyDir(actualScreenshotAbsolutePath)
    })
    .after(async ctx  => {
        log.debug('Test Ended..',ctx.testRun.test.name);
    }) ('Sum of Children - Average', async t => {
    await t
        .useRole(signInSum)
        await SumAverage()

        await switchToIframe()
        await navigationPanelJanuary()
        await navigationPanelMonth()
        await navigationPanel0()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum- Average_Month_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum- Average_Month_Scale_0')

        await navigationPanel0k()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum- Average_Month_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum- Average_Month_Scale_0k')

        await navigationPanel0_0m()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum- Average_Month_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum- Average_Month_Scale_0.0m')

        await navigationPanel0_0b()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum- Average_Month_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum- Average_Month_Scale_0.0b')

      
        await navigationPanelJune()
        await navigationPanelYtD()
        await navigationPanel0()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum- Average_Ytd_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum- Average_Ytd_Scale_0')

        await navigationPanel0k()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum- Average_Ytd_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum- Average_Ytd_Scale_0k')

        await navigationPanel0_0m()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum- Average_Ytd_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum- Average_Ytd_Scale_0.0m')

        await navigationPanel0_0b()
         await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum- Average_Ytd_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum- Average_Ytd_Scale_0.0b')

       
        await navigationPanelJanuary()
        await navigationPanelFullYear()
        await navigationPanel0()
         await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum- Average_FullYear_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum- Average_FullYear_Scale_0')

        await navigationPanel0k()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum- Average_FullYear_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum- Average_FullYear_Scale_0k')

        await navigationPanel0_0m()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum- Average_FullYear_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum- Average_FullYear_Scale_0.0m')

        await navigationPanel0_0b()
         await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum- Average_FullYear_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum- Average_FullYear_Scale_0.0b')

        await navigationPanelSimMths()
        await navigationPanel0()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum- Average_Sim.Mths_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum- Average_Sim.Mths_Scale_0')

        await navigationPanel0k()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum- Average_Sim.Mths_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum- Average_Sim.Mths_Scale_0k')

        await navigationPanel0_0m()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum- Average_Sim.Mths_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum- Average_Sim.Mths_Scale_0.0m')

        await navigationPanel0_0b()
         await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum- Average_Sim.Mths_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum- Average_Sim.Mths_Scale_0.0b')

}).meta({testKey:'' || process.env.TEST_KEY})

test
    .meta('ID','VDT-1465')
    .meta('SEVERITY','blocker')
    .before(async ctx  => {
        log.debug('Test started..',ctx.testRun.test.name);
        //const actualScreenshotAbsolutePath = path.join(
        //    __dirname,
        //    "../.././screenshots/",
        //    process.env.IMAGE_COMPARISIOM,
        //    ctx.testRun.test.testFile.currentFixture.name, 
        //    ctx.testRun.test.name     
        //    )
      //console.log('act: '+ actualScreenshotAbsolutePath)
      //fs.emptyDir(actualScreenshotAbsolutePath)
    })
    .after(async ctx  => {
        log.debug('Test Ended..',ctx.testRun.test.name);
    }) ('Sum of Children - Last', async t => {
    await t
        .useRole(signInSum)
        await SumLast()

        await switchToIframe()
        await navigationPanelJanuary()
        await navigationPanelMonth()
        await navigationPanel0()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Last_Month_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Last_Month_Scale_0')

        await navigationPanel0k()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Last_Month_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Last_Month_Scale_0k')

        await navigationPanel0_0m()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Last_Month_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Last_Month_Scale_0.0m')

        await navigationPanel0_0b()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Last_Month_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Last_Month_Scale_0.0b')

        
        await navigationPanelJune()
        await navigationPanelYtD()
        await navigationPanel0()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Last_Ytd_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Last_Ytd_Scale_0')

        await navigationPanel0k()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Last_Ytd_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Last_Ytd_Scale_0k')

        await navigationPanel0_0m()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Last_Ytd_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Last_Ytd_Scale_0.0m')

        await navigationPanel0_0b()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Last_Ytd_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Last_Ytd_Scale_0.0b')

        
        await navigationPanelJanuary()
        await navigationPanelFullYear()
        await navigationPanel0()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Last_FullYear_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Last_FullYear_Scale_0')

        await navigationPanel0k()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Last_FullYear_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Last_FullYear_Scale_0k')

        await navigationPanel0_0m()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Last_FullYear_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Last_FullYear_Scale_0.0m')

        await navigationPanel0_0b()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Last_FullYear_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Last_FullYear_Scale_0.0b')


        await navigationPanelSimMths()
        await navigationPanel0()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Last_Sim.Mths_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Last_Sim.Mths_Scale_0')

        await navigationPanel0k()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Last_Sim.Mths_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Last_Sim.Mths_Scale_0k')

        await navigationPanel0_0m()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Last_Sim.Mths_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Last_Sim.Mths_Scale_0.0m')

        await navigationPanel0_0b()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Last_Sim.Mths_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Last_Sim.Mths_Scale_0.0b')

}).meta({testKey:'' || process.env.TEST_KEY})

test
    .meta('ID','VDT-1465')
    .meta('SEVERITY','blocker')
    .before(async ctx  => {
        log.debug('Test started..',ctx.testRun.test.name);
        //const actualScreenshotAbsolutePath = path.join(
        //    __dirname,
        //    "../.././screenshots/",
        //    process.env.IMAGE_COMPARISIOM,
        //    ctx.testRun.test.testFile.currentFixture.name, 
        //    ctx.testRun.test.name     
        //    )
      //console.log('act: '+ actualScreenshotAbsolutePath)
      //fs.emptyDir(actualScreenshotAbsolutePath)
    })
    .after(async ctx  => {
        log.debug('Test Ended..',ctx.testRun.test.name);
    }) ('Sum of Children - Cumulative', async t => {
    await t
        .useRole(signInSum)
        await SumCummulative()

        await switchToIframe()
        await navigationPanelJanuary()
        await navigationPanelMonth()
        await navigationPanel0()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Cumulative_Month_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Cumulative_Month_Scale_0')

        await navigationPanel0k()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Cumulative_Month_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Cumulative_Month_Scale_0k')

        await navigationPanel0_0m()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Cumulative_Month_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Cumulative_Month_Scale_0.0m')

        await navigationPanel0_0b()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Cumulative_Month_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Cumulative_Month_Scale_0.0b')

        
        await navigationPanelJune()
        await navigationPanelYtD()
        await navigationPanel0()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Cumulative_Ytd_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Cumulative_Ytd_Scale_0')

        await navigationPanel0k()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Cumulative_Ytd_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Cumulative_Ytd_Scale_0k')

        await navigationPanel0_0m()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Cumulative_Ytd_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Cumulative_Ytd_Scale_0.0m')

        await navigationPanel0_0b()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Cumulative_Ytd_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Cumulative_Ytd_Scale_0.0b')

     
        await navigationPanelJanuary()
        await navigationPanelFullYear()
        await navigationPanel0()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Cumulative_FullYear_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Cumulative_FullYear_Scale_0')

        await navigationPanel0k()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Cumulative_FullYear_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Cumulative_FullYear_Scale_0k')

        await navigationPanel0_0m()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Cumulative_FullYear_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Cumulative_FullYear_Scale_0.0m')

        await navigationPanel0_0b()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Cumulative_FullYear_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Cumulative_FullYear_Scale_0.0b')

        await navigationPanelSimMths()
        await navigationPanel0()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Cumulative_Sim.Mths_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Cumulative_Sim.Mths_Scale_0')

        await navigationPanel0k()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Cumulative_Sim.Mths_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Cumulative_Sim.Mths_Scale_0k')

        await navigationPanel0_0m()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Cumulative_Sim.Mths_Scale_0.0m')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Cumulative_Sim.Mths_Scale_0.0m')

        await navigationPanel0_0b()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sum-Cumulative_Sim.Mths_Scale_0.0b')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sum-Cumulative_Sim.Mths_Scale_0.0b')

}).meta({testKey:'' || process.env.TEST_KEY})


