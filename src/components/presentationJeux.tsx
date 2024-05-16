export function PresentationJeux() {
    return(
        <>
    <h2 className="text-lg font-semibold">Présentation du jeu</h2>
      <p className="text-lg">Undercover est un jeu de société qui combine le 
      plaisir de jouer en groupe avec une dose d&apos;intrigue et de mystère.
      <br></br> <br></br><strong>But du jeu :</strong> Le but principal du jeu est de découvrir qui 
      parmi les joueurs est l&apos;agent secret et qui est Mr.White. 
      Les joueurs doivent donner des indices et écouter les réponses pour 
      déterminer qui est qui.
      <br></br> <br></br><strong>Nombre de joueurs :</strong> Le jeu est généralement conçu 
      pour un groupe de 4 à 8 joueurs, mais il peut être adapté pour des 
      groupes plus importants.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Règles du jeu</h2>
        <ol className="list-decimal pl-4">
            <li className="mb-4">Distribution des rôles : Chaque joueur reçoit un rôle secret qui indique s&apos;il est l&apos;agent secret, Mr. White ou un civil.</li>
            <li className="mb-4">Distribution des cartes de mot : Une carte de mot est distribuée à chaque joueur, à l&apos;exception de Mr. White, qui reçoit une carte blanche, et de l&apos;agent secret qui reçoit un mot proche de celui des civils.</li>
            <li className="mb-4">Début de la manche : Un joueur est désigné comme meneur de jeu. Ce joueur commence par dire un mot en rapport avec le mot inscrit sur sa carte de mot, sans révéler le mot lui-même.</li>
            <li className="mb-4">Tour de jeu : Les autres joueurs disent à leur tour des mots en lien avec le mot de leur carte de mot. L&apos;objectif est de communiquer subtilement avec les autres joueurs tout en évitant que Mr. White sache de quel mot il s&apos;agit.</li>
            <li className="mb-4">Fin de la manche : Les joueurs votent pour désigner qui, selon eux, est Mr. White ou l&apos;agent secret. Si ces derniers sont découverts, les civils remportent la manche. Sinon, l&apos;agent secret ou l&apos;informateur l&apos;emportent. Tout dépend de celui qui reste dans la partie</li>
            <li><strong>Attention :</strong> Si Mr. White devine le mot, il gagne la partie, et si les civils  n&apos;arrivent pas à reconnaitre qui est l&apos;agent secret, l&apos;agent secret gagne la partie.</li>
        </ol>
        </>
    );
}
