var comppass = require('../index.js');
var obj = {
  name : "Taron",
  surname : "Petrosyan",
  o : {
    nickname : "tgtaron",
    username : "tgtaron",
    id : 157037778014384,
    arr : [ "1", 5 , [4,3,"Blablabla"]]
  }
};
var format = {
  name : "/\\w+/",
  surname : "/petrosyan/i",
  o : {
    nickname : "/taron/",
    id : 157037778014384,
    arr2 : [],
    username : "/[g]/",
    arr : [ "1", 5 , [4,3,"/^[^B]/"]]
  }
};
describe("Comppass", function () {
  it("Compare Objects", function (done) {
    comppass(obj,format);
    return done();
  });

  it("Compare Strings", function (done) {
    comppass("Sample string", "/[st]+/");
    return done();
  });

  it("Compare Booleans", function (done) {
    comppass(false, true);
    return done();
  });

  it("Compare Numbers", function (done) {
    comppass(10, 11);
    return done();
  });

  it("Compare Location", function (done) {
    comppass({location : {place: "Somewhere1 in the world",}}, {"location": {
      "place": "Somewhere in the world",
      "street": "",
      "city": "",
      "state": "",
      "zip": "",
      "country": ""
    }});
    return done();
  });

});
