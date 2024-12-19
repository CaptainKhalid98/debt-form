// Fixed APR calculation: 20% annual rate becomes 1.6667% per month (monthly interest rate)
const monthlyInterestRate = 0.20 / 12;

// Function to calculate the loan repayment details for Debt Consolidation
function calculateDebtConsolidation(loanAmount, monthlyPayment) {
    const months = Math.log(monthlyPayment / (monthlyPayment - loanAmount * monthlyInterestRate)) / Math.log(1 + monthlyInterestRate);
    const totalAmountPaid = monthlyPayment * Math.ceil(months);

    return {
        months: Math.ceil(months),
        totalAmountPaid: totalAmountPaid
    };
}

// Function to calculate the loan repayment details for Debt Management
function calculateDebtManagement(loanAmount, monthlyFee, interestRate) {
    const monthlyInterestRate = interestRate / 12;
    const monthlyPayment = loanAmount * monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -60)); // Assume 5 years (60 months)
    const totalAmountPaid = (monthlyPayment + monthlyFee) * 60;

    return {
        months: 60,
        totalAmountPaid: totalAmountPaid
    };
}

// Function to calculate the loan repayment details for Debt Settlement
function calculateDebtSettlement(loanAmount, negotiatedReduction, settlementFee, legalProtectionFee) {
    const settlementAmount = loanAmount * (1 - negotiatedReduction);
    const totalSettlementFee = settlementAmount * settlementFee;
    const totalAmountPaid = settlementAmount + totalSettlementFee + (legalProtectionFee * 48); // Assume 48 months max

    return {
        months: 48,
        totalAmountPaid: totalAmountPaid
    };
}

// Main function to calculate and display results
function calculateLoans() {
    const unsecuredDebtAmount = parseFloat(document.getElementById('unsecured-debt-amount').value);
    const monthlyPayment = parseFloat(document.getElementById('monthly-payment').value);

    if (!unsecuredDebtAmount || !monthlyPayment || monthlyPayment <= 0) {
        alert("Please fill out all fields correctly.");
        return;
    }

    // Debt Consolidation Calculation
    const consolidationResult = calculateDebtConsolidation(unsecuredDebtAmount, monthlyPayment);
    document.getElementById('result').innerHTML = `
        <br>
        Total loan amount (Unsecured Debt): <strong>$${unsecuredDebtAmount.toFixed(2)}</strong><br><br>
        <strong>Debt Consolidation Loan</strong><br>
        Estimated Total Payment: <strong>$${consolidationResult.totalAmountPaid.toFixed(2)}</strong><br>
        Estimated Monthly Payment: <strong>$${monthlyPayment.toFixed(2)}</strong><br>
        Estimated Debt Free In: ${consolidationResult.months} months (${(consolidationResult.months / 12).toFixed(1)} years)<br>
    `;

    // Debt Management Calculation
    const managementResult = calculateDebtManagement(unsecuredDebtAmount, 50, 0.15); // $50 monthly fee, 15% annual interest
    document.getElementById('resultone').innerHTML = `
        <br>
        Total loan amount (Unsecured Debt): <strong>$${unsecuredDebtAmount.toFixed(2)}</strong><br><br>
        <strong>Debt Management Plan</strong><br>
        Estimated Total Payment: <strong>$${managementResult.totalAmountPaid.toFixed(2)}</strong><br>
        Estimated Monthly Payment: <strong>$${(managementResult.totalAmountPaid / 60).toFixed(2)}</strong><br>
        Estimated Debt Free In: ${managementResult.months} months (${(managementResult.months / 12).toFixed(1)} years)<br>
    `;

    // Debt Settlement Calculation
    const settlementResult = calculateDebtSettlement(unsecuredDebtAmount, 0.50, 0.20, 45); // 50% reduction, 20% fee, $45 legal protection fee
    document.getElementById('resulttwo').innerHTML = `
        <br>
        Total loan amount (Unsecured Debt): <strong>$${unsecuredDebtAmount.toFixed(2)}</strong><br><br>
        <strong>Debt Settlement Program</strong><br>
        Estimated Total Payment: <strong>$${settlementResult.totalAmountPaid.toFixed(2)}</strong><br>
        Estimated Monthly Payment: <strong>$${(settlementResult.totalAmountPaid / 48).toFixed(2)}</strong><br>
        Estimated Debt Free In: ${settlementResult.months} months (${(settlementResult.months / 12).toFixed(1)} years)<br>
    `;
}
