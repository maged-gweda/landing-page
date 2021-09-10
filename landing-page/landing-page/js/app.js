//declare global variables
const bar =document.getElementById("nav");
//

//




//declare functions.
function createNavigationBar(){
    for (let i = 0; i < 4; i++) {
        const navBotton = document.createElement("li");
        navBotton.textContent = "section " +(i+1);
        navBotton.className="navButton";
        navBotton.addEventListener("click",function(){
           // removeBackground();
            document.getElementById("section"+(i+1)).style.backgroundColor="yellow";

            document.getElementById("section" +(i+1)).scrollIntoView({behavior:"smooth"});
        });





        bar.append(navBotton);
      }
}

//add backgroung for active section and remove from nonactive section.

document.onscroll=function(){
for (let i =0; i < 4; i++){
    if (document.getElementById("section"+(i+1)).getBoundingClientRect().top<140
    &&document.getElementById("section"+(i+1)).getBoundingClientRect().bottom>140){
        document.getElementById("section"+(i+1)).style.backgroundColor="yellow";  

    }else{
        document.getElementById("section"+(i+1)).style.backgroundColor="transparent";
    }
}

};


//call function.
createNavigationBar();
