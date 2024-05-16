'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ajouterJoueur, debuterPartie } from '@/components/store';
import Joueurs from '@/components/displayJoueurs';
import Link from 'next/link';

export default function AddJoueur() {
    const [nom, setNom] = useState('');
    const dispatch = useDispatch();

    function addJoueur() {
        if(nom === ''){
            alert('Veuillez entrer un nom');
            return;
        }
        dispatch(ajouterJoueur(nom));
        setNom('');
    }

    function debuterGame() {
        console.log('debuterGame');
        dispatch(debuterPartie());
    }
 

    return (
        <>
            <Joueurs/>
            <br></br>
            <h2 className="text-2xl text-center">Ajouter un joueur</h2>
            <br></br>
            
        <div className="flex justify-center items-center">
        <input 
        type="text" 
        className="rounded-md px-3 bg-gray-500 py-2 border border-gray-300 focus:outline-none focus:border-indigo-500" 
        placeholder="Nom du joueur" 
        onChange={(e) => {
            setNom(e.target.value);
        }}
        required
    />
            <button 
                className="ml-2 inline-flex items-center justify-center w-10 h-10 border border-transparent rounded-full shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" 
                onClick={addJoueur} 
            >
                +
            </button>
            </div>
            <br></br>
            <div className="flex justify-center items-center">
            <Link href='/pregame'> 
                <button onClick={debuterGame} className="ml-2 inline-flex items-center justify-center w-20 h-10 border border-transparent rounded-full shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Start
                </button>
            </Link>
            </div>
            </>
    );
}