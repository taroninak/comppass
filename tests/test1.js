var comppass = require('../index.js');
var obj = {
  name : "Taron",
  surname : "Petrosyan",
  o : {
    nickname : "tgtaron",
    username : "tgtaron"
  }
};
var format = {
  name : "/\\w+/",
  surname : "/petrosyan/i",
  o : {
    nickname : "/taron/",
    username : "/^[g]/"
  }
};
describe("Comppass", function () {
  it("Compare Objects", function () {
    comppass(obj,format);
  })
});
