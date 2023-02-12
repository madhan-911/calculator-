let screen=document.querySelector('screen');
string="";
const buttons=document.querySelectorAll('.b1')
buttons.forEach((button)=> {
button.addEventListener('click',(e)=>{
    if(e.target.innerHTML=='='){
        string1=string;
        string=eval(string);

        if(string1===string){
            document.querySelector('input').value="error";
        }else{
         document.querySelector('input').value=string;
        }
       }else if(e.target.innerHTML=='C'){
        string=""
        document.querySelector('input').value=string;
    }
    else{
    string=string+e.target.innerHTML;
    document.querySelector('input').value=string;
}
})
});
