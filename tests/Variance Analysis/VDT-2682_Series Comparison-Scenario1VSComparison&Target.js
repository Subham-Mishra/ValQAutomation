import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { VDT2680_Variance_Analysis } from "../../pages/urlPage";
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, scenario1, seriesDropdown, varianceAnalysis } from "../../pages/navigationPanel"
import { tree, table, switchToIframe, analyze,simulate, switchToMainWindow, editIcon, editOption } from '../../pages/common';

const signInVarAnalysis = Role(VDT2680_Variance_Analysis, signIn, { preserveUrl: true })

fixture `VarianceAnalysis`
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/2d6157e3-4230-4cef-bc18-f9a51e875024/ReportSection`
    .meta('ID','VDT-2682')
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
    .meta('ID','VDT-2682')
    .meta('SEVERITY','blocker')
    ('Series Comparison-IncludeScenario', async t => { //unit and variance already unchecked by default
    await t
    .useRole(signInVarAnalysis)
    .wait(70000)
    await switchToIframe()
    await t.wait(20000)
    await analyze()
    await varianceAnalysis()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_HomePage')
    //Unchecking unit
    await t 
    .click(Selector('div.va-row').find('label.bf-ui-form-checkbox.form-checkbox.toolbar-checkbox').withText('Unit'))
    //Including Scenario 1
    await t
    .click(Selector('.dropdown-control').nth(1))
    .click(Selector('.dropdown-menu').find('span').withText('Scenario 1'))
    .click(Selector('span.resize-column'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Scenario1-Clicked')
    //Changing comparison from Forecast to Budget and Additional 1
    await t
    .click(Selector('div.dropdown-placeholder.is-placeholder').withText('Forecast'))
    .click(Selector('.dropDown-options-checkbox').find('span').withText('Budget'))
    .click(Selector('.dropDown-options-checkbox').find('span').withText('Additional 1'))
    .click(Selector('.dropDown-options-checkbox').find('span').withText('Forecast'))
    .click(Selector('div.grid-scrollable-virtualized.grid-scroll-container').find('.cell-view').withText('290m'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Comparison-change')
    //Changing time period from Jan to Feb
    await t
    .click(Selector('.dropdown-control').withText('Jan'))
    .click(Selector('.dropdown-menu').find('div.dropdown-option').withText('Feb'))
    .click(Selector('span.resize-column'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'February-Clicked')
    // await t
    // .click(Selector('div.va-toggle-toolbar-btn.toolbar-btn.horizontal.sm').find('div.toolbar-icon.toolbar-show'))
    // .click(Selector('div.grid-td.text.fixed-col.size-lg.hier.uncollapsed.first-col').find('div.hier.icon.uncollapsed').nth(1))
    // await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'ValueChange')
    // await t
    // .click(Selector('div.va-toggle-toolbar-btn.toolbar-btn.horizontal.sm').find('div.toolbar-icon.toolbar-hide'))
    //Checking all time Aggregation
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
    await t
    .click(Selector('div.dropdown-control').find('.dropdown-placeholder.is-selected').withText('Budget'))
    .click(Selector('div.dropdown-menu').find('span').withText('Additional 3'))
    .click(Selector('div.va-row').find('label.bf-ui-form-checkbox.form-checkbox.toolbar-checkbox').withText('Unit'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'ValueChange')


    

});

        