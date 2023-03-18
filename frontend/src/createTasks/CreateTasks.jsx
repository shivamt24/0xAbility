import React from "react";
import './CreateTasks.css';

function CreateTasks(props){

    return(
        <div>
            <div className="createTask" id="createTask-container">
            <div className="quote" id="quote">
                Three tasks a day, keep problems at bay!
            </div>
            <div className="createTask-button">
                <button id="createTaskButton" onClick={props.onChange} >Create Task</button>
            </div>
        </div>
        </div>

    );
}

export default CreateTasks;