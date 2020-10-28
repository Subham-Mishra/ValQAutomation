import {t, Selector} from 'testcafe'
const log = require('../config/logging').default

if(process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv')
    dotenv.config()
}

const signIn = async () => {
    
    await t
    .wait(5000)
    .click(Selector('a').withText('SIGN IN'))
    .maximizeWindow()
    .typeText(Selector('#i0116'), process.env.USER_NAME)
    .click(Selector('#idSIButton9'))
    .click(Selector('#i0118'))
    .pressKey('shift')
    .typeText(Selector('#i0118'), process.env.PASSWORD)
    .click(Selector('#idSIButton9'))
    .click(Selector('#idSIButton9'))
    log.debug('Signed in as valqtestuser');    
}

export default signIn;