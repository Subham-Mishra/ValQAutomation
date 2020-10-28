import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../Util/vrtUtil";
import signIn from "../../pages/signIn";
import { SignIn,tree, table,Login, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, editIcon, editOption, model } from '../../pages/common';

fixture `Formula`

.meta('ID','VDT-3473')
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
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/7d01061c-c2ef-4ce7-bc6d-a0df876776b8/ReportSection`
    .meta('ID','VDT-3473')
    .meta('SEVERITY','blocker')
    ('All Functions-Logical', async t => {
    await SignIn()  
    await t
    .wait(35000)
    .click(Selector('#editBtn'))
    .wait(30000)
    await switchToIframe()
    await t
    .click(Selector('#N4 .d2VDTToggleOverlay'))
    await model()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'LogicalOp')
    await t
    .click(Selector('#N10 .d2VDTToggleOverlay'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'IF-Children')
    await t
    .click(Selector('#N10 .d2VDTToggleOverlay'))
    .click(Selector('#N12 .d2VDTToggleOverlay'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SwitchChildren')
    await t
    .click(Selector('#N12 .d2VDTToggle'))
    .click(Selector('#N16 .d2VDTToggleOverlay'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'AND-Children')
    await t
    .click(Selector('#N16 .d2VDTToggleOverlay'))
    .click(Selector('#N19 .d2VDTToggleOverlay'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'OR-Children')
    await t
    .click(Selector('#N19 .d2VDTToggleOverlay'))
    .click(Selector('#N22 .d2VDTToggleOverlay'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NOT-Children')
    await t
    .click(Selector('#N22 .d2VDTToggleOverlay'))
    .click(Selector('#N25 .d2VDTToggleOverlay'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'XOR-Children')
    await t
    .click(Selector('#N25 .d2VDTToggleOverlay'))
    .click(Selector('#N4 .d2VDTToggleOverlay'))
    await model()
    await t
    .click(Selector('#sandbox-host span').withText('Settings'))
    .click(Selector('#sandbox-host div').withText('Canvas').nth(15))
    .click(Selector('#sandbox-host .bf-ui-form-input.form-input').nth(1))
    .pressKey('backspace')
    .pressKey('backspace')
    .typeText(Selector('#sandbox-host .bf-ui-form-input.form-input').nth(1),'100')
    .click(Selector('#sandbox-host button').withText('Save'))
    .click(Selector('#nodeSearch'))
    .typeText(Selector('#nodeSearch'),'Hidden Node B')
    .click(Selector('div.nodeSearchSuggestions.searchResultsContainer').find('div p b').withText('Hidden Node B'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'HiddenNodeB')
    await t
    .click(Selector('#nodeSearch'))
    .typeText(Selector('#nodeSearch'),'Not Available Node')
    .click(Selector('div.nodeSearchSuggestions.searchResultsContainer').find('div p b').withText('Not Available Node'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NotAvailableNode')
    await t
    .click(Selector('#nodeSearch'))
    .typeText(Selector('#nodeSearch'),'Simulated')
    .click(Selector('div.nodeSearchSuggestions.searchResultsContainer').find('div p b').withText('Simulated'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'SimulatedNode')
    await t
    .click(Selector('#nodeSearch'))
    .typeText(Selector('#nodeSearch'),'Comparison')
    .click(Selector('div.nodeSearchSuggestions.searchResultsContainer').find('div p b').withText('Comparison'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'ComparisonNode')
    await t
    .click(Selector('#sandbox-host div').withText('Canvas').nth(15))
    .click(Selector('#sandbox-host .bf-ui-form-input.form-input').nth(1))
    .pressKey('backspace')
    .pressKey('backspace')
    .pressKey('backspace')
    .typeText(Selector('#sandbox-host .bf-ui-form-input.form-input').nth(1),'75')
    .click(Selector('#sandbox-host button').withText('Save'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'A&CNodes')
    
    });



    test
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/1ae6135a-2c16-47ef-99ee-2075b06d3b99/ReportSection9b21ba6dc102670d0569`
    .meta('ID','VDT-3473')
    .meta('SEVERITY','blocker')
    ('All Functions-Range', async t => {
    await SignIn()  
    await t
    .wait(35000)
    .click(Selector('#editBtn'))
    .wait(30000)
    await switchToIframe()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree')
    await t
    .click(Selector('#N3 .d2VDTToggleOverlay'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'C-Children')
    await t
    .click(Selector('#N3 .d2VDTToggleOverlay'))
    .click(Selector('#N4 .d2VDTToggleOverlay'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'RangeChildren')
    await t
    .click(Selector('#N9 .d2VDTToggleOverlay'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'DS-Children')
    });



    test
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/fe530fdd-19c6-4cbc-bc92-1aadf607ffe2/ReportSection632575c2552be7d55531`
    .meta('ID','VDT-3473')
    .meta('SEVERITY','blocker')
    ('All Functions-Finance', async t => {
    await SignIn()  
    await t
    .wait(35000)
    .click(Selector('#editBtn'))
    .wait(30000)
    await switchToIframe()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree')
    await t
    .click(Selector('#N3 .d2VDTToggleOverlay'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'C-Children')
    await t
    .click(Selector('#N3 .d2VDTToggleOverlay'))
    .click(Selector('#N4 .d2VDTToggleOverlay'))
    await table()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'FinanceChildren')
    
    });


    test
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/064a7fcc-62c9-43a5-a007-9d45d9bf05e7/ReportSectione65312b4a14485cb20d8`
    .meta('ID','VDT-3473')
    .meta('SEVERITY','blocker')
    ('All Functions-Math', async t => {
    await SignIn()  
    await t
    .wait(35000)
    .click(Selector('#editBtn'))
    .wait(30000)
    await switchToIframe()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree')
    await t
    .click(Selector('#N3 .d2VDTToggleOverlay'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'C-Children')
    await t
    .click(Selector('#N3 .d2VDTToggleOverlay'))
    .click(Selector('#N4 .d2VDTToggleOverlay'))
    await table()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Maths-Children')
    
    });



    test
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/ec9ff13c-da2b-40b2-9a68-efdaae0a8b55/ReportSectionfee11e53a7a5801da99a`
    .meta('ID','VDT-3473')
    .meta('SEVERITY','blocker')
    ('All Functions-Static Identifier', async t => {
    await SignIn()  
    await t
    .wait(35000)
    .click(Selector('#editBtn'))
    .wait(30000)
    await switchToIframe()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree')
    await t
    .click(Selector('#NEast .d2VDTToggleOverlay'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'East-Children')
    await t
    .click(Selector('#NEast .d2VDTToggle'))
    .click(Selector('#nodeSearch'))
    .typeText(Selector('#nodeSearch'),'Act')
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Node-Search')
    await t
    .click(Selector('#N4').find('g.d2VDTNodeToggle').find('rect.d2VDTToggleOverlay'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Act&Sum-Children')
  
    });


    test
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/984027b0-3f79-4b50-a519-26287e80968b/ReportSection57edb3bb1be9b17b301d`
    .meta('ID','VDT-3473')
    .meta('SEVERITY','blocker')
    ('All Functions-Ceil&Floor', async t => {
    await SignIn()  
    await t
    .wait(35000)
    .click(Selector('#editBtn'))
    .wait(30000)
    await switchToIframe()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree')
    });


    test
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/efea60dd-70d3-4be4-bb64-36b4c0535422/ReportSection9cd2d7b7ed70e3ca53e4`
    .meta('ID','VDT-3473')
    .meta('SEVERITY','blocker')
    ('All Functions-NewFormula1', async t => {
    await SignIn()  
    await t
    .wait(35000)
    .click(Selector('#editBtn'))
    .wait(30000)
    await switchToIframe()
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree')
    await t
    .click(Selector('#NWest .d2VDTToggleOverlay'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'West-Children')
    await t
    .click(Selector('#NWest .d2VDTToggleOverlay'))
    .click(Selector('#NMidwest .d2VDTToggleOverlay'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Midwest-Children')
    await t
    .click(Selector('#NMidwest .d2VDTToggleOverlay'))
    .click(Selector('#NEast .d2VDTToggleOverlay'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'East-Children')
    await t
    .click(Selector('#NEast .d2VDTToggle'))
    .click(Selector('#N1 .d2VDTToggleOverlay'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'ISNAN-Children')
    await t
    .click(Selector('#N1 .d2VDTToggleOverlay'))
    .click(Selector('#N6 .d2VDTToggle'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NodeIDChildren')
    await t
    .click(Selector('#N6 .d2VDTToggle'))
    .click(Selector('#N8 .d2VDTToggleOverlay'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'GETRowValChildren')
   
});


test
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/121e54e8-e85d-498e-b08c-1e885bc24595/ReportSection69c5359bd00e37eb9e24`
.meta('ID','VDT-3473')
.meta('SEVERITY','blocker')
('All Functions-Avg in TimeAgg', async t => {
await SignIn()  
await t
.wait(35000)
.click(Selector('#editBtn'))
.wait(30000)
await switchToIframe()
await t
.click(Selector('#N1 .d2VDTToggleOverlay'))
await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'DS-Children')
await t
.click(Selector('#N10 .d2VDTToggleOverlay'))
await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Add3With0Val-Children')
await t
.click(Selector('#N10 .d2VDTToggleOverlay'))
.click(Selector('#N15 .d2VDTToggleOverlay'))
await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Add3WithNullVal-Children')
await t
.click(Selector('#N15 .d2VDTToggleOverlay'))
await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Group-Children')
await t
.click(Selector('#N20 .d2VDTToggleOverlay'))
.click(Selector('#N23 .d2VDTToggleOverlay'))
await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'NullWith0Val-Children')

});