import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from "./store/store";
import LayoutLogic from "./App";
import './index.css'

ReactDOM.render(<Provider store={store}>
    <LayoutLogic/>
</Provider>, document.getElementById('root'));