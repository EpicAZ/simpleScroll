// function _removeBottomBorder() {
//     var s=document.getElementsByName("tabB");
//     var i=0;
//     for(i;i<s.length;i++)
//     {
//       s[i].style.borderBottom="none";
//     }
// }

function _clickToJump(data) {
    var string;
    if(data.innerHTML==="first" || data.innerText==="first")
    {
        string="firstElement";
    }
    else if(data.innerHTML==="second" || data.innerText==="second")
    {
        string="secondElement";
    }
    else if(data.innerHTML==="third" || data.innerText==="third")
    {
        string="thirdElement";
    }
    var s=document.getElementById(string);
    s.scrollIntoView(true);
}