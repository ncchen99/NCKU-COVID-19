// install
self.addEventListener("install", (event) => {
  console.log("installing…");
});

// activate
self.addEventListener("activate", (event) => {
  console.log("小屋歸🐢");
});

this.addEventListener("fetch", function (event) {
  console.log("喔喔喔");
  // it can be empty if you just want to get rid of that error
});
