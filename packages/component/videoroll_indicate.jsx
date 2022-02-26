  import calc_time from "./time_calc";

export default function videoroll_indicate(e){
 let videorx_currentTime= e.target.parentElement.parentElement.parentElement.parentElement.children[0].currentTime;
  const videorx_duration=e.target.parentElement.parentElement.parentElement.parentElement.children[0].duration
  e.target.parentElement.parentElement.parentElement.parentElement.children[0].currentTime=videorx_duration*(Number(e.target.value)/100)
  e.target.parentElement.parentElement.children[0].innerHTML=calc_time(videorx_currentTime);
  e.target.parentElement.parentElement.children[2].innerHTML=calc_time(videorx_duration)
}