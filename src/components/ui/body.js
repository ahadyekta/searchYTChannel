import React from 'react'

export class BodyUi extends React.Component{
    constructor(props){
        super(props);
         this.searchQuery=this.searchQuery.bind(this);
    }

    searchQuery(e){
        e.preventDefault();
         this.props.loadMore({
             API_KEY : this.props.API_KEY,
             q       : this.props.q,
             nextPage: this.props.nextPage
         })
   
    }

    render(){
        return <div>
                    {
                        this.props.channels && Object.keys(this.props.channels).map((value,i) => {
                            return <div className="box"> 
                                <div className="left">
                                    <a href={`https://www.youtube.com/channel/${value}`}  >
                                         <img src={this.props.channels[value].thumbnails.medium.url} title={this.props.channels[value].description} />
                                    </a>
                                </div>
                                <div className="right">
                                    <h2>
                                    <a href={`https://www.youtube.com/channel/${value}`}  >
                                         {this.props.channels[value].channelTitle}
                                    </a>
                                    </h2>
                                            <p>
                                                {this.props.channels[value].description} 
                                            </p>
                                    
                                </div>
                                
                               
                                 </div>
                            
                        }
                            
                        )
                    }
                {
                    Object.keys(this.props.channels).length ?   <p> <a href="#" onClick={this.searchQuery}>Load more</a></p> : null
                
                }       
               </div>
    }
}