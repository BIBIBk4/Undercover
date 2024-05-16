import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";
import store, { voter } from "./store";
import MessageCard from "./messageCard";

export default function Card() {
    const router = useRouter();
    const participants = useSelector((state: any) => state);
    const [clique, setClique] = useState(false);
    const dispatch = useDispatch();
    const [fini, setFini] = useState(false);
    const [etat, setEtat] = useState(true);
    const [message, setMessage] = useState('');

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
        var joueur = participants[id];
        console.log(joueur);
        if (joueur.role === 'Mr. White') {
            mot = prompt("Mr. White, quel est le mot ?");
            if (mot === vraiMot) {
                setEtat(false);
                setMessage("Mr. White a gagné")
                setTimeout(() =>{
                    setEtat(true)
                    setClique(false);
                    setFini(true);
                }, 2000);
                return;
            } else {
                setEtat(false);
                setMessage("Mr. White a perdu")
                setTimeout(() =>{
                    setEtat(true)
                    setClique(false);
                }, 2000);
            }
        }
        if (joueur.role !== 'Mr. White' && joueur.role !== vraiMot) {
            setEtat(false);
            setMessage("L'agent secret a perdu")
            setTimeout(() =>{
                setEtat(true)
                setClique(false);
            }, 2000);
        }
        if (joueur.role === vraiMot) {
            setEtat(false);
            setMessage("Vous avez éliminé un civil")
            setTimeout(() =>{
                setEtat(true)
                setClique(false);
            }, 2000);
        }

        if (hasVoted) {
            setEtat(false);
            setMessage("Les civils ont gagné")
            setTimeout(() =>{
                setEtat(true)
                setClique(false);
                setFini(true);
            }, 2000);
            return;
        }

        if(participantsNonVoted.length === 2) {
            if((participantsNonVoted[0].role === 'Mr. White' && participantsNonVoted[1].role === vraiMot) ||
                (participantsNonVoted[1].role === 'Mr. White' && participantsNonVoted[0].role === vraiMot)) {
            setEtat(false);
            setMessage("Les civils ont perdu et Mr. White a gagné")
            setTimeout(() =>{
                setEtat(true)
                setClique(false);
                setFini(true);
            }, 2000);
                return;
            }
            if((participantsNonVoted[1].role === 'Mr. White' && participantsNonVoted[0].role !== vraiMot) ||
                (participantsNonVoted[0].role === 'Mr. White' && participantsNonVoted[1].role !== vraiMot)) {
                setEtat(false);
                setMessage("Les civils ont perdu")
                setTimeout(() =>{
                    setEtat(true);
                }, 2000);
                mot = prompt("Mr. White, quel est le mot ?");
                if (mot === vraiMot) {
                    setEtat(false);
                    setMessage("'Mr. White a gagné")
                    setTimeout(() =>{
                        setEtat(true)
                        setClique(false);
                        setFini(true);
                    }, 2000);
                    return;
                } else {
                    setEtat(false);
                setMessage("Mr. White a perdu")
                setTimeout(() =>{
                    setEtat(true);
                }, 2000);
                    setEtat(false);
                setMessage("L'agent secret a gagné")
                setTimeout(() =>{
                    setEtat(true);
                    setClique(false);
                    setFini(true);
                }, 2000);
                }
            }
            if((participantsNonVoted[0].role === vraiMot && participantsNonVoted[1].role !== vraiMot) ||
                (participantsNonVoted[1].role === vraiMot && participantsNonVoted[0].role !== vraiMot)) {
                    setEtat(false);
                    setMessage("L'agent secret a gagné")
                    setTimeout(() =>{
                        setEtat(true);
                        setClique(false);
                        setFini(true);
                    }, 2000);
            }
            if(participantsNonVoted[0].role ===vraiMot && participantsNonVoted[1].role === vraiMot) {
                setEtat(false);
                setMessage("Les civils ont gagné")
                setTimeout(() =>{
                    setEtat(true);
                    setClique(false);
                    setFini(true);
                }, 2000);
        }
    }

    }

    return (
        <> 
        {!etat ? <MessageCard contenu={message} etat={etat}/> : (
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
        )}
        </>
    );
}