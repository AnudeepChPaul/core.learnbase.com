"use strict";

const envVars = (name) => process.env[name] || null;

module.exports = (function () {
  return {
    HOME_PAGE_URL: "https://app.learnbase.anudeepchpaul.in",
    AUTH_PAGE_URL: "https://auth.learnbase.anudeepchpaul.in",
    envVars: envVars
  };
})();
