function toggle(ID){
    var element = document.getElementById(ID);
    if(element.style.display === "none"){
        element.style.display = "block";
    }else{
        element.style.display = "none";
    }
}

// document.addEventListener("DOMContentLoaded", function() {
//     const classes = ['disproves', 'faded', 'hate', 'shrug', 'stop', 'stranger', 'successful', 'flight'];
//     const randomIndex = Math.floor(Math.random() * classes.length);
//     const randomClass = classes[randomIndex];
    
//     const divElement = document.getElementById('page-bg');
//     divElement.classList.add(randomClass);
// });