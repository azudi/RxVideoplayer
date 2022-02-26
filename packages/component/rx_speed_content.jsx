export default function rx_speed_content(e){
     let rx_playrate=Number(e.target.textContent.substring(e.target.textContent.indexOf(" "),e.target.textContent.lastIndexOf("x")))
     e.target.parentElement.parentElement.children[0].innerHTML=e.target.textContent
     e.target.parentElement.parentElement.parentElement.parentElement.parentElement.children[0].playbackRate=rx_playrate
    }