import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Third, { Second } from './First'
import AmazonButton from './Button'
import Counter from './Counter'
import Product from './Product'
import ProductBox from './ProductBox'
import TemporaryDrawer from './Drawer'
import Layout from './Layout'
import { ErrorBoundary } from 'react-error-boundary'
import Login from './components/Login'

function FallbackComponent (){
    return(<>404 please try later</>)
}

function App() {
const [isUserLoggedin,setLogin] = useState(false)

return(
<>
 <ErrorBoundary FallbackComponent={FallbackComponent}>
    {isUserLoggedin?<Layout/>:<Login setLogin={setLogin}/>}
 </ErrorBoundary>

</>
)
}

export default App
