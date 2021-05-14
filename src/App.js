import './styles/main.scss'
import { Provider } from 'react-redux';
import configureStore from './store';
import PostList from './components/PostList';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className='grid-container'>
        <PostList />
        <div className='post-preview'>
          preview
        </div>
      </div>
    </Provider>
  );
};

export default App;
