import { Role } from 'testcafe';
import doVisualRegression from '../../Util/vrtUtil';
import signIn from '../../pages/signIn';
import { VDT1467_Node_Calculation_Divide_of_Children } from '../../pages/urlPage';
import { navigationPanelMonth, navigationPanelYtD, navigationPanelFullYear, navigationPanelSimMths, navigationPanelJanuary, navigationPanelJune, navigationPanel0, navigationPanel0k, navigationPanel0_0m, navigationPanel0_0b } from '../../pages/navigationPanel';
import { tree, table, switchToIframe } from '../../pages/common';
import { DivCummulative, DivLast, DivAverage, DivSOP } from '../../pages/reportPages';

if(process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv')
    dotenv.config()
}

const log = require('../../config/logging').default

const signInDivide = Role(VDT1467_Node_Calculation_Divide_of_Children, signIn, { preserveUrl: true })

// const iframe = Selector('iframe.visual-sandbox')

fixture `Node Calculation -Divide of Children`
    .meta('ID','VDT-1467')
    .meta({'author': 'Automation','Date':'12-Mar-2020'})
    .meta('SEVERITY','Critical')
    .meta('TEST_RUN','1.7.0')
    .meta({
        testPlanKey: ''|| process.env.TEST_PLAN_KEY,               // ** Compulsory ** //
        testExecutionKey: ''|| process.env.TEST_EXECUTION_KEY,     // ** Needs when you update the execution ** //  
        testEnvironments:['QA']                                    // ** Compulsory ** //
      })


test
    .meta('ID','VDT-1467')
    .meta('SEVERITY','blocker')
    // .before(async ctx  => {
    //     log.debug('Test started..',ctx.testRun.test.name);
    // })
    // .after(async ctx  => {
    //     log.debug('Test Ended..',ctx.testRun.test.name);
    // }) 
    ('Divide of Children - SOP', async t => {
    await t
      .useRole(signInDivide)     
        await DivSOP()  
        await switchToIframe()
        await navigationPanelJanuary()
        await navigationPanelMonth()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-SOP_Month_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-SOP_Month_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-SOP_Month_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-SOP_Month_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-SOP_Month_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-SOP_Month_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-SOP_Month_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-SOP_Month_Scale_0.0b')

        await navigationPanelJune()
        await navigationPanelYtD()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-SOP_Ytd_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-SOP_Ytd_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-SOP_Ytd_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-SOP_Ytd_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-SOP_Ytd_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-SOP_Ytd_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-SOP_Ytd_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-SOP_Ytd_Scale_0.0b')

        await navigationPanelJanuary()
        await navigationPanelFullYear()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-SOP_FullYear_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-SOP_FullYear_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-SOP_FullYear_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-SOP_FullYear_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-SOP_FullYear_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-SOP_FullYear_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-SOP_FullYear_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-SOP_FullYear_Scale_0.0b')

        await navigationPanelSimMths()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-SOP_Sim.Mths_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-SOP_Sim.Mths_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-SOP_Sim.Mths_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-SOP_Sim.Mths_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-SOP_Sim.Mths_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-SOP_Sim.Mths_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-SOP_Sim.Mths_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-SOP_Sim.Mths_Scale_0.0b')

    }).meta({testKey:'' || process.env.TEST_KEY})

test
    .meta('ID','VDT-1467')
    .meta('SEVERITY','blocker')
    // .before(async ctx  => {
    //     log.debug('Test started..',ctx.testRun.test.name);
    // })
    // .after(async ctx  => {
    //     log.debug('Test Ended..',ctx.testRun.test.name);
    // }) 
    ('Divide of Children - Average', async t => {
    await t
        .useRole(signInDivide)
        await DivAverage()

        await switchToIframe()
        await navigationPanelMonth()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Average_Month_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Average_Month_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Average_Month_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Average_Month_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Average_Month_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Average_Month_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Average_Month_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Average_Month_Scale_0.0b')

        await navigationPanelJune()
        await navigationPanelYtD()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Average_Ytd_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Average_Ytd_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Average_Ytd_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Average_Ytd_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Average_Ytd_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Average_Ytd_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Average_Ytd_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Average_Ytd_Scale_0.0b')

        await navigationPanelJanuary()
        await navigationPanelFullYear()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Average_FullYear_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Average_FullYear_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Average_FullYear_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Average_FullYear_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Average_FullYear_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Average_FullYear_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Average_FullYear_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Average_FullYear_Scale_0.0b')

        await navigationPanelSimMths()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Average_Sim.Mths_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Average_Sim.Mths_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Average_Sim.Mths_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Average_Sim.Mths_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Average_Sim.Mths_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Average_Sim.Mths_Scale_0.0m')
		
        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Average_Sim.Mths_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Average_Sim.Mths_Scale_0.0b')

    }).meta({testKey:'' || process.env.TEST_KEY})

