const validateContactForm = (e) => {
    const fname = document.forms["contact-form"]["fname"].value;
    const lname = document.forms["contact-form"]["lname"].value;
    const email = document.forms["contact-form"]["email"].value;
    const company = document.forms["contact-form"]["company"].value;
    const phone = document.forms["contact-form"]["phone"].value;
    const message = document.forms["contact-form"]["message"].value;
    const budget = document.forms["contact-form"]["budget"].value;
    const ref = document.forms["contact-form"]["ref"].value;

   if (
       fname.trim() === "" ||
       lname.trim() === "" ||
       email.trim() === "" ||
       phone.trim() === "" ||
       message.trim() === "" ||
       budget.trim() === "" ) {
       
        alert("Please fill all required fields");
   }else {
    window.location.replace("/thankyou.html");
   }

}

document.querySelector("#submit").addEventListener("click", (event) => {
    event.preventDefault();
    validateContactForm();
  });