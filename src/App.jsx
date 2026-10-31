import Card from "./components/card";

function App(){
  return(
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
      <Card title="React Basics"/>
      <Card title="JavaScript Notes"/>
      <Card title="My Portfolio"/>
    </div>  
  );
}
export default App;