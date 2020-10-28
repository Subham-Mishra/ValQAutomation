import { Selector, Role} from 'testcafe';
import doVisualRegression from '../../Util/vrtUtil';
import signIn from '../../pages/signIn';
import { VDT1471_Constant_Node_NPV } from '../../pages/urlPage';

const signInNPV = Role(VDT1471_Constant_Node_NPV, signIn, { preserveUrl: true })

fixture `Constant_Node`
    .meta('ID','VDT-1471')
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
    .meta('ID','VDT-1471')
    .meta('SEVERITY','blocker')
    ('Constant Node- NPV', async t => {
    await t
        .useRole(signInNPV)
        .click(Selector('span[title="Page 2"]').withText('Page 2'))
        .wait(3000)
        .click(Selector('span[title="Page 1"]').withText('Page 1'))
        //.click(Selector('span[title="Constant Node"]').withText('Constant Node'))
        //.wait(60000)
        .switchToIframe(Selector('.visual-sandbox[name="visual-sandbox"]')).wait(30000)
        .hover(Selector('.d2VDTNode.d2VDTFocus'))
        .click(Selector('text.d2VDTshowSim'))
        await doVisualRegression(t.testRun.test.testFile.currentFixture.name, t.testRun.test.name, 'Constant Node- NPV- NPV')  
        await t
        .switchToMainWindow()
    });

    