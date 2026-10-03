const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Bruno", nota: 5 },
    { nome: "Carla", nota: 6 },
    { nome: "Diego", nota: 4.5 },
    { nome: "Elisa", nota: 9.5 }
];

const alunosAprovados = (listaDeAlunos) => listaDeAlunos.filter(aluno => aluno.nota >= 6);

const aprovados = alunosAprovados(alunos);

console.log("Alunos aprovados:");
aprovados.forEach(aluno => console.log(`${aluno.nome} - nota ${aluno.nota}`));