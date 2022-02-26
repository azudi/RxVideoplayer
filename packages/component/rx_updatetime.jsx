import calc_time from "./time_calc";

export default function rx_updatetime(e){
    let rx_currentTime=e.target.currentTime;
    let rx_duration=e.target.duration;
              
       e.target.parentElement.children[1].children[1].children[0].innerHTML=calc_time(rx_currentTime)
       e.target.parentElement.children[1].children[1].children[1].children[0].value=(rx_currentTime/rx_duration)*100
       e.target.parentElement.children[1].children[1].children[1].children[1].style.width=`calc(${ e.target.parentElement.children[1].children[1].children[1].children[0].value}% - 15px)`
       if(Number(e.target.parentElement.children[1].children[1].children[1].children[0].value)<43){
        e.target.parentElement.children[1].children[1].children[1].children[1].style.width=`calc(${Number(e.target.parentElement.children[1].children[1].children[1].children[0].value)}% - 0px)`
      }
       e.target.parentElement.children[1].children[1].children[2].innerHTML=calc_time(rx_duration)
}