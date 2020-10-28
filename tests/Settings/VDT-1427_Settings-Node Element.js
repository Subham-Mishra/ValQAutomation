import { t, Role } from 'testcafe';
import doVisualRegression from '../../Util/vrtUtil';
import signIn from '../../pages/signIn';
import { VDT1427_Settings_Node_Element } from '../../pages/urlPage';
import { switchToIframe, table, tree, model, save, editIcon, editOption } from '../../pages/common';
import { settings, nodes, variance, trendSparkLine, secondaryValueVariance, descendantNodeCount, minimalNode, standardNode, compactNode } from '../../pages/settings';
const testSet = require('../../dataset.json').testSet;

if(process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv')
    dotenv.config()
}

const log = require('../../config/logging').default;

const signInSettignsNodeElement = Role(VDT1427_Settings_Node_Element, signIn, { preserveUrl: true })

fixture `Settings`
  .meta('ID','VDT-1427')
  .meta({'author': 'Automation','Date':'12-Mar-2020'})
  .meta('SEVERITY','Critical')
  .meta('TEST_RUN','1.7.0')
// .beforeEach(async t => {
//     var { error, warn, log, info } = await t.getConsoleMessages();

//     const expectedInfoMessages = info.filter(msg => msg.indexOf('important message') > -1);
//     console.log(`error: ${error}`)
//     console.log(`warn: ${warn}`)
//     console.log(`log: ${log}`)
//     console.log(`info: ${info}`)
//     await t
//         .expect(error.length).eql(0)
//         .expect(warn.length).eql(0)
//         .expect(expectedInfoMessages.length).ok();
// })
// .afterEach(async t => {
//     var { error, warn, log, info } = await t.getConsoleMessages();

//     const expectedInfoMessages = info.filter(msg => msg.indexOf('important message') > -1);
//     console.log(`error: ${error}`)
//     console.log(`warn: ${warn}`)
//     console.log(`log: ${log}`)
//     console.log(`info: ${info}`)
//     await t
//         .expect(error.length).eql(0)
//         .expect(warn.length).eql(0)
//         .expect(expectedInfoMessages.length).ok();
// })
  .meta({
    testPlanKey: ''|| process.env.TEST_PLAN_KEY,               // ** Compulsory ** //
    testExecutionKey: ''|| process.env.TEST_EXECUTION_KEY,     // ** Needs when you update the execution ** //  
    testEnvironments:['QA']                                    // ** Compulsory ** //
  })

testSet.forEach(currentTest => {
test
    .meta('ID','VDT-1427')
    .meta('SEVERITY','blocker')
    .before(async ctx  => {
        log.debug('Test started..',ctx.testRun.test.name);
        // var { error, warn, log, info } = await ctx.getBrowserConsoleMessages();
        // console.log(`before: ${error} ${warn} ${log} ${info}`);   
    })
    .after(async ctx  => {
        log.debug('Test Ended..',ctx.testRun.test.name);
        // var { error, warn, log, info } = await ctx.getBrowserConsoleMessages();
        // console.log(`after: ${error} ${warn} ${log} ${info}`);
    }) (`VDT-1427_Settings-Node Element`, async t => {
        await t
        .useRole(signInSettignsNodeElement)
        await editIcon()
        await editOption()
        await switchToIframe()
        await model()
        await settings()
        await nodes()
        await minimalNode()
        await save()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree- Node Style- Minimal size')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table- Node Style- Minimal size')
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree- Node Style- Minimal size retained')
        await nodes()
        await standardNode()
        await save()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree- Node Style- Standard size')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table- Node Style- Standard size')
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree- Node Style- Standard size retained')
        await nodes()
        await compactNode()
        await save()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree- Node Style- Compact size')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table- Node Style- Compact size')
        await tree()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree- Node Style- Compact size retained')
        await nodes()
        await variance()
        await save()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree- Without Variance')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table- Without Variance')
        await tree()
        await nodes()
        await variance()
        await save()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree- With Variance')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table- With Variance')
        await tree()
        await nodes()
        await trendSparkLine()
        await save()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree- Without Trend spark line')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table- Without Trend spark line')
        await tree()
        await nodes()
        await trendSparkLine()
        await save()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree- With Trend spark line')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table- With Trend spark line')
        await tree()
        await nodes()
        await secondaryValueVariance()
        await save()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree- Without Secondary Value or Variance')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table- Without Secondary Value or Variance')
        await tree()
        await nodes()
        await secondaryValueVariance()
        await save()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree- With Secondary Value or Variance')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table- With Secondary Value or Variance')
        await tree()
        await nodes()
        await descendantNodeCount()
        await save()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree- With Descendant Node Count')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table- With Descendant Node Count')
        await tree()
        
        await nodes()
        await descendantNodeCount()
        await save()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Tree- Without Descendant Node Count')
        await table()
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Table- Without Descendant Node Count')

}).meta({testKey:'' || process.env.TEST_KEY})
})