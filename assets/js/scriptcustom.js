// handle click on anchor button
const buttonFullService = document.getElementById("fullservice");
const buttonRegulatory = document.getElementById("regulatory");
const buttonStrategic = document.getElementById("strategic");
const buttonTherapy = document.getElementById("therapy");
const buttonBiologic = document.getElementById("biologic");
const buttonAllService = document.getElementById("allservice");

buttonFullService.addEventListener("click", function() {
  window.location.href = "#FullServiceClinicalTrials";
});
buttonRegulatory.addEventListener("click", function() {
  window.location.href = "#RegulatoryAffairs";
});
buttonBiologic.addEventListener("click", function() {
  window.location.href = "#Biologics";
});
buttonStrategic.addEventListener("click", function() {
  window.location.href = "#StrategicAdvisors";
});
buttonTherapy.addEventListener("click", function() {
  window.location.href = "#TherapyExpertise";
});
buttonAllService.addEventListener("click", function() {
  window.location.href = "#";
});


// Handle home page animation
function handle_transform(element) {
  // const section = document.querySelector(element);
  // const sectionActive = document.querySelector(`${element}.active`);

  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add('active');
  //     } 
  //     else if (sectionActive) {
  //       entry.target.classList.add('active');
  //     } 
  //   });
  // });

  const elementToAnimate = document.querySelector(element);
  let animationTriggered = false;
  
  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    
    if (entry.isIntersecting && !animationTriggered) {
      // Animate the element (code for your animation)
      elementToAnimate.classList.add('active'); // Replace with your animation class
      animationTriggered = true;
    }
  });
  
  observer.observe(elementToAnimate);
  
  // Check initial viewport position
  const elementRect = elementToAnimate.getBoundingClientRect();

  if (elementRect.top >= 0 && elementRect.bottom >= window) {
    // Element already in view, set animation to end state
    elementToAnimate.style.transform = 'translateY(0)'; // Replace with your end keyframe style
  }
}

handle_transform('.animate-info-stat');
handle_transform('.animate-box');
