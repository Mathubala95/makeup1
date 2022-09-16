//create container 
var container=document.createElement("div");
container.setAttribute("class","container");

//create row inside the container
var row=document.createElement("div");
row.classList.add("row","m-3");

//creat input box,button and choose items
var div =document.createElement("div");
div.setAttribute("class","input-group");
var select=document.createElement("select");
select.setAttribute("class","custom-select");
select.setAttribute("id","inputGroupSelect04");
select.setAttribute("aria-label","Example select with button addon");
var option=document.createElement("option");
select.innerHTML=`
<option>Product You Want And Go Find</option>
<option>blush</option>
<option>bronzer</option>
<option>eyebrow</option>
<option>eyeliner</option>
<option>eyeshadow</option>
<option>foundation</option>
<option>lip_liner</option>
<option>lipstick</option>
<option>mascara</option>
<option>nail_polish</option>`
var div1=document.createElement("div");
div1.setAttribute("class","input-group-append");
var button =document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-outline-secondary");
button.innerHTML="Find Me";

//button function for onclick process
button.addEventListener("click",foo);



div1.append(button);
div.append(select,div1)
row.append(div);
container.append(row);
 
//button function
async function foo(){
   

    try{
        let product_type=document.getElementById("inputGroupSelect04").value;
        console.log(product_type);
        let url=`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product_type}`;
        let res= await fetch(url);
        let value=await res.json();
        console.log(value);

               
        for(var i=0;i<value.length;i++){

        //get button data in card property
            row.innerHTML+=`<div class="col-lg-4">            
               <div class="card border-secondary mb-3 text-center" style="max-width: 18rem;">
               <div class="card-header" style="font-style:bold;">${value[i].name}</div>
                 <div class="card-body text-secondary">
                 <img src="${value[i].api_featured_image}" class="card-img-top" alt="img">

                    
                    <p class="card-text">Brand: ${value[i].brand}</p>
                    <p class="card-text">Price: $${value[i].price}</p>
                     
                     <a href="${value[i].product_link}" class="card-link">Let! Check Me</a>
                     

  
                     <p id="wet"></p>                                 
                     
                     <button class="btn btn-primary ">Description</button>
                     
                               
                 </div>
             </div>
            </div>`
           
        };
      }
      //try and catch for error handling
        catch (error){
          console.log("error!!");
       }
    //     let wetCli=document.getElementsByClassName("btn");
    // for (let i=0;i<wetCli.length;i++){
    // wetCli[i].addEventListener("click",async()=>{
    // try {
    //      let wet=document.querySelectorAll("#wet");
                                                 
    //     let url=await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${product_type}`);
    //     let url1=await url.json();
    //     console.log(url1);
        
    //   wet[i].innerHTML=`Country Temp: ${url1[i].description}`;
        
                                               
    //   }
    //    catch(e){
    //    console.log("error!!");
    //     }
    //   });
    //   }

 }
 //get whole process in document body
document.body.append(container); 
foo();

 