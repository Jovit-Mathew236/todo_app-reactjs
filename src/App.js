import React from 'react';
import './App.css';
import { useState } from 'react';
import SimpleTabs from './Components/simple-tabs';
import './Components/tab.css';

function App() {
  const time = new Date().toLocaleTimeString();
  var d = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  const [removedToDos, setRemovedToDos] = useState([]);

  const addTodos = () => {
     // add task if task length is > 0
    if (toDo.length > 0){
       setToDos([...toDos, { id: Date.now(), Text: toDo, status: false }]);
      // making the input field to blank, after adding task
      setToDo("");
    }
   
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addTodos()
    }
  }

  function themeChange() {
    document.body.classList.toggle("dark-mode")
  }


  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div id='dropdown' class="fas fa-cog">
        <div className="dropdown-content"><i id='lightMode' onClick={themeChange} class="fas fa-adjust"></i></div> </div>

      <div className="headings">
        <div className="subHeading">
          <br />
          <h2>Whoop, it's {days[d.getDay()]} 🌝 ☕ </h2>
        </div>
        <div className="input">
          <input value={toDo} onChange={(e) => setToDo(e.target.value)} onKeyPress={handleKeyPress} type="text" placeholder="🖊️ Add item..." />
          <i onClick={addTodos} className="fas fa-plus"></i>
        </div>
      </div>
      <div className="todos">


        <SimpleTabs Active={toDos.map((obj) => {

          return (
            <div className="todo">
              <div className="line"></div>
              <div className='dateDiv'>
                <span className="datenow">{d.toDateString()} {time}</span>
                <div className="left">

                  <input onChange={(e) => {
                    /*console.log(e.target.checked);
                    console.log(obj);*/
                    setToDos(toDos.filter(obj2 => {
                      if (obj2.id === obj.id) {
                        obj2.status = e.target.checked
                        return obj2
                      }
                      return obj2
                    }))
                  }} value={obj.status} type="checkbox" name="" />

                  <p className={obj.status ? "terms" : ""}>{obj.Text}</p>

                </div>
              </div>
              <div className="right">
                <i style={{ color: 'red' }} onClick={() => {
                  if (window.confirm("Are you sure to remove this ?")) {
                    setRemovedToDos((removedToDos) => [...removedToDos, obj]);
                    setToDos(toDos.filter(obj2 => {
                      if (obj2.id !== obj.id) {
                        return obj2;
                      }
                      return null;
                    }))
                  }
                }} className="fas fa-trash"></i>
              </div>
            </div>
          )
        })}



          Completed={toDos.map((obj) => {

            if (obj.status) {

              return (
                <div className="todo2">
                  <div className="line"></div>
                  <div className='dateDiv'>
                    <span className="datenow">{d.toDateString()} {time}</span>
                    <div className="left">

                      <p>{obj.Text}</p>
                    </div></div>
                  <div className="right">
                    <i style={{ color: 'red' }} onClick={() => {
                      setRemovedToDos((removedToDos) => [...removedToDos, obj]);
                      setToDos(toDos.filter(obj2 => {
                        if (obj2.id !== obj.id) {
                          return obj2;
                        }
                        return null;
                      }))

                    }} className="fas fa-trash"></i>
                  </div>
                </div>
              )
            }
            return null
          })}

          Removed={removedToDos.map((obj) => {
            return (
              <div className="todo3">
                <div className="line">
                </div>
                <div className='dateDiv'>
                  <span className="datenow">{d.toDateString()} {time}</span>
                  <div className="left">

                    <p id='term' >{obj.Text}</p>
                  </div></div>
                <div className="right">
                  <i style={{ color: 'green' }} onClick={() => {
                    setRemovedToDos(removedToDos.filter(obj2 => {
                      if (obj2.id !== obj.id) {
                        return obj2
                      }
                      return null
                    }));
                    setToDos([...toDos, obj])
                  }} className="fas fa-undo-alt"></i>
                </div>
              </div>

            )
          })} />

      </div>
    </div>
  );
}

export default App;
