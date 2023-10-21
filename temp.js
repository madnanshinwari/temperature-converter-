function convertTemperature() {
    const input = parseFloat(document.getElementById('input').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const resultElement = document.getElementById('result');

    if (fromUnit === 'celsius') {
      // Convert Celsius to Fahrenheit
      const result = (input * 9/5) + 32;
      resultElement.textContent = `${input}°C is ${result}°F`;
    } else {
      // Convert Fahrenheit to Celsius
      const result = (input - 32) * 5/9;
      resultElement.textContent = `${input}°F is ${result}°C`;
    }
  }