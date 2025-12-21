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

function FallbackComponent (){
    return(<>404 please try later</>)
}

function App() {


return(
<>
 <ErrorBoundary FallbackComponent={FallbackComponent}>
    <Layout/>
 </ErrorBoundary>

</>
)
}

export default App
