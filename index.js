colors = require("colors");

error = function (boldStatement) {
  console.error(colors.red("You must have fibrous installed *globally and not locally* to use this module"));
  console.error("    " + "      " + " npm uninstall fibrous");
  console.error("    " + colors.grey("[sudo]") + " npm install -g fibrous");
  console.error("    " + "      " + " npm install ccheever/use-global-fibrous --save");
  console.error("");
  console.error("And switch all your require('fibrous') calls to require('use-global-fibrous')");
  console.error(colors.grey("Why? https://github.com/ccheever/use-global-fibrous/blob/master/README.md"));
  console.error("");
}

try {
  fibrousPath = require.resolve("fibrous");
} catch (e) {
  error();
  throw e;
}

// TODO: Make this less fragile and not assume things about the 
// way the system is setup
if (fibrousPath != "/usr/local/lib/node_modules/fibrous/lib/fibrous.js") {
  error();
  throw new Error("Refusing to use local fibrous install");
}

module.exports = require("fibrous");
