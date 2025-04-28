/* Crie um programa que salve uma variável, abra um arquivo .txt, 
 coloque as informações dentro do arquivos e feche o arquivo.*/

 const fs = require('fs');

 // 1. Salvar a variável
 const minha_var = 'Conteúdo salvo no arquivo';

 //2. Abrir/criar arquivo .txt e 3. colocar informação dentro do arquivo.txt
 fs.writeFile('meuarquivo.txt', minha_var, (err) => {
    if(err){
        console.error('Erro ao escrever no arquivo: ', err);
        return
 }
});

 fs.appendFile('meuarquivo.txt', '\nadicionei mais coisa', (err) => {
    if (err) {
        console.error('Erro ao adicionar outra informação', err);
        return;
    }
});

fs.appendFile('meuarquivo2.txt', '\nMais um teste', (err) => {
    if (err){
        console.error('Erro ao fazer pela segunda vez', err);
        return;
    }
}); 
fs.appendFile('meuarquivo3.txt','\nTeste 3 otário', (err) => {
   if (err){
    console.error('Erro no arquivo 3', err);
    return;
   } 
});

 // 4. Fechar arquivo 
 console.log('Arquivo fechado')