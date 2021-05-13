import './App.css';
import { Provider } from 'react-redux';
import configureStore from './store';
import Post from './components/Post';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Post />
      </div>
    </Provider>
  );
}

export default App;
