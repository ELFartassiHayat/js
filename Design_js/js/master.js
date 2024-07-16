// select landing page element 
let landingpage=document.querySelector(".landing-page");
// get array of imags
let imgsArray=["landing1.jpg","landing2.jpg","landing3.jpg","landing4.jpg","01.jpg","02.jpg","03.jpg"];
setInterval(()=>{
// get random number
let randomNumber=Math.floor(Math.random() * imgsArray.length);
//  change background image url
landingpage.style.backgroundImage='url("imgs/' + imgsArray[randomNumber] + '")';


},2000);

// // Create Popup With The image
// let ourGallery = document.querySelector(".gallery img");
// ourGallery.forEach(img => {
//     img.addEventListener("click", (e) => {
//         // create overlay element
//         let overlay = document.createElement("div");
//        //add class to overlay
//        overlay.className = 'popup-overlay';
//        // append overlay to body
//        document.body.appendChild(overlay);
//         // create the popup box
//         let popupbox =document.createElement("div");
//         // add classe to the popup box
//         popupbox.className='popup-box';
//         if( img.alt !== null){
//             // create heanding
//             let imgheading=document.createElement("h3");
//             // create text for heading
//             let imgtxt =document.createTextNode(img.alt);
//             imgheading.appendChild(imgtxt);
//             //   append the heaidng to the popup box
//             popupbox.appendChild("imgheading");
//         }
//          // create the image
//          let popupImage =document.createElement("img");
//          // set image source
//          popupImage.src = img.src;
//          // add image to the popup box 
//          popupbox.appendChild(popupImage);
//          // append the popup box to the body
//          document.body.appendChild(popupbox);
//           // create the close span
//         let closebutton=document.createElement("span");
//         //  create the close button text
//           let closebuttontext =document.createTextNode("X");
//         //   append text to close button
//         closebutton.appendChild(closebuttontext);
//         // add class to close button
//         closebutton.className ='close-button';
//         // add close button to the popup box
//         popupbox.appendChild( closebutton);
         
        
// });
// });
// // close popup
// document.addEventListener("click",function(e){
//     if(e.target.className=='close-button'){
//         // remove the current popup
//         e.target.parentNode.remove();
//         // remove overlay
//         document.querySelector(".popup-overlay ").remove();
//     }
    
//     })
//select all links
const alllinks = document.querySelectorAll(".links a")

           
      
function ScrollToSomewhere(elements){
    alllinks.forEach(ele => {
       ele.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth",
                      
        });
    });
    });
}
ScrollToSomewhere(alllinks);