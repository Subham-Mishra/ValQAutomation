import {t, Selector} from 'testcafe'
import { switchToIframe, switchToMainWindow } from './common'
const log = require('../config/logging').default

export const VDTAnalysisChartMenu = async () => {await t.click(Selector('.analysis-chart-switch').nth(1).find('span').withText('☰'))
log.debug('Canvas : Details Page : Click => Clicked on VDT Analysis Chart Menu')}

export const VDTChartMenu = async () => {await t.click(Selector('.analysis-chart-switch').find('span').withText('☰'))
log.debug('Canvas : Details Page : Click => Clicked on VDT Chart Menu')}

export const trendOfChildren = async () => {await t.click(Selector('li').withText('Trend of Children'))
log.debug('Canvas : Details Page :  VDT Analysis Chart:  Click => Clicked on Trend of Children')}

export const trend = async () => {await t.click(Selector('li').withText('Trend'))
log.debug('Canvas : Details Page :  VDT Analysis Chart : Click => Clicked on Trend')}

export const trendOfCalculationComponents = async () => {await t.click(Selector('li').withText('Trend of Calculation Components'))
log.debug('Canvas : Details Page :  VDT Analysis Chart : Click => Clicked on Trend Of Calculation Components')}

export const varianceBreakdown = async () => {await t.click(Selector('li').withText('Variance Breakdown'))
log.debug('Canvas : Details Page :  VDT Chart : Click => Clicked on Variance Breakdown')}

export const simulationImpact = async () => {await t.click(Selector('li').withText('Simulation Impact'))
log.debug('Canvas : Details Page :  VDT Chart : Click => Clicked on Simulation Impact')}

export const NTOP = async () => {await t.click(Selector('#NTOP .d2VDTInfo.d2VDTvariance1.varLabel'))
log.debug('Canvas : Node : Click => Clicked on NTOP Node')}

export const incomeNode = async () => {await t.click(Selector('#N1').find('path.d2VDTNode.d2VDTFocus'))}

export const expensesNode = async () => {await t.click(Selector('#N12').find('path.d2VDTNode.d2VDTFocus'))}


export const analysisChartMaximize = async () => {
    await t.click(Selector('div.d2VDTAnalysisChart').find('div.analysis-chart-switch').find('span.analysis-chart-maximize'))
}


export const analysisChartMinFlip = async () => {
    await t.click(Selector('div.d2VDTAnalysisChart').find('div.analysis-chart-switch').find('span.analysis-chart-flip'))
}

export const analysisChartMaxFlip = async () => {
    await t.click(Selector('div.d2VDTChartMax').find('div.analysis-chart-switch').find('span.analysis-chart-flip'))
}

export const visualShrink = async () => {
    await switchToMainWindow()
    await t.click(Selector('#pvExplorationHost [class^="btn collapseIcon pbi-borderless-button glyphicon g"]'))
    await switchToIframe()
}

export const visualExpand = async () => {
    await switchToMainWindow()
    await t.click(Selector('#pvExplorationHost [class^="btn collapseIcon pbi-borderless-button glyphicon g"]'))
    await switchToIframe()
}

export const trendChartMaximize = async () => {
    await t.click(Selector('div.d2VDTChart').find('div.analysis-chart-switch').find('span.analysis-chart-maximize'))
}
