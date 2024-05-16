import { PresentationJeux } from "@/components/presentationJeux";
import PremiereVue from "@/components/prmrvue";

export default function Home() {
  return (
    <main className="mx-auto px-4 py-8">
      <PremiereVue />
      <PresentationJeux />
    </main>
  );
}
