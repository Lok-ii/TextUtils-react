import './App.css';
import Header from './Components/Header/Header';
import TextComponent from './Components/TextComponent/TextComponent';

function App() {
  document.title = "TextUtils";
  return (
    <div className="App">
      <Header />
      <TextComponent />
    </div>
  );
}

export default App;
