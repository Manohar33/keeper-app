import React, { useState } from "react";

function CreateArea(props) {
    const [a,b]=useState({
        title:"",
        content:""
    })

    function gh(event){
        const {name,value}=event.target;

        b(x =>{
            return {
                ...x,
                [name]:value
            }
        })
    }
    function jk(event){
        props.onAdd(a);
        b({
            title:"",
            content:""
        })
        event.preventDefault();
    }

  return (
    <div>
      <form>
        <input name="title"  onChange={gh}  value={a.title} placeholder="Title" />
        <textarea name="content"  onChange={gh} value={a.content} placeholder="Take a note..." rows="3" />
        <button onClick={jk}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
