import './App.css';
import Body from './components/Body';
import NavBar from './components/NavBar';

const tasks = [
  {
    id:0,
    title:"Sleep",
    Desc:"Sleep Only."
  },
  {
    id:2,
    title:"Sleep More",
    Desc:"Sleep More Only."
  },
  {
    id:3,
    title:"Keep Sleeping",
    Desc:"Slept so cant write description."
  }
]

function App() {
  return (
    <div className="max-w-3xl m-auto  border-[1px] border-black">
    <NavBar/>
    <Body tasks={tasks}/>
    </div>
  );
}

export default App;
