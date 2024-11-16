const featureElement = document.getElementById("feature");
const companyElement = document.getElementById("company");
const featureDropdown = featureElement.querySelector(".dropdown-menu");
const companyDropdown = companyElement.querySelector(".dropdown-menu");

// Toggle feature dropdown
featureElement.addEventListener("click", (event) => {
  event.stopPropagation();

  // Close company dropdown first
  companyDropdown.className = "card__disabled";

  // Toggle feature dropdown
  if (featureDropdown.className === "card__disabled") {
    featureDropdown.className = "card__container";
  } else {
    featureDropdown.className = "card__disabled";
  }
});

// Toggle company dropdown
companyElement.addEventListener("click", (event) => {
  event.stopPropagation();

  // Close feature dropdown first
  featureDropdown.className = "card__disabled";

  // Toggle company dropdown
  if (companyDropdown.className === "card__disabled") {
    companyDropdown.className = "card__company";
  } else {
    companyDropdown.className = "card__disabled";
  }
});

// Close both dropdowns when clicking outside
document.addEventListener("click", () => {
  featureDropdown.className = "card__disabled";
  companyDropdown.className = "card__disabled";
});
