import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../pages/checkboxes"
import { tree,SignIn,editOption,Login, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, model } from '../../pages/common';
import navigationPanel0 from "../../pages/navigationPanel";
fixture `Plan`
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/1dd2edd3-f74f-4296-9411-c60c28bea828/ReportSection`
.meta('ID','VDT-1378')
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
    .meta('ID','VDT-1378')
    .meta('SEVERITY','blocker')
    ('Allocation Editor-Allocate Children,Weights Append', async t => {
        await SignIn()  
        await t
      
        await switchToMainWindow()
        await t
        .wait(75000)
        await editOption()
        await t
        .wait(25000)
        await switchToIframe()
        await model()
        await t
        .click(Selector('#sandbox-host .icon.icon--Add'))
        .click(Selector('#sandbox-host div').withText('Create an Advanced Model').nth(17))
        .click(Selector('#modal-root button').withText('Yes'))
        //Node A Creation
        .doubleClick(Selector('#sandbox-host div').withText('NTOP: Node Title').nth(22))
        .selectText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),10,0)
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'A',{
            caretPos:0
        })
        .click(Selector('#modal-root span').withText('Configuration'))
        .click(Selector('#modal-root .bf-ui-form-select.form-select'))
        //Changing Calc Method for Node A-Sum of Children
        .click(Selector('#modal-root option').withText('Sum Children (a+b+c+...)'))
        .click(Selector('#modal-root button').withText('Finish'))
        .click(Selector('#sandbox-host .icon.icon--Add.node-menu-icon'))
        //Node B creation-Node A's Child
        .doubleClick(Selector('#sandbox-host div').withText('N1: Copy of A').nth(22))
        .selectText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),9,0)
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'B',{
            caretPos:0
        })
        .click(Selector('#modal-root span').withText('Configuration'))
        .click(Selector('#modal-root .bf-ui-form-select.form-select'))
        //Changing calc Method for Node B-Manual
        .click(Selector('#modal-root option').withText('Manual'))
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input.manual-input-value'),'10')
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input.manual-input-value').nth(1),'20')
        .click(Selector('#modal-root button').withText('Finish'))
        .click(Selector('#sandbox-host div').withText('NTOP: A').nth(22))
        .click(Selector('#sandbox-host .icon.icon--Add.node-menu-icon'))
        //Node C creation-Child of A
        .doubleClick(Selector('#sandbox-host div').withText('N2: Copy of A').nth(22))
        .selectText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),9,0)
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input').nth(1),'C',{
            caretPos:0
        })
        .click(Selector('#modal-root span').withText('Configuration'))
        .click(Selector('#modal-root .bf-ui-form-select.form-select'))
        //Changing calc Method for Node C-Manual
        .click(Selector('#modal-root option').withText('Manual'))
        .doubleClick(Selector('#modal-root .bf-ui-form-input.form-input.manual-input-value'))
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input.manual-input-value'),'30')
        .typeText(Selector('#modal-root .bf-ui-form-input.form-input.manual-input-value').nth(1),'40')
        .click(Selector('#modal-root button').withText('Finish'))
        await simulate()
        await t
        //Changing scaling to 0
        .click(Selector('.d2VDTNavItem[title="Show auto-scaled nodes in 0"]'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree_Creation')
        await plan()
        await t
        .click(Selector('#minimodal button').withText('Lock'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Plan_Lock')
        await t
        .click(Selector('#minimodal button').withText('Submit'))
        //Node A allocation-Based on Primary
        .doubleClick(Selector('#sandbox-host div').withText('40').nth(13))
        .click(Selector('#sandbox-host .quick-input-text'))
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#sandbox-host .quick-input-text'),'120')
        .click(Selector('#sandbox-host .toolbar-input').nth(1))
        .click(Selector('#sandbox-host option').withText('Baseline'))
        .click(Selector('#sandbox-host div').withText('Copy-to').nth(10))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NodeA_Base')
        //Node B allocation based on Comparison
        await t
        .doubleClick(Selector('#sandbox-host div').withText('40').nth(19))
        .click(Selector('#sandbox-host .quick-input-text'))
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#sandbox-host .quick-input-text'),'120')
        .click(Selector('#sandbox-host .toolbar-input').nth(1))
        .click(Selector('#sandbox-host option').withText('Comparison'))
        .click(Selector('#sandbox-host .toolbar-icon.constant.down'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NodeA_Comp')
        //Node A allocation-Based on Equals-Copy to Children
        await t
        .doubleClick(Selector('#sandbox-host div').withText('40').nth(19))
        .click(Selector('#sandbox-host .quick-input-text'))
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#sandbox-host .quick-input-text'),'120')
        .click(Selector('#sandbox-host .toolbar-input.allocation-type-select'))
        .click(Selector('#sandbox-host option').withText('Equal'))
        .click(Selector('#sandbox-host .toolbar-icon.constant.down'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NodeA_Equals')
        await t
        .click(Selector('#sandbox-host div').withText('10').nth(13))
        .click(Selector('#sandbox-host div').withText('Copy-to').nth(13))
        await model()
        //Changing decimal values for all nodes to 2
        await t
        .click(Selector('#sandbox-host div').withText('Unlock').nth(15))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Plan_Unlock')
        await t
        .click(Selector('#modal-root button').withText('Yes'))
        .doubleClick(Selector('#sandbox-host div').withText('NTOP: A').nth(22))
        .click(Selector('#modal-root span').withText('Values'))
        .click(Selector('#modal-root .bf-ui-form-select.form-select').nth(1))
        .click(Selector('#modal-root option').withText('2'))
        .click(Selector('#modal-root .icon.icon--Cancel').nth(1))
        .doubleClick(Selector('#sandbox-host div').withText('N1: B').nth(22))
        .click(Selector('#modal-root span').withText('Values'))
        .click(Selector('#modal-root .bf-ui-form-select.form-select').nth(1))
        .click(Selector('#modal-root option').withText('2'))
        .click(Selector('#modal-root .icon.icon--Cancel').nth(1))
        .doubleClick(Selector('#sandbox-host div').withText('N2: C').nth(22))
        .click(Selector('#modal-root span').withText('Values'))
        .click(Selector('#modal-root .bf-ui-form-select.form-select').nth(1))
        .click(Selector('#modal-root option').withText('2'))
        .click(Selector('#modal-root .icon.icon--Cancel').nth(1))
        .click(Selector('#sandbox-host div').withText('Lock').nth(15))
        .click(Selector('#modal-root button').withText('Yes'))
        await plan()
        //Node B allocation to 600-Based on Weights
        await t
        .doubleClick(Selector('#sandbox-host div').withText('513').nth(11))
        .click(Selector('#sandbox-host .quick-input-text'))
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('#sandbox-host .quick-input-text'),'600')
        .click(Selector('#sandbox-host div').withText('Weight').nth(13))
        .click(Selector('#minimodal button').withText('Apply'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NodeB')

    });