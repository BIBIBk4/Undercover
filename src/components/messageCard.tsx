import clsx from "clsx";

export default function MessageCard({contenu, etat}: {contenu: string, etat: boolean}) {
    return (
        <div className={clsx("flex justify-center items-center",{"hidden": etat})}>
            <div className="bg-blue-700 w-96 h-40 relative opacity-100">
                <h2 className="text-white text-3xl text-center absolute top-1/2 transform -translate-y-1/2 ml-9 mr-9">{contenu}</h2>
            </div>
        </div>
    );
}