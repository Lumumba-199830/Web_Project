// BMI Calculator - bmi.js

function calculateBMI() {
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('bmiWeight').value;

  // Reset errors
  document.querySelectorAll('.error-msg').forEach(el => el.style.display = 'none');
  document.querySelectorAll('input, select').forEach(el => el.classList.remove('input-error'));

  let valid = true;

  if (!age || age <= 0) {
    document.getElementById('ageErr').style.display = 'block';
    document.getElementById('age').classList.add('input-error');
    valid = false;
  }

  if (!gender) {
    document.getElementById('genderErr').style.display = 'block';
    document.getElementById('gender').classList.add('input-error');
    valid = false;
  }

  if (!height || height <= 0) {
    document.getElementById('heightErr').style.display = 'block';
    document.getElementById('height').classList.add('input-error');
    valid = false;
  }

  if (!weight || weight <= 0) {
    document.getElementById('weightErr').style.display = 'block';
    document.getElementById('bmiWeight').classList.add('input-error');
    valid = false;
  }

  if (!valid) return;

  // BMI formula: weight (kg) / (height (m) * height (m))
  const heightInMetres = height / 100;
  const bmi = (weight / (heightInMetres * heightInMetres)).toFixed(1);

  // Determine category and message
  let category = '';
  let message = '';
  let colour = '';

  if (bmi < 18.5) {
    category = 'Underweight';
    message = 'Your BMI suggests you are underweight. Consider speaking to a doctor or nutritionist about a healthy plan to reach a normal weight.';
    colour = '#1565c0';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = 'Normal weight';
    message = 'Great news! Your BMI is within the healthy range. Keep up your healthy lifestyle with regular exercise and a balanced diet.';
    colour = '#1a7a4a';
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = 'Overweight';
    message = 'Your BMI suggests you are overweight. Small changes to your diet and activity level can make a big difference over time.';
    colour = '#b87800';
  } else {
    category = 'Obese';
    message = 'Your BMI falls in the obese range. We recommend speaking to a healthcare professional for personalised advice and support.';
    colour = '#c0392b';
  }

  // Display result
  document.getElementById('bmiScore').textContent = bmi;
  document.getElementById('bmiCategory').textContent = category;
  document.getElementById('bmiCategory').style.color = colour;
  document.getElementById('bmiMessage').textContent = message;
  document.getElementById('bmiResult').style.display = 'block';
}