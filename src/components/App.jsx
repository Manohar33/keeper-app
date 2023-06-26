import React, { useState } from "react";
import Header from "./Header";
import Footer from "./footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [c,d]=useState([])


  function addNote(a){
    d(y=>{
      return [...y,a];
    })
  }

  function del(id){
    d(x=>{
      return x.filter((q,index)=>{
        return index!==id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote}
      />
      {c.map((k,index) => {
        return <Note key={index} id={index}  title={k.title} content={k.content} onDelete={del}/>
      })}
      
      <Footer />
    </div>
  );
}

export default App;
