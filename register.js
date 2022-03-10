maail=document.getElementById("mailinput")
window.onload=function(){
    emailflag=false;
    phoneflag=false;
    fitstNameFlag=false;
    pasFlag=false;
    document.getElementById("mailinput").addEventListener("blur", function () {
        
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("mailinput").value))
          {
            emailflag=true;
            document.getElementById("logmail").innerText="valid"

          }
          else{ 
          document.getElementById("logmail").innerText="invalid mail pattern"
          this.focus();

        }
        
        })


        document.getElementById("phone").addEventListener("blur",function(){
            
            if((document.getElementById("phone").value.match(/^0\d{10}$/))){
               phoneflag=true;
               document.getElementById("phonelog").innerText="valid"

            }
      else
        {
            document.getElementById("phonelog").innerText="invalid phone number"
            this.focus();
        }
    })

    document.getElementById("firstname").addEventListener("blur",function(){
        
        if((document.getElementById("firstname").value.match(/^[a-z ,.'-]+$/))){
            fitstNameFlag=true;
           document.getElementById("firstNameLog").innerText="valid"

        }
  else
    {
        document.getElementById("firstNameLog").innerText="invalid name"
        this.focus();
    }
})
document.getElementById("pass").addEventListener("blur",function(){
    

    if((document.getElementById("pass").value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/))){
        pasFlag=true;
       document.getElementById("logpass").innerText="valid"

    }

else
{
    document.getElementById("logpass").innerText="must have at least 8 characters, 1 number, 1 upper and 1 lowercase, no special chars"
    this.focus();
}
})


document.getElementById("registerBtn").addEventListener("click",function(){
    if(phoneflag&&fitstNameFlag&&emailflag&&pasFlag){
        // isLogged=1;
        // localStorage.setItem("isLogged","1");
        newAcc={
                    "mail":document.getElementById("mailinput").value,
                    "phone":document.getElementById("phone").value,
                    "fName":document.getElementById("firstname").value,
                    "pass":document.getElementById("pass").value,
                    "address":document.getElementById("aadd").value
                    
                }
        var arrtest=localStorage.getItem("users");
        arrtest=JSON.parse(arrtest);
        arrtest.push(newAcc); 
        localStorage.setItem("users",JSON.stringify(arrtest));    
         alert("welcome, now you can log in");
         window.open("login.html")
}
    else
{
    alert("you must enter your data correctly");
}

})

// document.addEventListener("registerBtn").addEventListener("click",function(){
//     console.log(phoneflag&&fitstNameFlag&&emailflag);

    // if(phoneflag&&fitstNameFlag&&emailflag){
    //     isLogged=1;
    //     alert("welcome");
    //     console.log(isLogged);
    //     localStorage.setItem("isLogged","1");
    //     acc={
    //         user:usrname,
    //         pass:password
    //     }
    //     var arrtest=localStorage.getItem("users")
    //     arrtest=JSON.parse(arrtest);
    //     arrtest.push(acc);
    //    // localStorage.setItem("loggedUser",JSON.stringify(acc))
    //     window.open("home.html")
    // }
    // else{
        
    //     alert("you must enter your data correctly");
        
    // }
//})
}


