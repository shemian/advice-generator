document.addEventListener('DOMContentLoaded', () => {
    const fetchAdviceButton = document.querySelector('button');
    const adviceElement = document.querySelector('.quote-text');

    fetchAdviceButton.addEventListener('click', async () => {
      try {
        // Make a request to your the advice route using fetch
        const response = await fetch('/get-advice');
        const data = await response.json();
        console.log(data)
        const advice = data.advice;
        
        // Update the advice content on the page
        adviceElement.textContent = advice;

      } catch (error) {
        console.error('Error fetching advice:', error.message);
      }
    });
  });