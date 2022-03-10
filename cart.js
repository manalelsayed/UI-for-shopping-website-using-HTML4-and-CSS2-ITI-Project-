//import {cart} from './script.js';


window.onload=function(){
    lo=localStorage.getItem("isLogged");
    if(lo=="1"){
        document.getElementById("loginNav").innerText="log out";
    }
    if(document.getElementById("loginNav").innerText=="log out"){
        document.getElementById("loginNav").addEventListener("click",function(){
            localStorage.setItem("isLogged","0");
            localStorage.setItem("loggesUser","");
            localStorage.setItem("loggesUser","");
            localStorage.setItem("orderArray","");
            document.getElementById("loginNav").innerText="log in";
            window.open("home.html",_self);
        })

    }
    var total=0
   var ordercart=JSON.parse(localStorage.getItem("orderArray"));
    for(var i=0;i<ordercart.length;i++){
        let elemtr = document.createElement("tr");
        let td1=document.createElement("td");
        let im=document.createElement("img");
        im.src=ordercart[i].imgsrc;
        im.length=100;
        im.width=100;
        td1.append(im);
        let td2=document.createElement("td");
        let td2Content=ordercart[i].size;
        td2.append(td2Content);
        let td3=document.createElement("td");
        let td3Content=ordercart[i].color;
        td3.append(td3Content);
        let td4=document.createElement("td");
        let td4Content=ordercart[i].quantity;
        td4.append(td4Content);
        let td5=document.createElement("td");
        let td5Content=(ordercart[i].quantity)*(ordercart[i].price);
        total+= td5Content;
        td5.append(td5Content);
        elemtr.append(td1);
        elemtr.append(td2);
        elemtr.append(td3);
        elemtr.append(td4);
        elemtr.append(td5);

            // for (prop in ordercart[i]) {
            //      tdProp = document.createElement("td");
            //      tdCotent = ordercart[i][prop];
            //     tdProp.innerText = tdCotent;
            //     elemtr.append(tdProp);
            //     }
                cartBody.append(elemtr);
}
document.getElementById("totalprice").innerText+=total;
document.getElementById("buyBtn").addEventListener("click",function(){
    let logged=localStorage.getItem("isLogged");
    // let Subject="test";
     let sendOrder=localStorage.getItem("orderArray");;
      sendOrder=JSON.stringify(sendOrder);
     let body='\n \t title' + 'confirmORder';
     body+= '\n \t Subject '+ sendOrder;
    if(logged==1){
        window.location.href = `"mailto:manal.afifi626@gmail.com?subject=newOrder&"+${encodeURIComponent(body)}"`;

    }
    else{
        alert("please login first")
        window.open("login.html")
    }
})
}