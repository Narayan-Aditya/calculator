let string = "";
// The buttons variable select all elements which class is 'button'
let buttons = document.querySelectorAll('#but');

//Make a array to store all the values of button into the list

Array.from(buttons).forEach((touch)=>{
    touch.addEventListener('click', (e)=>{
        if(e,target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e,target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
