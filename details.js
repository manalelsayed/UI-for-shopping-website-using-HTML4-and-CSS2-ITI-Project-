var quan=1;
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
    document.getElementById("plus").addEventListener("click",function(){
        if(quan<10){
          quan++;
          document.getElementById("quantity").value=quan;
          document.getElementById("quantityLog").innerText=" "
          console.log(quan)}
          else{
              document.getElementById("quantityLog").innerText="Sorry,can't add more than 10 items"
          }

    })


    document.getElementById("minus").addEventListener("click",function(){
        if(document.getElementById("quantity").value>1){
            quan--;
        document.getElementById("quantity").value=quan;
        document.getElementById("quantityLog").innerText=" "

        console.log(quan)
        }
        
            else{
                document.getElementById("quantityLog").innerText="min 1 item"
            
        }
        

  })

  document.getElementById("addToOrder").addEventListener("click",function(){
    var logged=localStorage.getItem("isLogged");
    if(logged=="1"){
    alert("are you sure you wanna add this item to your cart?"); 
    var size_=document.getElementById("productSize").value;
    console.log(size_);
    var color_=document.getElementById("productColor").value;
    var imgg=document.getElementById("productImg").src;
    var price_=document.getElementById("productprice").innerText;
    console.log(imgg);

    console.log(color_);
   // let newOrder=new order(imgg,size_,color_,quan,price_);
    var newOrder={
        "imgsrc":imgg,
        "size":size_,
        "color":color_,
        "quantity":quan,
        "price":price_
        
    }
    console.log(newOrder);

   let cart=JSON.parse(localStorage.getItem("orderArray"));
    cart.push(newOrder);
  //  window.localStorage.setItem("orderArray",JSON.stringify(cart));
  window.localStorage.setItem("orderArray",JSON.stringify(cart));

    
    }
else{
    alert("please log in first");
    window.open("login.html")
}    })

}