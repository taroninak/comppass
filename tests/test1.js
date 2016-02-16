var comppass = require('../index.js');
var obj = {
  name : "Taron",
  surname : "Petrosyan",
  o : {
    nickname : "tgtaron",
    username : "tgtaron",
    arr : [ "1", 5 , "Blablabla"]
  }
};
var format = {
  name : "/\\w+/",
  surname : "/petrosyan/i",
  o : {
    nickname : "/taron/",
    username : "/[g]/",
    arr : [ "1", 5 , "/^[bl]/"]
  }
};
describe("Comppass", function () {
  it("Compare Objects", function () {
    comppass(obj,format);
  })
});
