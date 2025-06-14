
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Smartphone, Building2, Users, Award, Target, CheckCircle, CreditCard } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Cadastro = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nome: "",
    apelido: "",
    provincia: "",
    dataNascimento: "",
    genero: "",
    endereco: "",
    ocupacao: "",
    contacto: "",
    email: "",
    metodoPagamento: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    toast({
      title: "Inscrição Enviada!",
      description: "Receberá um email com as instruções de pagamento em breve.",
    });
  };

  const provinces = [
    "Maputo", "Gaza", "Inhambane", "Sofala", "Manica", "Tete", 
    "Zambézia", "Nampula", "Cabo Delgado", "Niassa"
  ];

  const benefits = [
    { icon: Users, title: "Rede de Mulheres", desc: "Conecte-se com empreendedoras de todo Moçambique" },
    { icon: Award, title: "Capacitação", desc: "Acesso a workshops e formações exclusivas" },
    { icon: Target, title: "Mentoria", desc: "Orientação personalizada para o seu negócio" },
    { icon: Heart, title: "Impacto Social", desc: "Contribua para a transformação de vidas" }
  ];

  const paymentMethods = [
    {
      id: "mpesa",
      name: "M-Pesa",
      icon: Smartphone,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      description: "Vodacom M-Pesa"
    },
    {
      id: "mmola",
      name: "M-Mola",
      icon: Smartphone,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      description: "mCel M-Mola"
    },
    {
      id: "banco",
      name: "Transferência Bancária",
      icon: Building2,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      description: "Banco Capricórnio"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-aefem-purple via-purple-600 to-aefem-pink text-white py-24 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/20"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white/15"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white/10"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="animate-fade-in-up max-w-4xl mx-auto">
              {/* Logo AEFEM */}
              <div className="flex items-center justify-center mb-8">
                <img 
                  src="/lovable-uploads/3eea07a0-a974-46e3-8004-f4cdd61c758f.png" 
                  alt="AEFEM Logo" 
                  className="h-20 w-20 object-contain drop-shadow-lg"
                />
                <span className="ml-4 text-4xl font-bold text-white drop-shadow-lg">AEFEM</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                Junta-te ao Movimento
                <span className="block text-yellow-300 mt-2">AEFEM</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                Faz parte da transformação da vida de mulheres moçambicanas através da educação, 
                empreendedorismo e solidariedade
              </p>
              
              <div className="flex justify-center items-center space-x-8 text-lg">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2 text-yellow-300" />
                  <span>Quota Anual: 500 MT</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2 text-yellow-300" />
                  <span>Acesso Exclusivo</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-aefem-purple mb-4">
                Porque Juntar-se à AEFEM?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ao tornares-te membro da AEFEM, terás acesso a uma rede poderosa de mulheres 
                empreendedoras e oportunidades únicas de crescimento
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-2 hover:border-aefem-pink/30">
                  <CardContent className="p-6">
                    <benefit.icon className="w-12 h-12 mx-auto mb-4 text-aefem-pink" />
                    <h3 className="font-semibold text-aefem-purple mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quota Info Section */}
        <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center">
              <Card className="bg-gradient-to-br from-aefem-purple to-purple-600 text-white border-0 max-w-lg mx-auto">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">Quota Anual</CardTitle>
                  <CardDescription className="text-purple-100">
                    Investimento no empoderamento feminino
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-5xl font-bold mb-2">500 MT</div>
                  <div className="text-purple-100 mb-6">por ano</div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="text-sm text-purple-100">
                      Um pequeno investimento para fazer parte de uma grande transformação
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-aefem-purple mb-4">
                Formulário de Inscrição
              </h2>
              <p className="text-gray-600">
                Preencha os seus dados para se juntar ao movimento de transformação
              </p>
            </div>

            <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Info */}
                  <div>
                    <h3 className="text-xl font-semibold text-aefem-purple mb-6 border-b border-aefem-pink/20 pb-2">
                      Informações Pessoais
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nome" className="text-aefem-purple font-medium">Nome *</Label>
                        <Input
                          id="nome"
                          name="nome"
                          value={formData.nome}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 focus:border-aefem-pink focus:ring-aefem-pink/20"
                          placeholder="Digite o seu nome"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="apelido" className="text-aefem-purple font-medium">Apelido *</Label>
                        <Input
                          id="apelido"
                          name="apelido"
                          value={formData.apelido}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 focus:border-aefem-pink focus:ring-aefem-pink/20"
                          placeholder="Digite o seu apelido"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div className="space-y-2">
                        <Label htmlFor="provincia" className="text-aefem-purple font-medium">Província *</Label>
                        <select
                          id="provincia"
                          name="provincia"
                          value={formData.provincia}
                          onChange={(e) => setFormData(prev => ({ ...prev, provincia: e.target.value }))}
                          required
                          className="w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background focus:border-aefem-pink focus:ring-2 focus:ring-aefem-pink/20 focus:outline-none"
                        >
                          <option value="">Seleccione a província</option>
                          {provinces.map((province) => (
                            <option key={province} value={province}>{province}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="dataNascimento" className="text-aefem-purple font-medium">Data de Nascimento *</Label>
                        <Input
                          id="dataNascimento"
                          name="dataNascimento"
                          type="date"
                          value={formData.dataNascimento}
                          onChange={handleInputChange}
                          required
                          className="border-gray-300 focus:border-aefem-pink focus:ring-aefem-pink/20"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <Label className="text-aefem-purple font-medium">Género *</Label>
                      <RadioGroup
                        value={formData.genero}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, genero: value }))}
                        className="mt-3 flex flex-wrap gap-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="feminino" id="feminino" className="border-aefem-purple text-aefem-pink" />
                          <Label htmlFor="feminino" className="text-gray-700">Feminino</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="masculino" id="masculino" className="border-aefem-purple text-aefem-pink" />
                          <Label htmlFor="masculino" className="text-gray-700">Masculino</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="outro" id="outro" className="border-aefem-purple text-aefem-pink" />
                          <Label htmlFor="outro" className="text-gray-700">Outro</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div>
                    <h3 className="text-xl font-semibold text-aefem-purple mb-6 border-b border-aefem-pink/20 pb-2">
                      Informações de Contacto
                    </h3>
                    
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="endereco" className="text-aefem-purple font-medium">Endereço *</Label>
                        <Textarea
                          id="endereco"
                          name="endereco"
                          value={formData.endereco}
                          onChange={handleInputChange}
                          required
                          className="mt-2 border-gray-300 focus:border-aefem-pink focus:ring-aefem-pink/20"
                          rows={3}
                          placeholder="Digite o seu endereço completo"
                        />
                      </div>

                      <div>
                        <Label htmlFor="ocupacao" className="text-aefem-purple font-medium">Ocupação *</Label>
                        <Input
                          id="ocupacao"
                          name="ocupacao"
                          value={formData.ocupacao}
                          onChange={handleInputChange}
                          required
                          className="mt-2 border-gray-300 focus:border-aefem-pink focus:ring-aefem-pink/20"
                          placeholder="Ex: Empreendedora, Estudante, Funcionária Pública"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="contacto" className="text-aefem-purple font-medium">Contacto *</Label>
                          <Input
                            id="contacto"
                            name="contacto"
                            type="tel"
                            value={formData.contacto}
                            onChange={handleInputChange}
                            required
                            className="mt-2 border-gray-300 focus:border-aefem-pink focus:ring-aefem-pink/20"
                            placeholder="+258 XX XXX XXXX"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="email" className="text-aefem-purple font-medium">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-2 border-gray-300 focus:border-aefem-pink focus:ring-aefem-pink/20"
                            placeholder="exemplo@email.com"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Method - Modernized */}
                  <div>
                    <h3 className="text-xl font-semibold text-aefem-purple mb-6 border-b border-aefem-pink/20 pb-2 flex items-center">
                      <CreditCard className="w-5 h-5 mr-2" />
                      Método de Pagamento
                    </h3>
                    <p className="text-gray-600 mb-6">Selecione como prefere pagar a sua quota anual de 500 MT</p>
                    
                    <RadioGroup
                      value={formData.metodoPagamento}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, metodoPagamento: value }))}
                      className="grid md:grid-cols-3 gap-4"
                    >
                      {paymentMethods.map((method) => (
                        <div key={method.id} className="relative">
                          <RadioGroupItem 
                            value={method.id} 
                            id={method.id} 
                            className="absolute top-4 left-4 border-aefem-purple text-aefem-pink" 
                          />
                          <Label 
                            htmlFor={method.id} 
                            className={`block cursor-pointer rounded-xl border-2 p-6 pl-12 transition-all duration-200 hover:shadow-md ${
                              formData.metodoPagamento === method.id 
                                ? `${method.borderColor} ${method.bgColor} shadow-lg transform scale-105` 
                                : 'border-gray-200 bg-white hover:border-gray-300'
                            }`}
                          >
                            <div className="flex items-start space-x-3">
                              <method.icon className={`w-8 h-8 mt-1 ${method.color}`} />
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 mb-1">{method.name}</h4>
                                <p className="text-sm text-gray-600">{method.description}</p>
                                {formData.metodoPagamento === method.id && (
                                  <div className="mt-3 p-3 bg-white/80 rounded-lg">
                                    <p className="text-xs text-gray-700">
                                      Receberá as instruções de pagamento por email
                                    </p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="pt-8">
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-aefem-pink to-aefem-purple hover:from-aefem-purple hover:to-aefem-pink text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                    >
                      <Heart className="w-5 h-5 mr-2" />
                      Enviar Inscrição
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cadastro;
