
/* For Name textarea */
    function myFocusFunctionName() {
        document.getElementById("fname").style.backgroundColor = "lightblue" ;
      }

      function myBlurFunctionName() {
        document.getElementById("fname").style.backgroundColor = "";  
      }


      /* For Phone textarea */
      function myFocusFunctionPhone() {
        document.getElementById("phone").style.backgroundColor = "lightblue" ;
      }

      function myBlurFunctionPhone() {
        document.getElementById("phone").style.backgroundColor = "";  
      }


      /* For Email textarea */
      function myFocusFunctionEmail() {
        document.getElementById("email").style.backgroundColor = "lightblue" ;
      }

      function myBlurFunctionEmail() {
        document.getElementById("email").style.backgroundColor = "";  
      }


      /* For Subject textarea */
      function myFocusFunctionSubject() {
        document.getElementById("subject").style.backgroundColor = "lightblue" ;
      }

      function myBlurFunctionSubject() {
        document.getElementById("subject").style.backgroundColor = "";  
      }
      

      /* For Feedback textarea */
      function myFocusFunctionSubjectMSG() {
        document.getElementById("subjectMSG").style.backgroundColor = "lightblue" ;
      }

      function myBlurFunctionSubjectMSG() {
        document.getElementById("subjectMSG").style.backgroundColor = "";  
      }


      /* For login username */
      function myFocusFunctionUserName() {
        document.getElementById("username").style.backgroundColor = "lightblue" ;
      }

      function myBlurFunctionUserName() {
        document.getElementById("username").style.backgroundColor = "";  
      }


      /* For login password */
      function myFocusFunctionPassword() {
        document.getElementById("password").style.backgroundColor = "lightblue" ;
      }

      function myBlurFunctionPassword() {
        document.getElementById("password").style.backgroundColor = "";  
      }


      /* For Feedback country */
      function myFocusFunctionTopic() {
        document.getElementById("topic").style.backgroundColor = "lightblue" ;
      }

      function myBlurFunctionTopic() {
        document.getElementById("topic").style.backgroundColor = "";  
      }

      




      function validate_form () {
          let check=true;
        var fname = document.getElementById ("fname").value;
        var phone = document.getElementById ("phone").value;
        var email = document.getElementById ("email").value;
        var subject = document.getElementById ("subject").value;
        var subjectMSG = document.getElementById ("subjectMSG").value;
        var topic = document.getElementById("topic");


        var textError;
        var textErrorPhone;
        var textErrorEmail;
        var textErrorSubject;
        var textErrorSubjectMSG;
        var textErrorTopic;


        document.getElementById("error_message").style.color = "red";
        document.getElementById("error_message").style.color = "red";
        document.getElementById("error_message2").style.color = "red";
        document.getElementById("error_message3").style.color = "red";
        document.getElementById("error_messageSubject").style.color = "red";
        document.getElementById("error_messageSubjectMSG").style.color = "red";
        document.getElementById("error_messageTopic").style.color = "red";





        /* condition for name in feedback */
        if(fname.length <=5){
            textError ="name is invalid. name should have at least 6 characters and no numbers allowed";
            error_message.innerHTML = textError;
            check=false;
        } else if(fname.length >= 6){
            error_message.innerHTML = "";

        }

        /* condition for subject in feedback */
        if(subject.length == 0){
            textErrorSubject ="Subject must not be empty";
            error_messageSubject.innerHTML = textErrorSubject;
            check=false;
        } else if(subject.length >= 1){
            error_messageSubject.innerHTML = "";

        }

        /* condition for feedback textarea */
        if(subjectMSG.length == 0){
            textErrorSubjectMSG ="FeedBack textarea must not be empty";
            error_messageSubjectMSG.innerHTML = textErrorSubjectMSG;
            check=false;
        } else if(subjectMSG.length >= 1){
            error_messageSubjectMSG.innerHTML = "";

        }

        /* condition for phone number in feedback */
        var ok = /^9665[^a-zA-Z]/;
        var result1 = ok.test(phone);
        if(phone.length == 12 && result1 ){
            error_message2.innerHTML = "";
        } else{
            textErrorPhone ="phone is invalid. phone should start with 9665 and have 12 digits and no characters allowed";
            error_message2.innerHTML = textErrorPhone;
            check=false;
        }

        /* condition for email in feedback */
        var okEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        var result = okEmail.test(email);
        if(result ){
            error_message3.innerHTML = "";
        } else{
            textErrorEmail ="email is invalid. email format must be as follows (example@example.ex)";
            error_message3.innerHTML = textErrorEmail;
            check=false;
        }

        /* condition for topic in feedback */
        if (topic.value > "0") {
            error_messageTopic.innerHTML = "";
        }else{
            textErrorTopic ="an option must be selected";
            error_messageTopic.innerHTML = textErrorTopic;
            check=false;
        }


        return check;
    } 






    /* the second condition for the name in feedback */
    function check1(){
        var fname = document.getElementById ("fname").value;
        var ok = /.*[0-9].*/;
        var result = ok.test(fname);
        if(result){
        textError ="digits not allowed";
        error_message.innerHTML = textError;
        }  else{

            error_message.innerHTML = "";
        }
    }






    /* validate function for login */
function validate_login () {
  let check=true;
var username = document.getElementById ("username").value;
var password = document.getElementById ("password").value;

var textErrorUserName;
var textErrorPassword;

document.getElementById("error_messageUserName").style.color = "red";
document.getElementById("error_messagePassword").style.color = "red";




/* condition for username in index */
if(username.length <=3){
  textErrorUserName ="name is invalid. name should have at least 4 characters";
  error_messageUserName.innerHTML = textErrorUserName;
  check=false;
} else if(username.length >=4){
  error_messageUserName.innerHTML = "";

}

/* condition for password in index */
if(password.length <=4){
  textErrorPassword ="password is invalid. password should have at least 5 characters";
  error_messagePassword.innerHTML = textErrorPassword;
  check=false;
} else if(password.length >= 5){
  error_messagePassword.innerHTML = "";

}

return check;

}