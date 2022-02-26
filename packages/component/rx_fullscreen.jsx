import fullscreen from "../videoplayer-icons/fullscreen.svg"
import fullscreen_exit from "../videoplayer-icons/fullscreen-exit.svg"

export default function rx_fullscreen(e){
    if(document.fullscreenElement){
        document.exitFullscreen();
        e.target.src=fullscreen
        e.target.style.fontSize="1.0em";
       e.target.title="Fullscreeen"
    }
    else if(document.webkitFullscreenElement){
        document.webkitExitFullscreen()
        e.target.src=fullscreen
        e.target.style.fontSize="1.0em";
        e.target.title="Fullscreeen"
    }
    else if(e.target.parentElement.parentElement.parentElement.parentElement.webkitRequestFullscreen()){
        e.target.parentElement.parentElement.parentElement.parentElement.webkitRequestFullscreen()
        e.target.src=fullscreen_exit
        e.target.style.fontSize="1.15em";
        e.target.title="Exit Fullscreeen"
    }
    else{
        e.target.parentElement.parentElement.parentElement.parentElement.webkitRequestFullscreen()
        e.target.src=fullscreen_exit
        e.target.style.fontSize="1.15em";
        e.target.title="Exit Fullscreeen"
    }
}