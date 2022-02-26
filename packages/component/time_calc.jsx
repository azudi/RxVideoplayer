export default  function calc_time(time){
    const rx_new_date=new Date(time*1000)
     const rx_new_date_calc=rx_new_date.toISOString().substring(11,19)
       if(rx_new_date_calc.substring(0,2)==="00"){
         return (rx_new_date_calc.substring(3,rx_new_date_calc.length))
       }
     return(rx_new_date_calc)
}
