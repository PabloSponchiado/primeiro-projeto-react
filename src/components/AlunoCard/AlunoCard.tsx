type AlunoCardProps = {
  nome: string;
  idade: number;
  curso: string;
};


function AlunoCard(props: AlunoCardProps) {
  return (
      <section className="card"> {/* fragment */}
        <h2>Aluno Card</h2>
        <p>Nome: {props.nome}</p>
        <p>Idade: {props.idade} anos</p>
        <p>Curso: {props.curso}</p>
      </section>
  );
}

export default AlunoCard