// import uaParser from 'ua-parser-js';
import { t, Selector } from "testcafe";
import resemble from "resemblejs";
import path from "path";
import fs from "fs-extra";
import mergeImg from 'merge-img'
import { switchToIframe,switchToMainWindow, wait3000 } from "../pages/common";

const log = require('../config/logging').default
var imageDifferentPercentage
const getAbsolutePathForScreenshot = (type, testFixture, testName, input) =>
  path
    .join(
      __dirname,
      ".././screenshots/",
      type,
      testFixture,
      testName,
      `${input}.png`
    )
    .normalize();
const doVisualRegression = async (testFixture, testName, input) => {
  await wait3000();
  let diffScreenshotAbsolutePath;

  //create base image file
  const baseScreenshotAbsolutePath = getAbsolutePathForScreenshot(
    "base",
    testFixture,
    testName,
    input
  );
  const isBaseScreenshotTaken = fs.existsSync(baseScreenshotAbsolutePath);
  if (!isBaseScreenshotTaken) {
    // take base screenshot
    await t
    .switchToMainWindow()
    .takeElementScreenshot(Selector('.visualContainerHost'),`base\\${testFixture}\\${testName}\\${input}.png`)
     //.switchToIframe(Selector('.visual-sandbox[name="visual-sandbox"]')).wait(5000)
  }


  // take actual screenshot
  console.log("Path: "+path.join("actual", testFixture, testName, `${input}.png`))
  await t
  .switchToMainWindow()
  .takeElementScreenshot(Selector('.visualContainerHost'), path.join("actual", testFixture, testName, `${input}.png`))
   //.switchToIframe(Selector('.visual-sandbox[name="visual-sandbox"]')).wait(5000)
  //create actual image file
  const actualScreenshotAbsolutePath = getAbsolutePathForScreenshot(
    "actual",
    testFixture,
    testName,
    input
  );
  const isActualScreenshotTaken = fs.existsSync(actualScreenshotAbsolutePath);

  const box = {
    left: 320,
    top: 100,
    right: 1400,
    bottom: 750
};

  //Image Comparison
  if (isActualScreenshotTaken && isBaseScreenshotTaken) {
    await resemble(baseScreenshotAbsolutePath)
      .compareTo(actualScreenshotAbsolutePath)
      .scaleToSameSize()
      // .ignoreColors()
      // .ignoreAntialiasing()  // added to remove extra stuff
      .outputSettings({
        errorColor: {
          red: 255,
          green: 0,
          blue: 0
        },
        errorType: "movementDifferenceIntensity",
        transparency: 0.5,
        largeImageThreshold: 1200,
        useCrossOrigin: false,
        outputDiff: true,
        boundingBox: box
      })
      .onComplete(async data => {
        imageDifferentPercentage=data.rawMisMatchPercentage
        log.debug(`image differene Percentage  `+path.join("actual", testFixture, testName, `${input}.png`) +`  :: ${imageDifferentPercentage}`)
        if (imageDifferentPercentage> 3){
          // write a diff image
            diffScreenshotAbsolutePath = path.join(
            path.dirname(actualScreenshotAbsolutePath),
            `${path.basename(
              actualScreenshotAbsolutePath,
              path.extname(actualScreenshotAbsolutePath)
            )}-diff.png`
          )
          fs.writeFileSync(
            diffScreenshotAbsolutePath,
            data.getBuffer()
          );
    
        //merge base and diff image in case of differences
        mergeImg([baseScreenshotAbsolutePath, diffScreenshotAbsolutePath])
        .then((img) => {
          // Save image as file
          img.write(diffScreenshotAbsolutePath, () => console.log('Difference image generated'),log.error(`Difference Image generated:  ${imageDifferentPercentage}`)); 
        })
        .catch(err => console.error(err) );
        // await t.expect(false).ok('Failed')

          // fail test
          throw new Error(
            log.debug(`Visual mismatch detected in test: ${testFixture}/${testName}/${input}. Please investigate.`),
            log.error(err)
            //`Visual mismatch detected in test: ${testFixture}/${testName}/${input}. Please investigate.`
          );
        }
      });
  }

  await switchToIframe()
};

export default doVisualRegression;
