 
  
  export default function download_func(event){
    let videoSrc= event.target.parentElement.parentElement.parentElement.children[0].children[0].src;

     let download_prop="";
     event.target.parentElement.parentElement.parentElement.children[3].children[0].innerHTML="downloading...."
    


       async function downloadWithProgress() {
        event.target.parentElement.parentElement.parentElement.children[3].setAttribute("style","display:block")
         const startTime = new Date().getTime();
       
         let request = new XMLHttpRequest();
       
         request.responseType = "blob";
         request.open("get",videoSrc, true);
         request.send();
       
         request.onreadystatechange = function () {
           if (Number(this.readyState) === 4 && Number(this.status) === 200) {
             const imageURL = window.URL.createObjectURL(this.response);
   
             const anchor = document.createElement("a");
             anchor.href = imageURL;
             anchor.download =videoSrc.replace(/" "/g,"/").substring(videoSrc.lastIndexOf("/"),videoSrc.length)
             anchor.click();
           }
         };
       
         request.onprogress = function (e) {
           const percent_complete = Math.floor((e.loaded / e.total) * 100);
       
           const duration = (new Date().getTime() - startTime) / 1000;
           const bps = e.loaded / duration;
       
           const kbps = Math.floor(bps / 1024);
       
           const time = (e.total - e.loaded) / bps;
           const seconds = Math.floor(time % 60);
           const minutes = Math.floor(time / 60);
       
       
             download_prop=`${percent_complete}% - ${kbps} Kbps - ${minutes} min ${seconds} sec remaining`
               
             event.target.parentElement.parentElement.parentElement.children[3].children[0].innerHTML=download_prop
         };
       }
       downloadWithProgress()
      
      
     // e.target.parentElement.parentElement.parentElement.children[3].innerHTML="downloading please wait..."   
  }