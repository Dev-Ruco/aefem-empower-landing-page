
const Partners = () => {
  const programmaticPartners = [
    { name: "Embaixada dos Países Baixos", flag: "🇳🇱" },
    { name: "Embaixada da Suécia", flag: "🇸🇪" },
    { name: "Embaixada de Portugal", flag: "🇵🇹" },
    { name: "UNICEF", flag: "🌐" },
  ];

  const fundingPartners = [
    { name: "UN Women", flag: "🌐" },
    { name: "Oxfam", flag: "🌐" },
    { name: "Fundação para o Desenvolvimento da Comunidade", flag: "🇲🇿" },
    { name: "Fundação Aga Khan", flag: "🌐" },
  ];

  const PartnerCard = ({ partner }: { partner: { name: string; flag: string } }) => (
    <div className="group cursor-pointer">
      <div className="bg-gray-100 rounded-xl p-6 h-24 flex items-center justify-center transition-all duration-300 hover:bg-aefem-pink/10 hover:shadow-lg">
        <span className="text-4xl opacity-60 group-hover:opacity-100 transition-opacity duration-300">
          {partner.flag}
        </span>
      </div>
      <p className="text-center mt-3 text-sm font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {partner.name}
      </p>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-aefem-purple mb-6">
            Os Nossos Parceiros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Juntos, criamos um impacto duradouro na vida das mulheres moçambicanas
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Parceiros Programáticos */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-aefem-purple mb-8 text-center">
              Parceiros Programáticos
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {programmaticPartners.map((partner, index) => (
                <PartnerCard key={index} partner={partner} />
              ))}
            </div>
          </div>

          {/* Parceiros de Financiamento */}
          <div>
            <h3 className="text-2xl font-bold text-aefem-purple mb-8 text-center">
              Parceiros de Financiamento
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {fundingPartners.map((partner, index) => (
                <PartnerCard key={index} partner={partner} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
