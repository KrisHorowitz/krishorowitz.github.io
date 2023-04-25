// function hover(popup, node){
// console.log(popup, node);

// $(popup).hover(
//     function() {
//         $(node).css({
//             "background": "url('images/timeline-node-hover.png') center top no-repeat",
//             "background-size": "20px 20px"
//         });
//     },
//     function() {
//         $(node).css({
//             "background": "url('images/timeline-node.png') center top no-repeat",
//             "background-size": "20px 20px"
//         });
//     }
// );
// }

// hover("#available", "#now");
// hover("#dots-sr-gd", "#jun22");
// hover("#dots-gd", "#may21");
// hover("#dots-jr","#dec15");
// hover("#blog", "#oct15");
// hover("#flatiron", "#mar15");
// hover("#betaworks", "#jan15");
// hover("#tap1", "#oct13");


// Define the color gradient as an array of colors
const colorGradient = [
   { r: 241, g: 210, b: 229}, //JK pink
   { r: 254, g: 229, b: 150}, // JK yellow
   { r: 142, g: 212, b: 218}, // blue
];

// Get the height of the website
const websiteHeight = document.body.offsetHeight;

// Calculate the initial background color on page load
setBackgroundColor();

// Listen for the "scroll" event
window.addEventListener('scroll', setBackgroundColor);

// Function to set the background color based on the scroll position
function setBackgroundColor() {
  // Get the current scroll position
  const scrollPosition = window.pageYOffset;

  // Calculate the current percentage of the scroll position
  const scrollPercentage = scrollPosition / websiteHeight;

  // Calculate the index of the two colors to interpolate between
  const colorIndex1 = Math.floor(scrollPercentage * (colorGradient.length - 1));
  const colorIndex2 = colorIndex1 + 1;

  // Get the two colors to interpolate between
  const color1 = colorGradient[colorIndex1];
  const color2 = colorGradient[colorIndex2];

  // Calculate the interpolation factor
  const interpolationFactor = (scrollPercentage - (colorIndex1 / (colorGradient.length - 1))) * (colorGradient.length - 1);

  // Interpolate between the two colors
  const r = Math.round((1 - interpolationFactor) * color1.r + interpolationFactor * color2.r);
  const g = Math.round((1 - interpolationFactor) * color1.g + interpolationFactor * color2.g);
  const b = Math.round((1 - interpolationFactor) * color1.b + interpolationFactor * color2.b);

  // Set the background color of the website
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

//emoji particle effects
// window.addEventListener("load", (event) => {
//   const targetElement = document.querySelector("#emoji");
//     new cursoreffects.emojiCursor({ emoji: ["✨"] });
// });