import './App.css'
import Cart from './Cart'
import {Provider} from 'react-redux'
import store from './store'
function App() {

  return (
    <>
    <Provider store={store}>
      <Cart/>
      </Provider>
    </>
  )
}

export default App
