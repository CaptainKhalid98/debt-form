// Fixed APR calculation: 20% annual rate becomes 1.6667% per month (monthly interest rate)
const monthlyInterestRate = 0.20 / 12;

// Function to calculate the loan repayment details
function calculateLoan(loanAmount, monthlyPayment) {
    // Calculate months to pay off the loan using the loan amortization formula
    console.log('Loan Amount:', loanAmount);
    console.log('Monthly Payment:', monthlyPayment);
    const months = Math.log(monthlyPayment / (monthlyPayment - loanAmount * monthlyInterestRate)) / Math.log(1 + monthlyInterestRate);

    // Calculate the total amount to be paid
    const totalAmountPaid = monthlyPayment * Math.ceil(months);

    console.log('Months:', months);
    console.log('Total Amount Paid:', totalAmountPaid);
    // Return the results
    return {
        months: Math.ceil(months),
        totalAmountPaid: totalAmountPaid
    };
}

// Function to calculate the total loan amount, months, and total payment
function calculateLoans() {
    // Get input values for the student loan, tax debt, and unsecured debt
    // const studentLoanAmount = parseFloat(document.getElementById('student-loan-amount').value);
    // const taxDebtAmount = parseFloat(document.getElementById('tax-debt-amount').value);
    const unsecuredDebtAmount = parseFloat(document.getElementById('unsecured-debt-amount').value);
    const monthlyPayment = parseFloat(document.getElementById('monthly-payment').value);

    // Check if all input fields are filled and valid
    // if (!studentLoanAmount || !taxDebtAmount || !unsecuredDebtAmount || !monthlyPayment || monthlyPayment <= 0) {
    //     alert("Please fill out all fields correctly.");
    //    return;
    // }

    if (!unsecuredDebtAmount || !monthlyPayment || monthlyPayment <= 0) {
        alert("Please fill out all fields correctly.");
        return;
    }

    // Combine the total loan amount from all loans
    // const totalLoanAmount = studentLoanAmount + taxDebtAmount + unsecuredDebtAmount;

    const totalLoanAmount = unsecuredDebtAmount;


    // Calculate loan results for the combined loan
    const loanResult = calculateLoan(totalLoanAmount, monthlyPayment);

    console.log('Loan Result:', loanResult);
    // Display the results

    if (isNaN(loanResult.months) || isNaN(loanResult.totalAmountPaid)) {
        // Display the error message
        document.getElementById('result').innerHTML = `
            <br>
            <h3 style="color: red;">You can't pay off your debt!</h3>
            <p>Please review your inputs and ensure the values are valid for a meaningful calculation.</p>
            <strong>Total loan amount:</strong> <span style="color: gray;">Invalid</span><br>
            <strong>Estimated total payment:</strong> <span style="color: gray;">Invalid</span><br>
            <strong>Estimated debt-free time:</strong> <span style="color: gray;">Unavailable</span><br>
        `;

        document.getElementById('resultone').innerHTML = `
            <br>
            <h3 style="color: red;">You can't pay off your debt!</h3>
            <p>Please review your inputs and ensure the values are valid for a meaningful calculation.</p>
            <strong>Total loan amount:</strong> <span style="color: gray;">Invalid</span><br>
            <strong>Estimated total payment:</strong> <span style="color: gray;">Invalid</span><br>
            <strong>Estimated debt-free time:</strong> <span style="color: gray;">Unavailable</span><br>
        `;

        document.getElementById('resulttwo').innerHTML = `
            <br>
            <h3 style="color: red;">You can't pay off your debt!</h3>
            <p>Please review your inputs and ensure the values are valid for a meaningful calculation.</p>
            <strong>Total loan amount:</strong> <span style="color: gray;">Invalid</span><br>
            <strong>Estimated total payment:</strong> <span style="color: gray;">Invalid</span><br>
            <strong>Estimated debt-free time:</strong> <span style="color: gray;">Unavailable</span><br>
        `;

    

    
    } else {
        document.getElementById('result').innerHTML = `
        <br>
            Total loan amount (Unsecured Debt): <strong>$${totalLoanAmount.toFixed(2)}</strong><br><br>
            
            <strong>Debt Consolidation Loan cost, estimate, and pros and cons Estimated Total Payment $${loanResult.totalAmountPaid.toFixed(2)}</strong><br><br>

            Estimated Monthly Payment <br> <strong>$${monthlyPayment.toFixed(2)}</strong><br>
            <strong>Loan are typically 7.8% - 35.99% APR (this estimate was done at $20% APR)</strong><br><br>

            Estimated Debt Free In: ${loanResult.months} months (${(loanResult.months / 12).toFixed(1)} years) to pay off.<br>
            <strong>Your Monthly Payments*</strong>
        `;

        document.getElementById('resultone').innerHTML = `
        <br>
            Total loan amount (Unsecured Debt): <strong>$${totalLoanAmount.toFixed(2)}</strong><br><br>
            
            <strong>Debt Consolidation Loan cost, estimate, and pros and cons Estimated Total Payment $${loanResult.totalAmountPaid.toFixed(2)}</strong><br><br>

            Estimated Monthly Payment <br> <strong>$${monthlyPayment.toFixed(2)}</strong><br>
            <strong>Loan are typically 7.8% - 35.99% APR (this estimate was done at $20% APR)</strong><br><br>

            Estimated Debt Free In: ${loanResult.months} months (${(loanResult.months / 12).toFixed(1)} years) to pay off.<br>
            <strong>Your Monthly Payments*</strong>
         `;

         document.getElementById('resulttwo').innerHTML = `
         <br>

              <h3 style="color: red;">You're being provided a hypothetical example for debt settlement below, but for a viable debt settlement program, it would require a higher program payment to finish ideally in fewer than 48 months. Please speak with a counselor to go over your budget and generate a personal estimate for you.</h3>

             Total loan amount (Unsecured Debt): <strong>$${totalLoanAmount.toFixed(2)}</strong><br><br>
             
             <strong>Debt Consolidation Loan cost, estimate, and pros and cons Estimated Total Payment $${loanResult.totalAmountPaid.toFixed(2)}</strong><br><br>
 
             Estimated Monthly Payment <br> <strong>$${monthlyPayment.toFixed(2)}</strong><br>
             <strong>Loan are typically 7.8% - 35.99% APR (this estimate was done at $20% APR)</strong><br><br>
 
             Estimated Debt Free In: ${loanResult.months} months (${(loanResult.months / 12).toFixed(1)} years) to pay off.<br>
             <strong>Your Monthly Payments*</strong>

            
          `;

        
    }

}

