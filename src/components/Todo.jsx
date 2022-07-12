import React from 'react'
import { useState } from 'react'
import {v4 as uuid} from "uuid"
import { Timer } from './Timer';

export const Todo = () => {
    const [task, setTask] = useState("");
    const [data, setData] = useState([]);

    const handleTask=(e)=>{

        setTask(e.target.value);
       
    }

    const handleAdd=()=>{

        let payload = {

            taskName:task,
            key: uuid()
        }

        setData([...data,payload]);
        setTask("");
    }

    const handleComplete=(key)=>{

        let newtask = data.filter((item,index)=>{

            if(item.key===key){

                item.taskName="Completed Successfully"
            }

            return  item;
        })


        setData(newtask)

    }


  return (
    <>
        <div>
            <input type="text" placeholder='Enter task....' value={task} onChange={handleTask}/>
            <button onClick={handleAdd}>Add Task</button>
        </div>
        <div>
            <h2>Tasks</h2>
                {

                    data.map((item,index)=>{

                        return (
                            <div style={{border:"1px solid grey",width:"30%",marginLeft:"35%"}} key={item.key} >
                               
                                    <div>
                                        <h3>{item.taskName}</h3>

                                        <button onClick={()=>handleComplete(item.key)}>Complete</button>

                                    </div>
                                    <Timer itemIndex={index} data={data}/>
                                
                            </div>
                        )
                    })
}
        </div>
    </>
  )
}
