import "./App.css";
import "./components/AlunoCard/AlunoCard.css";
import AlunoCard from "./components/AlunoCard/AlunoCard";

function App() {
  return (
      <>
      <AlunoCard
        nome="Pablo Sponchiado"
        idade={18}
        curso="Ciência da Computação"
      />
      <AlunoCard nome="Maria Silva" idade={20} curso="Engenharia de Software" />
      <AlunoCard
        nome="João Pereira"
        idade={19}
        curso="Sistemas de Informação"
      />
    </>
  );
}

export default App;
