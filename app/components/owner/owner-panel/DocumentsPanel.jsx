import { plus_jakarta } from "@/font";
import ImportantDocumentsSection from "./documents_panel/ImportantDocumentsSection";
import ExpiredContractsSection from "./documents_panel/ExpiredContractsSection";

export default function DocumentsPanel() {
  return (
    <main
      className={`${plus_jakarta.className} relative flex flex-col justify-center items-center p-2 gap-6 mt-3`}
    >
      <ImportantDocumentsSection />
      <ExpiredContractsSection />
    </main>
  );
}