test
    .meta('ID','VDT-1467')
    .meta('SEVERITY','blocker')
    // .before(async ctx  => {
    //     log.debug('Test started..',ctx.testRun.test.name);
    // })
    // .after(async ctx  => {
    //     log.debug('Test Ended..',ctx.testRun.test.name);
    // }) 
    ('Divide of Children - Last', async t => {
    await t
        .useRole(signInDivide)   
        .wait(10000)
        await DivLast()

        await switchToIframe()
        await navigationPanelMonth()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Last_Month_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Last_Month_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Last_Month_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Last_Month_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Last_Month_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Last_Month_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Last_Month_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Last_Month_Scale_0.0b')

        await navigationPanelJune()
        await navigationPanelYtD()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Last_Ytd_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Last_Ytd_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Last_Ytd_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Last_Ytd_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Last_Ytd_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Last_Ytd_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Last_Ytd_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Last_Ytd_Scale_0.0b')

        await navigationPanelJanuary()
        await navigationPanelFullYear()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Last_FullYear_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Last_FullYear_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Last_FullYear_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Last_FullYear_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Last_FullYear_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Last_FullYear_Scale_0.0m')

        await navigationPanel0_0b()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Last_FullYear_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Last_FullYear_Scale_0.0b')

        await navigationPanelSimMths()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Last_Sim.Mths_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Last_Sim.Mths_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Last_Sim.Mths_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Last_Sim.Mths_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Last_Sim.Mths_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Last_Sim.Mths_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Last_Sim.Mths_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Last_Sim.Mths_Scale_0.0b')

    }).meta({testKey:'' || process.env.TEST_KEY})

test
    .meta('ID','VDT-1467')
    .meta('SEVERITY','blocker')
    // .before(async ctx  => {
    //     log.debug('Test started..',ctx.testRun.test.name);
    // })
    // .after(async ctx  => {
    //     log.debug('Test Ended..',ctx.testRun.test.name);
    // }) 
    ('Divide of Children - Cumulative', async t => {
    await t
        .useRole(signInDivide)
        .wait(10000)
        await DivCummulative()

        await switchToIframe()
        await navigationPanelMonth()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Cumulative_Month_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Cumulative_Month_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Cumulative_Month_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Cumulative_Month_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Cumulative_Month_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Cumulative_Month_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Cumulative_Month_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Cumulative_Month_Scale_0.0b')

        await navigationPanelJune()
        await navigationPanelYtD()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Cumulative_Ytd_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Cumulative_Ytd_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Cumulative_Ytd_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Cumulative_Ytd_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Cumulative_Ytd_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Cumulative_Ytd_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Cumulative_Ytd_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Cumulative_Ytd_Scale_0.0b')

        await navigationPanelJanuary()
        await navigationPanelFullYear()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Cumulative_FullYear_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Cumulative_FullYear_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Cumulative_FullYear_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Cumulative_FullYear_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Cumulative_FullYear_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Cumulative_FullYear_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Cumulative_FullYear_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Cumulative_FullYear_Scale_0.0b')

        await navigationPanelSimMths()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Cumulative_Sim.Mths_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Cumulative_Sim.Mths_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Cumulative_Sim.Mths_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Cumulative_Sim.Mths_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Cumulative_Sim.Mths_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Cumulative_Sim.Mths_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Div-Cumulative_Sim.Mths_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Div-Cumulative_Sim.Mths_Scale_0.0b')

    }).meta({testKey:'' || process.env.TEST_KEY})