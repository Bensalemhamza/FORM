// document.addEventListener('DOMContentLoaded', () => {
    // const form = document.getElementById('form');
    // const fullname = document.getElementById('fullname');
    // const email = document.getElementById('email');
    // const password = document.getElementById('password');
    // const confpassword = document.getElementById('confpassword');


//     const displayError = (input, message) => {
//         clearError(input);
//         const error = document.createElement('p');
//         error.className = 'error-message';
//         error.innerText = message;
//         input.classList.add('border-red-500');
//         input.parentElement.appendChild(error);
//     };


//     const clearError = (input) => {
//         input.classList.remove('border-red-500');
//         const error = input.parentElement.querySelector('.error-message');
//         if (error) error.remove();
//     };


//     const validateForm = () => {
//         let isValid = true;

//         if (fullname.value.trim() === '') {
//             displayError(fullname, 'Full name is required');
//             isValid = false;
//         } else {
//             clearError(fullname);
//         }


//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (email.value.trim() === '') {
//             displayError(email, 'Email is required');
//             isValid = false;
//         } else if (!emailRegex.test(email.value)) {
//             displayError(email, 'Please enter a valid email');
//             isValid = false;
//         } else {
//             clearError(email);
//         }

//         if (password.value.trim() === '') {
//             displayError(password, 'Password is required');
//             isValid = false;
//         } else if (password.value.length < 8) {
//             displayError(password, 'Password must be at least 8 characters');
//             isValid = false;
//         } else {
//             clearError(password);
//         }


//         if (confpassword.value.trim() === '') {
//             displayError(confpassword, 'Please confirm your password');
//             isValid = false;
//         } else if (confpassword.value !== password.value) {
//             displayError(confpassword, 'Passwords do not match');
//             isValid = false;
//         } else {
//             clearError(confpassword);
//         }

//         return isValid;
//     };

//     form.addEventListener('submit', (e) => {
//         e.preventDefault(); 

//         if (validateForm()) {
//             alert('Form submitted successfully!');
//             form.reset(); 
//         }
//     });
// });


const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confpassword = document.getElementById('confpassword');
document.getElementById('submit').addEventListener('click', function(e){
    e.preventDefault();
    const clearError = (input) => {
        input.classList.remove('border-red-500');
        const error = input.parentElement.querySelector('.error-message');
        if (error) error.remove();
    };
    const emailPattern = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
    let form_error = false;

    document.querySelectorAll('p.text-red-500').forEach(el => el.remove());
    document.querySelectorAll('i.border-red-500').forEach(el => el.classList.remove('border-red-500'));


    if (fullname.value.trim() === "") {
        addErrorMessage(fullname, "Please enter your Full name.");
        form_error = true;
    }

    if (!emailPattern.test(email.value)) {
        addErrorMessage(email, "Please enter a valid email address.");
        form_error = true;
    }

    if (password.value.trim() === '') {
                    addErrorMessage(password, 'Password is required');
                    form_error = true;
                } else if (password.value.length < 8) {
                    addErrorMessage(password, 'Password must be at least 8 characters');
                    form_error = true;
                } else {
                    clearError(password);
                }
    if (confpassword.value.trim() === '') {
        addErrorMessage(confpassword, 'Please confirm your password');
        isValid = false;
    } else if (confpassword.value !== password.value) {
        addErrorMessage(confpassword, 'Passwords do not match');
        isValid = false;
    } else {
        clearError(confpassword);
    }
                

    if (!form_error) {
        form.submit(); 
    }
});


// const email2 = document.getElementById('email2');
// const form2 = document.querySelector('signInForm');
// const password2 = document.getElementById('password2');

// document.getElementById('submitbtn').addEventListener('click', function(e){
//     e.preventDefault();
//     const clearError = (input) => {
//         input.classList.remove('border-red-500');
//         const error = input.parentElement.querySelector('.error-message');
//         if (error) error.remove();
//     };
//     const emailPattern = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$");
//     let form_error = false;

//     document.querySelectorAll('p.text-red-500').forEach(el => el.remove());
//     document.querySelectorAll('i.border-red-500').forEach(el => el.classList.remove('border-red-500'));

//     if (!emailPattern.test(email2.value)) {
//         addErrorMessage(email2, "Please enter a valid email address.");
//         form_error = true;
//     }

//     if (password2.value.trim() === '') {
//                     addErrorMessage(password2, 'Password is required');
//                     form_error = true;
//                 } else if (password2.value.length < 8) {
//                     addErrorMessage(password2, 'Password must be at least 8 characters');
//                     form_error = true;
//                 } else {
//                     clearError(password2);
//                 }

//     if (!form_error) {
//         form2.submit(); 
//     }
// });

function addErrorMessage(element, message) {
    const parentDiv = element.parentElement;
    const error = document.createElement('p');
    error.classList.add('text-red-500', 'text-[12px]', 'mt-[2px]', 'font-bold');
    error.textContent = message;
    parentDiv.appendChild(error);
    element.classList.add('border-red-500')
}