let home = 0;
let guest = 0;


let insert_home = document.getElementById("home-screen");
let insert_guest = document.getElementById("guest-screen");


function add1Home(){    
    home = home+1;
    insert_home.textContent =  home;
}
function add2Home(){    
    home = home+2;
    insert_home.textContent =  home;

}
function add3Home(){   
    home = home+3;
    insert_home.textContent =  home; 

}

function add1Guest(){   
    guest = guest+1;
    insert_guest.textContent =  guest; 

}
function add2Guest(){  
    guest = guest+2;
    insert_guest.textContent =  guest; 
  

}
function add3Guest(){ 
    guest = guest+3;
    insert_guest.textContent =  guest; 
   

}

function reset(){
    home = 0;
    guest = 0;
    insert_guest.textContent = guest;
    insert_home.textContent = home;
}