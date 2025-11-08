import './App.css';
function App() {
  const date=new Date();
  function formatDate(date){
    return Intl.DateTimeFormat(
      'en-US',
      {weekday:'long'}
    ).format(date);
    }
 
  const Example03ToDoList=()=>{
    return (
      formatDate(date)
    )
 
  }
  return (
    <div className="App">
       <img src="./jerin.jpg" className="App-logo-spin" alt="logo" />
       <h1>To Do List {Example03ToDoList()}</h1>
    </div>
  );
}
 
export default App;