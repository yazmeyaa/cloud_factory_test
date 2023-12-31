import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import './global.scss'
import { toastsStore } from 'shared/stores/toast';

setTimeout(() => {
  const createdToast = toastsStore.addToast({
    kind: 'info',
    title: 'Не забудьте написать автору!',
    description: 'Telegram: @future_undefined'
  })

  setTimeout(() => {
    toastsStore.removeToastById(createdToast.id)
  }, 7000)
}, 1000 * 60 * 2)

setTimeout(() => {
  toastsStore.addToast({
    kind: 'info',
    title: 'CORS',
    description: 'Необходимо отключить проверку CORS в браузере чтобы данные загружались из API.'
  })
}, 2000)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter >
    <App />
  </HashRouter>
);

