let count = 0;

const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

btns.forEach(function (btn){
    btn.addEventListener('click', function(e){
        const btnvalue = e.currentTarget.classList;
        if(btnvalue.contains("decrease")){
            count--;
        }
        else if(btnvalue.contains("increase")){
            count++;
        }
        else{
            count = 0;
        }
        if(count>0){
            value.style.color = "green";
        }
        if(count<0){
            value.style.color = "red";
        }
        if(count===0){
            value.style.color = "black"
        }
        value.textContent = count;
        
    });
});