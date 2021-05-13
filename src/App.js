import './styles/main.scss'
import { Provider } from 'react-redux';
import configureStore from './store';
import Post from './components/Post';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className='grid-container'>
        <Post />
        <div className='post-preview'>
          preview
        </div>
      </div>
    </Provider>
  );
};

export default App;
