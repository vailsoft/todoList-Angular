export interface Tarefa {
    id:string;
    texto:string;
    feita:boolean;
    prioridade:Prioridade;
}
export enum Prioridade{
    Alta = 1,
    Baixa = 2
}