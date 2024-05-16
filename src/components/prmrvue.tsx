import Image from "next/image";

const PremiereVue = () => {
    return(
        <>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src="/presentation.jpg"
        alt="Image du jeu Undercover"
        width={700}
        height={300}
        className="rounded-lg"
      />
       <h1 className="text-2xl font-semibold mb-4">Undercover</h1>
      </div>
     
        </>
    );
};

export default PremiereVue;