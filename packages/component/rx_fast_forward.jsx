   import calc_time from "./time_calc"
   
   export default function rx_fast_forward(e){
       e.preventDefault();
       
       if(e.target.parentElement.parentElement.children[0].duration>60){

         e.target.parentElement.children[1].setAttribute("style","opacity:1")
            e.target.parentElement.parentElement.children[0].currentTime=e.target.parentElement.parentElement.children[0].currentTime+20
            e.target.parentElement.parentElement.children[1].children[1].children[1].children[0].value= (e.target.parentElement.parentElement.children[0].currentTime/e.target.parentElement.parentElement.children[0].duration)*100
            e.target.parentElement.parentElement.children[1].children[1].children[0].innerHTML=calc_time(e.target.parentElement.parentElement.children[0].currentTime) 
            setTimeout(()=>{
         e.target.parentElement.children[1].setAttribute("style","opacity:0")
        },150)
         }
}