
import play from "../videoplayer-icons/play_icon.svg"

export default function videorx_ended(e){
    if(e.target.loop===false){
        e.target.currentTime=0
        e.target.parentElement.children[1].children[1].children[1].children[0].value=0
        e.target.parentElement.children[1].children[1].children[0].innerHTML="00:00";
        e.target.parentElement.children[1].children[0].children[0].src=play
 
    }
  
}