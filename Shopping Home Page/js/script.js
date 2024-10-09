let scrollTopButton = document.getElementById("scroll_top");
window.onscroll = function(){
    scrollToTop();
}
function scrollToTop(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrollTopButton.style.display = "block";
    }else{
        scrollTopButton.style.display = "none";
    }
}

scrollTopButton.addEventListener("click",function(){
    document.body.scrollTop = "0";
    document.documentElement.scrollTop = "0";
});

let subscribeInput = document.getElementById("subscribe_input");
function onFocus(element){
    element.style.background = "black";
};
function onInput(element){
    let text = element.value;
    document.getElementById("tectChange").innerHTML = text;
}
let text1 = document.getElementById("onChange");
function onChange(element){
    let b = element.value;
    text1.innerHTML = b;
}
function onSubmit(){
    n = subscribeInput.value;
    console.log(n);
    alert("Hy mr" + n);
}