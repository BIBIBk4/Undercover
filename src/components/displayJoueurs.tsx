import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { supprimerJoueur } from '@/components/store';

function Joueurs() {
    const participants = useSelector((state:any) => state);
    console.log(participants);
    const dispatch = useDispatch();

    const deleteJoueur = (id:number) => {
        dispatch(supprimerJoueur(id));
    };

    return (
        <div className="flex justify-center items-center">
            {participants && participants.map((joueur:any, index:number) => (
                index !== 0 && index !== 1 && (
                    <div key={joueur.id} className="mb-2 mr-5">
                        <h2 className="text-white bg-gray-800 p-2 rounded">{joueur.pseudo}
                            <button 
                                className="ml-2 inline-flex items-center justify-center w-10 h-10 border border-transparent shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                onClick={() => deleteJoueur(joueur.id)}
                            >
                                X
                            </button>
                        </h2>
                    </div>
                )
            ))}
        </div>  
    );
}

export default Joueurs;