import "./App.css";
import { useState } from "react";
import Header from "./components/Header/header.jsx";
import ToDoForm from "././components/ToDoForm/toDoForm.jsx";
import ToDo from "./components/ToDo/toDo.jsx";
import moonIcon from "./assets/images/icon-moon.svg";
import sunIcon from "./assets/images/icon-sun.svg";

function App() {
  const [list, setList] = useState([
    { id: 1, content: "Tomar agua", completed: true },
    { id: 2, content: "Finalizar práctica de estados y props", completed: false },
    { id: 3, content: "Tomar agua", completed: false },
    { id: 4, content: "Compartir lo aprendido con algún compañero", completed: false },
    { id: 5, content: "Probar pizza italiana", completed: false },
    { id: 6, content: "Completar el desafío del sprint 3", completed: false },
  ]);

  const [app, SetApp] = useState("app-light");
  const [filter, setFilter] = useState("all");
  const changeMode = () => {
    SetApp(app === "app-light" ? "app-dark" : "app-light");
  };

  const onClickButton = (newItem) => {
    const lastId = list.length > 0 ? list[list.length - 1].id : 0;
    const newToDo = {
      id: lastId + 1,
      content: newItem,
      completed: false,
    };
    setList([...list, newToDo]);
  };

  const filteredList = filter === "completed"
  ? list.filter(item => item.completed)
  : filter === "active"
    ? list.filter(item => !item.completed)
    : list;
 
  return (
    <div className={app}>
      <Header
        onclick={changeMode}
        class={app === "app-light" ? "mobile-light" : "mobile-dark"}
        sourceIcon={app === "app-light" ? moonIcon : sunIcon}
        checkEmptyClass={app === "app-light" ? "checkEmptyLight" : "checkEmpty"}
      />
      <ToDoForm
        inputClass={app === "app-light" ? "createTaskLight" : "createTaskDark"}
        onClick={onClickButton}
        addBtn={app === "app-light" ? "addTaskBtnLight" : "addTaskBtnDark"}
      />
        <div className="toDoList">
        {filteredList.map((toDo) => {
          return (
            <ToDo
              key={toDo.id}
              taskClass={app === "app-light" ? "taskLight" : "taskDark"}
              text={toDo.content}
            />
          );
        })}
      <div className="filterButtons">
        <button id="all" className={filter === "all" ? "activeFilter" : ""} onClick={() => setFilter("all")}>All</button>
        <button id="active" className={filter === "active" ? "activeFilter" : ""} onClick={() => setFilter("active")}>Active</button>
        <button id="completed" className={filter === "completed" ? "activeFilter" : ""} onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <div className="footer">
        <p className={app === "app-light" ? "footerLight" : "footerDark"}>Full Stack Web Developer</p><br />
        <p className={app === "app-light" ? "footerLight" : "footerDark"}>Coded by <a href="">Agustin Camelo</a> </p>
      </div>
      </div>
    </div>
  );
}

export default App;