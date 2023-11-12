import justSuffle from 'just-shuffle';

// 

/**
 * Esta función crea un nuevo deck
 * @param {Array<string>} tiposDeCarta Ejemplo: ['C','D','H','S'];
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K'];
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta) throw new Error('TiposDeCarta es obligatorio');
    if (tiposDeCarta.length <= 0) throw new Error('TiposDeCarta tiene que ser un array de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = justSuffle(deck);
    console.log( deck );
    return deck;
}