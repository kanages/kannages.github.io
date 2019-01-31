/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
        
        
function myFunction(x){
    x.classList.toggle("change");
}

/*when user click on the button, toggle between hiding and showing the dropdown content*/
function myFunction3(){
    document.getElementbyId("myDropdown").classList.toggle("show");
    
/*Close the dropdowwn if the user click outside of it*/
window.onclick = function(event){
    if(!event.target.matches('.dropbtn')){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for(i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classlist.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
  };
}
 
