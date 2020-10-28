import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
//import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/checkboxes"
import { tree,SignIn,editOption,Login, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, model } from '../../pages/common';

fixture `Plan`
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/1dd2edd3-f74f-4296-9411-c60c28bea828/ReportSection`
.meta('ID','VDT-1376')
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
    .meta('ID','VDT-1377')
    .meta('SEVERITY','blocker')
    ('Allocation Editor-Spread by Weights-Overwrite', async t => {
        await SignIn()  
        await switchToMainWindow()
        await t
        .wait(75000)
        await editOption()
        await t
        .wait(35000)
        await switchToIframe()
        await model()
        await t
        //Importing an advanced model
        .click(Selector('#sandbox-host .icon.icon--Add'))
        .click(Selector('#sandbox-host div').withText('Import an Advanced Model').nth(17))
        .click(Selector('#modal-root button').withText('Yes'))
        .click('#import')
        .setFilesToUpload('#import', ['..\\..\\..\\Scenario_5.txt'])
        .click(Selector('#modal-root button').withText('Finish'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'ImportedTree')
        //Total of Support Cost-Weights-Based on Cost of Sales
        await t
        .click(Selector('span').withText('Plan'))
        .click(Selector('#minimodal button').withText('Lock'))
        .click(Selector('#minimodal button').withText('Submit'))
        .click(Selector('#sandbox-host div').withText('120.00').nth(21)) 
        .click(Selector('#sandbox-host div').withText('Weight').nth(13))
        .click(Selector('#minimodal .bf-ui-form-input.form-input').nth(1))
        .click(Selector('#minimodal span').withText('NCost__of__Sales: Cost of Sales'))
        .click(Selector('#minimodal button').withText('Apply'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NewSeries')

    });