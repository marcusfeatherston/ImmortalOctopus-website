const image = document.querySelector("img");

function onHover() {
      image.style.opacity = "0.5"
}

function onExit() {
      image.style.opacity = "1.0"
}


image.addEventListener("mouseenter", onHover);

image.addEventListener("mouseout", onExit);


