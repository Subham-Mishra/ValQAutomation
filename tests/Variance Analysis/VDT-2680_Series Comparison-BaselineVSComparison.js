import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { VDT2680_Variance_Analysis } from "../../pages/urlPage";
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, varianceAnalysis } from "../../pages/navigationPanel"
import { tree, table, switchToIframe, analyze,simulate, switchToMainWindow } from '../../pages/common';

const signInVarAnalysis = Role(VDT2680_Variance_Analysis, signIn, { preserveUrl: true })

fixture `VarianceAnalysis`
    .meta('ID','VDT-2680')
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
    .meta('ID','VDT-2680')
    .meta('SEVERITY','blocker')
    ('Series Comparison-BaseVSComparison', async t => {
    await t
        .useRole(signInVarAnalysis)
        await t
        .wait(70000)
        await switchToIframe() 
        await t.wait(20000)
        await analyze()
        await varianceAnalysis()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_HomePage')
        //Forecast and Budget
        await t
        .click(Selector('#sandbox-host div').withText('Budget').nth(13))
        .click(Selector('#sandbox-host span').withText('Forecast'))
        .wait(3000)
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Forecast-Cicked')
        await t
        .click(Selector('#sandbox-host div').withText('Forecast').nth(23))
        .click(Selector('#sandbox-host span').withText('Budget').nth(1))
        .click(Selector('#sandbox-host span').withText('Forecast').nth(1))
        .click(Selector('#sandbox-host div').withText('Budget').nth(17))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Budget-Clicked')
        //Feb-Comparison Series
        await t
        .click(Selector('#sandbox-host div').withText('Jan').nth(23))
        .click(Selector('#sandbox-host span').withText('Feb'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'February-Clicked')
        //Checking all time aggregations
        await t
        .click(Selector('#sandbox-host div').withText('Periodic, Full Year').nth(17))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_Periodic&FY-default')
        await t
        .click(Selector('#sandbox-host div').withText('Periodic, Full Year').nth(17))
        .click(Selector('.va-row.va-period-type'))
        await fullYear()
        await t
        .click(Selector('span.resize-column'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_Periodic')
        await t
        .click(Selector('.va-row.va-period-type'))
        await quarterToDate()
        await period()
        await t
        .click(Selector('span.resize-column'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_Quarter-to-date')
        await t
        .click(Selector('.va-row.va-period-type'))
        await quarter()
        await quarterToDate()
        await t
        .click(Selector('span.resize-column'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_Quarter')
        await t
        .click(Selector('.va-row.va-period-type'))
        await halfYear()
        await quarter()
        await t
        .click(Selector('span.resize-column'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_Half Year')
        await t
        .click(Selector('.va-row.va-period-type'))
        await halfYearToDate()
        await halfYear()
        await t
        .click(Selector('span.resize-column'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_Half Year-to-date')
        await t
        .click(Selector('.va-row.va-period-type'))
        await yearToDate()
        await halfYearToDate()
        await t
        .click(Selector('span.resize-column'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_Year-to-date')
        await t
        .click(Selector('.va-row.va-period-type'))
        await yearToGo()
        await yearToDate()
        await t
        .click(Selector('span.resize-column'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_Year-to-go')
        await t
        .click(Selector('.va-row.va-period-type'))
        await fullYear()
        await yearToGo()
        await t
        .click(Selector('span.resize-column'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_Full Year')
        
    });

        



    
      