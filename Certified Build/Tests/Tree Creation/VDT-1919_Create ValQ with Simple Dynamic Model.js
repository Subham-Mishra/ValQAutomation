import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../../Util/vrtUtil";
import signIn from "../../../pages/signIn";
//import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/checkboxes"
import { tree, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan } from '../../../pages/common';

fixture `Sanity-Certified`
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/5bbff19b-4d67-4cd2-bcfe-f448e17a7082`
.meta('ID','VDT-1919')
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
    .meta('ID','VDT-1919')
    .meta('SEVERITY','blocker')
    ('ValQ with Simple Dynamic Model', async t => {
    await t
    .maximizeWindow()
    .click(Selector('a').withText('SIGN IN'))
    .typeText(Selector('#i0116'), 'valqtestuser@visualbi.com')
    .click(Selector('#idSIButton9'))
    .typeText(Selector('#i0118'), 'acdee@421')
    .click(Selector('#idSIButton9'))
    .click(Selector('#idSIButton9'))
    .click(Selector('#editBtn'))
    .wait(20000)
    await switchToIframe()
    await t
    .click(Selector('#sandbox-host'))
    await switchToMainWindow()
    await t
    .click(Selector('#pvExplorationHost div').withText('48month-4yr').nth(8))
    .click(Selector('#fieldListProp_1_pbi'))
    .click(Selector('#fieldListProp_3_pbi'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Scenario1')
    await switchToMainWindow()
    await t
    .click(Selector('#pvExplorationHost div').withText('Single measure').nth(8))
    .click(Selector('#fieldListProp_6_pbi'))
    .click(Selector('#pvExplorationHost div').withText('Table157').nth(8))
    .click(Selector('#fieldListProp_10_pbi'))
    await switchToIframe()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Scenario2')
    await t
    .click(Selector('div.d2VDTSection.scenarios').find('div.d2VDTIconButton.newScenario'))
    await switchToMainWindow()
    await t
    .click(Selector('#pvExplorationHost div').withText('Sheet1').nth(8))
    .click(Selector('#fieldListProp_18_pbi'))
    .click(Selector('#pvExplorationHost div').withText('48month-4yr').nth(8))
    .click(Selector('#pvExplorationHost div').withText('Single measure').nth(8))
    .click(Selector('#fieldListProp_11_pbi'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Scenario3')
    await switchToMainWindow()
    await t
    .click(Selector('#pvExplorationHost div').withText('Single measure').nth(8))
    
    .click(Selector('#fieldListProp_23_pbi'))
    .click(Selector('#pvExplorationHost div').withText('Single measure').nth(8))
    .click(Selector('#fieldListProp_21_pbi'))
    .click(Selector('#fieldListProp_18_pbi'))
    .click(Selector('#pvExplorationHost div').withText('48month-4yr').nth(8))
    .click(Selector('#fieldListProp_27_pbi'))
     await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Scenario4')

    });
