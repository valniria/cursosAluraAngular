class DateHelper {

    constructor() {
        throw Error('Esta classe não pode ser instanciado.');
    }

    static dataParaTexto(data) {

        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }

    static textoParaData(texto) {

        if(!/\d{4}-\d{2}-\d{2}/.test(texto)){
            throw new Error('A data deve estar no formado aaaa-mm-dd');
        }

        return new Date(... 
            texto
            .split('-')
            .map((item, indice) => item - indice % 2 )
        );
    }

}