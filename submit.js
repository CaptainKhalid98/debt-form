const form = document.getElementById('form');
// const responseMessage = document.getElementById('responseMessage');

form.addEventListener('submit', async (event) => {
  // Prevent default form submission
  event.preventDefault();

  // Get form data
  const formData = new FormData(form);

  // Build query string
  const queryParams = new URLSearchParams();
  formData.forEach((value, key) => {
    queryParams.append(key, encodeURIComponent(value));
  });

  console.log('queryParams:', queryParams.toString());

  const url = `https://www.curadebt.com/signup/post/?${queryParams.toString()}`;

  try {
    // Send GET request
    const response = await fetch(url, { method: 'GET' });

    if (response.ok) {
      alert('Form submitted successfully!');
      // responseMessage.textContent = 'Form submitted successfully!';
    } else {
      alert('Error submitting the form.');
      // responseMessage.textContent = 'Error submitting the form.';
    }
  } catch (error) {
    alert('An error occurred while submitting the form.');
    // responseMessage.textContent = 'An error occurred while submitting the form.';
    console.error('Error:', error);
  }
});