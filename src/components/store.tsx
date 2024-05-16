import { createStore } from 'redux';
import { initialState, mots } from './storage';

export const ajouterJoueur = (nom: string) => ({
    type: 'AJOUTER_JOUEUR',
    payload: {
        nom: nom
    }
});

export const supprimerJoueur = (id: number) => ({
    type: 'SUPPRIMER_JOUEUR',
    payload: {
        id: id
    }
});

export const debuterPartie = () => ({
    type: 'DEBUTER_PARTIE'
});

export const voter = (id: number) => ({
    type: 'VOTER',
    payload: {
        id: id
    }
});

export const reset = () => ({
    type: 'Reset'
});

function reducer(state = initialState, action: any) {
    switch (action.type) {
        case 'AJOUTER_JOUEUR':
            const nom = action.payload.nom;
            console.log('Nom'+nom);
            if (!nom) {
                return state;
            } else {
                return [
                    ...state,
                    {
                        id: state.length,
                        pseudo: nom,
                        score: 0,
                        role: ''
                    }
                ];
            }

        case 'SUPPRIMER_JOUEUR':
            return state.filter((joueur: any) => joueur.id !== action.payload.id);

            case 'DEBUTER_PARTIE':
                let indexes =  Math.floor(Math.random() * mots.length);
                while(mots[indexes].fait === true){
                    indexes =  Math.floor(Math.random() * mots.length);
                }
                if (state.length >= 6) {
                    let secretAgentIndex = Math.floor(Math.random() * state.length);
                    while (secretAgentIndex <2){
                        secretAgentIndex = Math.floor(Math.random() * state.length);
                    }
                    let mrWhiteIndex: any;
                    mots[indexes].fait = true;
                    do {
                        mrWhiteIndex = Math.floor(Math.random() * state.length);
                    } while (mrWhiteIndex === secretAgentIndex || mrWhiteIndex < 2 || mrWhiteIndex > state.length);
                    console.log('Mr. White : '+mrWhiteIndex);
                    return state.map((joueur: any, index: number) => {
                        if(index<2) return joueur;
                        state[0].enCours = true;
                        state[0].reponse = mots[indexes].civil;
                        console.log(mots[indexes])
                        if (index === secretAgentIndex) {
                            return {
                                ...joueur,
                                role: mots[indexes].as,
                            };
                        } else if (index === mrWhiteIndex) {
                            return {
                                ...joueur,
                                role: 'Mr. White',
                            };
                        } else {
                            return {
                                ...joueur,
                                role: mots[indexes].civil
                            };
                        }
                    });
                } else {
                    alert('Il faut au moins 4 joueurs pour commencer la partie');
                    return state;
                }

        case 'VOTER':
            return state.map((joueur: any) => {
                if (joueur.id === action.payload.id) {
                    return {
                        ...joueur,
                        voted: true
                    };
                } else {
                    return joueur;
                }
            });
        case 'Reset':
            return initialState;
        default:
            return state;
    }
}

const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

export default store;
