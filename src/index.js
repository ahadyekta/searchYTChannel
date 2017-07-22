import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import storeFactory from './store'
import {App} from './components'

const store = storeFactory({
	channels: [],
	inputs : {
		API_KEY	: '', //for default value you can place your api key here
		q 		: ''
	},
	errors:[],
	response: null
});
render(
   	<Provider store={store}>
	   <App />
	</Provider>,
    document.getElementById("app")
)