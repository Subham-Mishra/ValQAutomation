import {t, Selector} from 'testcafe'
const log = require('../config/logging').default

export const navigationPanelMonth = async () =>{await t.click(Selector('div.d2VDTNavCtr').find('div.col-multi').find('div.d2VDTNavItem.d2VDTNavBg').find('div').withText('Month'))
log.debug('Page : Navigation Panel : Click => Clicked on Period Month')}

export const navigationPanelYtD = async () => {await t.click(Selector('.col-multi').find('div.d2VDTNavItem.d2VDTNavBg').find('div').withText('YtD'))
log.debug('Page : Navigation Panel : Click => Clicked on Period YtD')}
 
export const navigationPanelFullYear = async () => {await t.click(Selector('.col-multi').find('div').withText('Full Year'))
log.debug('Page : Navigation Panel : Click => Clicked on Period Full Year')}
 
export const navigationPanelSimMths = async () => {await t.click(Selector('.col-multi').find('div').withText('Sim.Mths'))
log.debug('Page : Navigation Panel : Click => Clicked on Period Sim.Mths')}

export const navigationPanelJanuary = async () => {await t.click(Selector('.d2VDTNavItem.d2VDTNavBg').withText('Jan'))
log.debug('Page : Navigation Panel : Click => Click Simulation Applied to Period Jan')}

export const navigationPanelMarch = async () => {await t.click(Selector('.d2VDTNavItem.d2VDTNavBg').withText('Mar'))
log.debug('Page : Navigation Panel : Click => Click Simulation Applied to Period Mar')}

export const navigationPanelJune = async () => {await t.click(Selector('.d2VDTNavItem.d2VDTNavBg').withAttribute('title', /Simulations Applied to Period\s+Jun and future peri/))
log.debug('Page : Navigation Panel : Click => Click Simulation Applied to Period Jun')}
  
export const navigationPanel0 = async () => {await t.click(Selector('.d2VDTNavItem[title="Show auto-scaled nodes in 0"]'))
log.debug('Page : Navigation Panel : Click => Clicked on element Show auto-scaled nodes in 0')}

export const navigationPanel0k = async () => {await t.click(Selector('.d2VDTNavItem[title="Show auto-scaled nodes in 0k"]'))
log.debug('Page : Navigation Panel : Click => Clicked on element Show auto-scaled nodes in 0k')}

export const navigationPanel0_0m = async () => {await t.click(Selector('.d2VDTNavItem[title="Show auto-scaled nodes in 0.0m"]'))
log.debug('Page : Navigation Panel : Click => Clicked on element Show auto-scaled nodes in 0.0m')}

export const navigationPanel0_0b = async () => {await t.click(Selector('.d2VDTNavItem[title="Show auto-scaled nodes in 0.0b"]'))
log.debug('Page : Navigation Panel : Click => Clicked on element Show auto-scaled nodes in 0.0b')}




