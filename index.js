var nome=[], email=[], tel=[];

for(i=0; i<3; i++){
  nome[i] = prompt('Digite o nome da '+(i+1)+' ª pessoa:');
  email[i] = prompt('Digite o email da '+(i+1)+' ª pessoa:');
  tel[i] = prompt('Digite o telefone da '+(i+1)+' ª pessoa:');
  alert('\n');
}
console.log('Dados cadastrados com sucesso!')