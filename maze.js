

window.onload = () =>{
    let boundary = document.querySelectorAll(".boundary");
    let bound1 = document.getElementById("boundary1")
    let start = document.getElementById("start");
    let maze  = document.getElementById("maze");
    let end = document.getElementById("end");

    bound1.addEventListener("mouseover", youLose);

    boundary.forEach(b => {b.addEventListener("mouseover", youLose)});
    
    function youLose (){
        this.classList.add("youlose");
    }
    

}
 
