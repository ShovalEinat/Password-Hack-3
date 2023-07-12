let NBp0v17rc9P7 = "QsEpD1pZKc3q";
let QsEpDIpZKc3q = "NBp0v17rc9P7";
let NBp0vI7rc9P7 = "k2txeBvdPUXS";

function checkPass() {
    x = userPassInput.value;
    if (x == QsEpDIpZKc3q + "zN1x" + NBp0v17rc9P7) {
        alert("Nice you got the right password!");
        window.location = "https://shovaleinat.github.io/";
       }
       else if(userPassInput.value == ""){
        alert("You need to type a password!");
       }
       else{
        alert("The password is incorrect, try again.");
        userPassInput.value = "";
       };
    };
