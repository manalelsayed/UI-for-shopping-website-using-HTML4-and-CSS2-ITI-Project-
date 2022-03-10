//import product from './product.js';
//import order from './order.js';
//    let cart=[];
//   window.localStorage.setItem("orderArray",JSON.stringify(cart));

 
 class order{
    constructor(_imgsrc,_size,_color,_quantity,_price){
        this.imgsrc=_imgsrc;
        this.size=_size;
        this.color=_color;
        this.quantity=_quantity;
        this.price=_price;
        
    }
 }
 class product{
    constructor(_id,_name,_imgsrc,_description,_price){
        this.id=_id;
        this.name=_name;
        this.imggsrc=_imgsrc;
        this.description=_description;
        this.price=_price; 
    }
 }
 let product1=new product(1,"Formal Sorona puffer coat with hood","imgs/1.jpg","Water-resistant puffer coat with a hood. SORONA padding. Front welt pockets with snap-button fastening and fleece lining. Cuffs with knit lining. Zip-up front.",700)
 let product2=new product(2,"Faux leather oversize shirt","imgs/2.jpg","Loose-fitting faux leather collared shirt with long sleeves, a front pocket and snap-button fastening. Available in several colours.",550)
 let product3=new product(3,"Corduroy cargo overshirt","imgs/3.jpg","Collared overshirt with long sleeves. Button-up front fastening. Front pockets with flaps and button. Available in several colours.",429)
 let product4=new product(4,"Jacquard high-neck sweater","imgs/4.jpg","Cropped high neck sweater with long sleeves. Contrast jacquard detail.",650)
 let product5=new product(5,"Trainers with decorative trims","imgs/5.jpg","Women’s multicoloured lace-up trainers. Back pull tab. Multi-piece details in a combination of materials. STARFIT®. Flexible technical polyurethane foam insole, designed to offer greater comfort.",450)
 let product6=new product(6,"Straight fit cargo trousers","imgs/6.jpg","Here are the famous cargo trousers from Stradivarius that have taken Tik Tok by storm! Featuring a high waist and straight-leg fit. The cargo detail is in the side pockets. They feel incredible. They have gone viral for a reason!",699)
 let product7=new product(7,"Hooded puffer jacket","imgs/7.jpg","Hooded puffer jacket with long sleeves. Invisible side pockets. Adjustable drawstrings. Available in several colours.",499)
 let product8=new product(8,"Faux leather midi skirt","imgs/8.jpg","High-waist midi skirt with a lined button fastening on the front.",699)
 var products=[product1,product2,product3,product4,product5,product6,product7,product8];
 window.localStorage.setItem("products",JSON.stringify(products));
 
 //window.localStorage.setItem("orderArray",JSON.stringify(users));
 
 window.onload=function(){
     lo=localStorage.getItem("isLogged");
     console.log(lo);
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
     
    for(let i=0;i<products.length;i++){
        document.getElementById("productsDiv").innerHTML +=`<div class="product">
        <a href="details${i+1}.html"><img src=${products[i].imggsrc} class="p"></a>
        <p class="price">${products[i].name}<P class="price">EGP ${products[i].price}</P>
        <a  href="details${i+1}.html" id="${products[i].id}">Read More</a></p>
        
    </div>`
      
    }
    
  
    
   
   
   
   

}

