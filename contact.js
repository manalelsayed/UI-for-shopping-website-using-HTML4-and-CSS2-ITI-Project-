window.onload=function(){
  contactMailFlag=false;
  ContactNameFlag=false;
  contactCommentFlag=false;
    document.getElementById("contactMail").addEventListener("blur", function () {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("contactMail").value))
          {
            contactMailFlag=true;
            document.getElementById("ContactMailLog").innerText="valid"

          }
          else{ 
          document.getElementById("ContactMailLog").innerText="invalid mail pattern"
          this.focus();

        }
        
        })
        document.getElementById("ContactName").addEventListener("blur",function(){
            if((document.getElementById("ContactName").value.match(/^[a-z ,.'-]+$/))){
                ContactNameFlag=true;
               document.getElementById("ContactNameLog").innerText="valid"
    
            }
      else
        {
            document.getElementById("ContactNameLog").innerText="invalid name"
            this.focus();
        }
    })
    document.getElementById("contactComment").addEventListener("blur",function(){
      if((document.getElementById("contactComment").value !=" ")){
          contactCommentFlag=true;
         document.getElementById("contactCommentLog").innerText="valid"

      }
else
  {
      document.getElementById("ContactNameLog").innerText="required"
      this.focus();
  }
})

  //  document.getElementById("contactBtn").addEventListener("click",function(){
  //    if(contactCommentFlag&&ContactNameFlag&&contactMailFlag){
  //   let body1= '\n \t title'+ 'contact message';
  //   body1 += '\n \t Subject '+ document.getElementById("contactComment").innerText;
  //   window.location.href = `"mailto:manal.afifi626@gmail.com?subject=newcontact&"+${encodeURIComponent(body1)}"`;
  //    }
  //    else{
  //         alert("please complete the data first")
  //       }
  //  })
   document.getElementById("contactBtn").addEventListener("click",function(){
    
      sendcontact=JSON.stringify(document.getElementById("contactComment").innerText);
     let body1='\n \t title' + 'confirmORder';
     body1 += '\n \t Subject '+ sendcontact;
    if(contactCommentFlag&&ContactNameFlag&&contactMailFlag){
        window.location.href = `"mailto:manal.afifi626@gmail.com?subject=newcontact&"+${encodeURIComponent(body1)}"`;

    }
    else{
      alert("please complete the data first")
    }
})

}