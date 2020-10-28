import { Selector, Role} from 'testcafe';
import doVisualRegression from '../../../Util/vrtUtil';

fixture `demo`
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/7100141c-73af-43f1-a67a-417de619dafa/ReportSection`;

test('New Test', async t => {
    await t
        .click(Selector('a').withText('SIGN IN'))
        .maximizeWindow()
        .typeText(Selector('#i0116'), 'surekar@visualbi.com')
        .click(Selector('#idSIButton9'))
        .typeText(Selector('#i0118'), ',,,333swetha')
        .click(Selector('#idSIButton9'))
        .click(Selector('#idSIButton9'))
        .click(Selector('#editBtn'))
        .wait(100000)
        .switchToIframe(Selector('.visual-sandbox[name="visual-sandbox"]')).wait(5000)
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'initial')
        
    await t   
        .click(Selector('span').withText('Model'))
        .click(Selector('button').withText('New'))
        .click(Selector('.text-container').find('div').withText('Open a Sample Model'))
        .click(Selector('button').withText('Yes'))
        .click(Selector('.tile-desc').withText('Perform what-if analysis on your salary, taxes, re'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'TableDisplay')

    await t     
        .click(Selector('.node-content.node-type-A[title="Expenses"]').find('div').withText('N12: Expenses'))
        .doubleClick(Selector('.node-content.node-type-A[title="Expenses"]').find('div').withText('N12: Expenses'))
        .selectText(Selector('div').withText('Title *').nth(13).find('.bf-ui-form-input.form-input'), 8, 0)
        .pressKey('backspace')
        .typeText(Selector('div').withText('Title cannot be empty').nth(15).find('.bf-ui-form-input.form-input'), 'Updated')
        .click(Selector('button').withText('Finish'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Updated')

    await t       
        .doubleClick(Selector('.node-content.node-type-A[title="Income"]').find('div').withText('N1: Income'))
        .click(Selector('div').withText('Edit Node').nth(9).find('.icon.icon--Cancel'))
        .click(Selector('.bf-ui-flex.grid-label'))
        .doubleClick(Selector('.ag-group-value').nth(1).find('span').withText('Income').nth(1))
        .typeText(Selector('.ag-cell-edit-input'), 'Inc', {
            caretPos: 0
        })
        .click(Selector('button').withText('Save')).wait(1000)
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Quick editor')

    await t      
        .click(Selector('.VDTTable .d2VDTSimCtr  .d2VDTSimItems .d2VDTSwitchVis .d2VDTSwitchVisItem.d2VDTSwitchTree[title="Tree"][data-value="Tree"]'))
        .click(Selector('span').withText('Simulate'))
        .hover(Selector('#N1 .d2VDTInfo.d2VDTvariance1.varLabel'))
        .click(Selector('text.d2VDTshowSim'))
        .click(Selector('text').withAttribute('class','d2VDTIcon'))
        .typeText(Selector('.cell-view'),'50')
        .click(Selector('#sandbox-host div.d2VDTClose'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Simulated scenario 1')

    await t       
        .click(Selector('.d2VDTIconButton.newScenario[title^="Create a new scenario and make it the active scena"]'))
        .hover(Selector('#N1 .d2VDTInfo.d2VDTvariance1.varLabel'))
        .click(Selector('text.d2VDTshowSim'))
        .click(Selector('text').withAttribute('class','d2VDTIcon'))
        .typeText(Selector('.cell-view'),'50')
        .click(Selector('#sandbox-host div.d2VDTClose'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Simulated scenario 2')

    await t     
        .click(Selector('.d2VDTIconButton.compareScenario[title="Compare scenarios in collection"]'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Comparison')  

    await t      
        .click(Selector('.d2VDTClose'))
        .click(Selector('#N1').find('.d2VDTNode.d2VDTFocus'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Node Data')    

    await t     
        .click(Selector('.d2VDTClose'))
        .click(Selector('.series-dropdown-control').find('div').withText('Performance'))
        .click(Selector('.series-dropdown-menu').find('div').withText('Benchmark'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Benchmark')   

    await t     
        .click(Selector('.series-dropdown-control').find('div').withText('Benchmark'))
        .click(Selector('.series-dropdown-menu').find('div').withText('Performance'));
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Performance') 
});