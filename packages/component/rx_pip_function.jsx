
export default function rx_pip_function(e){
   
  if("pictureInPictureEnabled" in document){
    
     if(document.pictureInPictureElement){
         document.exitPictureInPicture().catch(err=>{
           console.log(err)
         })
         return;
     }
    e.target.parentElement.parentElement.children[0].requestPictureInPicture()
    .catch(err=>{
      console.log(err)
    })
   
  }
  else{
    alert("not supported in browser !!")
  }
}