import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/navigationPanel"
import { tree,SignIn,editOption,Login, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, model } from '../../pages/common';
import {navigationPanel0,navigationPanelFullYear, navigationPanelJanuary,navigationPanelMarch,navigationPanel0k,navigationPanelSimMths,navigationPanel0_0b,navigationPanel0_0m, navigationPanelYtD } from "../../pages/navigationPanel";
fixture `Plan`

.meta('ID','VDT-3897')
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
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/0e003a27-3af4-4d77-91ae-34a4ed3c1647/ReportSection`

    .meta('ID','VDT-3897')
    .meta('SEVERITY','blocker')
    ('Summary Case 2-Part 1', async t => {
        await SignIn()  
        await switchToMainWindow()
        await t
        .wait(70000)
        .click(Selector('#editBtn'))
        .wait(25000)
        .click(Selector('#pvExplorationHost [class^="btn collapseIcon pbi-borderless-button glyphicon g"]'))
        .click(Selector('#pvExplorationHost [class^="btnIcon glyphicon pbi-glyph-chevronrightmedium gly"]'))
        .click(Selector('#pvExplorationHost [class^="btnIcon glyphicon pbi-glyph-chevronrightmedium gly"]'))  
        await switchToIframe()
        //Creating Personal Finance Dashboard
        await t
        .click(Selector('#wizbar span').withText('Model'))
        .click(Selector('#sandbox-host span').withText('New'))
        .click(Selector('#sandbox-host div').withText('Load valQ model with sample data').nth(17))
        .click(Selector('#modal-root button').withText('Yes'))
        .click(Selector('#modal-root div').withText('Personal Finance').nth(11))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree_Created')
        //Plan Tab Lock and Creating a new series based on Performance called Test
        await plan()
        await t
        .click(Selector('#minimodal button').withText('Lock'))
        .click(Selector('#minimodal .bf-ui-form-input.form-input'))
        .selectText(Selector('#minimodal .bf-ui-form-input.form-input'),12,0)
        .pressKey('backspace')
        .typeText(Selector('#minimodal .bf-ui-form-input.form-input'),'Test')
        .click(Selector('#minimodal div').withText('Performance').nth(9))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Series_Creation')
        await t
        .click(Selector('#minimodal button').withText('Submit'))
        //Capturing error message while trying to allocate without giving increment value
        .click(Selector('#sandbox-host div').withText('$230k').nth(22))
        .typeText(Selector('#sandbox-host .quick-input-text'),'+')
        .pressKey('enter') 
        //yellow tool tip capture
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'ErrorMsg')
        await t
        .click(Selector('#sandbox-host div').withText('Clear Change').nth(11))
        //Spouse 1 Allocation-Based on Weights
        .click(Selector('#sandbox-host .hier.icon.collapsed'))
        .click(Selector('#sandbox-host .hier.icon.collapsed'))
        .click(Selector('#sandbox-host div').withText('$105k').nth(10))
        .click(Selector('#sandbox-host .quick-input-text'))
        for(var i=0; i<8; i=i+1){
            await t
            .pressKey('backspace')
        }
        await t
        .typeText(Selector('#sandbox-host .quick-input-text'),'104,820+10%')
        .click(Selector('#sandbox-host div').withText('Weight').nth(13))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Alloc-Spouse1')
        //Checking info in status bar when a NODE IS CLICKED
        await t
        .click(Selector('#minimodal button').withText('Apply'))
        .click(Selector('#sandbox-host .hier.icon.collapsed'))
        .click(Selector('#sandbox-host div').withText('Payroll Tax').nth(12))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'StatusBar_Info')
        //Checking Trend for Expense Node
        await t
        .click(Selector('#sandbox-host .node-toolbar.icon').nth(8))
        .click(Selector('#sandbox-host div').withText('Edit node').nth(13))
        .click(Selector('#minimodal button').withText('Ok'))
        .click(Selector('#modal-root span').withText('Configuration'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Trend-Decrease')
        //Checking tool tip for a node with Decrease Trend
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        .hover(Selector('#sandbox-host div').withText('$28k').nth(11))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Trend-DecTTip')
        //Checking if New Seres is available in Series Switcher
        await simulate()
        await t
        .click(Selector('#wizbar div').withText('Performance').nth(6))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NewSeries-SimTab')
        await analyze()
        await varianceAnalysis()
        //Checking if New Seres is available in Variance Analysis
        await t
        .click(Selector('#sandbox-host div').withText('Performance').nth(13))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NewSeries-VA')
        //Unlockingmodel in Plan Tab
        await model()
        await t
        .click(Selector('#sandbox-host div').withText('Unlock').nth(15))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Series-Unlocked')
        await t
        .click(Selector('#modal-root button').withText('Yes'))
        //Setting the Value for Spouse 2 Net Salary as None
        .click(Selector('#N1 .d2VDTToggleOverlay'))
        .click(Selector('#N2 .d2VDTToggleOverlay'))
        .click(Selector('#sandbox-host .expand-collapse.node-collapsed'))
        .click(Selector('#sandbox-host .expand-collapse.node-collapsed'))
        .doubleClick(Selector('#sandbox-host div').withText('N99: Spouse 2 Net Salary').nth(22))
        .click(Selector('#modal-root span').withText('Values'))
        .click(Selector('#modal-root .bf-ui-form-select.form-select'))
        .click(Selector('#modal-root option').withText('None'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Spouse2-ValChange')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        await plan()
        //change-->hover on node and navigate to plan tab
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Test_Series')
        //Searching for a node in Plan Tab
        await t
        .click(Selector('#minimodal button').withText('Lock'))
        .click(Selector('#minimodal button').withText('Okay'))
        .typeText(Selector('#sandbox-host .quick-search-input'),'spouse')
        .click(Selector('#sandbox-host p').withText('N99: Spouse 2 Net Salary'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Spouse2&Children')
        //Spouse 2 Salary Ttal Allocation-Equals increase by 12.56%
        await t
        .click(Selector('#sandbox-host div').withText('$83,856').nth(14))
        .click(Selector('#sandbox-host .quick-input-text'))
        for(var i=0; i<8; i=i+1){
            await t
            .pressKey('backspace')
        }
        await t
        .typeText(Selector('#sandbox-host .quick-input-text'),'83,856+12.56%')
        .click(Selector('#sandbox-host label').withText('Equals'))
        .click(Selector('#minimodal span').withText('Append to Values'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Alloc-Spouse2Sal')
        //Clearing search
        await t
        .click(Selector('#minimodal button').withText('Apply'))
        .click(Selector('#sandbox-host .quick-search-clear'))
        .click(Selector('#sandbox-host .hier.icon.collapsed').nth(1))
        .click(Selector('#sandbox-host .hier.icon.collapsed').nth(2))
        //Food and Entertainment Allocation-Weight decrease by 3k
        .click(Selector('#sandbox-host div').withText('$11k').nth(11))
        .click(Selector('#sandbox-host .quick-input-text'))
        for(var i=0; i<8; i=i+1){
            await t
            .pressKey('backspace')
        }
        await t
        .typeText(Selector('#sandbox-host .quick-input-text'),'10,696-3k')
        .click(Selector('#sandbox-host div').withText('Weight').nth(13))
        .click(Selector('#minimodal span').withText('Append to Values'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Alloc-Food&Ent')
        await t
        .click(Selector('#minimodal button').withText('Apply'))
        .click(Selector('#sandbox-host .hier.icon.uncollapsed').nth(1))
        .click(Selector('#sandbox-host .hier.icon.collapsed'))
        //Investment and Others Allocation-Weight decrease by 7k
        .click(Selector('#sandbox-host div').withText('$22k').nth(13))
        .click(Selector('#sandbox-host .quick-input-text'))
        for(var i=0; i<8; i=i+1){
            await t
            .pressKey('backspace')
        }
        await t
        .typeText(Selector('#sandbox-host .quick-input-text'),'21,971-7k')
        .click(Selector('#sandbox-host div').withText('Weight').nth(13))
        .click(Selector('#minimodal .bf-ui-form-input.form-input'))
        .click(Selector('#minimodal span').withText('Benchmark'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Alloc-Inv&Others')
        await t
        .click(Selector('#minimodal button').withText('Apply'))
        //Changing node configration to Averaage
        .click(Selector('#sandbox-host .hier.icon.uncollapsed').nth(1))
        .click(Selector('#sandbox-host .hier.icon.collapsed').nth(1))
        .click(Selector('#sandbox-host .node-toolbar.icon').nth(8))
        .click(Selector('#sandbox-host div').withText('Edit node').nth(13))
        .click(Selector('#minimodal button').withText('Ok'))
        .click(Selector('#modal-root span').withText('Configuration'))
        .click(Selector('#modal-root .bf-ui-form-select.form-select').nth(1))
        .click(Selector('#modal-root option').withText('Average'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Calc-Average')

    });



    test
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/4f56c3c8-c052-47cd-b659-dfecd5c3411b/ReportSection`

    .meta('ID','VDT-3897')
    .meta('SEVERITY','blocker')
    ('Summary Case 2-Part 2', async t => {
        await SignIn()  
        await t
      
        await switchToMainWindow()
        await t
        .wait(70000)
        .click(Selector('#editBtn'))
        .wait(25000)
        .click(Selector('#pvExplorationHost [class^="btn collapseIcon pbi-borderless-button glyphicon g"]'))
        .click(Selector('#pvExplorationHost [class^="btnIcon glyphicon pbi-glyph-chevronrightmedium gly"]'))
        .click(Selector('#pvExplorationHost [class^="btnIcon glyphicon pbi-glyph-chevronrightmedium gly"]'))  
        await switchToIframe()
        await plan()
        //Plan Lock
        await t
        .click(Selector('#minimodal button').withText('Lock'))
        .click(Selector('#minimodal button').withText('Submit'))
        //Utilities Allocation-Trend increase by 5%
        .click(Selector('#sandbox-host .hier.icon.collapsed'))
        .click(Selector('#sandbox-host .hier.icon.collapsed').nth(1))
        .click(Selector('#sandbox-host .hier.icon.collapsed').nth(1))
        .click(Selector('#sandbox-host div').withText('$1k').nth(56))
        .click(Selector('#sandbox-host .quick-input-text'))
        for(var i=0; i<4; i=i+1){
            await t
            .pressKey('backspace')
        }
        await t
        .typeText(Selector('#sandbox-host .quick-input-text'),'526+5%')
        .click(Selector('#sandbox-host label').withText('Trend'))
        .click(Selector('#minimodal .bf-ui-form-input.form-input'))
        .typeText(Selector('#minimodal .bf-ui-form-input.form-input'),'15')
        .click(Selector('#minimodal span').withText('Append to Values'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Alloc-Utilities')
        await t
        .click(Selector('#minimodal button').withText('Apply'))
        //Groceries Allocation-Trend increase by value 120
        .click(Selector('#sandbox-host div').withText('$1k').nth(67))
        .click(Selector('#sandbox-host .quick-input-text'))
        for(var i=0; i<7; i=i+1){
            await t
            .pressKey('backspace')
        }
        await t
        .typeText(Selector('#sandbox-host .quick-input-text'),'1,078+1.2%')
        .click(Selector('#sandbox-host .toolbar-icon.trend'))
        .click(Selector('#minimodal span').withText('By Value'))
        .typeText(Selector('#minimodal .bf-ui-form-input.form-input'),'120')
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Alloc-Groceries')
        await t
        .click(Selector('#minimodal button').withText('Apply'))
        //Maintenance Allocation-Trend increase by value 120
        .click(Selector('#sandbox-host div').withText('$2k').nth(46))
        .click(Selector('#sandbox-host .quick-input-text'))
        for(var i=0; i<7; i=i+1){
            await t
            .pressKey('backspace')
        }
        await t
        .typeText(Selector('#sandbox-host .quick-input-text'),'2000')
        .click(Selector('#sandbox-host label').withText('Trend'))
        .click(Selector('#minimodal span').withText('By Value'))
        .typeText(Selector('#minimodal .bf-ui-form-input.form-input'),'50')
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Alloc-Maintenance')
   
    });



    test
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/0e003a27-3af4-4d77-91ae-34a4ed3c1647/ReportSection`

    .meta('ID','VDT-3897')
    .meta('SEVERITY','blocker')
    ('Summary Case 2-Part 3', async t => {
        await SignIn()  
        await t
      
        await switchToMainWindow()
        await t
        .wait(70000)
        .click(Selector('#editBtn'))
        .wait(25000)
        .click(Selector('#pvExplorationHost [class^="btn collapseIcon pbi-borderless-button glyphicon g"]'))
        .click(Selector('#pvExplorationHost [class^="btnIcon glyphicon pbi-glyph-chevronrightmedium gly"]'))
        .click(Selector('#pvExplorationHost [class^="btnIcon glyphicon pbi-glyph-chevronrightmedium gly"]'))  
        await switchToIframe()
        //Personal Finance Dashboard creation
        await model()
        await t
        .click(Selector('#wizbar span').withText('Model'))
        .click(Selector('#sandbox-host span').withText('New'))
        .click(Selector('#sandbox-host div').withText('Load valQ model with sample data').nth(17))
        .click(Selector('#modal-root button').withText('Yes'))
        .click(Selector('#modal-root div').withText('Personal Finance').nth(11))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree_Created')
        //Plan lock
        await plan()
        await t
        .click(Selector('#minimodal button').withText('Lock'))
        .click(Selector('#minimodal button').withText('Submit'))
        .click(Selector('#sandbox-host .node-toolbar.icon').nth(1))
        //Adding Child node to Income
        .click(Selector('#sandbox-host div').withText('Add child node').nth(13))
        .click(Selector('#minimodal span').withText('Don\'t show this message again'))
        .click(Selector('#minimodal button').withText('Ok'))
        .click(Selector('#modal-root .bf-ui-form-input.form-input').nth(1))
        .selectText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),14,0)
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'Test_Node')
        //Changing config of test Node to linked to Estimated Taxes
        .click(Selector('#modal-root span').withText('Configuration'))
        .click(Selector('#modal-root .bf-ui-form-select.form-select').nth(1))
        .click(Selector('#modal-root .bf-ui-form-select.form-select'))
        .click(Selector('#modal-root option').withText('Linked to Node'))
        .click(Selector('#modal-root .bf-ui-form-select.form-select').nth(1))
        .click(Selector('#modal-root option').withText('N84:  Estimated Taxes'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'TestNode_Creation')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        //Locking 2nd Quarter of Estimated Taxes
        .click(Selector('#sandbox-host div').withText('$2k').nth(79))
        .click(Selector('#sandbox-host div').withText('Hold').nth(10))
        .click(Selector('#sandbox-host div').withText('$2k').nth(82))
        .click(Selector('#sandbox-host div').withText('Hold').nth(10))
        .click(Selector('#sandbox-host div').withText('$2k').nth(85))
        .click(Selector('#sandbox-host div').withText('Hold').nth(10))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Quarter-Lock')
        //Estimated Tax allocation-decrease by 11%-Copy to Periods
        await t
        .click(Selector('#sandbox-host div').withText('$2k').nth(76))
        .click(Selector('#sandbox-host .quick-input-text'))
        for(var i=0; i<7; i=i+1){
            await t
            .pressKey('backspace')
        }
        await t
        .typeText(Selector('#sandbox-host .quick-input-text'),'2,430-11%')
        .click(Selector('#sandbox-host label').withText('Copy-to').nth(1))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Alloc-EstimatedTax')
        //Unlocking 2nd Quarter of Estimated Taxes
        await t
        .click(Selector('#sandbox-host div').withText('$2k').nth(79))
        .click(Selector('#sandbox-host .toolbar-icon.unlock'))
        .click(Selector('#sandbox-host div').withText('$2k').nth(82))
        .click(Selector('#sandbox-host label').withText('Release'))
        .click(Selector('#sandbox-host div').withText('$2k').nth(85))
        .click(Selector('#sandbox-host .toolbar-icon.unlock'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Lock-Release')
        //Changing thousands seperator to '-'
        await model()
        await t
        .click(Selector('#sandbox-host span').withText('Settings'))
        .click(Selector('#sandbox-host div').withText('Number Formatting').nth(15))
        .click(Selector('#sandbox-host .bf-ui-form-input.form-input').nth(5))
        .pressKey('backspace')
        .typeText(Selector('#sandbox-host .bf-ui-form-input.form-input').nth(5),'-')
        .click(Selector('#sandbox-host button').withText('Save'))
        //Rental Income Allocation based on Trend
        await plan()
        await t
        .click(Selector('#sandbox-host .hier.icon.collapsed'))
        .click(Selector('#sandbox-host div').withText('$2k').nth(19))
        .click(Selector('#sandbox-host .quick-input-text'))
        for(var i=0; i<7; i=i+1){
            await t
            .pressKey('backspace')
        }
        await t
        .typeText(Selector('#sandbox-host .quick-input-text'),'1-650+3.5%')
        .click(Selector('#sandbox-host label').withText('Trend'))
        .click(Selector('#minimodal .bf-ui-form-input.form-input'))
        .typeText(Selector('#minimodal .bf-ui-form-input.form-input'),'-1.2')
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Alloc-RentalIncome')
        //Hiding test Node
        await t
        .click(Selector('#minimodal button').withText('Apply'))
        .click(Selector('#sandbox-host .node-toolbar.icon').nth(5))
        .click(Selector('#sandbox-host div').withText('Edit node').nth(13))
        .click(Selector('#modal-root span').withText('Configuration'))
        .click(Selector('#modal-root span').withText('Display'))
        .click(Selector('#modal-root span').withText('Hidden'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'HiddenConfig')
        await t
        .click(Selector('#modal-root button').withText('Finish'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Node_Hidden')
        //make node visible and take ss
    });


    test
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/4f56c3c8-c052-47cd-b659-dfecd5c3411b/ReportSection`

    .meta('ID','VDT-3897')
    .meta('SEVERITY','blocker')
    ('Summary Case 2-Part 4', async t => {
        await SignIn()  
        await switchToMainWindow()
        await t
        .wait(60000)
        .click(Selector('#editBtn'))
        .wait(25000)
        .click(Selector('#pvExplorationHost [class^="btn collapseIcon pbi-borderless-button glyphicon g"]'))
        .click(Selector('#pvExplorationHost [class^="btnIcon glyphicon pbi-glyph-chevronrightmedium gly"]'))
        .click(Selector('#pvExplorationHost [class^="btnIcon glyphicon pbi-glyph-chevronrightmedium gly"]'))  
        await switchToIframe()
        //Checking Go To level
        await simulate()
        await t
        .click(Selector('div.d2VDTToolCtr').find('div.d2VDTToolItem.d2VDTNodeLevel').find('span').withText('Go to level'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, '5LevelsAvailable')
        await plan()
        //Setting allocation Series as Primary
        await t
        .rightClick(Selector('#sandbox-host label').withText('Test'))
        .click(Selector('#sandbox-host label').withText('Set as Primary'))
        await simulate()
        //Checking Go to level
        await t
        .click(Selector('div.d2VDTToolCtr').find('div.d2VDTToolItem.d2VDTNodeLevel').find('span').withText('Go to level'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, '6LevelsAvailable')
        //Checking Level 6 Tree
        await t
        .click(Selector('div.nodeLevelList').find('div.levelItem').find('span').withText('6'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Level6_Tree')
        //Level 6 Table View
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_View')
        //Changies in Nav Panel-Sim Mnths, Scaling to 0
        await simulate()
        await navigationPanel0()
        await navigationPanelSimMths()
        await tree()
        //Viewing Simulation tooltip of Income
        await t
        .click(Selector('div.d2VDTToolCtr').find('div.d2VDTToolItem.d2VDTNodeLevel').find('span').withText('Go to level'))
        .click(Selector('div.nodeLevelList').find('div.levelItem').find('span').withText('2'))
        .click(Selector('#N1 .d2VDTToggleOverlay'))
        .hover(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
        .click(Selector('g').find('rect.d2VDTshowSim'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Income_Tooltip')
        //Creating New Series with the same name and capturing error Message
        await plan()
        await t
        .click(Selector('#sandbox-host span').withText('New Series'))
        .click(Selector('#minimodal .bf-ui-form-input.form-input'))
        .selectText(Selector('#minimodal .bf-ui-form-input.form-input'),12,0)
        .typeText(Selector('#minimodal .bf-ui-form-input.form-input'),'Test')
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Test_Series2')
       
    });