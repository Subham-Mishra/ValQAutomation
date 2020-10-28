import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { VDT2680_Variance_Analysis } from "../../pages/urlPage";
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/checkboxes"
import { tree, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan } from '../../pages/common';
import xPathToCss from 'xpath-to-css';
//const signInVarAnalysis = Role(VDT2680_Variance_Analysis, signIn, { preserveUrl: true })

fixture `VarianceAnalysis`
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/2d6157e3-4230-4cef-bc18-f9a51e875024/ReportSection`
    .meta('ID','VDT-2685')
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
    .meta('ID','VDT-2685')
    .meta('SEVERITY','blocker')
    ('Custom Period-Time Range', async t => {
    await t
    //.useRole(signInVarAnalysis)
    .click(Selector('a').withText('SIGN IN'))
    .maximizeWindow()
    .typeText(Selector('#i0116'), 'valqtestuser@visualbi.com')
    .click(Selector('#idSIButton9'))
    .typeText(Selector('#i0118'), 'acdee@421')
    .click(Selector('#idSIButton9'))
    .click(Selector('#idSIButton9'))
    .wait(70000)
    await switchToIframe()
    await t.wait(20000)
    await analyze()
    await varianceAnalysis()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_HomePage')
    //Changing Base Budget to-Forecast and Comparison Series Forecast to-Budget
    await t
    .click(Selector('div.dropdown-control').find('.dropdown-placeholder.is-selected').withText('Budget'))
    .click(Selector('div.dropdown-menu').find('span').withText('Forecast'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'BaseSeries')
    await t
    .click(Selector('div.dropdown-control').find('div.dropdown-placeholder.is-placeholder').withText('Forecast'))
    .click(Selector('.dropDown-options-checkbox').find('span').withText('Budget'))
    .click(Selector('.dropDown-options-checkbox').find('span').withText('Forecast'))
    //Unchecking Unit
    .click(Selector('div.va-row').find('label.bf-ui-form-checkbox.form-checkbox.toolbar-checkbox').withText('Unit'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'ComparisonSeries')
    //Custom Period-Jan to March
    await t
    .click(Selector('.dropdown-control').withText('Jan'))
    .click(Selector('.dropdown-menu').find('div.dropdown-option').withText('Custom'))
    .click(Selector('#minimodal div').withText('Jan').nth(14))
    .click(Selector('#minimodal span').withText('Mar').nth(1))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'CustomPeriod-Popup')
    await t
    .click(Selector('#minimodal button').withText('Apply'))
    //Time Aggregation
    await t
    .click(Selector('.va-row.va-period-type'))
    .click(Selector('span.resize-column'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_Periodic&FY-default') 

    //Custom Time Limit Setup
    await t
    .click(Selector('.va-row.va-period-type'))
    .click(Selector('#sandbox-host span').withText('Custom').nth(1))
    .click(Selector('#minimodal label').withText('+ Add'))
    .click(Selector('#minimodal .calendar-icon'))
    .click(Selector('#minimodal div').withText('Mar').nth(8))
    .click(Selector('#minimodal div').withText('Jul').nth(8))
    //take ss here
    .click(Selector('#minimodal button').withText('Apply'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Custom_Period')
    //Time Aggregation
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
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_QTD')
    await t
    .click(Selector('.va-row.va-period-type'))
    await halfYear()
    await quarterToDate()
    await t
    .click(Selector('span.resize-column'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_HalfYr')
    await t
    .click(Selector('.va-row.va-period-type'))
    await yearToGo()
    await halfYear()
    await t
    .click(Selector('span.resize-column'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_YearToGo')
    });