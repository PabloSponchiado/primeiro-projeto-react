import "./App.css";
import "./components/AlunoCard/AlunoCard.css";
import AlunoCard from "./components/AlunoCard/AlunoCard";
import { useState, useEffect } from "react";

type Aluno = {
  id: number;
  nome: string;
  idade: number;
  curso: string;
};

function App() {
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const [filtro, setFiltro] = useState(false);

  useEffect(() => {
    const carregarAlunos = async () => {
      try {
        const response = await fetch("/alunos.json");
        const dados = await response.json();
        
        // Adiciona IDs auto incrementados aos alunos do JSON
        const alunosComId = dados.map((aluno: Omit<Aluno, 'id'>, index: number) => ({
          id: index + 1,
          ...aluno,
        }));
        
        setAlunos(alunosComId);
      } catch (erro) {
        console.error("Erro ao carregar alunos:", erro);
      }
    };

    carregarAlunos();
  }, []);

  // Filtra apenas alunos de Ciência da Computação
  const alunosFiltrados = filtro 
    ? alunos.filter((aluno) => aluno.curso === "Ciência da Computação")
    : alunos;

  return (
    <div className="app-container">
      <h1 className="app-title">Lista de Alunos</h1>
      
      <div className="info-section">
        <div className="total-alunos">
          <span className="label">Total de Alunos:</span>
          <span className="count">{alunos.length}</span>
        </div>
        
        <button 
          className={`filter-btn ${filtro ? 'active' : ''}`}
          onClick={() => setFiltro(!filtro)}
        >
          {filtro ? '✓ Ciência da Computação' : 'Filtrar por Ciência da Computação'}
        </button>
      </div>

      <div className="alunos-grid">
        {alunosFiltrados.map((aluno) => (
          <AlunoCard
            key={aluno.id}
            id={aluno.id}
            nome={aluno.nome}
            idade={aluno.idade}
            curso={aluno.curso}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
