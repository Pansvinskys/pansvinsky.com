export class RetadoresService{
    retadores : string[] = [
        "Pantoja",
        "Kichot",
        "Sebas"
    ]

    getRetadores(){
        return this.retadores;
    }

    addRetador(retador: string){
        this.retadores.push(retador);
    }

    getRetador(){
        return this.retadores.shift()
    }
}