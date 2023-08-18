import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'
 
// import {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

