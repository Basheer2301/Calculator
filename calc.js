let ans="";
let inp =document.querySelector("input");
let buttons=document.querySelectorAll("button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="DEL")  ans=ans.substring(0,ans.length-1);
        else if(e.target.innerHTML=="=")    ans=eval(ans);      
        else if(e.target.innerHTML==="AC")  ans="";
        else    ans+=e.target.innerHTML;
        inp.value=ans;
    });
});
