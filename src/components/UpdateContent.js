// import React, { Component } from "react";

// class UpdateContent extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             id: this.props.data.id,
//             title: this.props.data.title,
//             desc: this.props.data.desc
//         };
//     }
//   render() {
//     return (
//       <article>
//         <h2>Update</h2>
//         {this.props.desc}
//         <form action="/update_process" method="post" onSubmit={function(e){
//             e.preventDefault();
//             this.props.onSubmit(this.state.id, this.state.title, this.state.desc);
//             alert("Submit!!");
//         }.bind(this)}>
//             <input type="hidden" name="id" value={this.state.id}/>
//             <p><input type="text" name="title" placeholder="title" value={this.state.title} onChange={function(e){
//                 this.setState({title: e.target.value});
//             }.bind(this)}/></p>
//             <p><textarea name="desc" placeholder="description" value={this.state.desc} onChange={function(e){
//                 this.setState({desc: e.target.value});
//             }.bind(this)}></textarea></p>
//             <p><input type="submit"/></p>
//         </form>
//       </article>
//     );
//   }
// }

// export default UpdateContent;

import React, {useState} from "react";

export default function UpdateContent(props){
  var u_state_id = props.data.id;
  const[u_state_title, u_setState_title] = useState(props.data.title);
  const[u_state_desc, u_setState_desc] = useState(props.data.desc);
  return(
    <article>
      <h2>Update</h2>
      <form action="/update_process" method="post" onSubmit={function(e){
        e.preventDefault();
        props.onSubmit(u_state_id, u_state_title, u_state_desc);
        alert("Submit!!");
        }}>
        <input type="hidden" name="id" value={u_state_id}/>
        <p><input type="text" name="title" placeholder="title" value={u_state_title} onChange={function(e){
          u_setState_title(e.target.value);
        }}/></p>
        <p><textarea name="desc" placeholder="description" value={u_state_desc} onChange={function(e){
          u_setState_desc(e.target.value);
        }}></textarea></p>
        <p><input type="submit"/></p>
      </form>
    </article>
  );
}