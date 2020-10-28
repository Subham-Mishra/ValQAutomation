import { Selector } from 'testcafe';
import doVisualRegression from '../../Util/vrtUtil';
import signIn from '../../pages/signIn';
import { switchToIframe, model, simulate, plan, editIcon, editOption } from '../../pages/common';
import { settings, colorTheme } from '../../pages/settings';

const log = require('../../config/logging').default

fixture `Settings`
    .page `https://app.powerbi.com/groups/ca77a2d0-e137-4422-93e6-fb581b1cb7a4/reports/02b820b8-8218-49f5-b54a-3f84b214d8f5/ReportSection`
    .meta('ID','VDT-1403')
    .meta({'author': 'Automation','Date':'12-Mar-2020'})
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
    .meta('ID','VDT-1403')
    .meta('SEVERITY','blocker')
    .before(async ctx  => {
        log.debug('Test started..',ctx.testRun.test.name);
    })
    .after(async ctx  => {
        log.debug('Test Ended..',ctx.testRun.test.name);
    }) ('VDT-1403_Color theme', async t => {
        await signIn()
        await editIcon()
        await editOption() 
        await switchToIframe()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'After opening Edit mode')
        await model()
        await t
        .click(Selector('.node-content.node-type-S[title="Net Profit"]').find('div').withText('NTOP: Net Profit'))
        .click(Selector('.icon.icon--Add.node-menu-icon'))
        .click(Selector('.node-content.node-type-S[title="Copy of Net Profit"]').find('div').withText('N16: Copy of Net Profit'))
        .click(Selector('.icon.icon--Edit.node-menu-icon'))
        .selectText(Selector('div').withText('Title *').nth(13).find('.bf-ui-form-input.form-input'), 18, 0)
        .pressKey('backspace')
        .typeText(Selector('div').withText('Title cannot be empty').nth(15).find('.bf-ui-form-input.form-input'), 'Derived Node')
        .click(Selector('span').withText('Configuration'))
        .click(Selector('div').withText('Data Source').nth(14).find('.bf-ui-form-select.form-select'))
        .click(Selector('option').withText('Manual'))
        .typeText(Selector('div').withText('Value for all periods').nth(16).find('.bf-ui-form-input.form-input.manual-input-value'), '1000')
        .typeText(Selector('div').withText('Value for all periods').nth(21).find('.bf-ui-form-input.form-input.manual-input-value'), '2000')
        .click(Selector('.vertical-menu-dropdown').find('div').withText('Display'))
        .click(Selector('label').withText('Derived').find('.form-icon'))
        .click(Selector('span').withText('Values'))
        .click(Selector('.form-input-container').find('.bf-ui-form-select.form-select'))
        .click(Selector('option').withText('None'))
        .click(Selector('button').withText('Finish'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Added Derived Node')
        await t
        .click(Selector('.icon.icon--Edit.node-menu-icon'))
        .click(Selector('.vertical-menu-dropdown').find('div').withText('Display'))
        .click(Selector('label').withText('Hidden').find('.form-icon'))
        .click(Selector('button').withText('Finish'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Derived Node in hidden mode')
        await t
        .typeText(Selector('#nodeSearch'), 'N16')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'No Derived node in search list')
        await t
        .click(Selector('.node-content.node-type-A[title="Total Cost"]').find('div').withText('N9: Total Cost'))
        .click(Selector('.node-content.node-type-C[title="Derived Node"]').find('div').withText('N16: Derived Node'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'No Derived node in tree')
        await t
        .click(Selector('.icon.icon--Edit.node-menu-icon'))
        .click(Selector('.vertical-tab-menu').find('div').withText('Configuration'))
        .click(Selector('.vertical-menu-dropdown').find('div').withText('Display'))
        .click(Selector('label').withText('Derived').find('.form-icon'))
        .click(Selector('button').withText('Finish'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Derived Node in show mode')
        await t
        .typeText(Selector('#nodeSearch'), 'N16')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Derived Node number N16 in search list')
        await t
        .typeText(Selector('#nodeSearch'), 'Derived')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Derived Node in search list')
        await t
        .click(Selector('div').withText('N9: Total Cost').nth(19).find('.expand-collapse.node-collapsed'))
        .click(Selector('.node-content.node-type-F[title="Production Cost"]').find('div').withText('N10: Production Cost'))
        .click(Selector('.icon.icon--Edit.node-menu-icon'))
        .click(Selector('span').withText('Composite Nodes'))
        .click(Selector('.bf-ui-form-multi-select.form-multi-select'))
        .click(Selector('button').withText('N1: Revenue'))
        .click(Selector('span').withText('N2: Copper Sold'))
        .click(Selector('button').withText('Finish'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Added composite nodes')
        await t
        .click(Selector('#N10N1').find('.d2VDTNode.d2VDTFocus'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Details Page of composite node 1')
        await plan()
        await simulate() 
        await t
        .click(Selector('#N10N2').find('.d2VDTNode.d2VDTFocus'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Details Page of composite node 2')
        await plan()
        await simulate()
        await t
        .click(Selector('#N10').find('.d2VDTNode.d2VDTFocus').nth(0))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Details Page of composite node\'s parent node')
        await plan()
        await simulate()
        await t
        .hover(Selector('#N10N1 .d2VDTInfo.d2VDTvariance1.varLabel'))
        .click(Selector('#N10N1 .d2VDTshowSim'))
        .click(Selector('#sandbox-host').find('.d2VDTIcon').nth(13))
        .doubleClick(Selector('#sandbox-host').find('.cell-view').nth(6))
        .pressKey('backspace')
        .typeText(Selector('#sandbox-host').find('.grid-cell'),'500')
        .click(Selector('#sandbox-host').find('.d2VDTClose'))
        // await plan()
        // await simulate() 
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Simulated composite node 1')
        await t
        .hover(Selector('#N10N1 .d2VDTInfo.d2VDTvariance1.varLabel'))
        .click(Selector('#N10N1 .d2VDTReset'))
        //.click(Selector('.d2VDTReset'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Deleted Simulated composite node 1')
        await t
        .hover(Selector('#N10N2 .d2VDTInfo.d2VDTvariance1.varLabel'))
        .click(Selector('#N10N2 .d2VDTshowSim'))
        .click(Selector('#tree-6kNEKod-1 div svg g g'))
        .doubleClick(Selector('#sandbox-host div'))
        .pressKey('backspace')


        //.click(Selector('text').withAttribute('class','d2VDTIcon'))
        .typeText(Selector('.grid-cell'), '5000')
        .click(Selector('#sandbox-host div.d2VDTClose'))
        // await plan()
        // await simulate() 
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Simulated composite node 2')
        await t
        .hover(Selector('#N10N2 .d2VDTInfo.d2VDTvariance1.varLabel'))
        .click(Selector('#N10N2 .d2VDTReset'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Deleted Simulated composite node 2')
        await t
        .click(Selector('#N1').find('.d2VDTToggleOverlay'))
        await model()
        await settings()
        await colorTheme()
        await t
        .click(Selector('.bf-ui-box.theme').nth(1).find('div').withText('DARK THEME').nth(0))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Without Save-Canvas theme- Dark')
        await t
        .click(Selector('.bf-ui-form-select.form-select.fSize14.fWeight500'))
        .click(Selector('option').withText('Light'))
        await simulate()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Without Save-Navigation Panel theme- Light')
        await model()
        await settings()
        await colorTheme()
        await t
        .click(Selector('.bf-ui-form-select.form-select.fSize14.fWeight500'))
        .click(Selector('option').withText('Dark'))
        await simulate()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Without Save-Navigation Panel theme- Dark')
        await model()
        await simulate()
        await model()
        await settings()
        await colorTheme()
        await t
        .click(Selector('.bf-ui-box.theme').nth(1).find('div').withText('LIGHT THEME').nth(0))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Without Save-Canvas theme- Light')
        await t
        .click(Selector('.bf-ui-form-select.form-select.fSize14.fWeight500'))
        .click(Selector('option').withText('Light'))
        await simulate()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Without Save-Navigation Panel theme- Light')
        await model()
        await settings()
        await colorTheme()
        await t
        .click(Selector('.bf-ui-form-select.form-select.fSize14.fWeight500'))
        .click(Selector('option').withText('Dark'))
        await simulate()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Without Save-Navigation Panel theme- Dark')
        await model()
        await settings()
        await colorTheme()
        await t
        .click(Selector('.bf-ui-box.theme').nth(1).find('div').withText('DARK THEME').nth(0))
        .click(Selector('[class^="btn bf-ui-button btn-secondary btn-sm finish-butto"]'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'With Save-Canvas theme- Dark')
        await t
        .click(Selector('.bf-ui-form-select.form-select.fSize14.fWeight500'))
        .click(Selector('option').withText('Light'))
        .click(Selector('[class^="btn bf-ui-button btn-secondary btn-sm finish-butto"]'))
        await simulate()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'With Save-Navigation Panel theme- Light')
        await model()
        await settings()
        await colorTheme()
        await t
        .click(Selector('.bf-ui-form-select.form-select.fSize14.fWeight500'))
        .click(Selector('option').withText('Dark'))
        .click(Selector('[class^="btn bf-ui-button btn-secondary btn-sm finish-butto"]'))
        await simulate()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'With Save-Navigation Panel theme- Dark')
        await model()
        await simulate()
        await model()
        await settings()
        await colorTheme()
        await t
        .click(Selector('.bf-ui-box.theme').nth(1).find('div').withText('LIGHT THEME').nth(0))
        .click(Selector('[class^="btn bf-ui-button btn-secondary btn-sm finish-butto"]'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'With Save-Canvas theme- Light')
        await t
        .click(Selector('.bf-ui-form-select.form-select.fSize14.fWeight500'))
        .click(Selector('option').withText('Light'))
        .click(Selector('[class^="btn bf-ui-button btn-secondary btn-sm finish-butto"]'))
        await simulate()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'With Save-Navigation Panel theme- Light')
        await model()
        await settings()
        await colorTheme()
        await t
        .click(Selector('.bf-ui-form-select.form-select.fSize14.fWeight500'))
        .click(Selector('option').withText('Dark'))
        .click(Selector('[class^="btn bf-ui-button btn-secondary btn-sm finish-butto"]'))
        await simulate()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'With Save-Navigation Panel theme- Dark')
        await model()
        await settings()
        await colorTheme()
        await t
        .click(Selector('.bf-ui-form-colorpicker.form-colorpicker').find('.swatch'))
        .click(Selector('.map.light').find('.background'))
        .drag(Selector('.slider.vertical').find('.pointer'), -4, 50, {
            offsetX: 9,
            offsetY: 7
        })
        .click(Selector('.colorpicker-btns').find('button').withText('Save'))
        // .click(Selector('.bf-ui-form-colorpicker.form-colorpicker.valuedisp').find('.swatch'))
        // .click(Selector('div').withText('CancelSave').nth(25).find('.background'))
        // .click(Selector('.colorpicker-btns').nth(1).find('button').withText('Save'))
        // .click(Selector('div').withText('Font Color').nth(15).find('.swatch'))
        // .click(Selector('.map.dark').find('.background'))
        // .click(Selector('.colorpicker-btns').nth(2).find('button').withText('Save'))
        // .click(Selector('div').withText('Background').nth(15).find('.swatch'))
        // .drag(Selector('.slider.vertical').nth(3).find('.pointer'), 0, -10, {
        //     offsetX: 11,
        //     offsetY: 2
        // })
        // .click(Selector('div').withText('CancelSave').nth(37).find('.background'))
        // .click(Selector('.colorpicker-btns').nth(3).find('button').withText('Save'))
        // .click(Selector('button').withText('Discard Changes'))
        // .click(Selector('.bf-ui-form-colorpicker.form-colorpicker').find('.swatch'))
        // .click(Selector('.map.light').find('.background'))
        // .click(Selector('.colorpicker-btns').find('button').withText('Save'))
        // .click(Selector('.bf-ui-form-colorpicker.form-colorpicker.valuedisp').find('.swatch'))
        // .click(Selector('.colorpicker-btns').nth(1).find('button').withText('Save'))
        // .click(Selector('div').withText('Font Color').nth(15).find('.swatch'))
        // .click(Selector('.map.dark').find('.background'))
        // .click(Selector('.colorpicker-btns').nth(2).find('button').withText('Save'))
        // .click(Selector('div').withText('Background').nth(15).find('.swatch'))
        // .drag(Selector('.slider.vertical').nth(3).find('.pointer'), 0, -26, {
        //     offsetX: 7,
        //     offsetY: 9
        // })
        // .click(Selector('div').withText('CancelSave').nth(37).find('.background'))
        // .click(Selector('.colorpicker-btns').nth(3).find('button').withText('Save'))
        // .click(Selector('div').withText('Derived nodes').nth(15).find('.swatch'))
        // .drag(Selector('div').withText('CancelSave').nth(43).find('.track'), 4, -61, {
        //     offsetX: 1,
        //     offsetY: 100
        // })
        // .click(Selector('.colorpicker-btns').nth(4).find('button').withText('Save'))
        // .click(Selector('div').withText('Derived nodes').nth(15).find('.swatch'))
        // .click(Selector('.colorpicker-btns').nth(4).find('button').withText('Save'))
        // .click(Selector('div').withText('Derived nodes').nth(15).find('.swatch'))
        // .click(Selector('div').withText('CancelSave').nth(43).find('.background'))
        // .click(Selector('.colorpicker-btns').nth(4).find('button').withText('Save'))
        // .click(Selector('div').withText('Composite nodes').nth(15).find('.swatch'))
        // .drag(Selector('.slider.vertical').nth(5).find('.pointer'), -9, -32, {
        //     offsetX: 9,
        //     offsetY: 5
        // })
        // .click(Selector('div').withText('CancelSave').nth(49).find('.background'))
        // .click(Selector('.colorpicker-btns').nth(5).find('button').withText('Save'))
        // .click(Selector('[class^="btn bf-ui-button btn-secondary btn-sm finish-butto"]'))
        // await colorTheme()
        // await t
        // .click(Selector('div').withText('Derived nodes').nth(15).find('.swatch'))
        // .click(Selector('div').withText('CancelSave').nth(43).find('.background'))
        // .click(Selector('.colorpicker-btns').nth(4).find('button').withText('Save'))
        // .click(Selector('button').withText('Discard Changes'))
        // .click(Selector('div').withText('Composite nodes').nth(15).find('.swatch'))
        // .click(Selector('div').withText('CancelSave').nth(49).find('.background'))
        // .click(Selector('.colorpicker-btns').nth(5).find('button').withText('Save'))
        // .click(Selector('button').withText('Discard Changes'))
        // .click(Selector('div').withText('Composite nodes').nth(15).find('.swatch'))
        // .click(Selector('div').withText('CancelSave').nth(49).find('.background'))
        // .click(Selector('.colorpicker-btns').nth(5).find('button').withText('Save'))
        // .click(Selector('button').withText('Discard Changes'))
        // .click(Selector('div').withText('Highlighted').nth(15).find('.swatch'))
        // .drag(Selector('.slider.vertical').nth(6).find('.pointer'), -5, -53, {
        //     offsetX: 9,
        //     offsetY: 5
        // })
        // .drag(Selector('.slider.vertical').nth(6).find('.pointer'), 0, 24, {
        //     offsetX: 9,
        //     offsetY: 8
        // })
        // .click(Selector('.colorpicker-btns').nth(6).find('button').withText('Save'))
        // .click(Selector('#N1').find('.d2VDTNode.d2VDTFocus'))
        // await plan()
        // await simulate()
        // await t
        // .click(Selector('#nodeSearch'))
        // .typeText(Selector('#nodeSearch'), 'net')
        // .click(Selector('p').withText('Net Profit'))
        // .click(Selector('span').withText('New'))
        // .click(Selector('span').withText('Node'))
        // .click(Selector('.node-content.node-type-S[title="Net Profit"]').find('div').withText('NTOP: Net Profit'))
        // .click(Selector('.node-content.node-type-A[title="Total Cost"]').find('div').withText('N9: Total Cost'))
        // .click(Selector('.node-content.node-type-M[title="Revenue"]').find('div').withText('N1: Revenue'))
        // .click(Selector('.node-content.node-type-C[title="Derived Node"]').find('div').withText('N16: Derived Node'))
        // await settings()
        // await colorTheme()
        // await t
        // .click(Selector('div').withText('Connectors').nth(15).find('.swatch'))
        // .click(Selector('div').withText('CancelSave').nth(61).find('.background'))
        // .click(Selector('.colorpicker-btns').nth(7).find('button').withText('Save'))
        // .click(Selector('button').withText('Discard Changes'))
        // .click(Selector('div').withText('Highlighted').nth(15).find('.swatch'))
        // .click(Selector('div').withText('CancelSave').nth(55).find('.background'))
        // .click(Selector('.colorpicker-btns').nth(6).find('button').withText('Save'))
        // .click(Selector('button').withText('Discard Changes'))
        // .click(Selector('div').withText('Connectors').nth(15).find('.swatch'))
        // .click(Selector('div').withText('CancelSave').nth(61).find('.background'))
        // .click(Selector('.colorpicker-btns').nth(7).find('button').withText('Save'))
        // .click(Selector('[class^="btn bf-ui-button btn-secondary btn-sm finish-butto"]'))
        // await colorTheme()
        // await t
        // .click(Selector('button').withText('Discard Changes'))
        // .click(Selector('.icon.icon--ChevronLeft'))
        // .click(Selector('div').withText('Color Theme').nth(12).find('.vdt-data-menu'))
        // .click(Selector('.dark-preview'))
        // .click(Selector('.bf-ui-form-select.form-select.fSize14.fWeight500'))
        // .click(Selector('option').withText('Dark'))
        // .click(Selector('button').withText('Discard Changes'))
        // .click(Selector('.bf-ui-form-select.form-select.fSize14.fWeight500'))
        // .click(Selector('option').withText('Dark'))
        // .click(Selector('.bf-ui-form-group.form-group').nth(3).find('div').withText('Choose navigation panel theme'))
        // .click(Selector('.bf-ui-box.theme').nth(1))
        // .click(Selector('.dark-preview'))
        // .click(Selector('[class^="btn bf-ui-button btn-secondary btn-sm finish-butto"]'))
        
});