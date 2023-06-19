
let search= document.querySelector("#search");

const PRODUCT_DATA = [
        {
          propertyType: "tree-houses",
          price: 120,
          name: "Cozy Downtown Treehouses",
          place: "New York City",
          img: "https://media.glampinghub.com/CACHE/images/accommodations/spa-tree-house-cabins-with-complimentary-breakfast-france-1476868373418/b9b44565038a287e0cf48a92c5942e98.avif"
        },
        {
          propertyType: "villa",
          price: 300,
          name: "Luxurious Oceanfront Villa",
          place: "Bali",
          img: "https://media.glampinghub.com/CACHE/images/accommodations/twilight-moon-ranch-located-on-16-beautiful-acres-with-private-1488191441169/b092159906362d5598b62e28422bcc0c.avif"
        },
        {
          propertyType: "cottage",
          price: 80,
          name: "Quaint Countryside Cottage",
          place: "Cotswolds",
          img: "https://media.glampinghub.com/CACHE/images/accommodations/accommodationsaccommodation_4080_listing_image_46827f570d8244dfbabc7492d4ffde42-glamping-219d8852-56b1-4b70-9543-2656e930c474/5da73e7b9f81e5b62a19b162b6c6f9b6.avif"
        },
        {
          propertyType: "cabin",
          price: 150,
          name: "Mountain Retreat Cabin",
          place: "Aspen",
          img: "https://media.glampinghub.com/CACHE/images/accommodations/accommodationsaccommodation_50025_listing_image_2379e4f4f2ff466a85d7892ca9c76272-glamping-afebae25-b2a3-4c8f-8e7c-ff14589b1893/f7287aec79b5b5e4418e057c161f37ab.avif"
        },
        {
          propertyType: "villa",
          price: 200,
          name: "Beachfront Villa",
          place: "Maldives",
          img: "https://media.glampinghub.com/CACHE/images/accommodations/7d6d592d-a251-4b55-a73f-b86b4f51a03f-glamping-b1dbb623-5146-4ae5-b3b7-91df0b42c41a/35144917eecd0eee71e62dcbc250770a.avif"
        },
        {
          propertyType: "tree-houses",
          price: 250,
          name: "Modern City Treehouses",
          place: "London",
          img: "https://media.glampinghub.com/CACHE/images/accommodations/nid-damour-perche-en-foret-intime-et-luxueux-elevated-cabin-1533111939735/817dd23946a70a5be0d16383ee6118e0.avif"
        },
        {
          propertyType: "cottage",
          price: 120,
          name: "Rustic Lakeside Cottage",
          place: "Canada",
          img: "https://media.glampinghub.com/CACHE/images/accommodations/shady-mojave-desert-oasis-surrounds-inviting-cabin-rental-califor-1461236332662/76c52a7a7bd83a857b4a9c5ac99198e3.avif"
        },
        {
          propertyType: "cabin",
          price: 180,
          name: "Secluded Mountain Cabin",
          place: "Colorado",
          img: "https://media.glampinghub.com/CACHE/images/accommodations/spacious-cabins-overlooking-beautiful-fern-valley-california-1563960155110/cbfadca338a5774e10c903a0bce5c73b.avif"
        },
        {
          propertyType: "villa",
          price: 400,
          name: "Luxury Villa with Pool",
          place: "Ibiza",
          img: "https://media.glampinghub.com/CACHE/images/accommodations/c54bebcc-ffc3-4f4a-ad3f-db17bb30c712-glamping-3be41a01-12d2-4baf-93b2-95d2b92dc455/9b9c1bd8be6a7d5de502b42c820122fd.avif"
        },
        {
          propertyType: "tree-houses",
          price: 150,
          name: "Central City Treehouses",
          place: "Paris",
          img: "https://media.glampinghub.com/CACHE/images/accommodations/spacious-tree-house-rental-set-on-a-vineyard-near-maribor-sloveni-1503851907091/f8ae055a7126463907f6ab056a7de2d9.avif"
        },
        {
          propertyType: "cottage",
          price: 100,
          name: "Scenic Countryside Cottage",
          place: "Scotland",
          img: "https://media.glampinghub.com/CACHE/images/accommodations/steven-jeffe-properties-mountain-top-retreat-1571310184298/954afff5dd01a607e3a1eadab1748eda.avif"
        },
        {
          propertyType: "tree-houses",
          price: 200,
          name: "Riverside Log Treehouses",
          place: "Norway",
          img: "https://media.glampinghub.com/CACHE/images/accommodations/varna-treehouse-treehouse-1543925401193/256dfa79bb99dcf17e0c52692389c275.avif"
        },
        {
          propertyType: "villa",
          price: 350,
          name: "Private Hilltop Villa",
          place: "Santorini",
          img: "https://media.glampinghub.com/CACHE/images/accommodations/f83a2144-ff09-45b0-bc28-ce0409370aad-glamping-6a5b2c90-97b7-4145-9af3-a690f39c8f7f/918b89d9029d2f4ab213ab188a636da1.avif"
        },
        {
          propertyType: "tree-houses",
          price: 90,
          name: "Charming Studio Treehouses",
          place: "Rome",
          img: "https://media.glampinghub.com/CACHE/images/accommodations/enchanting-tree-house-near-rocamadour-in-southwest-france-1533282992826/bb41a0f6a85c24ec4d735b23d99dc246.avif"
        },
        {
          propertyType: "cottage",
          price: 140,
          name: "Woodland Cottage Retreat",
          place: "Sweden",
          img: "https://media.glampinghub.com/CACHE/images/accommodations/lovely-cottage-retreat-in-texas-hill-country-with-cypress-creek-vi-1489419105587/db29f1deab9cfef6c0f3e49a670c276a.avif"
        },
];




