import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { VDT2680_Variance_Analysis } from "../../pages/urlPage";
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/checkboxes"
import { tree, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan } from '../../pages/common';
//const signInVarAnalysis = Role(VDT2680_Variance_Analysis, signIn, { preserveUrl: true })

fixture `VarianceAnalysis`
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/2d6157e3-4230-4cef-bc18-f9a51e875024/ReportSection`
    .meta('ID','VDT-2683')
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
    .meta('ID','VDT-2683')
    .meta('SEVERITY','blocker')
    ('Custom Period Selection-BaselineVSComparison&Target', async t => {
    await t
    //.useRole(signInVarAnalysis)
    .click(Selector('a').withText('SIGN IN'))
    .maximizeWindow()
    .typeText(Selector('#i0116'), 'valqtestuser@visualbi.com')
    .click(Selector('#idSIButton9'))
    .typeText(Selector('#i0118'), 'acdee@421')
    .click(Selector('#idSIButton9'))
    .click(Selector('#idSIButton9'))
    .wait(80000)
    await switchToMainWindow()
    await t
    .click(Selector('#editBtn span').withText('Edit'))
    await switchToIframe()
    //Locking model in Plan tab
    await plan()
    await t
    .click(Selector('#minimodal button').withText('Lock'))
    .selectText(Selector('#minimodal .bf-ui-form-input.form-input'),12,0)
    .pressKey('backspace')
    .typeText(Selector('#minimodal .bf-ui-form-input.form-input'),'Allocation Series') //Series Renaming
    .click(Selector('#minimodal button').withText('Submit'))
    //Allocating Tea and Coffee Node-Based on Weights
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
    await t.wait(20000)
    await varianceAnalysis()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_HomePage')

    //Changing Base-to Forecast and Comparison Series-to Addnl1, Alloc Series
    await t
    .click(Selector('div.dropdown-control').find('.dropdown-placeholder.is-selected').withText('Budget'))
    .click(Selector('div.dropdown-menu').find('span').withText('Forecast'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'BaseSeries')
    await t
    .click(Selector('div.dropdown-control').find('div.dropdown-placeholder.is-placeholder').withText('Forecast'))
    .click(Selector('.dropDown-options-checkbox').find('span').withText('Additional 1'))
    .click(Selector('.dropDown-options-checkbox').find('span').withText('Allocation Series'))
    .click(Selector('.dropDown-options-checkbox').find('span').withText('Forecast'))
    .click(Selector('div.va-row').find('label.bf-ui-form-checkbox.form-checkbox.toolbar-checkbox').withText('Unit'))
    //.click(Selector('div.grid-row header').find('div.grid-cell').withText('Additional 1 Var'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'ComparisonSeries')
    //Custom Period Popup
    await t
    .click(Selector('.dropdown-control').withText('Jan'))
    .click(Selector('.dropdown-menu').find('div.dropdown-option').withText('Custom'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'CustomPeriod-Popup')
    //Base-Jan to mar and Comparison-Jan to Sept
    await t
    .click(Selector('#minimodal div').withText('Jan').nth(15))
    .click(Selector('#minimodal span').withText('Mar').nth(1))
    .click(Selector('#minimodal div').withText('Jan').nth(17))
    .click(Selector('#minimodal span').withText('Sep').nth(2))
    //take ss here
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