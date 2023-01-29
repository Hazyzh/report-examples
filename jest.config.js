/** @type {import('jest').Config} */
const config = {
  verbose: true,
  reporters: [
    'default',
    ['jest-html-reporters', {
      publicPath: 'examples',
      filename: 'index.html',
      pageTitle: '时空是个圆圈',
      logoImgPath: './logo.png',
      testCommand: 'yarn test',
      enableMergeData: true,
      dataMergeLevel: 2,
      urlForTestFiles: 'https://github.com/Hazyzh/report-examples/blob/master',
      darkTheme: true,
    }]
  ]
};

module.exports = config;