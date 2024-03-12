let calculation=()=>{
    let bp=parseInt(document.getElementById("basicid").value);
    let hra=document.getElementById("hraid").value=bp*(10/100);
    let da=document.getElementById("daid").value =bp*(5/100);
    let travel=document.getElementById("travelid").value=bp*(15/100);
    let pf=document.getElementById("pfid").value=bp*(15/100)
hra=parseInt(hra);
da=parseInt(da);
travel=parseInt(travel);
pf=parseInt(pf);
let gross=document.getElementById("grasid").value=bp+hra+da+travel+pf;
gross=parseInt(gross)
let net=document.getElementById("netid").value=gross-pf;
net=parseInt(net)
document.getElementById("one").innerHTML=`<tr><td>${bp}</td>
<td>${hra}</td>
<td>${da}</td>
<td>${travel}</td>
<td>${pf}</td>
<td>${gross}</td>
<td>${net}</td>
</tr>`
}