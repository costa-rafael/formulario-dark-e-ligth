const mode = document.querySelector("#mode_icon");
const form = document.querySelector("#login_form");
const body = document.querySelector("#container");


mode.addEventListener("click", ()=>{
    if(mode.classList.contains("fa-moon")){
        mode.classList.remove("fa-moon");
        mode.classList.add("fa-sun");

        form.classList.add("dark");
        body.classList.add("dark");

        return;
    }
        
        mode.classList.add("fa-moon");
        mode.classList.remove("fa-sun");

        form.classList.remove("dark")
        body.classList.remove("dark");
    
});