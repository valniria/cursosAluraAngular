class NegociacoesView extends View {

    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        return `    
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
            ${model.negociacoes.map(negociacao =>
                `
                    <tr>
                        <td>${DateHelper.dataParaTexto(negociacao._data)}</td>
                        <td>${negociacao._quantidade}</td>
                        <td>${negociacao._valor}</td>
                        <td>${negociacao._volume}</td>
                    </tr>
                `
            ).join('')}
            </tbody>
            
            <tfoot>
                <td colspan='3'></td>
                <td>
                ${model.negociacoes.reduce(
                    (total, elemento) => total + elemento._volume,
                    0.0) 
                }
                </td>
            </tfoot>
        </table>
        `;
    }

}