function myFunction(){
   var navbar= document.getElementById("nav-links");
   navbar.classList.toggle('show');
  //  var login =document.getElementById("login");
  //  login.classList.toggle('show');
}



let ls= JSON.parse(localStorage.getItem("myCart")) || [];

// let filter=document.querySelector("#filter");
let container = document.querySelector("#container");
let filter=document.querySelector("#filter");
let from=document.querySelector(".lower");
let to=document.querySelector(".upper");
let apply=document.querySelector("#apply")
// let qty=document.querySelector("qty");
// let decrease=document.querySelector("minus");
// let increase=document.querySelector("qty");

// increase.addEventListener("click", function(){
//    qty.innerText++;
 
// })




// decrease.addEventListener("click",()=>{
//   qty.innerText--;
 

// })


// filter.addEventListener("change", function(){
//   if(filter.value=== ""){
//      display(PRODUCT_DATA)
//   }
//   else {
//     let filtered = PRODUCT_DATA.filter(function (a){
//         if(a.brand == filter.value){
//             return a;
//         }
//     })
//     display(filtered)
//   }

// })

apply.addEventListener("click", function () {
  let filtered = PRODUCT_DATA.filter(function (element) {
    if (element.price >= from.value && element.price <= to.value) {
      return element;
    }
  });
  display(filtered);
});



  filter.addEventListener("change",function(){
    // console.log("hi");
        if(filter.value== ""){
           display(PRODUCT_DATA);
        }
        else{
            let filtered= PRODUCT_DATA.filter((e)=>{
            if(e.propertyType===filter.value){
                return e;
            }
        });
        display(filtered);
        }
        
    })


  


search.addEventListener("input",function(){

  // console.log(search.value)
  // element.name.toUppercase().includes(search.value.toUppercase()) === true
          let filtered = PRODUCT_DATA.filter(function(element){
          if(element.name.includes(search.value) === true) {
              return element;
          }
      });
      display(filtered);
      
      
  })



  function display(data) {
    container.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
      let product = document.createElement("div");
      
      let image = document.createElement("img");
      image.setAttribute("src", data[i].img);

      image.addEventListener("click", function(){
        let show = data[i]
        localStorage.setItem("slide", JSON.stringify(show));
      })
      
      let link = document.createElement("a");
      link.setAttribute("href", "Booking page.html");
      link.appendChild(image);
      
      let name = document.createElement("h3");
      name.innerText = data[i].name;
      
      let price = document.createElement("p");
      price.innerText = "$" + " " + data[i].price;
      
      let place = document.createElement("p");
      place.innerText = data[i].place;
      
      let propertyType = document.createElement("p");
      propertyType.innerText = data[i].propertyType;
      
      product.append(link, name, place, price, propertyType);
      
      container.append(product);
    }
  }
  
  display(PRODUCT_DATA);


// function display(data){
//     container.innerHTML=""; 
//     for(let i=0; i<data.length; i++){
        
//         let product = document.createElement("div");
//         let image=document.createElement("img");
//         image.setAttribute("src", data[i].img);
//         const link = document.createElement("a");
//         link.setAttribute("href", "Booking page.html");
//         link.appendChild(image);
    
//         let name=document.createElement("h3");
//         name.innerText=data[i].name;
    
//         let price=document.createElement("p");
//         price.innerText= "$" +" "+ data[i].price;
        
    
//         let place=document.createElement("p");
//         place.innerText=data[i].place;
    
//         let propertyType=document.createElement("p");
//         propertyType.innerText=data[i].propertyype;
            
//         // let cart=document.createElement("button");
//         // cart.innerText="Cart"
    
        
//         // cart.addEventListener("click", function(){
//         //   ls.push(data[i]);
    
//         //   localStorage.setItem("myCart",JSON.stringify(ls));
         
//         // })
        
//          product.append(image,name,place,price);
    
//       container.append(product);
    
//     }
    
// }

//  display(PRODUCT_DATA)