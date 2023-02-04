/** @type {import('jest').Config} */
const config = {
  verbose: false,
  reporters: [
    'default',
    ['jest-html-reporters', {
      filename: 'report.html',
      pageTitle: '时空是个圆圈',
      logoImgPath: './logo.png',
      testCommand: 'yarn test',
      enableMergeData: true,
      dataMergeLevel: 2,
      urlForTestFiles: 'https://github.com/Hazyzh/report-examples/blob/master',
      darkTheme: true,
      includeConsoleLog: true,
    }]
  ],
  globalSetup: './global.setup.js'
};

module.exports = config;