import React  from 'react';

export class TopUi extends React.Component{
    constructor(props){
        super(props);
        this.searchQuery=this.searchQuery.bind(this);
    }
    searchQuery(e){
        e.preventDefault();
        console.log('inside ui',this.refs);
         this.props.onQuery({
             API_KEY : this.refs.API_KEY.value,
             q       : this.refs.q.value
         })
   
    }

    
    render(){
        return <div className="inputs">
                    <form>
                        <p><label >API KEY </label><input type="text" ref="API_KEY" defaultValue={this.props.API_KEY}/> <a href="https://developers.google.com/places/web-service/get-api-key">How to get it?</a></p>

                        <p><label>Search for </label><input type="text" ref="q" defaultValue={this.props.q}/>
                            <button href="#" onClick={this.searchQuery}>Search</button>
                        </p>
                    </form>
               </div>
    }
}
