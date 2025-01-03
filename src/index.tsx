import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import "normalize.css";
import App from './components/App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);