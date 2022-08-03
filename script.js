var outer_container = document.getElementById('outer-container');
var innerbutton = document.getElementById('toggle-button-inner-container');
var outerbutton = document.getElementById('toggle-button-outer-container');
var heading = document.getElementById('heading');

innerbutton.addEventListener('click' , function(){
    // innerbutton.style.marginLeft="40px";

    outerbutton.style.justifyContent='flex-end';

    innerbutton.style.backgroundColor='black';

    outerbutton.style.backgroundColor='white';
    heading.style.color='white';
    outer_container.style.backgroundColor='black';
});