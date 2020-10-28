import {t, Selector} from 'testcafe'
const log = require('../config/logging').default

//Clicking on Variance Analysis
export const varianceAnalysis = async () =>{
    await t
        .click(Selector('.tabTitle').withText('Variance Analysis'))
        .expect(Selector('div.d2VDTPopUpBgFull',{visibilityCheck: true}).exists).eql(true).wait(3000)
log.debug('Page : Analyze : Variance Analysis : Click => Clicked on Variance Analysis')}


//Time Period for comparison
export const period = async () =>{await t
    .click(Selector('.dropdown-menu').find('span').withText('Periodic'))
log.debug('Page : Analysis : :Variance Analysis : Click => Clicked on Periodic')}

export const quarterToDate = async () =>{await t
    .click(Selector('.dropdown-menu').find('span').withText('Quarter-to-date'))
log.debug('Page : Analysis : :Variance Analysis : Click => Clicked on Quarter-to-date')}

export const quarter = async () =>{await t
    //.click(Selector('#sandbox-host.form-icon').nth(8))
    .click(Selector('.dropdown-menu').find('span').withExactText('Quarter'))
    .wait(1000)
log.debug('Page : Analysis : :Variance Analysis : Click => Clicked on Quarter')}

export const halfYear = async () =>{await t
    .click(Selector('.dropdown-menu').find('span').withText('Half Year'))
log.debug('Page : Analysis : :Variance Analysis : Click => Clicked on Half Year')}

export const halfYearToDate = async () =>{await t
    .click(Selector('.dropdown-menu').find('span').withText('Half Year-to-date'))
log.debug('Page : Analysis : :Variance Analysis : Click => Clicked on Half Year-to-date')}

export const yearToDate = async () =>{await t
    //.click(Selector('#sandbox-host.form-icon').nth(11))
    .click(Selector('.dropdown-menu').find('span').withExactText('Year-to-date'))
    .wait(1000)
log.debug('Page : Analysis : :Variance Analysis : Click => Clicked on Year-to-date')}

export const yearToGo = async () =>{await t
    .click(Selector('.dropdown-menu').find('span').withText('Year-to-go'))
log.debug('Page : Analysis : :Variance Analysis : Click => Clicked on Year-to-go')}

export const fullYear = async () =>{await t
    .click(Selector('.dropdown-menu').find('span').withText('Full Year'))
log.debug('Page : Analysis : :Variance Analysis : Click => Clicked on Full Year')}


//Comparison Series
export const addnl1 = async () =>{
    await t
    
    .click(Selector('div.va-column.va-child').nth(5))
    .click(Selector('.dropDown-options-checkbox').find('span').withText('Additional 1'))
log.debug('Page : Analysis : :Variance Analysis : Click => Clicked on Additional 1')}

export const addnl2 = async () =>{
    await t
    .click(Selector('div.va-column.va-child').nth(5))
    .click(Selector('.dropDown-options-checkbox').find('span').withText('Additional 2'))
log.debug('Page : Variance Analysis : Comparison Series : Click => Clicked on Additional 2')}

export const addnl3 = async () =>{
    await t
    .click(Selector('div.va-column.va-child').nth(5))
    .click(Selector('.dropDown-options-checkbox').find('span').withText('Additional 3'))
log.debug('Page : Variance Analysis : Comparison Series : Click => Clicked on Additional 3')}


//Clicking Dropdown for choosing Time Period
export const seriesDropdown = async () =>{await t.click(Selector('div').withAttribute('class','.va-row.va-period-type').nth(5))}

//Changing Scenarios
export const scenario1 = async () =>{
    await t
        .click(Selector('va-row va-child compare-series').nth(3))
        .click(Selector('.dropdown-option').withText('Scenario 1'))
log.debug('Page : Variance Analysis : Scenarios : Click => Clicked on Scenario 1')}

export const scenario2 = async () =>{
    await t
        .click(Selector('va-row va-child compare-series').nth(3))
        .click(Selector('.dropdown-option').withText('Scenario 2'))
log.debug('Page : Variance Analysis : Scenarios : Click => Clicked on Scenario 1')}

export const scenario3 = async () =>{
    await t
        .click(Selector('va-row va-child compare-series').nth(3))
        .click(Selector('.dropdown-option').withText('Scenario 3'))
log.debug('Page : Variance Analysis : Scenarios : Click => Clicked on Scenario 1')}



//Choosing Time Aggregation for Variance Analysis
export const VATimeAggregation = async (VATimeAgg) =>{
    await t
    .click(Selector('.va-row.va-period-type'))
    .click(Selector('.dropdown-menu').find('span').withExactText(VATimeAgg))
    .click(Selector('#sandbox-host .navToggle.arrow-icon').nth(4))
}


//Choosing Base Series for Variance Analysis
export const VABaseline = async (VABase) =>{
    await t
    .click(Selector('#sandbox-host .navToggle.arrow-icon'))
    .click(Selector('#sandbox-host span').withText(VABase))
}

//Choosing Comparison for Variance Analysis
export const VAComparison = async (VACompare) =>{
    await t
    .click(Selector('#sandbox-host .navToggle.arrow-icon').nth(2))
    .click(Selector('#sandbox-host span').withText(VACompare).nth(1))
    .click(Selector('#sandbox-host .navToggle.arrow-icon').nth(2))
}

//Percentage Variance
export const PctVariance = async () =>{await t
    .click(Selector('#sandbox-host span').withText('% variance'))
log.debug('Page : Analysis : :Variance Analysis : Click => Clicked on Percentage Variance')}


//Absolute Variance
export const AbsVariance = async () =>{await t
    .click(Selector('#sandbox-host span').withText('Absolute variance'))
log.debug('Page : Analysis : :Variance Analysis : Click => Clicked on Absolute Variance')}

//Size columns to fit
export const sizeToFit = async () =>{await t
    .click(Selector('#sandbox-host label').withText('Size colums to fit'))
log.debug('Page : Analysis : :Variance Analysis : Click => Clicked on Size Columns to Fit')}


//Choosing Scenarios for Variance Analysis
export const VAScenarioSelection = async (VAScenario) =>{
    await t
    .click(Selector('#sandbox-host .navToggle.arrow-icon').nth(1))
    .click(Selector('#sandbox-host span').withText(VAScenario))
}




