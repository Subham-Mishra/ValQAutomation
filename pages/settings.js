import {t, Selector} from 'testcafe'
const log = require('../config/logging').default


export const settings = async () => {await t.click(Selector('span').withText('Settings'))
log.debug('Page : Settings : Click => Clicked on Settings')}

//Nodes
export const nodes = async () => {await t.click(Selector('.vdt-data-menu-name').nth(1).find('div').withText('Nodes'))
log.debug('Page : Nodes : Click => Clicked on Nodes- Configure data and display format')}

export const standardNode = async () => {await t.click(Selector('.standard'))
log.debug('Page : Nodes : Click => Clicked on Standard Node')}

export const compactNode = async () => {await t.click(Selector('.compact'))
log.debug('Page : Nodes : Click => Clicked on Compact Node')}

export const minimalNode = async () => {await t.click(Selector('.minimal'))
log.debug('Page : Nodes : Click => Clicked on Minimal Node')}

export const variance = async () => {await t.click(Selector('label').withText('Variance').find('.form-icon'))
log.debug('Page : Nodes : Click => Clicked on Variance')}

export const trendSparkLine = async () => {await t.click(Selector('label').withText('Trend spark line').find('.form-icon'))
log.debug('Page : Nodes : Click => Clicked on Trend Spark Line')}

export const secondaryValueVariance = async () => {await t.click(Selector('label').withText('Secondary Value/Variance').find('.form-icon'))
log.debug('Page : Nodes : Click => Clicked on Secondary Value or Variance')}

export const descendantNodeCount = async () => {await t.click(Selector('label').withText('Descendant Node Count').find('.form-icon'))
log.debug('Page : Nodes : Click => Clicked on Descendant Node Count')}


//Color Theme
export const colorTheme = async () => {await t.click(Selector('.vdt-data-menu-name').nth(5).find('div').withText('Color Theme'))
log.debug('Page : Color Theme : Click => Clicked on Color Theme')}




