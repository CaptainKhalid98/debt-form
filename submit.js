document.addEventListener('DOMContentLoaded', () => {
    // Handle the final submission to CRM when the user clicks "See Results"
    document.querySelector('.next-btn[onclick="calculateLoans()"]').addEventListener('click', () => {
      const form = document.getElementById('form');
      const formData = new FormData(form);
  
      // Convert FormData to a JSON object
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });
  
      // Send the POST request to the CRM URL
      fetch('https://www.curadebt.com/signup/inlinform/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject), // Send form data as JSON
      })
      .then(response => response.json())  // Parse JSON response if needed
      .then(data => {
        console.log('Lead added successfully:', data);
        // You can handle the success here, e.g., show a success message or redirect the user
        document.getElementById('result').innerText = 'Thank you for submitting your information!';
      })
      .catch(error => {
        console.error('Error adding lead:', error);
        // Handle error, show a message to the user
        document.getElementById('result').innerText = 'Something went wrong, please try again.';
      });
    });
  });
  