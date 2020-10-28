import { Selector, Role} from 'testcafe';
import doVisualRegression from "../../../Util/vrtUtil";
import signIn from "../../../pages/signIn";
import { period,quarterToDate,quarter,halfYear,halfYearToDate,yearToDate,yearToGo,fullYear, addnl1, addnl2,addnl3, seriesDropdown, varianceAnalysis, scenario1, scenario2, scenario3 } from "../../../pages/checkboxes"
import { tree, table, switchToIframe, analyze,simulate, switchToMainWindow, wait5000, plan, model } from '../../../pages/common';

fixture `Sanity-Certified`
.page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/4cc3e35f-3b06-4beb-8cb3-486adf5c7b8a/ReportSection`
.meta('ID','VDT-1575')
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
    .meta('ID','VDT-1575')
    .meta('SEVERITY','blocker')
    ('Export Scenario-Customizations', async t => {
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
    //.click(Selector('div.appBarContent.appThemeable.light-mode.ng-star-inserted').find('button.actionBarBtn.hideAtMediumSize.showAtXXLargeSize.ng-star-inserted').nth(1))
    
    await switchToIframe()
    await t
    .click(Selector('#wizbar span').withText('Model'))
    .click(Selector('#sandbox-host span').withText('New'))
    .click(Selector('#sandbox-host div').withText('Load valQ model with sample data').nth(17))
    .click(Selector('#modal-root button').withText('Yes'))
    .click(Selector('#modal-root div').withText('Mining Industry').nth(10))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree_Creation')
    await simulate()
    await t
    .click(Selector('div.d2VDTSection.scenarios').find('div.d2VDTIconButton.newScenario'))
    .hover(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))
    .click(Selector('g').find('rect.d2VDTshowSim'))
    .click(Selector('g').find('text.d2VDTIcon'))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .click(Selector('#sandbox-host .cell-view').nth(2))
    .doubleClick(Selector('.grid-cell').nth(17), {
    caretPos: 0
    })
    .typeText(Selector('div.grid-data-container').find('div.grid-cell').nth(2).find('input').withAttribute('type','text'), '15')
    .click(Selector('.grid-fixed-virtualized'))
    .click(Selector('.d2VDTClose'))
    .hover(Selector('#N9').find('path.d2VDTNode.d2VDTFocus'))
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
    await simulate()
    await t
    .click(Selector('div.sectionHeader').find('div.bf-ui-flex.sectionActions').find('div.d2VDTIconButton.compareScenario'))
    .click(Selector('div.compare-header').find('div.compare-select-all').withText('Select all'))
    .click(Selector('#minimodal button').withText('Compare'))
    .click(Selector('#sandbox-host span').withText('Download to Excel'))
    .click(Selector('#sandbox-host .scenarioType.selectAllBox'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter1')
    await t
    .click(Selector('#sandbox-host button').withText('Download'))
    .rightClick(Selector('a').withText('VDT_DOWNLOAD.xml'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Download1')
    await t
    .click(Selector('.download-popup-close'))
    .click(Selector('#default'))
    .click(Selector('#all'))
    .click(Selector('#sandbox-host button').withText('Download'))
    .click(Selector('.download-popup-close'))
    .click(Selector('#all'))
    .click(Selector('#default'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter2')
    await t
    .click(Selector('#sandbox-host button').withText('Download'))
    .rightClick(Selector('a').withText('VDT_DOWNLOAD.xml'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Download2')
    await t
    .click(Selector('.download-popup-close'))
    .click(Selector('#default'))
    .click(Selector('#all'))
    .click(Selector('#sandbox-host .scenarioType.selectAllBox'))
    .click(Selector('#sandbox-host .scenarioType').nth(3))
    .click(Selector('#sandbox-host .scenarioType').nth(4))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter3')
    await t
    .click(Selector('#sandbox-host button').withText('Download'))
    .rightClick(Selector('a').withText('VDT_DOWNLOAD.xml'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Download3')
    await t
    .click(Selector('.download-popup-close'))
    .click(Selector('#all'))
    .click(Selector('#default'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter4')
    await t
    .click(Selector('#sandbox-host button').withText('Download'))
    .rightClick(Selector('a').withText('VDT_DOWNLOAD.xml'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Download4')
    await t
    .click(Selector('.download-popup-close'))
    .click(Selector('#default'))
    .click(Selector('#all'))
    .click(Selector('#sandbox-host .scenarioType').nth(2))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter5')
    await t
    .click(Selector('#sandbox-host button').withText('Download'))
    .rightClick(Selector('a').withText('VDT_DOWNLOAD.xml'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Download5')
    await t
    .click(Selector('.download-popup-close'))
    .click(Selector('#all'))
    .click(Selector('#default'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter6')
    await t
    .click(Selector('#sandbox-host button').withText('Download'))
    .rightClick(Selector('a').withText('VDT_DOWNLOAD.xml'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Download6')
    await t
    .click(Selector('.download-popup-close'))
    .click(Selector('#default'))
    .click(Selector('#all'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter7')
    await t
    .click(Selector('#sandbox-host button').withText('Download'))
    .rightClick(Selector('a').withText('VDT_DOWNLOAD.xml'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Download7')
    await t
    .click(Selector('.download-popup-close'))
    .click(Selector('#all'))
    .click(Selector('#default'))
    .click(Selector('#sandbox-host .scenarioType').nth(1))
    .click(Selector('#sandbox-host .scenarioType').nth(2))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter8')
    await t
    .click(Selector('#sandbox-host button').withText('Download'))
    .rightClick(Selector('a').withText('VDT_DOWNLOAD.xml'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Download8')
    await t
    .click(Selector('.download-popup-close'))
    .click(Selector('#sandbox-host .customPopUpClose'))
    .click(Selector('#sandbox-host .d2VDTClose'))
    .drag(Selector('div.sectionContent').find('div.col-1.scenarios').find('div.d2VDTNavItemTitle').withText('Scenario 2').nth(4),181,7,{
        offsetX:-5,
        offsetY:-29
    })
    .click(Selector('div.sectionHeader').find('div.bf-ui-flex.sectionActions').find('div.d2VDTIconButton.compareScenario'))
    .click(Selector('#minimodal button').withText('Compare'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter9')
    await t
    .click(Selector('#sandbox-host button').withText('Download'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Download9')
    await t
    .click(Selector('#sandbox-host .customPopUpClose'))
    .click(Selector('#sandbox-host .d2VDTClose'))
    .click(Selector('div.sectionContent').find('div.d2VDTNavItem.d2VDTNavBg.d2Selected').find('div.navMoreActions').nth(1))
    .click(Selector('#scenarioContextMenu div').withText('Delete').nth(1))
    .click(Selector('div.sectionHeader').find('div.bf-ui-flex.sectionActions').find('div.d2VDTIconButton.compareScenario'))
    .click(Selector('#minimodal button').withText('Compare'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter10')
    await t
    .click(Selector('#sandbox-host button').withText('Download'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Download10')
    await t
    .click(Selector('#sandbox-host .customPopUpClose'))
    .click(Selector('#sandbox-host .d2VDTClose'))
    .click(Selector('div.sectionContent').find('div.d2VDTNavItem.d2VDTNavBg.d2Selected').find('div.navMoreActions'))
    .click(Selector('#scenarioContextMenu div').withText('Copy Scenario').nth(1))
    .click(Selector('div.sectionHeader').find('div.bf-ui-flex.sectionActions').find('div.d2VDTIconButton.compareScenario'))
    .click(Selector('#minimodal .form-icon').nth(1))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter11')
    await t
    .click(Selector('#minimodal button').withText('Compare'))
    .click(Selector('#sandbox-host span').withText('Download to Excel'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Download11')
    await t
    .click(Selector('#sandbox-host .customPopUpClose'))
    .click(Selector('#sandbox-host .d2VDTClose'))
    .click(Selector('div.sectionContent').find('div.d2VDTNavItem.d2VDTNavBg.d2Selected').find('div.navMoreActions'))
    .click(Selector('#scenarioContextMenu div').withText('Edit'))
    .selectText(Selector('#minimodal .bf-ui-form-input.form-input.edit-scenario-input'),10,0)
    .typeText(Selector('#minimodal .bf-ui-form-input.form-input.edit-scenario-input'),'renamed scenario')
    .click(Selector('#minimodal button').withText('Save'))
    await t
    .click(Selector('div.sectionHeader').find('div.bf-ui-flex.sectionActions').find('div.d2VDTIconButton.compareScenario'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter12')
    await t
    .click(Selector('#minimodal button').withText('Compare'))
    .click(Selector('#sandbox-host span').withText('Download to Excel'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Download12')
    await t
    .click(Selector('#sandbox-host .scenarioType').nth(1))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter13')
    await t
    .click(Selector('#sandbox-host button').withText('Download'))
    .rightClick(Selector('a').withText('VDT_DOWNLOAD.xml'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Download13')
    await t
    .click(Selector('.download-popup-close'))
    .click(Selector('#sandbox-host .customPopUpClose'))
    .click(Selector('#sandbox-host .d2VDTClose'))
    .click(Selector('#navpanel-YIp4vzb-2 div').withText('Scenario 2').nth(4))
    .click(Selector('div.sectionHeader').find('div.bf-ui-flex.sectionActions').find('div.d2VDTIconButton.compareScenario'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter14')
    await t
    .click(Selector('#minimodal button').withText('Compare'))
    .click(Selector('#sandbox-host span').withText('Download to Excel'))
    .click(Selector('#sandbox-host .scenarioType').nth(2))
    .click(Selector('#sandbox-host button').withText('Download'))
    .rightClick(Selector('a').withText('VDT_DOWNLOAD.xml'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Download14')
    await t
    .click(Selector('.download-popup-close'))
    .click(Selector('#sandbox-host .scenarioType').nth(1))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter15')
    await t
    .click(Selector('#sandbox-host button').withText('Download'))
    .rightClick(Selector('a').withText('VDT_DOWNLOAD.xml'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Download15')
    await t
    .click(Selector('.download-popup-close'))
    .click(Selector('#sandbox-host .customPopUpClose'))
    .click(Selector('#sandbox-host .d2VDTClose'))
    .click(Selector('#navpanel-YIp4vzb-2 div').withText('renamed scenario').nth(4))
    .click(Selector('div.sectionHeader').find('div.bf-ui-flex.sectionActions').find('div.d2VDTIconButton.compareScenario'))
    .click(Selector('#minimodal button').withText('Compare'))
    .click(Selector('#sandbox-host span').withText('Download to Excel'))
    .click(Selector('#default'))
    .click(Selector('#default'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter16')
    await t
    .click(Selector('#sandbox-host .customPopUpClose'))
    .click(Selector('#sandbox-host .d2VDTClose'))
    .click(Selector('#navpanel-YIp4vzb-2 div').withText('Scenario 2').nth(4))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Filter17')
    await t
    .click(Selector('div.sectionHeader').find('div.bf-ui-flex.sectionActions').find('div.d2VDTIconButton.compareScenario'))
    .click(Selector('#minimodal button').withText('Compare'))
    .click(Selector('#sandbox-host span').withText('Download to Excel'))
    await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Download17')
   
    });