// Fixed APR calculation: 20% annual rate becomes 1.6667% per month (monthly interest rate)
const monthlyInterestRate = 0.20 / 12;

// Function to calculate the loan repayment details
function calculateLoan(loanAmount, monthlyPayment) {
    // Calculate months to pay off the loan using the loan amortization formula
    const months = Math.log(monthlyPayment / (monthlyPayment - loanAmount * monthlyInterestRate)) / Math.log(1 + monthlyInterestRate);

    // Calculate the total amount to be paid
    const totalAmountPaid = monthlyPayment * Math.ceil(months);

    // Return the results
    return {
        months: Math.ceil(months),
        totalAmountPaid: totalAmountPaid
    };
}

// Function to calculate the total loan amount, months, and total payment
function calculateLoans() {
    // Get input values for the student loan, tax debt, and unsecured debt
    const studentLoanAmount = parseFloat(document.getElementById('student-loan-amount').value);
    const taxDebtAmount = parseFloat(document.getElementById('tax-debt-amount').value);
    const unsecuredDebtAmount = parseFloat(document.getElementById('unsecured-debt-amount').value);
    const monthlyPayment = parseFloat(document.getElementById('monthly-payment').value);

    // Check if all input fields are filled and valid
    if (!studentLoanAmount || !taxDebtAmount || !unsecuredDebtAmount || !monthlyPayment || monthlyPayment <= 0) {
        alert("Please fill out all fields correctly.");
        return;
    }

    // Combine the total loan amount from all loans
    const totalLoanAmount = studentLoanAmount + taxDebtAmount + unsecuredDebtAmount;

    // Calculate loan results for the combined loan
    const loanResult = calculateLoan(totalLoanAmount, monthlyPayment);

    // Display the results
    document.getElementById('result').innerHTML = `
        <strong><h2>Consolidation Loan</h2></strong><br>
        Total loan amount (Student + Tax Debt + Unsecured Debt): <strong>$${totalLoanAmount.toFixed(2)}</strong><br><br>
        
        <strong>Debt Consolidation Loan cost, estimate, and pros and cons Estimated Total Payment $${loanResult.totalAmountPaid.toFixed(2)}</strong><br><br>

        Estimated Monthly Payment <br> <strong>$${monthlyPayment.toFixed(2)}</strong><br>
        <strong>Loan are typically 7.8% - 35.99% APR (this estimate was done at $20% APR)</strong><br><br>

        Estimated Debt Free In: ${loanResult.months} months (${(loanResult.months / 12).toFixed(1)} years) to pay off.<br>
        <strong>Your Monthly Payments*</strong>
    `;
}