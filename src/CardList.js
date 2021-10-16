import react from "react";
import Card from './Card';

const CardList=({Animals})=>{
     return(
        <div>
           {
           Animals.map((user,i) => {
                return(
                    <Card key={i} id={Animals[i].id} name={Animals[i].name} link={Animals[i].link}/>
            );
            })
        }
       </div>
    );
}

export default CardList;