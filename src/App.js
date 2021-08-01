// import './App.css';

import Counter from './components/Counter';
import ParentChild from './components/ParentChild';

function App() {
  return (
    // orig className="App"
    <div className="flex flex-col space-y-5 bg-purple-400 py-10">
      <Counter />
      <ParentChild />
    </div>
  );
}

export default App;
