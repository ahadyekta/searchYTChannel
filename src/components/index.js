import React from 'react'
import Top from './containers/topContainer'
import Body from './containers/bodyContainer'
export class App extends React.Component {
    render(){
        return <div>
                   <Top />
                   <Body />
               </div>
    }
}