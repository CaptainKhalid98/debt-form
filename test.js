// Select elements
const options = document.querySelectorAll(".option");
const continueButton = document.getElementById("continue-btn");

// Track the selected payment method
let selectedPaymentMethod = "";

// Add click event to each option
options.forEach(option => {
  option.addEventListener("click", () => {
    // Deselect all options
    options.forEach(opt => opt.classList.remove("active"));

    // Select the clicked option
    option.classList.add("active");

    // Store selected payment method
    selectedPaymentMethod = option.dataset.payment;

    // Enable the continue button
    continueButton.disabled = false;
    continueButton.classList.add("enabled");
  });
});

// Add click event to the continue button
continueButton.addEventListener("click", () => {
  if (selectedPaymentMethod) {
    alert(`You selected: ${selectedPaymentMethod}`);
    // Process next steps or redirect
  }
});
