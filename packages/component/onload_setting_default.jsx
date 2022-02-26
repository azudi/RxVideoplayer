import calc_time from "./time_calc"

export default function onload_setting_default(e){  
      
     e.target.parentElement.children[2].children[0].children[0].innerHTML=e.target.children[0].src.replace(/%20/g,"-").substring(e.target.children[0].src.lastIndexOf("/")+1,e.target.children[0].src.lastIndexOf("."))
    e.target.parentElement.children[1].children[1].children[1].children[0].value=0;
    e.target.parentElement.children[1].children[1].children[3].children[1].children[1].children[0].value=100;
    e.target.parentElement.children[1].children[1].children[2].innerHTML=calc_time(e.target.duration)
 
}