import Header from "@/components/Header";

const Vitrine = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      {/* Spacer for fixed header (80px) */}
      <div className="pt-20 flex-1">
        <iframe
          src="https://ancoradistribuidora.egestor.com.br/vitrine/"
          title="Demonstração de Vitrine"
          className="w-full border-none"
          style={{ height: "calc(100vh - 80px - 63px)" }}
        />
      </div>
    </div>
  );
};

export default Vitrine;
