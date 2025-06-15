
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Heart, Users, Target, Shield, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/lovable-uploads/aa4a161f-75e7-417d-9a6d-3209a0d95e47.png')"
        }}
      >
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-white mb-8 hover:text-pink-200 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar ao início
          </Link>
          
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">APOIE NOSSA CAUSA</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Junte-se a nós para fazer a diferença!
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Objetivos da AEFEM */}
          <div>
            <h2 className="text-3xl font-bold text-aefem-purple mb-8">
              Como Sua Doação Faz a Diferença
            </h2>
            
            <div className="space-y-6">
              <Card className="border-l-4 border-l-aefem-pink">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-aefem-pink to-aefem-purple rounded-lg flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-aefem-purple mb-2">Capacitação e Educação</h3>
                      <p className="text-gray-600">Sua contribuição financia programas de formação profissional, workshops de liderança e cursos técnicos que transformam vidas e criam oportunidades económicas sustentáveis para mulheres em situação de vulnerabilidade.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-aefem-pink">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-aefem-pink to-aefem-purple rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-aefem-purple mb-2">Proteção e Apoio</h3>
                      <p className="text-gray-600">Cada doação fortalece nossos centros de acolhimento, serviços de aconselhamento psicológico e programas de apoio jurídico para vítimas de violência baseada no género, oferecendo um refúgio seguro e caminhos para a recuperação.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-aefem-pink">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-aefem-pink to-aefem-purple rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-aefem-purple mb-2">Redes Comunitárias</h3>
                      <p className="text-gray-600">Investimos na criação de redes de apoio mútuo, facilitando o intercâmbio de experiências entre mulheres líderes e promovendo a solidariedade que multiplica o impacto de cada acção individual.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-aefem-pink">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-aefem-pink to-aefem-purple rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-aefem-purple mb-2">Sustentabilidade Económica</h3>
                      <p className="text-gray-600">Apoiamos iniciativas de microcrédito, cooperativas femininas e programas de empreendedorismo que geram independência financeira, quebrando ciclos de dependência e pobreza nas comunidades rurais e urbanas.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-aefem-pink mr-3" />
                <h3 className="text-xl font-bold text-aefem-purple">Impacto Direto</h3>
              </div>
              <p className="text-gray-700">
                <strong>100% das doações</strong> são canalizadas diretamente para os nossos programas. 
                Com transparência total, cada contribuição gera relatórios de impacto que mostram 
                quantas vidas foram transformadas graças ao seu apoio.
              </p>
            </div>
          </div>

          {/* Formulário de Doação */}
          <div>
            <Card className="shadow-2xl">
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

              <CardContent className="p-8">
                {/* Etapa 1: Montante */}
                {currentStep === 1 && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Dados do doador</h3>
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="amount" className="text-base font-semibold text-gray-700">
                          Montante da doação (MT) *
                        </Label>
                        <Input
                          id="amount"
                          type="number"
                          placeholder="Digite o valor (máx. 50,000 MT)"
                          value={formData.amount}
                          onChange={(e) => setFormData({...formData, amount: e.target.value})}
                          max="50000"
                          className="mt-2 text-lg"
                        />
                        <p className="text-sm text-gray-500 mt-1">Limite máximo: 50,000 MT</p>
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
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Dados do doador</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-base font-semibold text-orange-600">Nome *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="mt-1 border-orange-500 focus:border-orange-600"
                          />
                        </div>
                        <div>
                          <Label htmlFor="surname" className="text-base font-semibold text-orange-600">Apelido *</Label>
                          <Input
                            id="surname"
                            value={formData.surname}
                            onChange={(e) => setFormData({...formData, surname: e.target.value})}
                            className="mt-1 border-orange-500 focus:border-orange-600"
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="country" className="text-base font-semibold text-orange-600">País / Região *</Label>
                        <Select onValueChange={(value) => setFormData({...formData, country: value})}>
                          <SelectTrigger className="mt-1 border-orange-500 focus:border-orange-600">
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

                      <div>
                        <Label htmlFor="province" className="text-base font-semibold text-gray-700">Província (opcional)</Label>
                        <Select onValueChange={(value) => setFormData({...formData, province: value})}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Seleccione uma opção" />
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

                      <div>
                        <Label htmlFor="email" className="text-base font-semibold text-orange-600">Endereço de email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="mt-1 border-orange-500 focus:border-orange-600"
                        />
                      </div>

                      <div>
                        <Label htmlFor="contact" className="text-base font-semibold text-gray-700">Contacto</Label>
                        <Input
                          id="contact"
                          value={formData.contact}
                          onChange={(e) => setFormData({...formData, contact: e.target.value})}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-4">Informação adicional</h4>
                        <Label htmlFor="notes" className="text-base font-semibold text-gray-700">Notas de doação (opcional)</Label>
                        <Textarea
                          id="notes"
                          placeholder="Notas sobre a sua doação"
                          value={formData.notes}
                          onChange={(e) => setFormData({...formData, notes: e.target.value})}
                          className="mt-1"
                          rows={3}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Etapa 3: Pagamento */}
                {currentStep === 3 && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Forma de pagamento</h3>
                    <RadioGroup
                      value={formData.paymentMethod}
                      onValueChange={(value) => setFormData({...formData, paymentMethod: value})}
                      className="space-y-4"
                    >
                      <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-aefem-pink transition-colors">
                        <RadioGroupItem value="mobile" id="mobile" />
                        <Label htmlFor="mobile" className="flex-1 cursor-pointer">
                          <div className="font-semibold">Carteira Móvel</div>
                          <div className="text-sm text-gray-500">M-Pesa, eMola, Mkesh</div>
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg hover:border-aefem-pink transition-colors">
                        <RadioGroupItem value="bank" id="bank" />
                        <Label htmlFor="bank" className="flex-1 cursor-pointer">
                          <div className="font-semibold">Transferência Bancária</div>
                          <div className="text-sm text-gray-500">BCI, Standard Bank, Millennium BIM</div>
                        </Label>
                      </div>
                    </RadioGroup>

                    {formData.paymentMethod && (
                      <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Resumo da Doação</h4>
                        <div className="space-y-1 text-sm text-green-700">
                          <p><strong>Montante:</strong> {formData.amount} MT</p>
                          <p><strong>Doador:</strong> {formData.name} {formData.surname}</p>
                          <p><strong>Email:</strong> {formData.email}</p>
                          <p><strong>Método:</strong> {formData.paymentMethod === 'mobile' ? 'Carteira Móvel' : 'Transferência Bancária'}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Botões de Navegação */}
                <div className="flex justify-between mt-8 pt-6 border-t">
                  {currentStep > 1 && (
                    <Button 
                      variant="outline" 
                      onClick={handlePrevious}
                      className="border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      Anterior
                    </Button>
                  )}
                  
                  <div className="ml-auto">
                    {currentStep < 3 ? (
                      <Button 
                        onClick={handleNext}
                        disabled={
                          (currentStep === 1 && !formData.amount) ||
                          (currentStep === 2 && (!formData.name || !formData.surname || !formData.email))
                        }
                        className="bg-aefem-pink hover:bg-pink-600 text-white px-8"
                      >
                        Próximo
                      </Button>
                    ) : (
                      <Button 
                        onClick={handleSubmit}
                        disabled={!formData.paymentMethod}
                        className="bg-green-600 hover:bg-green-700 text-white px-8"
                      >
                        Finalizar Doação
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doacao;
