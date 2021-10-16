import react from "react";
import { Animals } from "./Animals";

const Searchbox=({searchfield,searchChange})=>{
    return(
    <div className="pa2 tc">
        <input className="pa3 ba b--green  bg-lightest-blue" type="search" placeholder="Search Animals" onChange={searchChange}/>

    </div>
    );
};

export default Searchbox;