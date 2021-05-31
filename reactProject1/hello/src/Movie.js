import { Component } from "react";
import "./Movie.css"
export default class Movie extends Component{
   
render(){
    let movies=[
{image:"http://2.bp.blogspot.com/-_TmsTdAv5cU/VlHxCdB9d1I/AAAAAAAAAGg/m2IewC_q7zY/s1600/spectre___poster_by_majkdark-d8m6u3p.jpg" ,name:"Spectre" ,langauge:"English",cast:"Daniel Craig",rate:6.2},
{image:"https://upload.wikimedia.org/wikipedia/ar/d/dd/Spiral_from_the_book_of_saw.jpg" ,name:"Spiral" ,langauge:"English",cast:"Chris Rock, Max Minghella, Samuel L. Jackson",rate:5.8},
{image:"data:image/jpeg;base64,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" , name:"The Dark and the Wicked" ,langauge:"English", cast:"Marin Ireland, Michael Abbott Jr., Julie Oliver-Touchstone" ,rate:6.1},
{image:"https://upload.wikimedia.org/wikipedia/ar/d/dd/Spiral_from_the_book_of_saw.jpg" ,name:"Spiral" ,langauge:"English",cast:"Chris Rock, Max Minghella, Samuel L. Jackson",rate:5.8},
{image:"http://2.bp.blogspot.com/-_TmsTdAv5cU/VlHxCdB9d1I/AAAAAAAAAGg/m2IewC_q7zY/s1600/spectre___poster_by_majkdark-d8m6u3p.jpg" ,name:"Spectre" ,langauge:"English",cast:"Daniel Craig",rate:6.2},
{image:"data:image/jpeg;base64,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" , name:"The Dark and the Wicked" ,langauge:"English", cast:"Marin Ireland, Michael Abbott Jr., Julie Oliver-Touchstone" ,rate:6.1}];

let moviesMap=movies.map((item,index)=>(

<div key={index}>
 <div className="title" >{item.name}</div>
<img src={item.image } />
<div>Langauge: {item.langauge}</div>
<div>Rating: {item.rate}/10</div>
<div>Cast: {item.cast}</div>
<button>Book</button>
</div>
))


return(
    <div className="RootDiv">
        {moviesMap}
    </div>
);
    
}

}