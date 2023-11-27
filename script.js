function setTheme(theme){
    const root = document.documentElement;
    // console.log(theme==='light');
    if(theme==='light') {
        root.style.setProperty('--background', 'var(--background-color-light)');
        root.style.setProperty('--text-color', 'var(--text-color-light)');
        root.style.setProperty('--header', 'var(--header-background-light)');
        root.style.setProperty('--text-unfocused', 'var(--text-unfocused-light)');
        root.style.setProperty('--text-focused', 'var(--text-focused-light)');
    }
    else
    {
        root.style.setProperty('--background', 'var(--background-color-dark)');
        root.style.setProperty('--text-color', 'var(--text-color-dark)');
        root.style.setProperty('--header', 'var(--header-background-dark)');
        root.style.setProperty('--text-unfocused', 'var(--text-unfocused-dark)');
        root.style.setProperty('--text-focused', 'var(--text-focused-dark)');
    }
}

function toggleTheme() {
    const currTheme = localStorage.getItem('theme') || 'dark';
    let newTheme = '';
    if(currTheme === 'dark'){
        newTheme = 'light';
    }
    else
    {
        newTheme = 'dark';
    }
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
}

// const form = document.querySelector("form");
// const nameField = document.getElementById("name");
// const nameError = document.querySelector("#name ~ span.error");
// const emailField = document.getElementById("email");
// const emailError = document.querySelector("#email ~ span.error");
// const backgroundField = document.getElementById("background-info");
// const commentField = document.getElementById("comments");
// const commentError = document.querySelector("#comments ~ span.error");
// let errorMsgs = []

// function showNameError() {
//     if (nameField.validity.patternMismatch) {
//       nameError.textContent = "Numbers and other characters not allowed. Use letters only.";
//       errorMsgs.push({error:nameError.textContent, query: nameField.value});
//     } else {
//       nameError.textContent = "Name is required.";
//     }
//     nameError.style.webkitAnimation = 'none';
//     setTimeout(function() {
//         nameError.style.webkitAnimation = '';
//     }, 3);
//     // console.log(errorMsgs);
// }

// function showCommentError() {
//     if (!commentField.checkValidity()) {
//       commentError.textContent = "Insufficient # of characters.";
//     }
//     commentError.style.webkitAnimation = 'none';
//     /* Excluded this too avoid "Request Line is too large error" */
//     // errorMsgs.push({error:commentError.textContent, query: commentField.value});
//     setTimeout(function() {
//         commentError.style.webkitAnimation = '';
//     }, 3);
//     // console.log(errorMsgs);
// }

// function showEmailError() {
//     emailError.textContent = emailField.validationMessage;
//     emailError.style.webkitAnimation = 'none';
//     errorMsgs.push({error:emailError.textContent, query: emailField.value});
//     setTimeout(function() {
//         emailError.style.webkitAnimation = '';
//     }, 3);
//     // console.log(errorMsgs);
// }

// function countCharacters(textArea, maxNumOfChars) {
//   let numOfEnteredChars = textArea.value.length;
//   let counter = maxNumOfChars - numOfEnteredChars;
//   textArea.nextSibling.nextSibling.textContent = `${counter}/${maxNumOfChars}`;
// }

// nameField.addEventListener("input", (event) => {
//     // Each time the user types something, we check if the
//     // form fields are valid.
  
//     if (nameField.validity.valid) {
//       // In case there is an error message visible, if the field
//       // is valid, we remove the error message.
//       nameError.textContent = ""; // Reset the content of the message
//     //   console.log("valid");
//     } else {
//       // If there is still an error, show the correct error
//     //   console.log("invalid");
//       showNameError();
//     }
// });

// emailField.addEventListener("input", (event) => {
//     // Each time the user types something, we check if the
//     // form fields are valid.
  
//     if (emailField.validity.valid) {
//       // In case there is an error message visible, if the field
//       // is valid, we remove the error message.
//       emailError.textContent = ""; // Reset the content of the message
//     //   console.log("valid");
//     } else {
//       // If there is still an error, show the correct error
//     //   console.log("invalid");
//       showEmailError();
//     }
// });

// commentField.addEventListener("input", (event) => {
//     // Each time the user types something, we check if the
//     // form fields are valid.
//     if (commentField.validity.valid) {
//       // In case there is an error message visible, if the field
//       // is valid, we remove the error message.
//       commentError.textContent = ""; // Reset the content of the message
//     //   console.log("valid");
//     } else {
//       // If there is still an error, show the correct error
//       showCommentError();
//     }
//     countCharacters(commentField, commentField.maxLength);
// });

// backgroundField.addEventListener("input", (event) => {
//   countCharacters(backgroundField, backgroundField.maxLength);
// });

document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme) {
        setTheme(savedTheme);
        document.getElementById('themeToggle').checked = savedTheme === 'light';
    }

})

// document.getElementById('contact-form').addEventListener('submit', function (event) {
//     // Create a hidden input field
//     const errorsInput = document.createElement('input');
//     errorsInput.type = 'hidden';
//     errorsInput.name = 'form-errors';
//     errorsInput.value = JSON.stringify(errorMsgs);
    

//     // Append the hidden input field to the form
//     this.appendChild(errorsInput);
//   });