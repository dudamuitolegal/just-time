let rain = true


if (rain == true) {
  let hrElement;
  let counter = 100;
  for (let i = 0; i < counter; i++) {
    hrElement = document.createElement("HR");
    if (i == counter - 1) {
      hrElement.className = "thunder";
    } else {
      hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
      hrElement.style.animationDuration = 0.2 + Math.random() * 0.3 + "s";
      hrElement.style.animationDelay = Math.random() * 5 + "s";
    }
    document.body.appendChild(hrElement);
  }
  console.log('Apenas o tempo (e a chuva')
  console.log(
    "There are " +
    document.querySelectorAll("hr").length +
    " <hr> tags in this project :) (clodoaldo)"
  );
  
} else {
  console.log('Parece que a chuva parou :c')
}
