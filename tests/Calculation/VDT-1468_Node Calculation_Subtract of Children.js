import { Role } from 'testcafe';
import doVisualRegression from '../../Util/vrtUtil';
import signIn from '../../pages/signIn';
import { VDT1468_Node_Calculation_Subtract_of_Children } from '../../pages/urlPage';
import { navigationPanelMonth, navigationPanelYtD, navigationPanelFullYear, navigationPanelSimMths, navigationPanelJanuary, navigationPanelJune, navigationPanel0, navigationPanel0k, navigationPanel0_0m, navigationPanel0_0b } from '../../pages/navigationPanel';
import { tree, table, switchToIframe } from '../../pages/common';
import { SubSOP, SubAverage, SubLast, SubCummulative } from '../../pages/reportPages';

if(process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv')
    dotenv.config()
}

const log = require('../../config/logging').default

const signInSubtract = Role(VDT1468_Node_Calculation_Subtract_of_Children, signIn, { preserveUrl: true })

fixture `Node Calculation - Subtract of Children`
    // .meta('ID','VDT-1468')
    // .meta({'author': 'Automation','Date':'12-Mar-2020'})
    // .meta('SEVERITY','Critical')
    // .meta('TEST_RUN','1.7.0')
    .meta({
        testPlanKey: ''|| process.env.TEST_PLAN_KEY,               // ** Compulsory ** //
        testExecutionKey: ''|| process.env.TEST_EXECUTION_KEY,     // ** Needs when you update the execution ** //  
        testEnvironments:['QA']                                    // ** Compulsory ** //
      })

test
    .meta('ID','VDT-1468')
    .meta('SEVERITY','blocker')
    // .before(async ctx  => {
    //     log.debug('Test started..',ctx.testRun.test.name);
    // })
    // .after(async ctx  => {
    //     log.debug('Test Ended..',ctx.testRun.test.name);
    // })
     ('Subtract of Children - SOP', async t => {
    await t
        .useRole(signInSubtract)
        await SubSOP()

        await switchToIframe()
        await navigationPanelJanuary()
        await navigationPanelMonth()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub-SOP_Month_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub-SOP_Month_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub-SOP_Month_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub-SOP_Month_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub-SOP_Month_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub-SOP_Month_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub-SOP_Month_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub-SOP_Month_Scale_0.0b')

        await navigationPanelJune()
        await navigationPanelYtD()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub-SOP_Ytd_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub-SOP_Ytd_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub-SOP_Ytd_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub-SOP_Ytd_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub-SOP_Ytd_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub-SOP_Ytd_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub-SOP_Ytd_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub-SOP_Ytd_Scale_0.0b')

        await navigationPanelJanuary()
        await navigationPanelFullYear()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub-SOP_FullYear_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub-SOP_FullYear_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub-SOP_FullYear_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub-SOP_FullYear_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub-SOP_FullYear_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub-SOP_FullYear_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub-SOP_FullYear_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub-SOP_FullYear_Scale_0.0b')

        await navigationPanelSimMths()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub-SOP_Sim.Mths_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub-SOP_Sim.Mths_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub-SOP_Sim.Mths_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub-SOP_Sim.Mths_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub-SOP_Sim.Mths_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub-SOP_Sim.Mths_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub-SOP_Sim.Mths_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub-SOP_Sim.Mths_Scale_0.0b')

    }).meta({testKey:'' || process.env.TEST_KEY})

test
    .meta('ID','VDT-1468')
    .meta('SEVERITY','blocker')
    // .before(async ctx  => {
    //     log.debug('Test started..',ctx.testRun.test.name);
    // })
    // .after(async ctx  => {
    //     log.debug('Test Ended..',ctx.testRun.test.name);
    // }) 
    ('Subtract of Children - Average', async t => {
    await t
        .useRole(signInSubtract) 
        await SubAverage()

        await switchToIframe()
        await navigationPanelJanuary()
        await navigationPanelMonth()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Average_Month_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Average_Month_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Average_Month_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Average_Month_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Average_Month_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Average_Month_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Average_Month_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Average_Month_Scale_0.0b')

        await navigationPanelJune()
        await navigationPanelYtD()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Average_Ytd_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Average_Ytd_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Average_Ytd_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Average_Ytd_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Average_Ytd_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Average_Ytd_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Average_Ytd_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Average_Ytd_Scale_0.0b')

        await navigationPanelJanuary()
        await navigationPanelFullYear()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Average_FullYear_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Average_FullYear_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Average_FullYear_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Average_FullYear_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Average_FullYear_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Average_FullYear_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Average_FullYear_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Average_FullYear_Scale_0.0b')

        await navigationPanelSimMths()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Average_Sim.Mths_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Average_Sim.Mths_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Average_Sim.Mths_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Average_Sim.Mths_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Average_Sim.Mths_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Average_Sim.Mths_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Average_Sim.Mths_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Average_Sim.Mths_Scale_0.0b')

    }).meta({testKey:'' || process.env.TEST_KEY})

