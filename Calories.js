// Calorie Calculator - calories.js

function calculateCalories() {
  const age = document.getElementById('calAge').value;
  const gender = document.getElementById('calGender').value;
  const height = document.getElementById('calHeight').value;
  const weight = document.getElementById('calWeight').value;
  const activity = document.getElementById('calActivity').value;

  // Reset errors
  document.querySelectorAll('.error-msg').forEach(el => el.style.display = 'none');
  document.querySelectorAll('input, select').forEach(el => el.classList.remove('input-error'));

  let valid = true;

  if (!age || age <= 0) {
    document.getElementById('calAgeErr').style.display = 'block';
    document.getElementById('calAge').classList.add('input-error');
    valid = false;
  }
  if (!gender) {
    document.getElementById('calGenderErr').style.display = 'block';
    document.getElementById('calGender').classList.add('input-error');
    valid = false;
  }
  if (!height || height <= 0) {
    document.getElementById('calHeightErr').style.display = 'block';
    document.getElementById('calHeight').classList.add('input-error');
    valid = false;
  }
  if (!weight || weight <= 0) {
    document.getElementById('calWeightErr').style.display = 'block';
    document.getElementById('calWeight').classList.add('input-error');
    valid = false;
  }
  if (!activity) {
    document.getElementById('calActivityErr').style.display = 'block';
    document.getElementById('calActivity').classList.add('input-error');
    valid = false;
  }

  if (!valid) return;

  // Mifflin-St Jeor formula to calculate BMR
  let bmr;
  if (gender === 'male') {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
  } else {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }

  // Multiply BMR by activity level to get TDEE
  const tdee = Math.round(bmr * activity);

  // Calculate lose and gain targets
  const lose = tdee - 500;
  const gain = tdee + 500;

  // Display results
  document.getElementById('calMaintain').textContent = tdee + ' kcal';
  document.getElementById('calLose').textContent = lose + ' kcal';
  document.getElementById('calGain').textContent = gain + ' kcal';
  document.getElementById('calResult').style.display = 'block';
}