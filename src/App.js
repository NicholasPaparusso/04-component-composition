import logo from './logo.svg';
import './App.css';
import './assets/style.css';
import Card from './components/Card';
function App() {
  return (
    <div className="App">
      <div>
            <h1>Todos</h1>
            
            <Card>
              <p>Please note: Below are just the most important todos - feel free to add more.</p>
            </Card>
            
            <ul>
              <li className="todo">
                <Card>
                  <h2>Learn React</h2>
                  <p>Learn React fundamentals & explore core concepts</p>
                </Card>
              </li>
              <li className="todo">
                <Card>
                  <h2>Practice React</h2>
                  <p>Apply your knowledge & build demo projects</p>
                </Card>
              </li>
            </ul>
        </div>
    </div>
  );
}

export default App;
