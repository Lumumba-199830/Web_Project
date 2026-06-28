// BMI Calculator - BMI.js

function calculateBMI() {
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const height = document.getElementById('height').value;
  const weight = document.getElementById('bmiWeight').value;

  // Reset errors
  document.querySelectorAll('.error-msg').forEach(el => el.style.display = 'none');
  document.querySelectorAll('input, select').forEach(el => el.classList.remove('input-error'));

  let valid = true;
  const fields = [
    { val: age, err: 'ageErr', id: 'age', check: !age || age <= 0 },
    { val: gender, err: 'genderErr', id: 'gender', check: !gender },
    { val: height, err: 'heightErr', id: 'height', check: !height || height <= 0 },
    { val: weight, err: 'weightErr', id: 'bmiWeight', check: !weight || weight <= 0 }
  ];

  fields.forEach(f => {
    if (f.check) {
      document.getElementById(f.err).style.display = 'block';
      document.getElementById(f.id).classList.add('input-error');
      valid = false;
    }
  });

  if (!valid) return;

  const bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);

  const categories = [
    { max: 18.5, label: 'Underweight', colour: '#1565c0', msg: 'Your BMI suggests you are underweight. Consider speaking to a doctor or nutritionist about a healthy plan to reach a normal weight.' },
    { max: 25,   label: 'Normal weight', colour: '#1a7a4a', msg: 'Great news! Your BMI is within the healthy range. Keep up your healthy lifestyle with regular exercise and a balanced diet.' },
    { max: 30,   label: 'Overweight', colour: '#b87800', msg: 'Your BMI suggests you are overweight. Small changes to your diet and activity level can make a big difference over time.' },
    { max: Infinity, label: 'Obese', colour: '#c0392b', msg: 'Your BMI falls in the obese range. We recommend speaking to a healthcare professional for personalised advice and support.' }
  ];

  const result = categories.find(c => bmi < c.max);

  document.getElementById('bmiScore').textContent = bmi;
  document.getElementById('bmiCategory').textContent = result.label;
  document.getElementById('bmiCategory').style.color = result.colour;
  document.getElementById('bmiMessage').textContent = result.msg;
  document.getElementById('bmiResult').style.display = 'block';
}