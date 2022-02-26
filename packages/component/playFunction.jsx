
import pause from "../videoplayer-icons/pause.svg"
import play from "../videoplayer-icons/play_icon.svg"


export default function play_function(e){

      if(e.target.parentElement.parentElement.parentElement.children[0].paused){
        e.target.src=pause 
        e.target.parentElement.parentElement.parentElement.children[0].currentTime= (e.target.parentElement.parentElement.children[1].children[1].children[0].value/100)*e.target.parentElement.parentElement.parentElement.children[0].duration
        e.target.parentElement.parentElement.parentElement.children[0].play()
      
      }
      else{
        e.target.src=play
        e.target.parentElement.parentElement.parentElement.children[0].pause()
      }
     
}