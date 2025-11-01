const diasSemana: string[] = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']
const temperaturas: number[] = [ 28,        30,      32,       29,       24]

for(let i: number = 0; i < temperaturas.length; i++){
    console.log(`Dia ${diasSemana[i]}: ${temperaturas[i]}°C`)
}