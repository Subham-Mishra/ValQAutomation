import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { VDT2680_Variance_Analysis } from "../../pages/urlPage";
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/varianceAnalysis"
import { tree, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan } from '../../pages/common';
import xPathToCss from 'xpath-to-css';
//const signInVarAnalysis = Role(VDT2680_Variance_Analysis, signIn, { preserveUrl: true })

fixture `VarianceAnalysis`
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/d4ad791b-0e1c-491d-a3d2-58272d1b2e50/ReportSection`
    .meta('ID','VDT-1595')
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
    .meta('ID','VDT-1595')
    .meta('SEVERITY','blocker')
    ('Filter', async t => { 
    await t
    .click(Selector('a').withText('SIGN IN'))
    .maximizeWindow()
    .typeText(Selector('#i0116'), 'valqtestuser@visualbi.com')
    .click(Selector('#idSIButton9'))
    .typeText(Selector('#i0118'), 'acdee@421')
    .click(Selector('#idSIButton9'))
    .click(Selector('#idSIButton9'))
    .wait(70000)
    //Analyze
    await switchToIframe()
    await t.wait(20000)
    await analyze()
    await varianceAnalysis()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VA_HomePage')
    //Unchecking Full Year and Unit in Period Aggregaton
    await t
    .click(Selector('.va-row.va-period-type'))
    await fullYear()
    await t 
    .click(Selector('span.resize-column'))
    .click(Selector('div.va-row').find('label.bf-ui-form-checkbox.form-checkbox.toolbar-checkbox').withText('Unit'))
    //Filter top 10 of Periodic, All-Set by default
    await t
    .click(Selector('div.va-search-bar').find('div.va-apply-filter-btn.toolbar-btn.horizontal.sm').find('label').withText('Filter'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter_Clicked')
    await t
    .click(Selector('#minimodal button').withText('Apply'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter1')
    //Filter-Top 5 values of QTD(Positive only)
    await t
    .click(Selector('.va-row.va-period-type'))
    await quarterToDate()
    await period()
    await fullYear()
    await t 
    .click(Selector('span.resize-column'))
    .click(Selector('div.va-search-bar').find('div.va-apply-filter-btn.toolbar-btn.horizontal.sm').find('label').withText('Filter'))
    .click(Selector('#minimodal .va-filter-show-top-count'))
    .pressKey('backspace')
    .pressKey('backspace')
    .typeText(Selector('#minimodal .va-filter-show-top-count'),'5')
    .click(Selector('#minimodal .form-icon').nth(3))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter2-Popup')
    await t
    .click(Selector('#minimodal button').withText('Apply'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter2')
    //Filter 3-Base vs Sc1-Top 5 Full Year(Negative Only)
    await t
    .click(Selector('.dropdown-control').nth(1))
    .click(Selector('.dropdown-menu').find('span').withText('Scenario 1'))
    await t
    .click(Selector('.va-row.va-period-type'))
    await t
    .click(Selector('#sandbox-host div').withText('Filter').nth(6))
    .click(Selector('#minimodal div').withText('Quarter-to-date').nth(7))
    .click(Selector('#minimodal span').withText('Full Year'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter3-Popup')
    await t
    .click(Selector('#minimodal button').withText('Apply'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter3')
    //Selecting Half Year, Halfyear to date and Year to go from Time Agg Dropdown
    await t
    .click(Selector('#sandbox-host div').withText('Full Year').nth(25))
    await period()
    await halfYear()
    await halfYearToDate()
    await yearToGo()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'TimeAgg-Selected')
    await t
    .click(Selector('#sandbox-host .navToggle.arrow-icon').nth(4))
   
    //Filter-Essentials Node, All Children-Year To go-Top 5 of All
    .click(Selector('#sandbox-host label').withText('Filter'))
    .click(Selector('#minimodal .bf-ui-form-multi-select.form-multi-select'))
    .typeText(Selector('#minimodal .bf-ui-form-multi-select.form-multi-select'),'Essentials')
    .click(Selector('#minimodal span').withText('Essentials'))
    .click(Selector('#minimodal .form-icon').nth(2))
    .click(Selector('#minimodal .navToggle.arrow-icon'))
    .click(Selector('#minimodal span').withText('Year-to-go'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter4-Popup')
    await t
    .click(Selector('#minimodal button').withText('Apply'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter4')
    //Filter-Children of Essentials-Utilities, Groceries, Maintenance-Half Year, Top 5-No Scenario
    await t
    .click(Selector('#sandbox-host label').withText('Filter'))
    .click(Selector('#minimodal .form-icon').nth(1))
    .click(Selector('#minimodal div').withText('Year-to-go').nth(7))
    .click(Selector('#minimodal span').withText('Half Year'))
    .click(Selector('#minimodal .bf-ui-form-multi-select.form-multi-select').nth(1))
    .click(Selector('#minimodal span').withText('Utilities'))
    .click(Selector('#minimodal .bf-ui-form-multi-select.form-multi-select').nth(1))
    .click(Selector('#minimodal span').withText('Groceries'))
    .click(Selector('#minimodal .bf-ui-form-multi-select.form-multi-select').nth(1))
    .click(Selector('#minimodal span').withText('Maintenance'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter5-Popup')
    await t
    .click(Selector('#minimodal button').withText('Apply'))
    .click(Selector('#sandbox-host .hier.icon.collapsed'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter5')
    //Filter-Children of Essentials-Utilities, Groceries, Maintenance-Half Year, Top 5-Scenario 1
    await t
    .click(Selector('#sandbox-host div').withText('Scenario 1').nth(21))
    .click(Selector('#sandbox-host span').withText('No Scenario'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter6')
    //Filter-Selected Children of Investment&Others
    await t
    .click(Selector('#sandbox-host label').withText('Filter'))
    .click(Selector('#minimodal .bf-ui-form-multi-select.form-multi-select'))
    .click(Selector('#minimodal span').withText('Investment and Others'))
    .click(Selector('#minimodal .form-icon').nth(2))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter7-Popup')
    await t
    .click(Selector('#minimodal button').withText('Apply'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter7')
    });