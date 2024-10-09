function anim() {
    console.clear();
    let iwidth = window.innerWidth;
    let owidth = window.innerWidth;
    console.log(iwidth);
    console.log(owidth);


}
let btn = document.getElementById("first-button");
// btn.addEventListener("click",function(){
//     let sdow = window.open("https://www.google.com","_blank","width=500px,height=500px,top=0,left=0");
// });
btn.addEventListener("dblclick",function(){
    let sdow = window.open("https://www.google.com","_blank","width=500px,height=500px");
    sdow.moveTo(500,500);
});



