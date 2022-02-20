// install
self.addEventListener("install", (event) => {
  console.log("installing…");
});

// Service Worker-based solution
self.addEventListener("activate", async () => {
  // after we've taken over, iterate over all the current clients (windows)
  const tabs = await self.clients.matchAll({ type: "window" });
  tabs.forEach((tab) => {
    // ...and refresh each one of them
    tab.navigate(tab.url);
    console.log("小屋歸🐢");
  });
});
this.addEventListener("fetch", function (event) {
  console.log("喔喔喔");
  // it can be empty if you just want to get rid of that error
});
