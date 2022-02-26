// @--PLEASE NOTE THESE CODE MUST NOT BE EDITTED 
// EXCEPT WITH FULL UNDERSTANDING OF THE CODE

// @--NOTE IF CODE MUST BE ADDED THE CODE SHOULD BE ADDED TO THE BOTTOM 
// OR AT THE END OF ANY PARENT-Element

// THESE IS A SIMPLE VIDEO PLAYER WHICH CAN PLAY WITH THE SAME VIEW IN ANY BROWSER

// @--NOTE THESE IS THE ENTRY POINT TO THE RX_VIDEO PLAYER LIBRARY

import style from "./rc_videoplayer.module.css"
import play from "./videoplayer-icons/play_icon.svg" 
import fullscreen from "./videoplayer-icons/fullscreen.svg";
import loop from "./videoplayer-icons/loop_icon.svg";
import speaker from "./videoplayer-icons/volume_speaker_icon.svg"
import download from "./videoplayer-icons/download.svg";
import fast_forward from "./videoplayer-icons/fast_forward (2).svg";
import pip from "./videoplayer-icons/pip.svg"
import play_function from "./component/playFunction"
import videoroll_indicate from "./component/videoroll_indicate";
import loop_func from "./component/loop_function";
import download_func from "./component/download_func";
import videorx_ended from "./component/videorx_ended"
import volume_range_rx from "./component/volume_range_rx"
import onload_setting_default from "./component/onload_setting_default"
import rx_pip_function from "./component/rx_pip_function"
import {rx_display_children,rx_loss_children} from "./component/rx_display_children"
import rx_fast_forward from "./component/rx_fast_forward";
import rx_speed_content from "./component/rx_speed_content"
import rx_updatetime from "./component/rx_updatetime";
import rx_onload_function from "./component/rx_onload_function"
import rx_fullscreen from "./component/rx_fullscreen"
import rx_speed_context from "./component/rx_speed_context"
import rx_back_forward from "./component/rx_back_forward";
import Rx_keypress_function from "./component/rx_keypress_function";


 export default function rxVideoplayer(props){

   const rx_speed_ray=["0.5x","0.75x","1.0x","1.50x","2.0x","4.0x"] 

  Rx_keypress_function()

    function rx_cancle_pop(e){
       e.target.parentElement.setAttribute("style","display:none")
        }
        document.querySelector("body").onclick=function(e){
          
        if(e.target.parentElement.className==="rc_videoplayer_video_container__2BUPG" || e.target.parentElement.parentElement.className==="rc_videoplayer_video_container__2BUPG"){ 
              if(e.target.className==="rc_videoplayer_rx_double_click__2N2LD"){
            e.target.parentElement.parentElement.setAttribute("data",new Date().getTime())
              }
              else if(e.target.className==="rc_videoplayer_video__3jkLa"){
                e.target.parentElement.parentElement.setAttribute("style","outline:none")
                e.target.parentElement.setAttribute("data",new Date().getTime())
                 }  
                 else{
                  e.target.parentElement.parentElement.setAttribute("style","outline:none")
                 }
           }
        }
           
     
         
          const rx_preload=()=>{

            if(props.preload){
              if(props.preload==="auto"){
                return("auto")
              }
              else if(props.preload==="metadata"){
                   return("metadata")
              }
               else if(props.preload==="none"){
                 return("none")
               }
            }
              else{
                return ("metadata")
              }
            }
      
 
            //assigning variable to src of video from props
            let rx_src_variable=[...props.src]
     
    
     
    return(
         <div className={style.video_container} onMouseEnter={rx_display_children} onMouseLeave={rx_loss_children} onLoadedData={onload_setting_default}>
            <video 
              controls
               className={style.video}
               poster={props.poster?props.poster:""}
                 onLoadedData={rx_onload_function}
                   muted={props.muted==="true"?true:false}
                    autoPlay={props.autoplay==="true"?true:false}
                      playsInline={props.playinline==="true"?true:false}
                         loop={props.loop==="true"?true:false} 
                           preload={rx_preload()} data="" 
                             onTimeUpdate={rx_updatetime}
                               onContextMenu={(e)=>{e.preventDefault()}} onMouseEnter={rx_display_children}  
                                 onEnded={videorx_ended} >
                 
                                {rx_src_variable.map(e=><source key={rx_src_variable.indexOf(e)+"rxsrc"} src={e.src} type={e.type}></source>)}
                          your browser does not support these video tag
                     </video>
       <div className={style.controls_container}>
           <div className={style.img_container}>
               <img alt="" onClick={play_function} title="play/pause" onContextMenu={(e)=>{e.preventDefault()}} className={style.respond} src={play}></img>
                  </div>
              
           <div className={style.volume_container}>      {/* start of range and volume section */} 
               <div className={style.start_time}>00:00</div>
                    <div  onContextMenu={(e)=>{e.preventDefault()}} className={style.range_container}>
                        <input  onContextMenu={(e)=>{e.preventDefault()}} type="range" onChange={videoroll_indicate}></input>
                             <span className={style.rx_range_guage}></span>
                                </div>
                                    <div className={style.end_time}>00:00</div>
                    
                                      <div className={style.volume_section}>
                                          <img alt="" src={fullscreen} title="fullscreen" className={style.rx_fullscreen_icon} onContextMenu={(e)=>{e.preventDefault()}} onClick={rx_fullscreen}></img>
                                      <div className={style.new_rx_volume_cont}>
                                  <img alt="" title="volume" src={speaker} className={style.volume_icon_rx}  onContextMenu={(e)=>{e.preventDefault()}}></img>
                               <div className={style.rx_volume_container}><input type="range"  onChange={volume_range_rx}  onContextMenu={(e)=>{e.preventDefault()}} className={style.volume_range_rx}></input></div>
                          </div>
                    </div>
              </div>     {/* end of range and volume section */}
       </div>

                    <div className={style.container_top_icons}>
                       <div className={style.name_container}>
                          <span className={style.videorx_name}></span>
                             </div>  

                                  <div className={style.img_container_download}>
                                     <div className={style.rx_speed_container}>
                                        <span onClick={rx_speed_context}>Speed 1.0x</span>
                                           <div className={style.rx_speed_sub_context}>
                                    
                                               { rx_speed_ray.map(e=><span key={e} onClick={rx_speed_content}>Speed {e}</span>)}
                                    
                                                 </div>
                                                    </div>
                                                       <img alt="" title="loop" className={style.top_icons_loop}  onContextMenu={(e)=>{e.preventDefault()}}  onClick={loop_func} src={loop} style={{width:"2em"}}></img>
                                                         {props.download==="true"?<img alt="" title="download" className={style.top_icons_loop}  onContextMenu={(e)=>{e.preventDefault()}} onClick={download_func} src={download} style={{width:"1.6em"}}></img>:''}
                                                            </div>  
                                                               </div>
                    {/* below div is for download reading */}
                    <div className={style.download_quotation}><div></div><span onClick={rx_cancle_pop} className={style.rx_pop_out}>x</span></div>
                        {/* below div is for fast forward */}
                    
                          <div className={style.rx_backward_div}  onContextMenu={(e)=>{e.preventDefault()}}>
                             <div onDoubleClick={rx_back_forward} className={style.rx_double_click} onContextMenu={(e)=>{e.preventDefault()}}></div>
                               <img alt="" src={fast_forward}></img>
                                 </div>

                          
                          <div className={style.rx_fortforward_div} onContextMenu={(e)=>{e.preventDefault()}}>
                            <div onDoubleClick={rx_fast_forward} className={style.rx_double_click} onContextMenu={(e)=>{e.preventDefault()}}></div>
                              <img alt="" src={fast_forward}></img>
                                </div>


               <div className={style.rx_roller}>
                  <span className={style.rx_roller_item}></span>
                     </div> 

               {  
                 props.pip==="true"?
                   <div className={style.rx_pip_container}>
                     <img onContextMenu={(e)=>{e.preventDefault()}} title="picture in picture" onClick={rx_pip_function} src={pip} alt="" className={style.rx_pip_icon}></img>
                       </div> :'' 
                         }   
         </div>
    )
}
