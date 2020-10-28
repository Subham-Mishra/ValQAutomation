import { Role } from 'testcafe';
import doVisualRegression from '../../Util/vrtUtil';
import signIn from '../../pages/signIn';
import { VDT1466_Node_Calculation_Multiply_of_Children } from '../../pages/urlPage';
import { navigationPanelMonth, navigationPanelYtD, navigationPanelFullYear, navigationPanelSimMths, navigationPanelJanuary, navigationPanelJune, navigationPanel0, navigationPanel0k, navigationPanel0_0m, navigationPanel0_0b } from '../../pages/navigationPanel';
import { tree, table, switchToIframe} from '../../pages/common';
import { MultiplySOP, MultiplyAverage, MultiplyLast, MultiplyCummulative} from '../../pages/reportPages';

if(process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv')
    dotenv.config()
}

const log = require('../../config/logging').default

const signInMultiply = Role(VDT1466_Node_Calculation_Multiply_of_Children, signIn, { preserveUrl: true })

fixture `Node Calculation - Multiply of Children`
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
    .meta('ID','VDT-1466')
    .meta('SEVERITY','blocker')
    // .before(async ctx  => {
    //     log.debug('Test started..',ctx.testRun.test.name);
    // })
    // .after(async ctx  => {
    //     log.debug('Test Ended..',ctx.testRun.test.name);
    // })
     ('Multiply of Children - SOP', async t => {
    await t
        .useRole(signInMultiply)
        .wait(10000)
        await MultiplySOP()

        await switchToIframe()
        await navigationPanelJanuary()
        await navigationPanelMonth()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply-SOP_Month_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply-SOP_Month_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply-SOP_Month_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply-SOP_Month_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply-SOP_Month_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply-SOP_Month_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply-SOP_Month_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply-SOP_Month_Scale_0.0b')

        await navigationPanelJune()
        await navigationPanelYtD()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply-SOP_Ytd_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply-SOP_Ytd_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply-SOP_Ytd_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply-SOP_Ytd_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply-SOP_Ytd_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply-SOP_Ytd_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply-SOP_Ytd_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply-SOP_Ytd_Scale_0.0b')


        await navigationPanelJanuary()
        await navigationPanelFullYear()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply-SOP_FullYear_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply-SOP_FullYear_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply-SOP_FullYear_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply-SOP_FullYear_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply-SOP_FullYear_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply-SOP_FullYear_Scale_0.0m')

        await navigationPanel0_0b()
	    await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply-SOP_FullYear_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply-SOP_FullYear_Scale_0.0b')

        await navigationPanelSimMths()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply-SOP_Sim.Mths_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply-SOP_Sim.Mths_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply-SOP_Sim.Mths_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply-SOP_Sim.Mths_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply-SOP_Sim.Mths_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply-SOP_Sim.Mths_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply-SOP_Sim.Mths_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply-SOP_Sim.Mths_Scale_0.0b')

    }).meta({testKey:'' || process.env.TEST_KEY})

test
    .meta('ID','VDT-1466')
    .meta('SEVERITY','blocker')
    // .before(async ctx  => {
    //     log.debug('Test started..',ctx.testRun.test.name);
    // })
    // .after(async ctx  => {
    //     log.debug('Test Ended..',ctx.testRun.test.name);
    // }) 
    ('Multiply of Children - Average', async t => {
    await t
        .useRole(signInMultiply)
        await MultiplyAverage()

        await switchToIframe()
        await navigationPanelMonth()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Average_Month_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Average_Month_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Average_Month_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Average_Month_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Average_Month_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Average_Month_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Average_Month_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Average_Month_Scale_0.0b')

        await navigationPanelJune()
        await navigationPanelYtD()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Average_Ytd_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Average_Ytd_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Average_Ytd_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Average_Ytd_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Average_Ytd_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Average_Ytd_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Average_Ytd_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Average_Ytd_Scale_0.0b')

        await navigationPanelJanuary()
        await navigationPanelFullYear()
        await navigationPanel0()
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Average_FullYear_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Average_FullYear_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Average_FullYear_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Average_FullYear_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Average_FullYear_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Average_FullYear_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Average_FullYear_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Average_FullYear_Scale_0.0b')

        await navigationPanelSimMths()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Average_Sim.Mths_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Average_Sim.Mths_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Average_Sim.Mths_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Average_Sim.Mths_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Average_Sim.Mths_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Average_Sim.Mths_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Average_Sim.Mths_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Average_Sim.Mths_Scale_0.0b')

    }).meta({testKey:'' || process.env.TEST_KEY})

