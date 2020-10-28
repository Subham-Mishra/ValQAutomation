import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { Attribute_Analysis } from '../../pages/urlPage';
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/navigationPanel"
import { tree,SignIn,editOption,Login, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, model } from '../../pages/common';
import {navigationPanel0,navigationPanelFullYear, navigationPanelJanuary, navigationPanelYtD } from "../../pages/navigationPanel";
const signInAttrAnalysis = Role(Attribute_Analysis, signIn, { preserveUrl: true })
fixture `Attribution Analysis`

.meta('ID','VDT-2935')
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
    .meta('ID','VDT-2935')
    .meta('SEVERITY','blocker')
    ('Summary Case-Scenario 1', async t => {
        //scaling(neg number formatting), tooltip
        await t
        .useRole(signInAttrAnalysis)
        await switchToMainWindow()
        await t
        .wait(80000)
        .click(Selector('#editBtn'))
        .wait(25000)
        await switchToIframe()
        await plan()
        await t
        .click(Selector('#wizbar span').withText('Model'))
        .click(Selector('#sandbox-host span').withText('New'))
        .click(Selector('#sandbox-host div').withText('Load valQ model with sample data').nth(17))
        .click(Selector('#modal-root button').withText('Yes'))
        .click(Selector('#modal-root div').withText('Personal Finance').nth(11))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree_Created')
        await t
        .click(Selector('#wizbar span').withText('Upload'))
        .click(Selector('#wizbar .storage-tree-name-input'))
        .typeText(Selector('#wizbar .storage-tree-name-input'),'Summary Case-Scenario 1')
        .click(Selector('#wizbar .form-icon'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sc1_Upload')
        await t
        .click(Selector('#wizbar button').withText('Upload'))
        await simulate()
        //New scenario Creation
        await t
        .click(Selector('div.d2VDTSection.scenarios').find('div.d2VDTIconButton.newScenario'))
        .click(Selector('div.sectionContent').find('div.col-1.scenarios').find('div.d2VDTNavItemTitle').withText('Scenario 1'))
        .click(Selector('#N12 .d2VDTToggleOverlay'))
        .hover(Selector('#N12A').find('path.d2VDTNode.d2VDTFocus')) //Essentials Node simulation
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .doubleClick(Selector('#sandbox-host .grid-cell').nth(17))
        .pressKey('5')
        .pressKey('0')
        .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '50')
        .click(Selector('.grid-fixed-virtualized'))
        .click(Selector('.d2VDTClose'))
        .hover(Selector('#N93T').find('path.d2VDTNode.d2VDTFocus'))  //Discretionary simulation
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .doubleClick(Selector('#sandbox-host .grid-cell').nth(17))
        .pressKey('5')
        .pressKey('0')
        .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '50')
        .click(Selector('.grid-fixed-virtualized'))
        .click(Selector('.d2VDTClose'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sc1_Simulate')
        //Attr Analysis HomePage
        await analyze()
        await t
        .click(Selector('#wizbar div').withText('Attribution Analysis').nth(5))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Attr_Analysis')
        await simulate()
        await t
        .click(Selector('div.sectionContent').find('div.col-1.scenarios').find('div.nav-actions.shareScenarioIcon'))
        .wait(3000)
        .click(Selector('#minimodal button').withText('Share'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sc1_Shared')
        await t
        .click(Selector('div.sectionContent').find('div.col-1.scenarios').find('div.d2VDTNavItemTitle').withText('Scenario 2'))
        .hover(Selector('#N12B').find('path.d2VDTNode.d2VDTFocus'))//Kids
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .doubleClick(Selector('#sandbox-host .grid-cell').nth(17))
        .pressKey('5')
        .pressKey('0')
        .click(Selector('.d2VDTClose'))
        //Checking attr analysis for Non-Simulated Node
        await analyze()
        await t
        .click(Selector('#wizbar div').withText('Attribution Analysis').nth(5))
        .click(Selector('#sandbox-host .bf-ui-form-input.form-input'))
        .click(Selector('#sandbox-host p').withText('12B: Kids'))
        .click(Selector('#sandbox-host div').withText('Scenario 2').nth(15))
        .click(Selector('#sandbox-host span').withText('Scenario 1'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'AttrAnalysis_No Sim')
        //Checking if YTD in not present in Attr Analysis
        await t
        .click(Selector('#sandbox-host div').withText('Full Year').nth(14))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'AttrAnalysis_No YTD_1')
        await simulate()
        await t
        .click(Selector('div.sectionContent').find('div.col-1.scenarios').find('div.d2VDTNavItemTitle').withText('Scenario 1'))
        await navigationPanelYtD()
        //Checking if YTD in not present in Attr Analysis in Scenario 1
        await analyze()
        await t
        .click(Selector('#wizbar div').withText('Attribution Analysis').nth(7))
        .click(Selector('#sandbox-host .navToggle.arrow-icon').nth(1))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'AttrAnalysis_No YTD_2')

    });
    
    
    

//Steps for Scenario 2,3,4 are eliminated because they are the same as the initial steps of scenario 1 and 5
    test
    .meta('ID','VDT-2935')
    .meta('SEVERITY','blocker')
    ('Summary Case-Scenario 5', async t => {
        await t
        .useRole(signInAttrAnalysis)
        await switchToMainWindow()
        await t
        .wait(80000)
        .click(Selector('#editBtn'))
        .wait(25000)
        await switchToIframe()
        await t
        .click(Selector('#wizbar span').withText('Model'))
        .click(Selector('#sandbox-host span').withText('New'))
        .click(Selector('#sandbox-host div').withText('Load valQ model with sample data').nth(17))
        .click(Selector('#modal-root button').withText('Yes'))
        .click(Selector('#modal-root div').withText('Personal Finance').nth(11))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree_Created')
        await t
        .click(Selector('#wizbar span').withText('Upload'))
        .click(Selector('#wizbar .storage-tree-name-input'))
        .typeText(Selector('#wizbar .storage-tree-name-input'),'Summary Case-Scenario 5')
        .click(Selector('#wizbar .form-icon'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sc5_Upload')
        await t
        .click(Selector('#wizbar button').withText('Upload'))
        await simulate()
        await t
        .click(Selector('#N12 .d2VDTToggleOverlay'))
        .hover(Selector('#N12A').find('path.d2VDTNode.d2VDTFocus')) //Essentials Node
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .doubleClick(Selector('#sandbox-host .grid-cell').nth(17))
        .pressKey('5')
        .pressKey('0')
        .click(Selector('.d2VDTClose'))
        .hover(Selector('#N93T').find('path.d2VDTNode.d2VDTFocus'))  //Discretionary
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .doubleClick(Selector('#sandbox-host .grid-cell').nth(17))
        .pressKey('5')
        .pressKey('0')
        .click(Selector('.d2VDTClose'))
        .hover(Selector('#N12B').find('path.d2VDTNode.d2VDTFocus'))//Kids
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .doubleClick(Selector('#sandbox-host .grid-cell').nth(17))
        .pressKey('7')
        .pressKey('5')
        .click(Selector('.d2VDTClose'))
        .hover(Selector('#N80').find('path.d2VDTNode.d2VDTFocus'))//Pets
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .doubleClick(Selector('#sandbox-host .grid-cell').nth(17))
        .pressKey('7')
        .pressKey('5')
        .click(Selector('.d2VDTClose'))
        .hover(Selector('#N84').find('path.d2VDTNode.d2VDTFocus'))//Estimated Cost
        .click(Selector('g').find('rect.d2VDTshowSim'))
        .click(Selector('g').find('text.d2VDTIcon'))
        .doubleClick(Selector('#sandbox-host .grid-cell').nth(17))
        .pressKey('1')
        .pressKey('0')
        .pressKey('0')
        .click(Selector('.d2VDTClose'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sc5_Simulate')
        await t
        .click(Selector('div.sectionContent').find('div.col-1.scenarios').find('div.nav-actions.shareScenarioIcon'))
        .wait(3000)
        .click(Selector('#minimodal button').withText('Share'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sc5_Shared')
        await navigationPanelFullYear()
        await navigationPanel0()
        await navigationPanelJanuary()
        await analyze()
        await t
        .click(Selector('#wizbar div').withText('Attribution Analysis').nth(7))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Att_Analysis')
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'AA_Savings')
        //Verifying Tool tip of horizontal chart
        await t
        .hover(Selector('#sandbox-host .bar'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'HorizPerformance_TTip')
        await t
        .hover(Selector('#sandbox-host .bar.neg'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'HorizNegativeBar_TTip')
        await t
        .hover(Selector('#sandbox-host .bar.current'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'HorizSimBar_TTip')
        await t
        .click(Selector('div.data-container').find('div.analysis-chart-switch').find('span.analysis-chart-flip.vertical'))
        //Verifying Tool tip of vertical chart
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Vertical_Chart')
        await t
        .hover(Selector('#sandbox-host .bar'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VertPerformance_TTip')
        await t
        .hover(Selector('#sandbox-host .bar.neg'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VertNegativeBar_TTip')
        await t
        .hover(Selector('#sandbox-host .bar.current'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VertSimBar_TTip')
        await t
        .click(Selector('div.data-container').find('div.chart-area').find('span.analysis-chart-maximize'))
        //Verifying Tool tip of Full Screen Vertical chart
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'FullScr_Chart')
        await t
        .hover(Selector('#sandbox-host .bar'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VertFullScrPerformance_TTip')
        await t
        .hover(Selector('#sandbox-host .bar.neg'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VertFullScrNegativeBar_TTip')
        await t
        .hover(Selector('#sandbox-host .bar.current'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'VertFullScrSimBar_TTip')
        await t
        .click(Selector('div.data-container.max').find('div.analysis-chart-switch').find('span.analysis-chart-flip.horizontal'))
        //Verifying Tool tip of FullScreen horizontal chart
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Horiz_Chart')
        await t
        .hover(Selector('#sandbox-host .bar'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'HorizFullScrPerformance_TTip')
        await t
        .hover(Selector('#sandbox-host .bar.neg'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'HorizFullScrNegativeBar_TTip')
        await t
        .hover(Selector('#sandbox-host .bar.current'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'HorizFullScrSimBar_TTip')
        await simulate()
        await analyze()
        await t
        .click(Selector('#wizbar div').withText('Attribution Analysis').nth(5));
        await t
        .click(Selector('#sandbox-host .bf-ui-form-input.form-input'));
        //Unchecking unit in Attr Analysis Table
        await t
        .click(Selector('#sandbox-host p').withText('12: Expenses'))
        .click(Selector('#sandbox-host span').withText('Show Contribution %'))
        .click(Selector('#sandbox-host span').withText('Show Unit'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Uncheck_Unit')
        //Full Screen Table
        await t
        .click(Selector('div.grid-area').find('span.analysis-chart-maximize'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'FullScr_Table')
        await simulate()
        await analyze()
        //Searching for a node in Attr Analysis
        await t
        .click(Selector('#wizbar div').withText('Attribution Analysis').nth(5))
        .typeText(Selector('#sandbox-host .bf-ui-form-input.form-input'),'income')
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Search_Node 1')
        await t
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#sandbox-host .bf-ui-form-input.form-input'),'o')
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Search_Node 2')
        //Changing time period from Apr to Dec
        await t
        .click(Selector('#sandbox-host p').withText('TOP: Savings'))
        .click(Selector('#sandbox-host span').withText('Jan - Dec'))
        .click(Selector('#sandbox-host div').withText('Apr').nth(15))
        .click(Selector('#sandbox-host div').withText('Dec').nth(15))
        .click(Selector('#sandbox-host div').withText('Full Year').nth(14))
        .click(Selector('#sandbox-host span').withText('Sim-mths'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'TimePeriod')
        //Changing timePeriod to Apr month
        await t
        .click(Selector('#sandbox-host span').withText('Apr - Dec'))
        .click(Selector('#sandbox-host div').withText('Apr').nth(16))
        .click(Selector('#sandbox-host .bf-ui-form-input.form-input'));
        await t
        .click(Selector('#sandbox-host p').withText('12: Expenses'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Apr_Month')
    });




    test
    .meta('ID','VDT-2935')
    .meta('SEVERITY','blocker')
    ('Summary Case-Scenario 6', async t => {
        await t
        .useRole(signInAttrAnalysis)
        await switchToMainWindow()
        await t
        .wait(80000)
        .click(Selector('#editBtn'))
        .wait(25000)
        await switchToIframe()
        await t
        .click(Selector('#wizbar span').withText('Model'))
        .click(Selector('#sandbox-host span').withText('New'))
        .click(Selector('#sandbox-host div').withText('Load valQ model with sample data').nth(17))
        .click(Selector('#modal-root button').withText('Yes'))
        .click(Selector('#modal-root div').withText('Personal Finance').nth(11))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree_Created')
        await t
        .click(Selector('#wizbar span').withText('Upload'))
        .click(Selector('#wizbar .storage-tree-name-input'))
        .typeText(Selector('#wizbar .storage-tree-name-input'),'Summary Case-Scenario 6')
        .click(Selector('#wizbar .form-icon'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Sc5_Upload')
        await t
        .click(Selector('#wizbar button').withText('Upload'))
        //Cnaging to YTD in Nav Panel
        await simulate()
        await navigationPanelYtD()
        //Checking Attr Analysis for non-simulated Scenario
        await analyze()
        await t
        .click(Selector('#wizbar div').withText('Attribution Analysis').nth(5))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'AA_Without Sim')

    });