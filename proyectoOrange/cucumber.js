module.exports = {
    default: `--require-module @babel/register --require steps/**/*.js --format progress --format json:reports/cucumber-report.json`,
  };