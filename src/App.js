import './styles/main.scss'
import { Provider } from 'react-redux';
import configureStore from './store';
import PostList from './components/PostList';
import PostView from './components/PostView';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className='grid-container'>
        <PostList />
        <PostView />
      </div>
    </Provider>
  );
};

export default App;
