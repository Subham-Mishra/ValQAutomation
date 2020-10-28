import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../../Util/vrtUtil";
import signIn from "../../../pages/signIn";
//import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../../pages/checkboxes"
import { tree, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan } from '../../../pages/common';

fixture `Sanity-Certified`
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/465b068f-0eba-4f2f-ac28-43bb3756a831/ReportSection`
.meta('ID','VDT-1920')
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
    .meta('ID','VDT-1920')
    .meta('SEVERITY','blocker')
    ('ValQ from scratch', async t => {
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
    .click(Selector('#wizbar span').withText('Model'))
    .click(Selector('#sandbox-host span').withText('New'))
    .click(Selector('#sandbox-host div').withText('Build a model from scratch').nth(17))
    .click(Selector('#modal-root button').withText('Yes'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree_Build')
    await t
    .doubleClick(Selector('#sandbox-host div').withText('NTOP: Node Title').nth(22))
    .selectText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),10,0)
    .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'Node 1')
    .click(Selector('#modal-root div').withText('Configuration').nth(7))
    .click(Selector('#modal-root .bf-ui-form-select.form-select'))
    .click(Selector('#modal-root option').withText('Sum Children (a+b+c+...)'))
    .click(Selector('#modal-root button').withText('Finish'))
    .click(Selector('#sandbox-host .icon.icon--Add.node-menu-icon'))
    //.doubleClick(Selector('#sandbox-host .icon.icon--Add.node-menu-icon').withText('N1: Copy of Node 1').nth(22))
    .doubleClick(Selector('#sandbox-host div').withText('N1: Copy of Node 1').nth(22))
    .selectText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),14,0)
    .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'Node 2')
    .click(Selector('#modal-root span').withText('Configuration'))
    .click(Selector('#modal-root button').withText('Finish'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Node_Created')
    await t
    .doubleClick(Selector('#sandbox-host div').withText('NTOP: Node 1').nth(22))
    .click(Selector('#modal-root span').withText('Configuration'))
    .click(Selector('#modal-root .bf-ui-form-select.form-select'))
    .click(Selector('#modal-root option').withText('Manual'))
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]'),'1')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(1),'2')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(2),'3')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(3),'4')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(4),'5')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(5),'6')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(6),'7')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(7),'8')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(8),'9')
    .click(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(9))
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(9),'10')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(10),'11')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(11),'12')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(12),'2')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(13),'4')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(14),'6')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(15),'8')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(16),'10')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(17),'12')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(18),'14')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(19),'16')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(20),'18')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(21),'20')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(22),'22')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(23),'24')
    .click(Selector('#modal-root button').withText('Finish'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Node1_Update')
    await t
    .doubleClick(Selector('#sandbox-host div').withText('N1: Node 2').nth(22))
    .click(Selector('#modal-root span').withText('Configuration'))
    .click(Selector('#modal-root .bf-ui-form-select.form-select'))
    .click(Selector('#modal-root option').withText('Manual'))
    .click(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]'))
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]'),'3')
    .click(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]'))
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(1),'6')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(2),'9')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(3),'12')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(4),'15')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(5),'18')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(6),'21')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(7),'24')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(8),'27')
    .click(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(9))
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(9),'30')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(10),'33')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(11),'36')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(12),'4')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(13),'8')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(14),'12')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(15),'16')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(16),'20')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(17),'24')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(18),'28')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(19),'32')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(20),'36')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(21),'40')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(22),'44')
    .typeText(Selector('#modal-root [class^="bf-ui-form-input form-input manual-input-inputarea"]').nth(23),'48')
    .click(Selector('#modal-root button').withText('Finish'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Node2_Update')
    await t
    .click(Selector('div.d2VDTSimCtr').find('div.d2VDTSwitchVisItem.d2VDTSwitchTable'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table_View')
   
});