import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import store, { voter } from "./store";

export default function Card() {
    const router = useRouter();
    const participants = useSelector((state: any) => state);
    const [clique, setClique] = useState(false);
    const dispatch = useDispatch();
    const [fini, setFini] = useState(false);

    useEffect(() => {
        if (fini) {
            router.push('/reset');
        }
    }, [fini, router]);

    function vote(id: number) {
        const vraiMot = participants[0].reponse;
        var hasVoted = participants.some((joueur: any) => 
            (joueur.role === 'Mr. White' && joueur.role === vraiMot) && joueur.voted);
        let mot;
        dispatch(voter(id));
        const participantsNonVoted = store.getState().filter((joueur: any) => !joueur.voted).slice(2);        
        console.log(participantsNonVoted);
        if (fini) return;
        var joueur = participants[id + 1];
        console.log(joueur);
        if (joueur.role === 'Mr. White') {
            mot = prompt("Mr. White, quel est le mot ?");
            if (mot === vraiMot) {
                alert('Mr. White a gagné');
                setClique(false);
                setFini(true);
                return;
            } else {
                alert('Mr. White a perdu');
                setClique(false);
            }
        }
        if (joueur.role !== 'Mr. White' && joueur.role !== vraiMot) {
            alert("L'agent secret a perdu");
            setClique(false);
        }
        if (joueur.role === vraiMot) {
            alert("Vous avez éliminé un civil");
            setClique(false);
        }

        if (hasVoted) {
            console.log('case0');
            alert("Les civils ont gagné");
            setClique(false);
            setFini(true);
            return;
        }

        if(participantsNonVoted.length === 2) {
            if((participantsNonVoted[0].role === 'Mr. White' && participantsNonVoted[1].role === vraiMot) ||
                (participantsNonVoted[1].role === 'Mr. White' && participantsNonVoted[0].role === vraiMot)) {
                    console.log('case1');
                alert('Les civils ont perdu et Mr. White a gagné');
                setClique(false);
                setFini(true);
                return;
            }
            if((participantsNonVoted[1].role === 'Mr. White' && participantsNonVoted[0].role !== vraiMot) ||
                (participantsNonVoted[0].role === 'Mr. White' && participantsNonVoted[1].role !== vraiMot)) {
               console.log('case2');
                alert('Les civils ont perdu');
                mot = prompt("Mr. White, quel est le mot ?");
                if (mot === vraiMot) {
                    alert('Mr. White a gagné');
                    setClique(false);
                    setFini(true);
                    return;
                } else {
                    alert('Mr. White a perdu');
                    alert("L'agent secret a gagné");
                    setClique(false);
                    setFini(true);
                }
            }
            if((participantsNonVoted[0].role === vraiMot && participantsNonVoted[1].role !== vraiMot) ||
                (participantsNonVoted[1].role === vraiMot && participantsNonVoted[0].role !== vraiMot)) {
               console.log('case3');
                    alert('L\'agent secret a gagné');
                setClique(false);
                setFini(true);
            }
            if(participantsNonVoted[0].role ===vraiMot && participantsNonVoted[1].role === vraiMot) {
            console.log('case4');
                alert('Les civils ont gagné'); 
            setClique(false); 
            setFini(true);
        }
    }

    }

    return (
        <>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => setClique(true)}>Cliquez pour voter</button>
            <div className="flex flex-wrap">
                {participants && participants.map((joueur: any, index: number) => (
                    index !== 0 && index !== 1 && (
                        <div
                            key={joueur.id}
                            className={clsx("bg-blue-700 w-72 h-96 rounded-md px-3 py-2 m-9 relative", {"group cursor-pointer": clique, "hidden": joueur && joueur.voted})}
                            onClick={() => clique ? vote(joueur.id) : null}
                        >
                            <h2 className="text-white text-2xl font-semibold">{joueur.pseudo}</h2>
                            <p className="text-white text-lg"></p>
                            {clique && (
                                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                                    <p className="text-white text-2xl">Voter</p>
                                </div>
                            )}
                        </div>
                    )
                ))}
            </div>
        </>
    );
}