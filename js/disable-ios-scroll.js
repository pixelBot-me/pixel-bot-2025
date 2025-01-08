document.addEventListener("DOMContentLoaded", function () {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  
    if (isIOS) {
      // Disable smooth scrolling for iPhone devices
      document.querySelector("html").style.scrollBehavior = "auto";
    }
});

