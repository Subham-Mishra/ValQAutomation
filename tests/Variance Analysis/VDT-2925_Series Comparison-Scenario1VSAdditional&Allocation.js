import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { VDT2680_Variance_Analysis } from "../../pages/urlPage";
import { period,VATimeAggregation,VABaseline,VAComparison,VAScenarioSelection,sizeToFit,PctVariance,AbsVariance,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/varianceAnalysis"
import { tree, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan } from '../../pages/common';
import xPathToCss from 'xpath-to-css';
const signInVarAnalysis = Role(VDT2680_Variance_Analysis, signIn, { preserveUrl: true })

fixture `VarianceAnalysis`

    .meta('ID','VDT-2925')
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
    .meta('ID','VDT-2925')
    .meta('SEVERITY','blocker')
    ('Series Comparison-Additional&Allocation', async t => {
    await t
    .useRole(signInVarAnalysis)
    .wait(70000)
    await t
    .click(Selector('#editBtn span').withText('Edit'))
    await switchToIframe()
    //Locking Plan
    await plan()
    await t
    .click(Selector('#minimodal button').withText('Lock'))
    //Renaming series as Allocation Series 1
    .selectText(Selector('#minimodal .bf-ui-form-input.form-input'),12,0)
    .pressKey('backspace')
    .typeText(Selector('#minimodal .bf-ui-form-input.form-input'),'Allocation Series 1')
    .click(Selector('#minimodal button').withText('Submit'))
    //Allocate total of Tea and Coffe-Based on Weights
    .click(Selector('#sandbox-host div').withText('3,671m').nth(22))
    .click(Selector('#sandbox-host .quick-input-text'))
    for(var i=0; i<15; i=i+1){
        await t
        .pressKey('backspace')
    }
    await t
    .typeText(Selector('#sandbox-host .quick-input-text'),'265,000,000')
    .click(Selector('#sandbox-host .toolbar-icon.weight'))
    .click(Selector('#minimodal button').withText('Apply'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Alloc_NewSeries')
    await analyze()
    await varianceAnalysis()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_HomePage')
    //Changing Base-Scenario 1 and Comparison Series Forecast to-Additional 1, Alloc Series 1
    await t
    .click(Selector('.dropdown-control').nth(1))
    .click(Selector('.dropdown-menu').find('span').withText('Scenario 1'))
    .click(Selector('span.resize-column'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'BaseSeries')
    await t
    .click(Selector('div.dropdown-control').find('div.dropdown-placeholder.is-placeholder').withText('Forecast'))
    .click(Selector('.dropDown-options-checkbox').find('span').withText('Additional 1'))
    .click(Selector('.dropDown-options-checkbox').find('span').withText('Allocation Series 1'))
    .click(Selector('.dropDown-options-checkbox').find('span').withText('Forecast'))
    .click(Selector('div.va-row').find('label.bf-ui-form-checkbox.form-checkbox.toolbar-checkbox').withText('Unit'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'ComparisonSeries')
    //Selecting Month as Feb
    await t
    .click(Selector('#sandbox-host div').withText('Jan').nth(23))
    .click(Selector('#sandbox-host span').withText('Feb'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'February-Clicked')
    //TimePeriod Aggregation
    await t
    .click(Selector('.va-row.va-period-type'))
    .click(Selector('span.resize-column'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_Periodic&FY-default')
    await t
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