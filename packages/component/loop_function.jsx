
  let condition_for_toggle=true
export default function loop_func(e){
    if(condition_for_toggle &&   !e.target.parentElement.parentElement.parentElement.children[0].loop){
        e.target.parentElement.parentElement.parentElement.children[0].loop=true;
        e.target.style.opacity=1
        condition_for_toggle=false
    }
    else{
        e.target.parentElement.parentElement.parentElement.children[0].loop=false;
        e.target.style.opacity=0.4
        condition_for_toggle=true
    }

}