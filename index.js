const ceci=document.querySelector('[celcius]');
const fahren=document.querySelector('[fahrenhite]');

ceci.addEventListener('input',()=>{
    let val=ceci.value;
    convert(val);
})
function convert(val){
    let ans=(9/5)*val + 32;
    fahren.value=ans;
}