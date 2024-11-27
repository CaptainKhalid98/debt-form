const progress = document.getElementById('progress');
const nextBtns = document.querySelectorAll('.next-btn');
const prevBtns = document.querySelectorAll('.prev-btn');
const formSteps = document.querySelectorAll('.form-step');
const steps = document.querySelectorAll('.step');

let formStepNum = 0;

// Next Button Click
nextBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    formStepNum++;
    updateFormSteps();
    updateProgressBar();
  });
});

// Previous Button Click
prevBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    formStepNum--;
    updateFormSteps();
    updateProgressBar();
  });
});

// Update Form Steps
function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.remove('active');
  });
  formSteps[formStepNum].classList.add('active');
}

// Update Progress Bar
function updateProgressBar() {
  steps.forEach((step, index) => {
    if (index <= formStepNum) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });

  const activeSteps = document.querySelectorAll('.step.active');
  progress.style.width =
    ((activeSteps.length - 1) / (steps.length - 1)) * 100 + '%';
}


document.getElementById('form').addEventListener('button', function(event) {
  var monthly = document.getElementById('monthly-payment').value;
  if (!monthly) {
    event.preventDefault();  // Prevent form submission
    document.getElementById('error-message').style.display = 'block';  // Show error message
  } else {
    document.getElementById('error-message').style.display = 'none';  // Hide error message
  }
});
