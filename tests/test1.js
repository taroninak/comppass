var comppass = require('../index.js');
var obj = {
  name : "Taron",
  surname : "Petrosyan",
  o : {
    nickname : "tgtaron",
    username : "tgtaron",
    arr2 : [],
    arr : [ "1", 5 , [4,3,"Blablabla"]]
  }
};
var format = {
  name : "/\\w+/",
  surname : "/petrosyan/i",
  o : {
    nickname : "/taron/",
    username : "/[g]/",
    arr2 : [],
    arr : [ "1", 5 , [4,3,"/^[^B]/"]]
  }
};
describe("Comppass", function () {
  it("Compare Objects", function () {
    comppass(obj,format);
  });

  it("Compare Strings", function () {
    comppass("Sample string", "/[st]+/");
  });

  it("Compare Booleans", function () {
    comppass(false, true);
  });

  it("Compare Numbers", function () {
    comppass(10, 11);
  });
});
