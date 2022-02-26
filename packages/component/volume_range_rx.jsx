  import muted from  "../videoplayer-icons/mute_sound_speaker.svg"
  import speaker from  "../videoplayer-icons/volume_speaker_icon.svg"

export default function volume_range_rx(e){
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].volume=e.target.value/100
      if(e.target.value<1){
        e.target.parentElement.parentElement.children[0].src=muted
          e.target.parentElement.parentElement.children[0].setAttribute("style","width:1em")
    } 
    else{
        e.target.parentElement.parentElement.children[0].src=speaker
          e.target.parentElement.parentElement.children[0].setAttribute("style","width:1.3em")
    }   
}