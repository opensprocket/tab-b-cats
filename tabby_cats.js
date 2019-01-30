var random = req("luna/common/random.js");

/**
 * ##TabbyCats
 * Made by opensprocket, refreshed for 2018. 
 * Use by permission.
 * This is how we show tabby cats via the Tab+B shortcut when
 * --enable_tabby_cats is on.
 */
TabbyCats = {
  cat_directory: '/-/static/apps/asana/media/cats/',

  // Each cat must define its location in the filesystem and dimensions in px
  clowder: [
    {
      path: "diva.png",
      w: 323,
      h: 356
    },
    {
      path: "frens.png",
      w: 294,
      h: 341
    },
    {
      path: "hidecat.png",
      w: 277,
      h: 188
    },
    {
      path: "jrcat.png",
      w: 251,
      h: 436
    },
    {
      path: "sittingallcutecat.png",
      w: 359,
      h: 417
    },
    {
      path: "stillcat.png",
      w: 335,
      h: 369
    },
    {
      path: "upcat.png",
      w: 193,
      h: 373
    }
  ],

  cat_carrier: undefined,

  showCat: function() {
    var cat = random.element({ array: TabbyCats.clowder });

    var x = random.integer({ max: window.innerWidth - cat.w });
    var y = random.integer({ max: window.innerHeight - cat.h });

    var cat_img = document.createElement("img");

    cat_img.setAttribute("src", TabbyCats.cat_directory + cat.path);
    cat_img.setAttribute("class", "tabby-cat");
    cat_img.setAttribute("style", "left: " + x + "px; top: " + y + "px; width: " +
      cat.w + "px; height: " + cat.h + "px;");

    TabbyCats.putCatInCarrier(cat_img);
  },

  putCatInCarrier: function(cat) {
    if (TabbyCats.cat_carrier === undefined) {
      var clickHandler = function() {
        document.body.removeChild(TabbyCats.cat_carrier);
        TabbyCats.cat_carrier = undefined; // destroy it
      };
      TabbyCats.cat_carrier = document.createElement("div");
      TabbyCats.cat_carrier.setAttribute("id", "tabby-cat-carrier");
      TabbyCats.cat_carrier.addEventListener("mousedown", clickHandler);
      document.body.appendChild(TabbyCats.cat_carrier);
    }

    TabbyCats.cat_carrier.appendChild(cat);
  }
};
