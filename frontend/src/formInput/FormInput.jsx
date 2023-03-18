import React, {useState, useRef} from "react";
import './FormInput.css';
import pin from '../assets/pin-dark.png';
import pinned from '../assets/pin.png';
//import {createUser} from '../services/UserService.js'

function FormInput(props){

    const [values, setValues] = useState({
        taskName: '',
        taskDesc: '',
        taskDate: ''
    });

    const [isPinned, setIsPinned] = useState(false);

    

    const handleTaskNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            taskName: event.target.value,
        }));
    };

    const handleTaskDescInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            taskDesc: event.target.value,
        }));
    };

    const handleTaskDateInputChange = (event) => {
        event.persist();

        setValues((values) => ({
            ...values,
            taskDate: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(values.taskName && values.taskDesc && values.taskDate) {
            let data = { "taskName":values.taskName, "taskDesc":values.taskDesc, "dueDate":values.taskDate, isCompleted: false, isDeleted: false };
            setValues( (values)=>({
                taskName: "",
                taskDesc: "",
                taskDate:""
            }) );

            console.log(data);
            // createUser(data).then(res=>{
            //     console.log(res);
            //     if(!isPinned){
            //         props.onChange();
            //     } else {
            //         props.onToggle();
            //     }
            // });
        }
    }

    return(

        <div className="form-container" id="form-container">
            <form  id="form" onSubmit={handleSubmit}>
                <div className="inputform">
                    <div>
                        <label htmlFor="taskTitle">Task</label><br/>
                        <input type="text" value={values.taskName}  id="taskTitle" placeholder="Task..." name="taskTitle" onChange={handleTaskNameInputChange} required/>
                        <br/>
                    </div>
                    <div>
                        <label htmlFor="taskDesc">Description</label><br/>
                        <input type="text" value={values.taskDesc} id="taskDesc" placeholder="Description..." name="taskDesc" onChange={handleTaskDescInputChange} required/><br/>
                    </div>

                    <div className="taskDate">
                        <label htmlFor="taskDate">Deadline</label><br/>
                        <input type="datetime-local" value={values.taskDate} name="taskDate" id="taskDate" onChange={handleTaskDateInputChange} required  />
                        <br/>
                    </div>
                    <div>
                        {!isPinned && <img className="pinTrue" id="pin" src={pin} onClick={()=>{setIsPinned(!isPinned)}} height="24px" width="24px"/>}
                        {isPinned  && <img className="pinTrue" id="pin" src={pinned} onClick={()=>{setIsPinned(!isPinned)}} height="24px" width="24px"/>}
                    </div>
                </div>
                <div className="submit-button">
                    <input type="submit" value="Add"/>
                </div>

            </form>
        </div>

    );
}

export default FormInput;