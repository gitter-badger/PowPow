require(["stapes.min", "sizzle.min"], function (Stapes, Sizzle) {
  var TestModel = Stapes.subclass();

  var TestView = Stapes.subclass({
    constructor: function (model) {
      var self = this;
      this.mainInput = Sizzle("#input")[0];
      this.mainOutput = Sizzle("#output")[0];
      this.model = model;

      this.mainInput.on("change", function () {
        this.model
      });
    }
  });

  var view = new TestView();
});