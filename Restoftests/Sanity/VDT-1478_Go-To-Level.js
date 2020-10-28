import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
//import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/checkboxes"
import { tree, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan } from '../../pages/common';

fixture `Sanity`
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/315e32d3-c6a0-4234-b63d-862b4aa793b6`
// .meta('ID','VDT-1373')
//     .meta({'author': 'Automation','Date':'31-Aug-2020'})
//     .meta('SEVERITY','Critical')
//     .meta('TEST_RUN','1.7.0')

// .before(async ctx  => {
//     ctx.someProp = 123;
//     console.log('Test started..',currentFixture);
// })
// .after(async ctx  => {
//     console.log(ctx.newProp); // > abc
//     console.log('Test Ended..',currentFixture);
// });

test
    // .meta('ID','VDT-1373')
    // .meta('SEVERITY','blocker')
    ('Go-to-level', async t => {
    await t
    .maximizeWindow()
    .click(Selector('a').withText('SIGN IN'))
    .typeText(Selector('#i0116'), 'valqtestuser@visualbi.com')
    .click(Selector('#idSIButton9'))
    .typeText(Selector('#i0118'), 'acdee@421')
    .click(Selector('#idSIButton9'))
    .click(Selector('#idSIButton9'))
    // const initialWindow = await t.getCurrentWindow();
    // const window_switch = await t.openWindow('https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/315e32d3-c6a0-4234-b63d-862b4aa793b6');
    // await t
    // .switchToWindow(initialWindow);
    // await wait5000()
    await switchToIframe()
    await t
    .click(Selector('#wizbar div').withText('Login to Workspace').nth(5))
    await switchToMainWindow()
    await t
    .click(Selector('.undefined.primary'))
    .wait(30000)
    await switchToMainWindow()
    await t
    .click(Selector('#editBtn'))
    .wait(100000)
    await switchToIframe()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Initial_Table')
    await t
    .click(Selector('div.d2VDTSimCtr').find('div.d2VDTSwitchVisItem.d2VDTSwitchTree'))
    .click(Selector('div.d2VDTToolCtr').find('div.d2VDTToolItem.d2VDTNodeLevel').find('span').withText('Go to level'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Initial_Tree')
    await t
    .click(Selector('div.nodeLevelList').find('div.levelItem').find('span').withText('3'))
    .click(Selector('#wizbar span').withText('Model'))
    .click(Selector('#sandbox-host span').withText('Settings'))
    .click(Selector('#sandbox-host div').withText('Canvas').nth(15))
    .click(Selector('#sandbox-host .bf-ui-form-input.form-input').nth(1))
    .pressKey('backspace')
    .pressKey('backspace')
    .pressKey('backspace')
    .typeText(Selector('#sandbox-host .bf-ui-form-input.form-input').nth(1),'5')
    .click(Selector('#sandbox-host button').withText('Save'))
    .click(Selector('#sandbox-host div').withText('Canvas').nth(12))
    .click(Selector('#sandbox-host .bf-ui-form-input.form-input').nth(1))
    .pressKey('backspace')
    .typeText(Selector('#sandbox-host .bf-ui-form-input.form-input').nth(1),'10')
    .click(Selector('#sandbox-host button').withText('Save'))
    .click(Selector('div.d2VDTSimCtr').find('div.d2VDTSwitchVisItem.d2VDTSwitchTable'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Lvl3_Table')
    await t
    .click(Selector('div.d2VDTSimCtr').find('div.d2VDTSwitchVisItem.d2VDTSwitchTree'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Lvl3_Tree')
    await t
    .click(Selector('#sandbox-host span').withText('Node'))
    .click(Selector('#sandbox-host div').withText('NSUMME: Overall Result').nth(22))
    .click(Selector('#sandbox-host .node-action-icon.AutoEnhanceOn'))
    .click(Selector('#modal-root button').withText('Yes'))
    .click(Selector('#sandbox-host .expand-collapse.node-collapsed').nth(1))
    .click(Selector('#sandbox-host div').withText('NPricing__Adjustments__Juices: Pricing Adjustments').nth(22))
    .click(Selector('#sandbox-host .icon.icon--Add.node-menu-icon'))
    .doubleClick(Selector('#sandbox-host div').withText('N1: Copy of Pricing Adjustments').nth(22))
    .click(Selector('#modal-root .bf-ui-form-input.form-input').nth(1))
    .selectText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),27,0)
    .pressKey('backspace')
    .pressKey('capslock')
    .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'H')
    .pressKey('capslock')
    .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'idden node 1')
    .click(Selector('#modal-root span').withText('Display'))
    .click(Selector('#modal-root .form-icon').nth(2))
    .click(Selector('#modal-root button').withText('Finish'))
    .click(Selector('#sandbox-host div').withText('NPricing__Adjustments__Juices: Pricing Adjustments').nth(22))
    .click(Selector('#sandbox-host .icon.icon--Add.node-menu-icon'))
    .doubleClick(Selector('#sandbox-host div').withText('N2: Copy of Pricing Adjustments').nth(22))
    .click(Selector('#modal-root .bf-ui-form-input.form-input').nth(1))
    .selectText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),27,0)
    .pressKey('backspace')
    .pressKey('capslock')
    .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'H')
    .pressKey('capslock')
    .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'idden node 2')
    .click(Selector('#modal-root span').withText('Display'))
    .click(Selector('#modal-root .form-icon').nth(2))
    .click(Selector('#modal-root button').withText('Finish'))
    .click(Selector('div.d2VDTToolCtr').find('div.d2VDTToolItem.d2VDTNodeLevel').find('span').withText('Go to level'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'LvlAft_NodeCreation_Tree')
    await t
    .click(Selector('div.d2VDTSimCtr').find('div.d2VDTSwitchVisItem.d2VDTSwitchTable'))
    .click(Selector('div.grid-fixed-virtualized').find('div.grid-cell').find('div.hier.icon.uncollapsed').nth(1))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'LvlAft_NodeCreation_Table')
    await t
    .click(Selector('div.d2VDTSimCtr').find('div.d2VDTSwitchVisItem.d2VDTSwitchTree'))
    .doubleClick(Selector('#sandbox-host div').withText('N1: Hidden node 1').nth(22))
    .click(Selector('#modal-root span').withText('Display'))
    .click(Selector('#modal-root .form-icon'))
    .click(Selector('#modal-root button').withText('Finish'))
    .click(Selector('#sandbox-host div').withText('N2: Hidden node 2').nth(22))
    .doubleClick(Selector('#sandbox-host div').withText('N2: Hidden node 2').nth(22))
    .click(Selector('#modal-root div').withText('Display').nth(8))
    .click(Selector('#modal-root .form-icon'))
    .click(Selector('#modal-root button').withText('Finish'))
    .click(Selector('#sandbox-host span').withText('Settings'))
    .click(Selector('#sandbox-host div').withText('Customize items on canvas').nth(15))
    .click(Selector('#sandbox-host .bf-ui-form-input.form-input').nth(1))
    .pressKey('backspace')
    .pressKey('backspace')
    .typeText(Selector('#sandbox-host .bf-ui-form-input.form-input').nth(1),'50')
    .click(Selector('#sandbox-host button').withText('Save'))
    .click(Selector('div.d2VDTToolCtr').find('div.d2VDTToolItem.d2VDTNodeLevel').find('span').withText('Go to level'))
    .click(Selector('div.nodeLevelList').find('div.levelItem').find('span').withText('4'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'GoTo_Lvl4_Tree')
    await t
    .click(Selector('div.d2VDTSimCtr').find('div.d2VDTSwitchVisItem.d2VDTSwitchTable'))
    .click(Selector('div.grid-fixed-virtualized').find('div.grid-cell').find('div.hier.icon.uncollapsed'))
    
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'GoTo_Lvl4_Table')
    await t
    .click(Selector('div.d2VDTSimCtr').find('div.d2VDTSwitchVisItem.d2VDTSwitchTree'))
    .click(Selector('#sandbox-host span').withText('Node'))
    .click(Selector('#sandbox-host div').withText('N1: Hidden node 1').nth(22))
    .click(Selector('#sandbox-host .icon.icon--Delete.node-menu-icon'))
    .click(Selector('#modal-root button').withText('Yes'))
    .click(Selector('#sandbox-host div').withText('N2: Hidden node 2').nth(22))
    .click(Selector('#sandbox-host .icon.icon--Delete.node-menu-icon'))
    .click(Selector('#modal-root button').withText('Yes'))
    .click(Selector('div.d2VDTToolCtr').find('div.d2VDTToolItem.d2VDTNodeLevel').find('span').withText('Go to level'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'LvlAft_Del_Tree')
    await t
    .click(Selector('div.d2VDTSimCtr').find('div.d2VDTSwitchVisItem.d2VDTSwitchTable'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'LvlAft_Del_Table')
    
    });