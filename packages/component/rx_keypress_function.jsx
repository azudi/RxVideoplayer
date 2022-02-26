 import pause from "../videoplayer-icons/pause.svg"
import play from "../videoplayer-icons/play_icon.svg"
import calc_time from "./time_calc";

export default function Rx_keypress_function(e){
    
     let rx_late=0;
     let rx_index
   document.body.onkeyup=function(e){
    let rx_keypress_container=[...document.querySelectorAll(".rc_videoplayer_video_container__2BUPG")]
  
    rx_keypress_container.forEach(element => {
      if(element.getAttribute("data")>rx_late){
          rx_late=element.getAttribute("data")
          rx_index=rx_keypress_container.indexOf(element)
      }
    });
    
       if(e.which===32 || e.keycode===32){   
            e.preventDefault()
       
          if(rx_late>1){
             if(rx_keypress_container[rx_index].children[0].paused){
                rx_keypress_container[rx_index].children[1].children[0].children[0].src=pause
                rx_keypress_container[rx_index].children[0].play()
             }
             else{
                rx_keypress_container[rx_index].children[1].children[0].children[0].src=play
                rx_keypress_container[rx_index].children[0].pause()   
             }
          }
            else{
               rx_keypress_container[0].children[1].children[0].children[0].src=pause
               rx_keypress_container[0].children[0].play()
            }
       }

  


         else if(e.which===37 || e.keycode===37){
           e.preventDefault()
      
           if(rx_late>1){
            rx_keypress_container[rx_index].children[0].currentTime = rx_keypress_container[rx_index].children[0].currentTime-15
            rx_keypress_container[rx_index].children[1].children[1].children[0].innerHTML=calc_time(rx_keypress_container[rx_index].children[0].currentTime)
            rx_keypress_container[rx_index].children[1].children[1].children[1].children[0].value=(rx_keypress_container[rx_index].children[0].currentTime/rx_keypress_container[rx_index].children[0].duration)*100  
           }
      }

      else if(e.which===39 || e.keycode===39){
         e.preventDefault()
      
         if(rx_late>1){
          rx_keypress_container[rx_index].children[0].currentTime = rx_keypress_container[rx_index].children[0].currentTime+15
          rx_keypress_container[rx_index].children[1].children[1].children[0].innerHTML=calc_time(rx_keypress_container[rx_index].children[0].currentTime)
          rx_keypress_container[rx_index].children[1].children[1].children[1].children[0].value=(rx_keypress_container[rx_index].children[0].currentTime/rx_keypress_container[rx_index].children[0].duration)*100  
         }
    }
   }


}