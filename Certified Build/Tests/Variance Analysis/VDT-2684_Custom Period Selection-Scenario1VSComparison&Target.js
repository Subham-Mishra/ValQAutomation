import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { VDT2680_Variance_Analysis } from "../../pages/urlPage";
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/checkboxes"
import { tree, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan } from '../../pages/common';
import xPathToCss from 'xpath-to-css';
//const signInVarAnalysis = Role(VDT2680_Variance_Analysis, signIn, { preserveUrl: true })

fixture `VarianceAnalysis`
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/acdbd05e-7715-47e3-a521-72dc91ba3777/ReportSection`
    .meta('ID','VDT-2684')
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
    .meta('ID','VDT-2684')
    .meta('SEVERITY','blocker')
    ('Custom Period Selection-Scenario1VSComparison&Target', async t => {
    await t
    .click(Selector('a').withText('SIGN IN'))
    .maximizeWindow()
    .typeText(Selector('#i0116'), 'valqtestuser@visualbi.com')
    .click(Selector('#idSIButton9'))
    .typeText(Selector('#i0118'), 'acdee@421')
    .click(Selector('#idSIButton9'))
    .click(Selector('#idSIButton9'))
    .wait(70000)
    await t
    .click(Selector('#editBtn span').withText('Edit'))
    await switchToIframe()
    //Locking Plan
    await plan()
    await t
    .click(Selector('#minimodal button').withText('Lock'))
    .selectText(Selector('#minimodal .bf-ui-form-input.form-input'),12,0)
    .pressKey('backspace')
    //Creating New Series
    .typeText(Selector('#minimodal .bf-ui-form-input.form-input'),'Allocation Series 1')
    .click(Selector('#minimodal button').withText('Submit'))
    //Allocate Tea and Coffee based on weights
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

    //Changing Base-Scenario 1 and Comparison Series Forecast to=Addnl1, Alloc Series
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
    //Uncheck Unit
    .click(Selector('div.va-row').find('label.bf-ui-form-checkbox.form-checkbox.toolbar-checkbox').withText('Unit'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'ComparisonSeries')


    //Custom Period Popup
    await t
    .click(Selector('#sandbox-host div').withText('Jan').nth(23))
    .click(Selector('.dropdown-menu').find('div.dropdown-option').withText('Custom'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'CustomPeriod-Popup')
    //Custom Period Base-Jan to Mar Comparison-Jan to Aug
    await t
    .click(Selector('#minimodal div').withText('Jan').nth(15))
    .click(Selector('#minimodal span').withText('Mar').nth(1))
    .click(Selector('#minimodal div').withText('Jan').nth(17))
    .click(Selector('#minimodal span').withText('Aug').nth(2))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'CustomePeriod-Selected')
    await t
    .click(Selector('div.modal-footer').find('.btn.bf-ui-button.btn-secondary').withText('Apply'))
    //Time Aggregation
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