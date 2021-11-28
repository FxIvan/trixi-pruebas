import React from 'react'
import './App.css';
import {Home} from './pages/Home/home'
import {NavBar} from './pages/NavBar/navbar'
import {Product} from './pages/Products/products'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer';
function App() {
    return(
    <div>
            <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<Product/>}/>
                    <Route path='product' element={<Home/>}/>
                    <Route path='/product/:category' element={<Home/>}/>
                    <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
                </Routes>
            </BrowserRouter>
    </div>
    )
}

export default App;