test
    // .meta('ID','VDT-1466')
    // .meta('SEVERITY','blocker')
    // .before(async ctx  => {
    //     log.debug('Test started..',ctx.testRun.test.name);
    // })
    // .after(async ctx  => {
    //     log.debug('Test Ended..',ctx.testRun.test.name);
    // })
    ('Multiply of Children - Last', async t => {
    await t
        .useRole(signInMultiply)
        await MultiplyLast()

        await switchToIframe()
        await navigationPanelMonth()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Last_Month_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Last_Month_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Last_Month_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Last_Month_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Last_Month_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Last_Month_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Last_Month_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Last_Month_Scale_0.0b')

        await navigationPanelJune()
        await navigationPanelYtD()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Last_Ytd_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Last_Ytd_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Last_Ytd_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Last_Ytd_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Last_Ytd_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Last_Ytd_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Last_Ytd_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Last_Ytd_Scale_0.0b')

        await navigationPanelJanuary()
        await navigationPanelFullYear()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Last_FullYear_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Last_FullYear_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Last_FullYear_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Last_FullYear_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Last_FullYear_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Last_FullYear_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Last_FullYear_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Last_FullYear_Scale_0.0b')

        await navigationPanelSimMths()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Last_Sim.Mths_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Last_Sim.Mths_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Last_Sim.Mths_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Last_Sim.Mths_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Last_Sim.Mths_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Last_Sim.Mths_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Last_Sim.Mths_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Last_Sim.Mths_Scale_0.0b')

    }).meta({testKey:'' || process.env.TEST_KEY})

test
    // .meta('ID','VDT-1466')
    // .meta('SEVERITY','blocker')
    // .before(async ctx  => {
    //     log.debug('Test started..',ctx.testRun.test.name);
    // })
    // .after(async ctx  => {
    //     log.debug('Test Ended..',ctx.testRun.test.name);
    // })
     ('Multiply of Children - Cumulative', async t => {
    await t
        .useRole(signInMultiply)
        .wait(10000)
        await MultiplyCummulative()

        await switchToIframe()
        await navigationPanelMonth()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Cumulative_Month_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Cumulative_Month_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Cumulative_Month_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Cumulative_Month_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Cumulative_Month_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Cumulative_Month_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Cumulative_Month_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Cumulative_Month_Scale_0.0b')

        await navigationPanelJune()
        await navigationPanelYtD()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Cumulative_Ytd_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Cumulative_Ytd_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Cumulative_Ytd_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Cumulative_Ytd_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Cumulative_Ytd_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Cumulative_Ytd_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Cumulative_Ytd_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Cumulative_Ytd_Scale_0.0b')

        await navigationPanelJanuary()
        await navigationPanelFullYear()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Cumulative_FullYear_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Cumulative_FullYear_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Cumulative_FullYear_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Cumulative_FullYear_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Cumulative_FullYear_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Cumulative_FullYear_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Cumulative_FullYear_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Cumulative_FullYear_Scale_0.0b')

        await navigationPanelSimMths()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Cumulative_Sim.Mths_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Cumulative_Sim.Mths_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Cumulative_Sim.Mths_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Cumulative_Sim.Mths_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Cumulative_Sim.Mths_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Cumulative_Sim.Mths_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Multiply- Cumulative_Sim.Mths_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Multiply- Cumulative_Sim.Mths_Scale_0.0b')

    }).meta({testKey:'' || process.env.TEST_KEY})