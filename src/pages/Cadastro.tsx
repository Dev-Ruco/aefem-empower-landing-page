
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, CreditCard, Smartphone, Building2 } from "lucide-react";
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-aefem-purple to-aefem-pink text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <Heart className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Junta-te ao Movimento AEFEM
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Faz parte da transformação da vida de mulheres moçambicanas
            </p>
          </div>
        </section>

        {/* Description and Payment Info */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Description */}
              <div>
                <h2 className="text-3xl font-bold text-aefem-purple mb-6">
                  Porque Juntar-se à AEFEM?
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Ao tornares-te membro da AEFEM, contribuis directamente para a capacitação 
                    e empoderamento de mulheres em todo Moçambique através de:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li>• Programas de educação técnica e profissional</li>
                    <li>• Apoio ao empreendedorismo feminino</li>
                    <li>• Redes de solidariedade e mentoria</li>
                    <li>• Advocacia pelos direitos das mulheres</li>
                    <li>• Projectos de desenvolvimento comunitário</li>
                  </ul>
                  <p>
                    Como membro, terás acesso a eventos exclusivos, workshops de capacitação, 
                    networking com outras mulheres empreendedoras e a oportunidade de fazer 
                    a diferença na vida de centenas de mulheres.
                  </p>
                </div>
              </div>

              {/* Payment Info */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-aefem-purple">Quota Anual</CardTitle>
                    <CardDescription>Investimento no empoderamento feminino</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-6">
                      <div className="text-4xl font-bold text-aefem-pink mb-2">500 MT</div>
                      <div className="text-gray-600">por ano</div>
                    </div>
                    
                    <h3 className="font-semibold mb-4 text-aefem-purple">Opções de Pagamento:</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 p-3 border rounded-lg">
                        <Smartphone className="w-6 h-6 text-green-600" />
                        <div>
                          <div className="font-medium">M-Pesa</div>
                          <div className="text-sm text-gray-600">Pagamento via carteira móvel</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 border rounded-lg">
                        <Smartphone className="w-6 h-6 text-blue-600" />
                        <div>
                          <div className="font-medium">M-Mola</div>
                          <div className="text-sm text-gray-600">Pagamento via carteira móvel</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-3 border rounded-lg">
                        <Building2 className="w-6 h-6 text-purple-600" />
                        <div>
                          <div className="font-medium">Banco Capricórnio</div>
                          <div className="text-sm text-gray-600">Transferência bancária</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-aefem-purple mb-4">
                Formulário de Inscrição
              </h2>
              <p className="text-gray-600">
                Preencha os seus dados para se juntar ao movimento
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="nome">Nome *</Label>
                      <Input
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="apelido">Apelido *</Label>
                      <Input
                        id="apelido"
                        name="apelido"
                        value={formData.apelido}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="provincia">Província *</Label>
                      <select
                        id="provincia"
                        name="provincia"
                        value={formData.provincia}
                        onChange={(e) => setFormData(prev => ({ ...prev, provincia: e.target.value }))}
                        required
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Seleccione a província</option>
                        {provinces.map((province) => (
                          <option key={province} value={province}>{province}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="dataNascimento">Data de Nascimento *</Label>
                      <Input
                        id="dataNascimento"
                        name="dataNascimento"
                        type="date"
                        value={formData.dataNascimento}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Género *</Label>
                    <RadioGroup
                      value={formData.genero}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, genero: value }))}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="feminino" id="feminino" />
                        <Label htmlFor="feminino">Feminino</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="masculino" id="masculino" />
                        <Label htmlFor="masculino">Masculino</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="outro" id="outro" />
                        <Label htmlFor="outro">Outro</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="endereco">Endereço *</Label>
                    <Textarea
                      id="endereco"
                      name="endereco"
                      value={formData.endereco}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="ocupacao">Ocupação *</Label>
                    <Input
                      id="ocupacao"
                      name="ocupacao"
                      value={formData.ocupacao}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="contacto">Contacto *</Label>
                      <Input
                        id="contacto"
                        name="contacto"
                        type="tel"
                        value={formData.contacto}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="+258 XX XXX XXXX"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Método de Pagamento Preferido *</Label>
                    <RadioGroup
                      value={formData.metodoPagamento}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, metodoPagamento: value }))}
                      className="mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mpesa" id="mpesa" />
                        <Label htmlFor="mpesa">M-Pesa</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="mmola" id="mmola" />
                        <Label htmlFor="mmola">M-Mola</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="banco" id="banco" />
                        <Label htmlFor="banco">Banco Capricórnio</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="pt-6">
                    <Button
                      type="submit"
                      className="w-full bg-aefem-pink hover:bg-aefem-purple text-white py-3 text-lg font-semibold"
                    >
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
