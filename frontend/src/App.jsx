import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Metamask from './metamask/Metamask';
import CreateTasks from './createTasks/CreateTasks';
import FormInput from './formInput/FormInput';

import TaskContainer from './taskContainer/TaskContainer';

function App() {

  const [isCreateTaskClicked, createTaskClicked] = useState(false);

  const [allTasks, setAllTasks] = useState([]);

  const [toggleRender, setToggleRender] = useState(false);

  function handleCreateTaskClicked() {
    createTaskClicked(!isCreateTaskClicked);
  }

  function handleToggleTrigger() {
    setToggleRender(!toggleRender)
  }

  // useEffect( ()=>{
  //   getAllTasks()
  //     .then((resp)=>{ 
  //         setAllTasks(resp);
  //         console.log(resp);
  //         console.log(allTasks);
  //       });

  // },[isCreateTaskClicked, toggleRender ]);  
  
  return (
    <div className="app">
      <h1>0xAbility DApp</h1>
      <h1><Metamask /></h1>
      {!isCreateTaskClicked && <CreateTasks onChange={handleCreateTaskClicked} />}
      {isCreateTaskClicked && <FormInput onChange={handleCreateTaskClicked} onToggle={handleToggleTrigger}/>}
      <TaskContainer onChange={handleToggleTrigger} tasks={allTasks}/>
        <div>
 
        </div>
    </div>
  );
}

export default App;
