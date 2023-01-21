 const tax = 0.18;
 const shipping = 15;

 const products = document.querySelector(".products");

 window.onload = () => {
   cartTotal();
   productAndCartTotal();
 };
 products.onclick = (e) => {
   if (e.target.className === "fas fa-minus") {
     if (e.target.parentElement.nextElementSibling.innerText > 1) {
       e.target.parentElement.nextElementSibling.innerText--;

       productAndCartTotal(
         e.target.parentElement.nextElementSibling.innerText,
         e.target.parentElement.parentElement.parentElement
       );
     } else {
       if (confirm("Product will be remove??")) {
         e.target.parentElement.parentElement.parentElement.parentElement.remove();
         cartTotal();
       }
     }
   } else if (e.target.className === "fas fa-plus") {
     e.target.parentElement.previousElementSibling.innerText++;
     console.log();
     productAndCartTotal(
       e.target.parentElement.previousElementSibling.innerText,
       e.target.parentElement.parentElement.parentElement
     );
   } else if (e.target.className === "removeProduct") {
     e.target.parentElement.parentElement.parentElement.remove();
     cartTotal();
   }
 };

 const productAndCartTotal = (e, b) => {
   let productPrice = b.children[1].children[0].firstChild.innerText;
   b.children[4].innerText = (e * productPrice).toFixed(2);
   cartTotal();
 };

 const cartTotal = () => {
   let productTotalDivs = document.querySelectorAll(".productLinePrice");
   let subTotal = 0;
   productTotalDivs.forEach((e) => {
     subTotal += +e.innerText;
   });
   let taxTotal = (tax * subTotal).toFixed(2);
   let overAllTotal = parseFloat(subTotal + taxTotal + shipping).toFixed(2);

   document.getElementById("subTotal").children[1].innerText =
     subTotal.toFixed(2);
   document.getElementById("tax").children[1].innerText = taxTotal;
   document.getElementById("shipping").children[1].innerText = subTotal
     ? shipping
     : 0.0;
   document.getElementById("overallTotal").children[1].innerText = overAllTotal;
 };







