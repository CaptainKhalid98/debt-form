const progress = document.getElementById('progress');
const nextBtns = document.querySelectorAll('.next-btn');
const prevBtns = document.querySelectorAll('.prev-btn');
const formSteps = document.querySelectorAll('.form-step');
const steps = document.querySelectorAll('.step');

let formStepNum = 0;


function validateField(fieldId, warningClass, errorMessage) {
  const fieldValue = document.getElementById(fieldId).value;
  const warningElement = document.querySelector(`.${warningClass}`);

  if (!fieldValue) {
    warningElement.innerText = errorMessage;
    return false;
  } else {
    warningElement.innerText = '';
    return true;
  }
}

// Next Button Click
nextBtns.forEach((btn) => {
  btn.addEventListener('click', () => {

    if (formStepNum === 0) {
      {
        const isMonthlyPaymentValid = validateField(
          'monthly-payment',
          'warning-monthly-payment',
          'Please enter a monthly payment'
        );

        const isQueryValid = validateField(
          'query',
          'warning-query',
          'Please select a query'
        );

        const isFicoScoreValid = validateField(
          'fico-score',
          'warning-fico-score',
          'Please enter a FICO score'
        );

        if (isMonthlyPaymentValid && isQueryValid && isFicoScoreValid) {
          const monthlyPayment = document.getElementById('monthly-payment').value;
          const ficoScore = document.getElementById('fico-score').value;
          const query = document.getElementById('query').value;

          console.log('Form Data:', { monthlyPayment, query, ficoScore });


        } else {
          return;
        }

      }
    } else if (formStepNum === 1) {
      const isUnunSecuredDebtAmount = validateField(
        'unsecured-debt-amount',
        'warning-unsecured-debt-amount',
        'Please enter an unsecured debt amount'
      );

      // const isUserCanPayInterest = function () {
      //   const loanAmount = document.getElementById('unsecured-debt-amount').value;
      //   const monthlyPayment = document.getElementById('monthly-payment').value;
      //   const monthlyInterestRate = 0.20 / 12;
      //   const interest = loanAmount * monthlyInterestRate;
      //   if (monthlyPayment <= interest) {
      //     document.querySelector('.warning-unsecured-debt-amount').innerText = 'Monthly payment should be greater than the interest. Your interest is $' + interest.toFixed(2);
      //     return false;
      //   }
      //   return true;
      // };

      if (isUnunSecuredDebtAmount) {
        const unsecuredDebtAmount = document.getElementById('unsecured-debt-amount').value;

        console.log('Form Data:', { unsecuredDebtAmount });


      } else {
        return;
      }
    } else if (formStepNum === 2) {
      const isFirstNameValid = validateField(
        'fname',
        'warning-fname',
        'Please enter a first name'
      );

      const isLastNameValid = validateField(
        'lname',
        'warning-lname',
        'Please enter a last name'
      );

      const isEmailValid = validateField(
        'email',
        'warning-email',
        'Please enter an email'
      );

      const isPhoneValid = validateField(
        'number',
        'warning-number',
        'Please enter a phone number'
      );

      if (isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid) {
        const firstName = document.getElementById('fname').value;
        const lastName = document.getElementById('lname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('number').value;

        console.log('Form Data:', { firstName, lastName, email, phone });


      } else {
        return;
      }
    }
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
    ((activeSteps.length - 1) / (steps.length - 1)) * 90 + '%';
}


// document.getElementById('form').addEventListener('button', function (event) {
//   var monthly = document.getElementById('monthly-payment').value;
//   if (!monthly) {
//     event.preventDefault();  // Prevent form submission
//     document.getElementById('error-message').style.display = 'block';  // Show error message
//   } else {
//     document.getElementById('error-message').style.display = 'none';  // Hide error message
//   }
// });
