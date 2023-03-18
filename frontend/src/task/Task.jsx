import React,{useState,useEffect} from "react";
import './Task.css';
import del from '../assets/delete-dark.png';
import expand from '../assets/expand-dark.png'
//import { checkTask, deleteTask } from "../services/UserService.js";

//import { useGetTodosQuery } from "../features/api/apiSlice";

function Task(props){

    // const {
    //     data: todoData,
    //     isLoading,
    //     isSuccess,
    //     isError,
    //     error
    // } = useGetTodosQuery();
        const {
        data: todoData,
        isLoading,
        isSuccess,
        isError,
        error
    } = [[],false,true,false,null];
    const task = props.data;
    const taskClassName = props.data.isCompleted? "task-complete":"task";

    const [display, setDisplay] = useState(false);
    const [dateValue, setDateValue] = useState(["Today", "12PM"]);
     
    const handleExpand = ()=>{
        setDisplay(!display);
    }



    useEffect( ()=>{
        console.log(task.dueDate);
        let date = task.dueDate.split("T");
        if(  parseInt( date[1].split(":")[0] ) < 12){
            date[1] += " AM";
        } else {
            let newDate =  date[1].split(":");
            newDate[0] = parseInt(newDate[0]) - 12;
            date[1] = newDate[0]+ ":" + newDate[1];
            date[1] += " PM";
        }
        setDateValue([date[0], date[1]]);
    
      },[]);  
    
    // const handleTaskCompletion = (task) => {
    //     //event.preventDefault();
    //     let data = {"_id":task._id, "isCompleted": !task.isCompleted}
    //     checkTask(data).then(res=>{ 
    //         console.log(res);
    //         props.onChange();
    //     });
    // }

    // const handleDelete = () =>{
    //     let data = {"_id":task._id}
    //     deleteTask(data).then(res=>{
    //         console.log(res);
    //         props.onChange();
    //     })
    // }

    let test = (str)=>{
        console.log(str);
    }


    let content;
    if (isLoading) {
        content = <p>Loading...</p>
    } else if (isSuccess) {
        console.log("TDT: "+ JSON.stringify(todoData, null, 2));
        content = todoData.map((todo) => {
            return (
                <article key={todo._id}>
                    <div>
                        {todo.taskName}
                    </div>
                </article>
            )
        })
    } else if (isError) {
        content = <p>{error}</p>
    }

    return(

        <div>
            <div className={taskClassName} id={task._id}>
        <div>
            {/* {task.isCompleted && <input type="checkbox" id={`done-${task._id}`} onClick= {()=>handleTaskCompletion(task)}  className="Done" defaultChecked/>} */}

            {/* {!task.isCompleted && <input type="checkbox" id={`done-${task._id}`} onClick= {()=>handleTaskCompletion(task)}  className="Done"/>} */}
        </div>

        <div className="TaskInformation">
            <div>Task: {task.taskName} </div>
            {display && <div className="Details" id={`details-${task._id}`} data-status="close">
                <div> Desc: {task.taskDesc}</div>
                <div> Due Date: {dateValue[0] + " at " + dateValue[1]}</div>  
            </div>}
        </div>

        <div>
            {/* <img id={`delete-${task._id}`} className="Delete" onClick= {()=>handleDelete()} height="24px" width="24px" src={del} /> */}
        </div>

        <div>
            <img id={`expand-${task._id}`} className="Expand" onClick={()=>handleExpand()} height="24px" width="24px" src={expand} />
        </div>
    </div>
        </div>

        

    );
}

export default Task;