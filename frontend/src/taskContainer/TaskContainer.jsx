import React,{useState} from "react";
import './TaskContainer.css';
import del from '../assets/delete-dark.png';
import expand from '../assets/expand-dark.png'
import Task from "../task/Task.jsx";

function TaskContainer(props){

    return(

        <div className="task-container">
            <div className="tasks-section" id="tasks-section">
                { true &&
                    props.tasks.map((task,index)=>{
                        return(
                            <Task  data={task} key={index} onChange={props.onChange}/>
                        );
                    })
                }
            </div>
        </div>

    );
}

export default TaskContainer;