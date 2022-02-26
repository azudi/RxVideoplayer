export default function rx_onload_function(e){
    if(e.target.canPlayType){
  e.target.parentElement.children[6].remove()

}
else{
    alert("video does not support format")
}
}