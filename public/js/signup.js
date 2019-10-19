$(document).ready(function() {
    // Get references to form and input
    var signUpForm = $("form.signup");
    var nameInput = $("input#name-input");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
  
    // make sure fields have user input in them
    signUpForm.on("submit", function(event) {
      event.preventDefault(); 
      var userData = {
        name: nameInput.val().trim(),
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.name || !userData.email || !userData.password) {
        return;
      }
      // If there is an email and password, run the signUpUser function
      signUpUser(userData.name, userData.email, userData.password);
      nameInput.val("");
      emailInput.val("");
      passwordInput.val("");
    });
  
    // Does post to route and redirected to the members page
    // log any errors
    function signUpUser(name, email, password) {
      $.post("/api/signup", {
        name: name,
        email: email,
        password: password
      }).then(function(data) {
        window.location.replace(data);
        // If there's an error, throwing up an alert
      }).catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });
  