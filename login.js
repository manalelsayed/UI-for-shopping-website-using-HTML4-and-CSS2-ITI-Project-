window.onload=function(){
    isLogged=0;
    // document.getElementById("username").addEventListener("blur", function () {
    //     usrflag=false;
    //     if (this.value == "") {
    //        document.getElementById("logusr").innerText="this field is required"
    //         this.style.backgroundColor = "red";
    //         this.focus();
    //     }
    //     else if (username.value.length < 4) {
    //         document.getElementById("logusr").innerText="must be more than 4 and less than 10"
    //     }
    //     else if (username.value.length > 11) {
    //         document.getElementById("logusr").innerText="must be more than 4 and less than 10"
    //     }
    //     else {
    //         this.style.backgroundColor = "white";
    //         document.getElementById("logusr").innerText = "";
    //         usrflag=true;
    //         console.log(usrflag)
    //     }
    // })
     
        // passflag=false;
        // usrflag=false;
    // document.getElementById("password").addEventListener("keyup", function (eventRef) {
    //     passflag=false;
    //     if (this.value == "") {
    //        document.getElementById("logpass").innerText="this field is required"
    //         this.style.backgroundColor = "red";
    //         this.focus();
    //     }
    //   else  if ((eventRef.which >= 48 && eventRef.which <= 57))//range ascii for numbers only
    //     {
    //         document.getElementById("logpass").innerText = "plz add numbers only";
    //         eventRef.preventDefault();
    //     }
    //     else if (password.value.length < 4) {
    //         document.getElementById("logpass").innerText="must be more than 4 and less than 10"
    //     }
    //     else if (password.value.length > 11) {
    //         document.getElementById("logpass").innerText="must be more than 4 and less than 10"
    //     }
    //     else {
    //         this.style.backgroundColor = "white";
    //         document.getElementById("logpass").innerText = "";
    //         passflag=true;
    //         console.log(passflag)
    //     }
    // })
    // document.getElementById("password").addEventListener("blur",function(){
    //     passflag=false;
    //     if((document.getElementById("password").value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/))){
    //         passflag=true;
    //        document.getElementById("logpass").innerText="valid"
    
    //     }
    // else
    // {
    //     document.getElementById("logpass").innerText="must have at least 8 characters, 1 number, 1 upper and 1 lowercase, no special chars"
    //     this.focus();
    // }
    // })
    document.getElementById("login").addEventListener("click",function(){
        validate=localStorage.getItem("users");
        validate=JSON.parse(validate);
        let usrname=document.getElementById("username").value;
        
        let password=document.getElementById("password").value;
        // for(let i=0;i<validate.length;i++){
        //     if((usrname==validate[i].mail)&&(password==validate[i].pass)){
        //         alert("HII")
        //     }
        //     else{
        //         alert("wrong data")
        //     }
        // }
        
        for(let i=0;i<validate.length;i++){
            if((usrname==validate[i].mail)&&(password==validate[i].pass)){
            isLogged=1;
            let cart=[];
            window.localStorage.setItem("orderArray",JSON.stringify(cart));
            console.log("cart is now to empty");

           // window.localStorage.setItem("details"," ");

            alert(`"welcome, ${validate[i].fName}"`);
            
    
            
            localStorage.setItem("isLogged","1");
            console.log("isLogged is set to 1");
            acc={
                user:usrname,
                pass:password
            }
            localStorage.setItem("loggesUser",JSON.stringify(acc))
            console.log(`"logged user is set ${acc}"`);
            window.open("home.html","_self");
            
            }
            else if((usrname==validate[i].mail)&&(password!=validate[i].pass)){
             document.getElementById("logpass").innerText="wrong password";

            }
            else{
                alert("not registered");
                window.open("register.html","_self")
            }    
        }
       
        
       
    })
}
