import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
// Module 45_5 == রিভিশন চেকলিস্ট
function App() {
  return (
    <div className="App">
      <Article></Article>
      <div className="blogs">
        <Blog title="First" author="Arif uz zaman"></Blog>
        <Blog title="Second" author="Sumaiya Alomgir"></Blog>
        <Blog title="Third" author="Sahera Jinan"></Blog>
      </div>
      <div className="mobile">
        <Mobile></Mobile>
      </div>
      <h1>ToDo from JSONPlaceholder</h1>

      <Todo></Todo>
    </div>
  );
}
function Article() {
  const headStyle = {
    fontSize: "35px",
    color: "red",
    marginBottom: "0px",
  };
  return (
    <div>
      <article className="article">
        <h3 style={headStyle}>Article</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          sequi accusantium cum excepturi unde animi inventore perspiciatis
          repudiandae ab quas.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Voluptatum sequi accusantium cum excepturi unde animi inventore
          perspiciatis repudiandae ab quas.
        </p>
      </article>
    </div>
  );
}
function Blog(props) {
  return (
    <div className="blog">
      <h3>Blog: {props.title}</h3>
      <h3>Author: {props.author}</h3>
    </div>
  );
}
function Mobile() {
  const [charge, setCharge] = useState(100);
  const handleBattery = () => {
    if (charge > 0) {
      const newCharge = charge - 10;
      setCharge(newCharge);
    }
  };
  return (
    <div>
      <h2>Battery {charge}</h2>
      <button className="battery-btn" onClick={handleBattery}>
        Battery Down
      </button>
    </div>
  );
}
function Todo() {
  const [todos, setTodo] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);
  return (
    <div>
      <h2>TODO list: {todos.length}</h2>
      <div className="todos-area">
        {todos.map((doto) => (
          // console.log(doto.title);
          <User
            title={doto.title}
            id={doto.id}
            completed={doto.completed}
          ></User>
        ))}
      </div>
    </div>
  );
}
function User(props) {
  return (
    <div className="users">
      <h3>Title: {props.title}</h3>
      <h3>
        ID: {props.id} , Completed: {props.completed}
      </h3>
    </div>
  );
}
export default App;
