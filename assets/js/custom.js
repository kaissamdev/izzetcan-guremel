
function applyResponsiveStyles() {
    const leftPost = document.getElementById("post-left");
    const rightPost = document.getElementById("post-right");
    if (window.matchMedia("(max-width: 600px)").matches) {
      // If screen size is less than or equal to 600px
      leftPost.style.width = "100%";
      leftPost.style.marginRight = "0px";
      rightPost.style.width = "100%";
      rightPost.style.marginRight = "0px";
    } 
    else{
      leftPost.style.width = "45%";
      leftPost.style.marginRight = "113px";
      rightPost.style.width = "45%";
      rightPost.style.marginRight = "0px";
    }
}

// Call the function on initial load
applyResponsiveStyles();

// Add event listener to apply styles on window resize
window.addEventListener("resize", applyResponsiveStyles);