// import React, { Component } from "react";

// class ReadContent extends Component {
//   render() {
//     return (
//       <article>
//         <h2>{this.props.title}</h2>
//         {this.props.desc}
//         <div>
//           <img src={this.props.img} alt={this.props.title}></img>
//         </div>
//       </article>
//     );
//   }
// }

// export default ReadContent;

export default function ReadContent(props){
  return(
    <article>
      <h2>{props.title}</h2>
      {props.desc}
      <div>
        <img src={props.img} alt={props.title}></img>
      </div>
    </article>
  );
}