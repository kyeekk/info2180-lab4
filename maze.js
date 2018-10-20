

window.onload = () =>{
    let boundary = document.querySelectorAll(".boundary");
    let bound1 = document.getElementById("boundary1")
    let start = document.getElementById("start");
    let maze  = document.getElementById("maze");
    let end = document.getElementById("end");
    let collision = 0;

    bound1.addEventListener("mouseover", youLose);

    boundary.forEach(b => {b.addEventListener("mouseover", youLose)});
    
    function youLose (){
        collision++;
        this.classList.add("youlose");
    }

    end.addEventListener("mouseover", youWin);
    
    function youWin(){
        if (collision < 1){
            window.alert("You win!");
        }
    }

    start.addEventListener("click", restart);

    function restart(){
        boundary.forEach(b => {b.classList.remove("youlose")});
    }

}
 
