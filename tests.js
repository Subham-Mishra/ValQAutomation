const createTestCafe = require('testcafe');
let testcafe         = null;

createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        testcafe     = tc;
        const runner = testcafe.createRunner();

        return runner
            .src(['./tests/*.js'])
            // .src(['loginTest.js', 'ValQ_Demo.js'])
            
            //.filter(testName => testName === 'Custom Period Selection-BaselineVSComparison&Target')
            .browsers(['chrome'])
            .concurrency(5)
            .screenshots({
                path:'./screenshots/',
                takeOnFails:true,
                pathPattern:'${DATE}_${TIME}/test-${TEST_INDEX}/${USERAGENT}/${FILE_INDEX}.png'
                
            })
            
            .run({
                skipJsErrors:true,
                quarantineMode:false,
                selectionTimeout: 70000,
                assertionTimeout: 10000,
                pageLoadTimeout: 20000,
                speed: 1,
                stopOnFirstFail:false
            });
           
    })
    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testcafe.close();
    })
    .catch(err => {
        console.log('Completed');
        console.error(err);
        testcafe.close();
    });
  
    
    