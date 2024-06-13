function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
window.onscroll = funtion(){
    if(window.scrollY > 0){
        navbar.style.background = '#eefff9';
    }else{
        navbar.style.background = 'transparent';
    }
}




