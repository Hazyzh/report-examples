// setup.js
module.exports = async () => {
  // ...
  // Set reference to mongod in order to close the server during teardown.
  const myCustomInfo = { Environment: "dev", Browser: "chrome", Title: '<a href="https://github.com/Hazyzh/jest-html-reporters/issues/166">github link</>'  };
  process.env.JEST_HTML_REPORTERS_CUSTOM_INFOS = JSON.stringify(myCustomInfo);
};
