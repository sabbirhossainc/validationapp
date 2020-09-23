// Define UI eliments
let email = document.querySelector('.btn1');
let phone = document.querySelector('.btn2');
let post = document.querySelector('.btn3');

// Add event listener
email.addEventListener('click', optionA);
phone.addEventListener('click', optionB);
post.addEventListener('click', optionC);

// Define Functions
function optionA() {
    var inputEmail = prompt("Enter A Email: ");
    var emailCheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (emailCheck.test(inputEmail)) {
        alert("Email is Valid :)");
    } else {
        alert("Invalid Email !");
    }

}

function optionB() {
    var inputPhn = prompt("Enter A Phone Number: ");
    var phnCheck = /^01[0-9]{9}$/;
    if (phnCheck.test(inputPhn)) {
        alert("Phone Number is Valid :)");
    } else {
        alert("Invalid Phone Number !");
    }

}

function optionC() {
    var inputPost = prompt("Enter A Post Code: ");
    var postCheck = /^[0-9]{4}$/;
    if (postCheck.test(inputPost)) {
        alert("Post Code  is Valid :)");
    } else {
        alert("Invalid Post Code !");
    }
}
