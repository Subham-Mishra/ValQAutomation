import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../../Util/vrtUtil";
import signIn from "../../../pages/signIn";
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../../pages/checkboxes"
import { tree, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, model } from '../../../pages/common';

fixture `Sanity-Certified`
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/4cc3e35f-3b06-4beb-8cb3-486adf5c7b8a/ReportSection`
.meta('ID','VDT-1422')
    .meta({'author': 'Automation','Date':'21-Sept-2020'})
    .meta('SEVERITY','Critical')
    .meta('TEST_RUN','1.9.0')

// .before(async ctx  => {
//     ctx.someProp = 123;
//     console.log('Test started..',currentFixture);
// })
// .after(async ctx  => {
//     console.log(ctx.newProp); // > abc
//     console.log('Test Ended..',currentFixture);
// });

test
    .meta('ID','VDT-1422')
    .meta('SEVERITY','blocker')
    ('-Visualization View Mode-Table View', async t => {
    await t
    .maximizeWindow()
    .click(Selector('a').withText('SIGN IN'))
    .typeText(Selector('#i0116'), 'valqtestuser@visualbi.com')
    .click(Selector('#idSIButton9'))
    .typeText(Selector('#i0118'), 'acdee@421')
    .click(Selector('#idSIButton9'))
    .click(Selector('#idSIButton9'))
    .click(Selector('#editBtn'))
    .wait(100000)
    //.click(Selector('div.appBarContent.appThemeable.light-mode.ng-star-inserted').find('button.actionBarBtn.hideAtMediumSize.showAtXXLargeSize.ng-star-inserted').nth(1))
    
    await switchToIframe()
    await t
    .click(Selector('#wizbar span').withText('Model'))
    .click(Selector('#sandbox-host span').withText('New'))
    .click(Selector('#sandbox-host div').withText('Load valQ model with sample data').nth(17))
    .click(Selector('#modal-root button').withText('Yes'))
    .click(Selector('#modal-root div').withText('Mining Industry').nth(10))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree_Creation')
    await t
    .click(Selector('#wizbar span').withText('Simulate'))
    .click(Selector('div.d2VDTSection.topNode').find('div.navToggle'))
    .click(Selector('div.d2VDTSection.periods').find('div.navToggle'))
    .click(Selector('div.d2VDTSection.assump').find('div.navToggle'))
    .click(Selector('div.d2VDTSection.kpi').find('div.navToggle'))
    .click(Selector('div.d2VDTSection.constraints').find('div.navToggle'))
    .click(Selector('div.col-multi.displayMode').find('div.d2VDTNavItemTitle').withText('Table'))
    .click(Selector('div.col-multi.displayMode').find('div.d2VDTNavItemTitle').withText('Tree'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree_View')
    await t
    .click(Selector('div.col-multi.displayMode').find('div.d2VDTNavItemTitle').withText('Table'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_View')

    });