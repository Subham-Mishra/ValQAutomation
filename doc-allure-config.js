const DOC_ALLURE_CONFIG = {
    CLEAN_REPORT_DIR: false,
    COPY_HISTORY: false,
    RESULT_DIR: '/allure/allure-results',
    REPORT_DIR: '/allure/allure-report',
    META: {
        STORY_ID: 'STORY',
        TEST_ID: 'ID',
        SEVERITY: 'SEVERITY',
        TEST_RUN: 'TEST_RUN',
        testPlanKey: 'testPlanKey',             
        testExecutionKey: 'testExecutionKey',      
        testEnvironments: 'testEnvironments'                         
    },
    STORY_LABEL: 'JIRA Story Link',
    STORY_URL: 'https://visualbi.atlassian.net/browse/{{ID}}',
    TEST_LABEL: 'JIRA Test Link',
    TEST_URL: 'https://visualbi.atlassian.net/browse/{{ID}}',
    SCREENSHOT_LABEL: '{{ID}}',
    SCREENSHOT_PATH:'{{temp_var}}',
    labels: {
        screenshotLabel: 'Capture',
        browserLabel: 'Browser',
        userAgentLabel: 'QA',
        allureStartMessage: 'Allure reporter started...',
        allureClosedMessage: 'Allure reporter closed...'
    }
};
 
module.exports = DOC_ALLURE_CONFIG;