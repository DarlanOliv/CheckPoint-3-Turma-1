
function Aluno(nomes, notas){
    this.nome = nomes; 
    this.falta;
    this.nota = notas;
    this.calcularMedia = function(score){
       let soma = 0;
        for (let note of score) {
            soma += note; 
        }
        return media = soma / (score.length);
    }
    this.faltas = (ausencia) =>{
        let numFaltas = ausencia;
        return numFaltas + 1;    
    }

console.log(this.nome);
console.log("Sua média:" + this.calcularMedia(this.nota));
console.log("Suas faltas:" + this.faltas(1) + "\n");
}

let curso = {
    nomeCurso: "ciencias",
    notaAprovado: 7,
    faltasMaxima: 10,
    estudantes: [],

    adicionarAlunos(novoAluno){
        this.estudantes.push(novoAluno);
    },
    aprovarAlunos(aluno, callback){
       let analise = aluno;
       
       return analise;
    } 
    
}     
    
const aluno1 = new Aluno("Jacó", [2,4,6,8,9]);
const aluno2 = new Aluno("Jeremias", [4,4,6,8,9]);
const aluno3 = new Aluno("Josias", [1,2,2,8,9]);
curso.adicionarAlunos(aluno1);
curso.adicionarAlunos(aluno2);
curso.adicionarAlunos(aluno3);
// console.log(curso.estudantes);
// console.log(curso.aprovarAlunos(curso.estudantes[0]));