const createTestCafe = require('testcafe');
let testcafe         = null;

createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        testcafe     = tc;
        const runner = testcafe.createRunner();

        return runner
        .src(['./tests/Attribution Analysis/*.js'])
        //.filter(testName => testName === 'UI Control Validation-Percentage Variance-With Scenario')
        // .src(['loginTest.js', 'ValQ_Demo.js'])
            .browsers(['chrome'])
            .concurrency(2)
            .screenshots({
                path:'./screenshots/',
                takeOnFails:true,
                pathPattern:'${DATE}_${TIME}/test-${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.png'
            })
            //.reporter(['allure','spec'])
            .reporter([
                {
               "name": "allure"
                },
                {
               "name": "spec",
               "output": "my-reporter/specreport.json"
                },
                {
               "name": "csv",
               "output": "my-reporter/csvreport.csv"
                }])
            .run({
                skipJsErrors:true,
                quarantineMode:false,
                selectionTimeout: 90000,
                assertionTimeout: 20000,
                pageLoadTimeout: 30000,
                speed: 1,
                stopOnFirstFail:false,
                disablePageCaching:false
            });
    })
    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
    })
    .catch(err => {
        console.error(err);
        testcafe.close();
    });