test
    .meta('ID','VDT-1468')
    .meta('SEVERITY','blocker')
    // .before(async ctx  => {
    //     log.debug('Test started..',ctx.testRun.test.name);
    // })
    // .after(async ctx  => {
    //     log.debug('Test Ended..',ctx.testRun.test.name);
    // }) 
    ('Subtract of Children - Last', async t => {
    await t
        .useRole(signInSubtract)
        await SubLast()

        await switchToIframe()
        await navigationPanelJanuary()
        await navigationPanelMonth()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Last_Month_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Last_Month_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Last_Month_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Last_Month_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Last_Month_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Last_Month_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Last_Month_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Last_Month_Scale_0.0b')

        await navigationPanelJune()
        await navigationPanelYtD()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Last_Ytd_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Last_Ytd_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Last_Ytd_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Last_Ytd_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Last_Ytd_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Last_Ytd_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Last_Ytd_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Last_Ytd_Scale_0.0b')

        await navigationPanelJanuary()
        await navigationPanelFullYear()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Last_FullYear_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Last_FullYear_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Last_FullYear_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Last_FullYear_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Last_FullYear_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Last_FullYear_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Last_FullYear_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Last_FullYear_Scale_0.0b')

        await navigationPanelSimMths()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Last_Sim.Mths_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Last_Sim.Mths_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Last_Sim.Mths_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Last_Sim.Mths_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Last_Sim.Mths_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Last_Sim.Mths_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- Last_Sim.Mths_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- Last_Sim.Mths_Scale_0.0b')

    }).meta({testKey:'' || process.env.TEST_KEY})

test
    .meta('ID','VDT-1468')
    .meta('SEVERITY','blocker')
    // .before(async ctx  => {
    //     log.debug('Test started..',ctx.testRun.test.name);
    // })
    // .after(async ctx  => {
    //     log.debug('Test Ended..',ctx.testRun.test.name);
    // }) 
    ('Subtract of Children - cumulative', async t => {
    await t
        .useRole(signInSubtract)
        await SubCummulative()

        await switchToIframe()
        await navigationPanelJanuary()
        await navigationPanelMonth()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- cumulative_Month_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- cumulative_Month_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- cumulative_Month_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- cumulative_Month_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- cumulative_Month_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- cumulative_Month_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- cumulative_Month_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- cumulative_Month_Scale_0.0b')

        await navigationPanelJune()
        await navigationPanelYtD()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- cumulative_Ytd_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- cumulative_Ytd_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- cumulative_Ytd_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- cumulative_Ytd_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- cumulative_Ytd_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- cumulative_Ytd_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- cumulative_Ytd_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- cumulative_Ytd_Scale_0.0b')

        await navigationPanelJanuary()
        await navigationPanelFullYear()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- cumulative_FullYear_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- cumulative_FullYear_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- cumulative_FullYear_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- cumulative_FullYear_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- cumulative_FullYear_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- cumulative_FullYear_Scale_0.0b')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- cumulative_FullYear_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- cumulative_FullYear_Scale_0.0b')

        await navigationPanelSimMths()
        await navigationPanel0()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- cumulative_Sim.Mths_Scale_0')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- cumulative_Sim.Mths_Scale_0')

        await navigationPanel0k()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- cumulative_Sim.Mths_Scale_0k')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- cumulative_Sim.Mths_Scale_0k')

        await navigationPanel0_0m()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- cumulative_Sim.Mths_Scale_0.0m')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- cumulative_Sim.Mths_Scale_0.0m')

        await navigationPanel0_0b()
		await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sub- cumulative_Sim.Mths_Scale_0.0b')
		await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_Sub- cumulative_Sim.Mths_Scale_0.0b')

    }).meta({testKey:'' || process.env.TEST_KEY})