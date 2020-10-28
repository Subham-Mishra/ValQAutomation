import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../../Util/vrtUtil";
import signIn from "../../../pages/signIn";
//import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/checkboxes"
import { tree, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, model } from '../../../pages/common';

fixture `Sanity-Certified`
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/4cc3e35f-3b06-4beb-8cb3-486adf5c7b8a/ReportSection`
.meta('ID','VDT-1413')
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
    .meta('ID','VDT-1413')
    .meta('SEVERITY','blocker')
    ('Simulation Period Section', async t => {
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
    
    await switchToIframe()
    await t
    .click(Selector('#wizbar span').withText('Model'))
    .click(Selector('#sandbox-host span').withText('New'))
    .click(Selector('#sandbox-host div').withText('Load valQ model with sample data').nth(17))
    .click(Selector('#modal-root button').withText('Yes'))
    .click(Selector('#modal-root div').withText('Personal Finance').nth(10))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree_Created')
  
    await simulate()
    await t
    .click(Selector('div.d2VDTIconButton.periodToButton').withText('[to]'))
    .click(Selector('div.sectionContent').find('div.col-multi').find('div.d2VDTNavItemTitle').withText('Jul'))
    .click(Selector('div.sectionContent').find('div.col-multi').find('div.d2VDTNavItemTitle').withText('Jul'))
    .click(Selector('div.sectionContent').find('div.col-multi').find('div.d2VDTNavItemTitle').withText('Dec'))
    .click(Selector('div.sectionContent').find('div.col-multi').find('div.d2VDTNavItemTitle').withText('Jul'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sim_Months')
   await model()
   await t
   .doubleClick(Selector('#sandbox-host div').withText('N1: Income').nth(22))
   .click(Selector('#modal-root span').withText('Simulation'))
   .click(Selector('#modal-root div').withText('% Change applied to baseline in future periods').nth(13))
   .click(Selector('#modal-root button').withText('Finish'))

    
    await simulate()
    await t
    .hover(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
    .click(Selector('g').find('rect.d2VDTshowSim'))
    .click(Selector('g').find('text.d2VDTIcon'))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .doubleClick(Selector('.grid-cell').nth(17), {
    caretPos: 0
    })
    .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '25')
    .click(Selector('.grid-fixed-virtualized'))
    .click(Selector('.d2VDTClose'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Simulation')
    });