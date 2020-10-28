import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../../Util/vrtUtil";
import signIn from "../../../pages/signIn";
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../../pages/checkboxes"
import { tree, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, model } from '../../../pages/common';
import{navigationPanelMonth,navigationPanelYtD,navigationPanelFullYear,navigationPanelSimMths} from '../../../pages/navigationPanel';
fixture `Sanity-Certified`
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/4cc3e35f-3b06-4beb-8cb3-486adf5c7b8a/ReportSection`
.meta('ID','VDT-1414')
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
    .meta('ID','VDT-1414')
    .meta('SEVERITY','blocker')
    ('Value Display-Periods Section', async t => {
    await t
    .maximizeWindow()
    .click(Selector('a').withText('SIGN IN'))
    .typeText(Selector('#i0116'), 'valqtestuser@visualbi.com')
    .click(Selector('#idSIButton9'))
    .typeText(Selector('#i0118'), 'acdee@421')
    .click(Selector('#idSIButton9'))
    .click(Selector('#idSIButton9'))
    .click(Selector('div.appBarContent.appThemeable.light-mode.ng-star-inserted').find('button.actionBarBtn.hideAtMediumSize.showAtXXLargeSize.ng-star-inserted').nth(1))
    
    await switchToIframe()
    await t
    .click(Selector('#wizbar span').withText('Model'))
    .click(Selector('#sandbox-host span').withText('New'))
    .click(Selector('#sandbox-host div').withText('Load valQ model with sample data').nth(17))
    .click(Selector('#modal-root button').withText('Yes'))
    .click(Selector('#modal-root div').withText('Personal Finance').nth(10))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree_Creation')
  
    await simulate()
    await t
    .click(Selector('div.d2VDTIconButton.periodToButton').withText('[to]'))
    .click(Selector('div.sectionContent').find('div.col-multi').find('div.d2VDTNavItemTitle').withText('Mar'))
    .click(Selector('div.sectionContent').find('div.col-multi').find('div.d2VDTNavItemTitle').withText('Mar'))
    .click(Selector('div.sectionContent').find('div.col-multi').find('div.d2VDTNavItemTitle').withText('Dec'))
    .click(Selector('div.sectionContent').find('div.col-multi').find('div.d2VDTNavItemTitle').withText('Mar'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sim_Months')

    await navigationPanelMonth()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Month')
    await navigationPanelYtD() 
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Year-to-Date')
    await navigationPanelFullYear()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'FullYr')
    await navigationPanelSimMths()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sim_Months')
    });