
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Heart, Users, Target, Shield, GraduationCap, CheckCircle, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Doacao = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    amount: "",
    name: "",
    surname: "",
    country: "",
    province: "",
    email: "",
    contact: "",
    notes: "",
    paymentMethod: ""
  });

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Doação submetida:", formData);
    // Aqui seria implementada a lógica de pagamento
  };

  const impactAreas = [
    {
      icon: GraduationCap,
      title: "Capacitação e Educação",
      desc: "Sua contribuição financia programas de formação profissional, workshops de liderança e cursos técnicos que transformam vidas e criam oportunidades económicas sustentáveis para mulheres em situação de vulnerabilidade."
    },
    {
      icon: Shield,
      title: "Proteção e Apoio",
      desc: "Cada doação fortalece nossos centros de acolhimento, serviços de aconselhamento psicológico e programas de apoio jurídico para vítimas de violência baseada no género, oferecendo um refúgio seguro e caminhos para a recuperação."
    },
    {
      icon: Users,
      title: "Redes Comunitárias",
      desc: "Investimos na criação de redes de apoio mútuo, facilitando o intercâmbio de experiências entre mulheres líderes e promovendo a solidariedade que multiplica o impacto de cada acção individual."
    },
    {
      icon: TrendingUp,
      title: "Sustentabilidade Económica",
      desc: "Apoiamos iniciativas de microcrédito, cooperativas femininas e programas de empreendedorismo que geram independência financeira, quebrando ciclos de dependência e pobreza nas comunidades rurais e urbanas."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section with Background Image */}
        <section 
          className="relative text-white py-24 overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(236, 72, 153, 0.8), rgba(139, 69, 162, 0.8)), url('/lovable-uploads/aedb52ae-f798-49c8-a5f5-ca3634f5bc61.png')`
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <Link to="/" className="inline-flex items-center text-white mb-8 hover:text-pink-200 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Voltar ao início
            </Link>
            
            <div className="text-center">
              <div className="animate-fade-in-up max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                  Apoie Nossa Causa
                  <span className="block text-yellow-300 mt-2">AEFEM</span>
                </h1>
                
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                  Junte-se a nós para fazer a diferença na vida de mulheres moçambicanas através da educação, 
                  empreendedorismo e solidariedade
                </p>
                
                <div className="flex justify-center items-center space-x-8 text-lg">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 mr-2 text-yellow-300" />
                    <span>100% Transparente</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 mr-2 text-yellow-300" />
                    <span>Impacto Direto</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Areas Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-aefem-purple mb-4">
                Como Sua Doação Faz a Diferença
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Cada contribuição gera impacto real e transformador na vida de mulheres e comunidades
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {impactAreas.map((area, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-aefem-pink/30">
                  <CardContent className="p-6">
                    <area.icon className="w-12 h-12 mx-auto mb-4 text-aefem-pink" />
                    <h3 className="font-semibold text-aefem-purple mb-2">{area.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="border-2 border-aefem-pink/20 bg-gradient-to-br from-pink-50 to-purple-50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-aefem-pink to-aefem-purple rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-aefem-purple mb-4">Impacto Direto</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>100% das doações</strong> são canalizadas diretamente para os nossos programas. 
                    Com transparência total, cada contribuição gera relatórios de impacto que mostram 
                    quantas vidas foram transformadas graças ao seu apoio.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Donation Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-aefem-purple mb-4">
                Formulário de Doação
              </h2>
              <p className="text-gray-600">
                Preencha os dados para fazer sua contribuição
              </p>
            </div>

            <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50">
              <CardHeader className="bg-gradient-to-r from-aefem-pink to-aefem-purple text-white rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {[1, 2, 3].map((step) => (
                      <div key={step} className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          currentStep >= step ? 'bg-white text-aefem-purple' : 'bg-white/30 text-white'
                        }`}>
                          {step}
                        </div>
                        {step < 3 && (
                          <div className={`w-16 h-1 mx-2 ${
                            currentStep > step ? 'bg-white' : 'bg-white/30'
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className={currentStep >= 1 ? 'text-white' : 'text-white/70'}>Montante</span>
                  <span className={currentStep >= 2 ? 'text-white' : 'text-white/70'}>Detalhes</span>
                  <span className={currentStep >= 3 ? 'text-white' : 'text-white/70'}>Pagamento</span>
                </div>
              </CardHeader>

              <CardContent className="p-8 md:p-12">
                {/* Etapa 1: Montante */}
                {currentStep === 1 && (
                  <div>
                    <h3 className="text-xl font-semibold text-aefem-purple mb-6 border-b border-aefem-pink/20 pb-2">
                      Montante da Doação
                    </h3>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="amount" className="text-aefem-purple font-medium">
                          Montante da doação (MT) *
                        </Label>
                        <Input
                          id="amount"
                          type="number"
                          placeholder="Digite o valor (máx. 50,000 MT)"
                          value={formData.amount}
                          onChange={(e) => setFormData({...formData, amount: e.target.value})}
                          max="50000"
                          className="border-gray-300 focus:border-aefem-pink focus:ring-aefem-pink/20"
                        />
                        <p className="text-sm text-gray-500">Limite máximo: 50,000 MT</p>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[1000, 5000, 10000].map((amount) => (
                          <Button
                            key={amount}
                            variant="outline"
                            onClick={() => setFormData({...formData, amount: amount.toString()})}
                            className="border-aefem-pink text-aefem-purple hover:bg-aefem-pink hover:text-white"
                          >
                            {amount.toLocaleString()} MT
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Etapa 2: Dados do Doador */}
                {currentStep === 2 && (
                  <div>
                    <h3 className="text-xl font-semibold text-aefem-purple mb-6 border-b border-aefem-pink/20 pb-2">
                      Informações Pessoais
                    </h3>
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-aefem-purple font-medium">Nome *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="border-gray-300 focus:border-aefem-pink focus:ring-aefem-pink/20"
                            placeholder="Digite o seu nome"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="surname" className="text-aefem-purple font-medium">Apelido *</Label>
                          <Input
                            id="surname"
                            value={formData.surname}
                            onChange={(e) => setFormData({...formData, surname: e.target.value})}
                            className="border-gray-300 focus:border-aefem-pink focus:ring-aefem-pink/20"
                            placeholder="Digite o seu apelido"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="country" className="text-aefem-purple font-medium">País / Região *</Label>
                        <Select onValueChange={(value) => setFormData({...formData, country: value})}>
                          <SelectTrigger className="border-gray-300 focus:border-aefem-pink focus:ring-aefem-pink/20">
                            <SelectValue placeholder="Seleccione um país / região..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mz">Moçambique</SelectItem>
                            <SelectItem value="za">África do Sul</SelectItem>
                            <SelectItem value="pt">Portugal</SelectItem>
                            <SelectItem value="br">Brasil</SelectItem>
                            <SelectItem value="other">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="province" className="text-aefem-purple font-medium">Província (opcional)</Label>
                        <Select onValueChange={(value) => setFormData({...formData, province: value})}>
                          <SelectTrigger className="border-gray-300 focus:border-aefem-pink focus:ring-aefem-pink/20">
                            <SelectValue placeholder="Seleccione uma província" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="maputo">Maputo</SelectItem>
                            <SelectItem value="gaza">Gaza</SelectItem>
                            <SelectItem value="inhambane">Inhambane</SelectItem>
                            <SelectItem value="sofala">Sofala</SelectItem>
                            <SelectItem value="manica">Manica</SelectItem>
                            <SelectItem value="tete">Tete</SelectItem>
                            <SelectItem value="zambézia">Zambézia</SelectItem>
                            <SelectItem value="nampula">Nampula</SelectItem>
                            <SelectItem value="cabo-delgado">Cabo Delgado</SelectItem>
                            <SelectItem value="niassa">Niassa</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-aefem-purple font-medium">Endereço de email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="border-gray-300 focus:border-aefem-pink focus:ring-aefem-pink/20"
                            placeholder="exemplo@email.com"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="contact" className="text-aefem-purple font-medium">Contacto</Label>
                          <Input
                            id="contact"
                            value={formData.contact}
                            onChange={(e) => setFormData({...formData, contact: e.target.value})}
                            className="border-gray-300 focus:border-aefem-pink focus:ring-aefem-pink/20"
                            placeholder="+258 XX XXX XXXX"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes" className="text-aefem-purple font-medium">Notas de doação (opcional)</Label>
                        <Textarea
                          id="notes"
                          placeholder="Notas sobre a sua doação"
                          value={formData.notes}
                          onChange={(e) => setFormData({...formData, notes: e.target.value})}
                          className="border-gray-300 focus:border-aefem-pink focus:ring-aefem-pink/20"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Etapa 3: Pagamento */}
                {currentStep === 3 && (
                  <div>
                    <h3 className="text-xl font-semibold text-aefem-purple mb-6 border-b border-aefem-pink/20 pb-2">
                      Forma de Pagamento
                    </h3>
                    <RadioGroup
                      value={formData.paymentMethod}
                      onValueChange={(value) => setFormData({...formData, paymentMethod: value})}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-aefem-pink transition-colors">
                        <RadioGroupItem value="mobile" id="mobile" className="border-aefem-purple text-aefem-pink" />
                        <Label htmlFor="mobile" className="flex-1 cursor-pointer">
                          <div className="font-semibold text-aefem-purple">Carteira Móvel</div>
                          <div className="text-sm text-gray-500">M-Pesa, eMola, Mkesh</div>
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-aefem-pink transition-colors">
                        <RadioGroupItem value="bank" id="bank" className="border-aefem-purple text-aefem-pink" />
                        <Label htmlFor="bank" className="flex-1 cursor-pointer">
                          <div className="font-semibold text-aefem-purple">Transferência Bancária</div>
                          <div className="text-sm text-gray-500">BCI, Standard Bank, Millennium BIM</div>
                        </Label>
                      </div>
                    </RadioGroup>

                    {formData.paymentMethod && (
                      <Card className="mt-6 border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
                        <CardContent className="p-6">
                          <h4 className="font-semibold text-green-800 mb-4 flex items-center">
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Resumo da Doação
                          </h4>
                          <div className="space-y-2 text-sm text-green-700">
                            <p><strong>Montante:</strong> {formData.amount} MT</p>
                            <p><strong>Doador:</strong> {formData.name} {formData.surname}</p>
                            <p><strong>Email:</strong> {formData.email}</p>
                            <p><strong>Método:</strong> {formData.paymentMethod === 'mobile' ? 'Carteira Móvel' : 'Transferência Bancária'}</p>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="pt-8 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    {currentStep > 1 && (
                      <Button 
                        variant="outline" 
                        onClick={handlePrevious}
                        className="border-gray-300 text-gray-700 hover:bg-gray-50"
                      >
                        Anterior
                      </Button>
                    )}
                    
                    <div className={currentStep === 1 ? "ml-auto" : ""}>
                      {currentStep < 3 ? (
                        <Button 
                          onClick={handleNext}
                          disabled={
                            (currentStep === 1 && !formData.amount) ||
                            (currentStep === 2 && (!formData.name || !formData.surname || !formData.email))
                          }
                          className="bg-gradient-to-r from-aefem-pink via-pink-500 to-aefem-purple hover:from-aefem-purple hover:via-purple-600 hover:to-aefem-pink text-white px-8 font-medium"
                        >
                          Próximo
                        </Button>
                      ) : (
                        <Button 
                          onClick={handleSubmit}
                          disabled={!formData.paymentMethod}
                          className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 font-medium"
                        >
                          <Heart className="w-5 h-5 mr-2" />
                          Finalizar Doação
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Doacao;
