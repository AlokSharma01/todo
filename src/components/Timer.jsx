import React from 'react'
import { useEffect,useState } from 'react';

export const Timer = ({itemIndex,data}) => {


    const [timer, setTimer] = useState(30);

    useEffect(() => {

        const interval = setInterval(() => {
          setTimer((timer)=> timer-1);

          if(timer==0){

            setTimer("")
            var filteredData = data.filter((item,index)=>{ itemIndex===index})
            console.log(filteredData)
            clearInterval(interval)
          }
        }, 1000);
    
        return () => clearInterval(interval);
      }, [timer]);


  return (

    <div>

        {
            timer
        }

    </div>
  )
}
