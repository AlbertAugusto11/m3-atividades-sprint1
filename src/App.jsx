function App() {
  const atividade = {
    name: "Albert",
    module: "Introdução ao REACT",
    age: "33",
  };
  const alerta = () =>{
    alert(atividade.name);
  }
  return (
    <>
      <li>
        <h3>{atividade.name}</h3>
        <h4>{atividade.module}</h4>
        <p>{atividade.age}</p>
      </li>
      <button onClick={alerta}>QUEM SOU EU</button>
    </>
  )
}

export default App
