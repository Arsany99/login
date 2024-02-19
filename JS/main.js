let usernameInput = document.getElementById("usernameInput")
let userEmailInput = document.getElementById("userEmailInput")
let userPasswordInput = document.getElementById("userPasswordInput")
var userName = localStorage.getItem("userSeccion")
var userInfo;
if(localStorage.getItem("users") == null){
    userInfo =[];
}else{
    userInfo= JSON.parse(localStorage.getItem("users"))
}

function signUp(){
    userValidation()
    isExist()
    if(userValidation()==true && isExist()==false){
        var user ={
            name:usernameInput.value,
            email:userEmailInput.value ,
            password:userPasswordInput.value
        };
        userInfo.push(user);
        localStorage.setItem("users"  , JSON.stringify(userInfo));
        var confirmMsg = document.getElementById("confirmMsg");
        confirmMsg.classList.replace("d-none" , "d-block");
        var signin = document.getElementById("signin");
        signin.classList.replace("d-none" , "d-block");
        
    } else {
        var tryAgainMsg =document.getElementById("tryAgainMsg")
        tryAgainMsg.classList.replace("d-none" , "d-block")
    }
   

}function userValidation(){
    var usernameAlert = document.getElementById("usernameAlert")
    var regex =/^[a-zA-Z]{3,10}$/ ;
    if (regex.test(usernameInput.value)== true && usernameInput.value!="") {
        usernameInput.classList.add("is-valid")
        usernameInput.classList.remove("is-invalid")
        usernameAlert.classList.replace("d-block" ,"d-none")
        return true
    }else{
        usernameInput.classList.add("is-invalid")
        usernameInput.classList.remove("is-valid")
        usernameAlert.classList.replace("d-none" ,"d-bloc")
        return false
    }
}
function isExist(){
    var accountExistMsg = document.getElementById("accountExistMsg")
    for (var i = 0; i < userInfo.length; i++) {
        if (userInfo[i].name.toLowerCase()==usernameInput.value.toLowerCase()) {
            usernameInput.classList.remove("is-valid")
            accountExistMsg.classList.replace("d-none" ,"d-block")
            return true
        }else{
            return false
        }
        
    }
}

function login(){
    var loginEmail = document.getElementById("loginEmail")
    var loginPassword = document.getElementById("loginPassword")
    var loginBtn = document.getElementById("loginBtn")
    var wrongMsg = document.getElementById("wrongMsg")
    if(loginEmail==""  || loginPassword==""){
        var fillMsg = document.getElementById("fillMsg")
        fillMsg.classList.replace("d-none" , "d-block")
        return false
    }
    for (let i = 0; i < userInfo.length; i++) {
        if(userInfo[i].email.toLowerCase()==loginEmail.value.toLowerCase() && userInfo[i].password ==loginPassword.value){
            localStorage.setItem("userSeccion" , userInfo[i].name)
            loginBtn.setAttribute("href" ,"welcome.html")

        }else{
            wrongMsg.classList.replace("d-none" , "d-block")
        }
        
    }


}

function displayWelcomeUser(){
    document.getElementById("username").innerHTML="welcome"+" "+userName
}
function logout(){
    localStorage.removeItem("userSeccion")
}