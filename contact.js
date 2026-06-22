```javascript
document.getElementById('contactForm').addEventListener('submit', function(e){

    e.preventDefault();

    let valid = true;

    document.querySelectorAll('.error-msg').forEach(el=>{
        el.style.display='none';
    });

    document.querySelectorAll('input,select,textarea').forEach(el=>{
        el.classList.remove('input-error');
    });

    function showError(errorId,inputId){
        document.getElementById(errorId).style.display='block';
        document.getElementById(inputId).classList.add('input-error');
        valid=false;
    }

    const firstName=document.getElementById('firstName').value.trim();
    const lastName=document.getElementById('lastName').value.trim();
    const age=document.getElementById('age').value.trim();
    const gender=document.getElementById('gender').value;
    const email=document.getElementById('email').value.trim();
    const phone=document.getElementById('phone').value.trim();
    const subject=document.getElementById('subject').value;
    const message=document.getElementById('message').value.trim();

    if(!firstName) showError('firstNameErr','firstName');
    if(!lastName) showError('lastNameErr','lastName');

    if(!age || age < 1 || age > 120){
        showError('ageErr','age');
    }

    if(!gender){
        showError('genderErr','gender');
    }

    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!email || !emailRegex.test(email)){
        showError('emailErr','email');
    }

    const phoneRegex=/^[0-9+\-\s()]{10,15}$/;

    if(!phone || !phoneRegex.test(phone)){
        showError('phoneErr','phone');
    }

    if(!subject){
        showError('subjectErr','subject');
    }

    if(message.length < 20){
        showError('messageErr','message');
    }

    if(valid){

        document.getElementById('success-msg').style.display='block';

        this.reset();

        setTimeout(()=>{
            document.getElementById('success-msg').style.display='none';
        },5000);
    }

});
```
