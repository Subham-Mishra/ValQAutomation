import {t, Selector} from 'testcafe'
const log = require('../config/logging').default


//Calculation
export const SumSOP = async () => {await t.click(Selector('span').withText('Sum-SOP'))
log.debug('Report Page : Sum SOP : Click => Clicked on Sum SOP')}

export const SumAverage = async () => {await t.click(Selector('span').withText('Sum- Average'))
log.debug('Report Page : Sum Average : Click => Clicked on Sum Average')}

export const SumLast = async () => {await t.click(Selector('span').withText('Sum - Last'))
log.debug('Report Page : Sum Last : Click => Clicked on Sum Last')}

export const SumCummulative = async () => {await t.click(Selector('span').withText('Sum- Cumulative'))
log.debug('Report Page : Sum Cummulative : Click => Clicked on Sum Cummulative')}

export const SubSOP = async () => {await t.click(Selector('span').withText('Sub-SOP'))
log.debug('Report Page : Sub SOP : Click => Clicked on Sub SOP')}

export const SubAverage = async () => {await t.click(Selector('span').withText('Sub- Average'))
log.debug('Report Page : Sum Average : Click => Clicked on Sum Average')}

export const SubLast = async () => {await t.click(Selector('span').withText('Sub- Last'))
log.debug('Report Page : Sum Last : Click => Clicked on Sum Last')}

export const SubCummulative = async () => {await t.click(Selector('span').withText('Sub- cumulative'))
log.debug('Report Page : Sum Cummulative : Click => Clicked on Sum Cummulative')}

export const MultiplySOP = async () => {await t.click(Selector('span').withText('Multiply-SOP'))
log.debug('Report Page : Multiply SOP : Click => Clicked on Multiply SOP')}

export const MultiplyAverage = async () => {await t.click(Selector('span').withText('Multiply- Average'))
log.debug('Report Page : Multiply Average : Click => Clicked on Multiply Average')}

export const MultiplyLast = async () => {await t.click(Selector('span').withText('Multiply- Last'))
log.debug('Report Page : Multiply Last  : Click => Clicked on Multiply Last ')}

export const MultiplyCummulative = async () => {await t.click(Selector('span').withText('Multiply- Cumulative'))
log.debug('Report Page : Multiply Cummulative : Click => Clicked on Multiply Cummulative')}

export const DivSOP = async () => {await t.click(Selector('span').withText('Div-SOP'))
log.debug('Report Page : Div SOP : Click => Clicked on Div SOP')}

export const DivAverage = async () => {await t.click(Selector('span').withText('Div-Average'))
log.debug('Report Page : Div Average : Click => Clicked on Div Average')}

export const DivLast = async () => {await t.click(Selector('span').withText('Div-Last'))
log.debug('Report Page : Div Last : Click => Clicked on Div Last')}

export const DivCummulative = async () => {await t.click(Selector('span').withText('Div-Cumulative'))
log.debug('Report Page : Div Cummulative : Click => Clicked on Div Cummulative')}

//Details Page
export const Formula_Add_Without_Simulation = async () => {await t.click(Selector('span').withText('Formula_Add_Without Simulation')).wait(5000)
log.debug('Report Page : Formula Add Without Simulation : Click => Clicked on Formula Add Without Simulation')}

export const Formula_Add_With_Simulation = async () => {await t.click(Selector('span').withText('Formula_Add_With Simulation')).wait(5000)
log.debug('Report Page : Formula Add With Simulation : Click => Clicked on Formula Add With Simulation')}

export const Formula_Sub_Without_Simulation = async () => {await t.click(Selector('span').withText('Formula_Sub_Without Simulation'))
log.debug('Report Page : Formula Sub Without Simulation : Click => Clicked on Formula Sub Without Simulation')}

export const Formula_Sub_With_Simulation = async () => {await t.click(Selector('span').withText('Formula_Sub_With Simulation'))
log.debug('Report Page : Formula Sub With Simulation : Click => Clicked on Formula Sub With Simulation')}

export const Formula_Multiply_Without_Simulation = async () => {await t.click(Selector('span').withText('Formula_Multiply_Without Simulation'))
log.debug('Report Page : Formula Multiply Without Simulation : Click => Clicked on Formula Multiply Without Simulation')}

export const Formula_Multiply_With_Simulation = async () => {await t.click(Selector('span').withText('Formula_Multiply_with Simulation'))
log.debug('Report Page : Formula Multiply With Simulation : Click => Clicked on Formula Multiply With Simulation')}

export const Formula_Division_Without_Simulation = async () => {await t.click(Selector('span').withText('Formula_Division_Without Simulation'))
log.debug('Report Page : Formula Division Without Simulation : Click => Clicked on Formula Division Without Simulation')}

export const Formula_Division_With_Simulation = async () => {await t.click(Selector('span').withText('Formula_Division_With Simulation'))
log.debug('Report Page : Formula Division With Simulation : Click => Clicked on Formula Division With Simulation')}