setTimeout(() => {
  let splash = hydra.bring("div", "splash");
  
  splash.style.animationName = "drop";
  splash.style.animationDuration = "1s";
  
}, 3000);

setTimeout(() => {
    splash.style.display = "none";
}, 3600);