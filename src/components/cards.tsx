'use client';

import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function Cards() {
    const participants = useSelector((state: any) => state);
    const [clique, setClique] = useState(false);
    const [id, setId] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    console.log(participants);
    return (
        <>
        <div className="flex flex-wrap">
            {!clique && participants && participants.map((joueur: any, index: number) => (
                index !== 0 && index !== 1 && (
                    <div
                        key={joueur.id}
                        className="bg-blue-700 w-72 h-96 rounded-md px-3 py-2 m-9 relative group cursor-pointer"
                        onClick={() => afficherCarte(joueur.id)}
                    >
                        <div className="mb-2 mr-5 flex justify-center items-center h-full">
                            <h2 className="text-white bg-black p-2 rounded">{joueur.pseudo}</h2>
                            <p className='absolute bottom-6 opacity-50 group-hover:opacity-100'>Cliquez pour connaître votre rôle</p>
                        </div>
                    </div>
                )
            ))}
{clique && (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black z-50 flex items-center justify-center">
       <div 
    className="bg-blue-700 w-72 h-96 rounded-xl px-3 py-2 m-9 relative group cursor-pointer transform scale-200 border border-transparent hover:border-white transition"
    onClick={() => setIsFlipped(!isFlipped)}
>
    {!isFlipped ? (
        <div className="mb-2 mr-5 flex justify-center items-center h-full">
            <h2 className="text-white bg-black p-2 rounded">{participants[id].pseudo}</h2>
            <p className='absolute bottom-6 opacity-50 group-hover:opacity-100'>Cliquez pour connaître votre mot</p>
        </div>
    ) : (
        <div className="mb-2 mr-5 flex justify-center items-center h-full">
            <h2 className="text-white">{participants[id].role !== 'Mr. White' ? "Votre mot est:  " : "Vous êtes  "}<span className='bg-black p-2 rounded'>{participants[id].role}</span></h2>            
        </div>
    )}
        </div>
        <input type='button' value='&larr;' onClick={() => setClique(false)} className='h-20 w-20 rounded-full text-white bg-blue-700 cursor-pointer' />
    </div>
)}
</div>
<br></br>
</>
);

    function afficherCarte(id: number) {
        setClique(true);
        setId(id+1);
        console.log(id);
    }
}
