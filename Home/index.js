
let search= document.querySelector("#search");

const PRODUCT_DATA = [
        {
          propertyType: "tree-houses",
          price: 120,
          name: "Cozy Downtown Treehouses",
          place: "New York City",
          img: "https://storage.googleapis.com/artifacts-production-ukretreats/spaces/bill-measom/ukretreats/ukretreats-laravel/0_40652600_1665071767_a55df6c07669279d9c9077dd3fd95e4a_1024.jpg"
        },
        {
          propertyType: "villa",
          price: 300,
          name: "Luxurious Oceanfront Villa",
          place: "Bali",
          img: "https://storage.googleapis.com/artifacts-production-ukretreats/spaces/bill-measom/ukretreats/ukretreats-laravel/0_75629100_1665070357_35d3ee74b7141b1a24322aec18f80bf0_1024.jpg"
        },
        {
          propertyType: "cottage",
          price: 80,
          name: "Quaint Countryside Cottage",
          place: "Cotswolds",
          img: "https://storage.googleapis.com/artifacts-production-ukretreats/spaces/bill-measom/ukretreats/ukretreats-laravel/0_27936500_1669649934_7bb1ee9364f63a4c476c50b4fc33e781_1024.jpg"
        },
        {
          propertyType: "cabin",
          price: 150,
          name: "Mountain Retreat Cabin",
          place: "Aspen",
          img: "https://storage.googleapis.com/artifacts-production-ukretreats/spaces/bill-measom/ukretreats/ukretreats-laravel/0_56659700_1665074609_7d3d7ad57ce7793976ca713251822209_1024.jpg"
        },
        {
          propertyType: "villa",
          price: 200,
          name: "Beachfront Villa",
          place: "Maldives",
          img: "https://storage.googleapis.com/artifacts-production-ukretreats/spaces/bill-measom/ukretreats/ukretreats-laravel/0_05292700_1665143673_c81adb24e4c08d17945c45efd404717b_1024.jpg"
        },
        {
          propertyType: "tree-houses",
          price: 250,
          name: "Modern City Treehouses",
          place: "London",
          img: "https://storage.googleapis.com/artifacts-production-ukretreats/spaces/bill-measom/ukretreats/ukretreats-laravel/0_50343200_1679668041_127c952fe33064528cfe7ed4af181477_1024.jpg"
        },
        {
          propertyType: "cottage",
          price: 120,
          name: "Rustic Lakeside Cottage",
          place: "Canada",
          img: "https://storage.googleapis.com/artifacts-production-ukretreats/spaces/bill-measom/ukretreats/ukretreats-laravel/0_06361800_1675775490_279fffbd93cc447b49e21cca1e4f2442_1024.jpg"
        },
        {
          propertyType: "cabin",
          price: 180,
          name: "Secluded Mountain Cabin",
          place: "Colorado",
          img: "https://storage.googleapis.com/artifacts-production-ukretreats/spaces/bill-measom/ukretreats/ukretreats-laravel/0_25333700_1678716342_fbe2067544ed7b1a2e9c4f095526c049_1024.jpg"
        },
        {
          propertyType: "villa",
          price: 400,
          name: "Luxury Villa with Pool",
          place: "Ibiza",
          img: "https://storage.googleapis.com/artifacts-production-ukretreats/spaces/bill-measom/ukretreats/ukretreats-laravel/0_29747600_1680508554_20a618512b7830a3847e41c6d4490e6e_1024.jpg"
        },
        {
          propertyType: "tree-houses",
          price: 150,
          name: "Central City Treehouses",
          place: "Paris",
          img: "https://storage.googleapis.com/artifacts-production-ukretreats/spaces/bill-measom/ukretreats/ukretreats-laravel/0_20258700_1681292998_c26259ace8dec35367951653615c3f14_1024.jpg"
        },
        {
          propertyType: "cottage",
          price: 100,
          name: "Scenic Countryside Cottage",
          place: "Scotland",
          img: "https://storage.googleapis.com/artifacts-production-ukretreats/spaces/bill-measom/ukretreats/ukretreats-laravel/0_25333700_1678716342_fbe2067544ed7b1a2e9c4f095526c049_1024.jpg"
        },
        {
          propertyType: "tree-houses",
          price: 200,
          name: "Riverside Log Treehouses",
          place: "Norway",
          img: "https://storage.googleapis.com/artifacts-production-ukretreats/spaces/bill-measom/ukretreats/ukretreats-laravel/0_73367400_1680508496_301200cc871d0df4879c6ff13b2afe5a_1024.jpg"
        },
        {
          propertyType: "villa",
          price: 350,
          name: "Private Hilltop Villa",
          place: "Santorini",
          img: "https://storage.googleapis.com/artifacts-production-ukretreats/spaces/bill-measom/ukretreats/ukretreats-laravel/0_95966700_1668621476_d4bc74519d16a50972944142b7466f51_1024.jpg"
        },
        {
          propertyType: "tree-houses",
          price: 90,
          name: "Charming Studio Treehouses",
          place: "Rome",
          img: "https://storage.googleapis.com/artifacts-production-ukretreats/spaces/bill-measom/ukretreats/ukretreats-laravel/0_00208600_1664992169_4056c860a5427955de11eaa28417ba68_1024.jpg"
        },
        {
          propertyType: "cottage",
          price: 140,
          name: "Woodland Cottage Retreat",
          place: "Sweden",
          img: "https://storage.googleapis.com/artifacts-production-ukretreats/spaces/bill-measom/ukretreats/ukretreats-laravel/0_34106400_1677849975_abbdda7809505961a72b56b43b3b42e3_1024.jpeg"
        },
];


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