import React from "react";
import CardList from "./CardList";
import { Animals } from "./Animals";
import Searchbox from "./Searchbox";
import "./index.css";
class App extends React.Component{
    constructor(){
        super();
        this.state={
            Animals: Animals,
            searchfield:"",
        }
    };
    onSearchChange=(event)=>
    {
        this.setState({searchfield:event.target.value});
        //console.log(filteredRobots);
    };
    render(){
        const filteredAnimals=this.state.Animals.filter(Animals=>{
            return Animals.name.toLowerCase().includes(this.state.searchfield.toLowerCase()); 
        });
        return(
            <div className="tc">
                <h1 className="fs-l tc fw9 6rem(96px) css-3d-text">ANIMAL KINGDOM</h1>
                <Searchbox searchChange={this.onSearchChange}/>
                <CardList Animals={filteredAnimals}/>
            </div>
        );
    }
   
};

export default App;