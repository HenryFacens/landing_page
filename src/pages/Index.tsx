
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin, Camera, Bell, Search, Shield, Users, CheckCircle, Clock, AlertCircle, Eye, MessageCircle, Heart, Share2, Download, Menu, X } from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Top Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded border border-gray-300 flex items-center justify-center">
                <img src="/lovable-uploads/2466523a-31cf-4d8a-b135-285c72ff4255.png" alt="Black Box" className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-black">Black Box</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#como-funciona" className="text-gray-600 hover:text-black transition-colors">Como Funciona</a>
              <a href="#funcionalidades" className="text-gray-600 hover:text-black transition-colors">Funcionalidades</a>
              <a href="#faq" className="text-gray-600 hover:text-black transition-colors">FAQ</a>
              <a href="#contato" className="text-gray-600 hover:text-black transition-colors">Contato</a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="border-black text-black hover:bg-gray-50">
                <a href="https://forms.google.com/blackbox-interesse" target="_blank" rel="noopener noreferrer">
                  Pré-cadastro
                </a>
              </Button>
              <Button className="bg-black text-white hover:bg-gray-800">
                <Download className="w-4 h-4 mr-2" />
                Download App
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <a href="#como-funciona" className="text-gray-600 hover:text-black transition-colors">Como Funciona</a>
                <a href="#funcionalidades" className="text-gray-600 hover:text-black transition-colors">Funcionalidades</a>
                <a href="#faq" className="text-gray-600 hover:text-black transition-colors">FAQ</a>
                <a href="#contato" className="text-gray-600 hover:text-black transition-colors">Contato</a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" className="border-black text-black hover:bg-gray-50">
                    <a href="https://forms.google.com/blackbox-interesse" target="_blank" rel="noopener noreferrer">
                      Pré-cadastro
                    </a>
                  </Button>
                  <Button className="bg-black text-white hover:bg-gray-800">
                    <Download className="w-4 h-4 mr-2" />
                    Download App
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                  Conectando Cidadãos e 
                  <span className="block">Órgãos Públicos</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  O Black Box revoluciona a forma como reportamos problemas urbanos. 
                  Denuncie, acompanhe e veja sua cidade melhorar em tempo real.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-3">
                  <Download className="w-5 h-5 mr-2" />
                  Baixar Agora
                </Button>
                <Button size="lg" variant="outline" className="border-black text-black hover:bg-gray-50 text-lg px-8 py-3">
                  <a href="https://forms.google.com/blackbox-interesse" target="_blank" rel="noopener noreferrer">
                    Demonstração
                  </a>
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>100% Seguro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Verificado por CPF</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4" />
                  <span>Transparente</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/lovable-uploads/5a045fe1-4e66-49e2-9967-20c878b2a533.png" 
                  alt="Black Box App Interface" 
                  className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Como Funciona o Black Box
            </h2>
            <p className="text-xl text-gray-600">
              Três passos simples para transformar sua cidade
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">1. Cadastre-se</h3>
                <p className="text-gray-600">
                  Faça seu cadastro seguro usando CPF para autenticação verificada
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">2. Reporte</h3>
                <p className="text-gray-600">
                  Fotografe o problema, adicione descrição e localização automática
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">3. Acompanhe</h3>
                <p className="text-gray-600">
                  Veja o status em tempo real e o impacto no mapa de calor da cidade
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Funcionalidades */}
      <section id="funcionalidades" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Funcionalidades Completas
            </h2>
            <p className="text-xl text-gray-600">
              Tudo que você precisa para uma cidade melhor
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Bell className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Feed Público de Denúncias</h3>
                    <p className="text-gray-600">Timeline com todas as denúncias da comunidade, incluindo fotos, descrições, localização e data</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Mapa de Calor Dinâmico</h3>
                    <p className="text-gray-600">Visualização inteligente das regiões com mais problemas reportados</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Autenticação Segura</h3>
                    <p className="text-gray-600">Sistema robusto de verificação por CPF com múltiplos níveis de usuário</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Upload Multimídia</h3>
                    <p className="text-gray-600">Anexe fotos e vídeos para documentar problemas com geolocalização automática</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/lovable-uploads/e34ce79a-3b19-4e50-9852-e0033af2b220.png" 
                alt="Mapa de Calor" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="space-y-3">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <h4 className="font-semibold">Status em Tempo Real</h4>
                <p className="text-sm text-gray-600">Pendente, em andamento, resolvido</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="space-y-3">
                <MessageCircle className="w-8 h-8 text-blue-600" />
                <h4 className="font-semibold">Interação Social</h4>
                <p className="text-sm text-gray-600">Comentários, curtidas e compartilhamento</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="space-y-3">
                <Search className="w-8 h-8 text-purple-600" />
                <h4 className="font-semibold">Busca Avançada</h4>
                <p className="text-sm text-gray-600">Filtros por categoria e palavra-chave</p>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <CardContent className="space-y-3">
                <Bell className="w-8 h-8 text-orange-600" />
                <h4 className="font-semibold">Notificações Push</h4>
                <p className="text-sm text-gray-600">Atualizações de status em tempo real</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Múltiplos Níveis de Usuário */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Múltiplos Níveis de Usuário
            </h2>
            <p className="text-xl text-gray-600">
              Cada perfil com permissões específicas para máxima segurança
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="text-center space-y-4">
                <Users className="w-12 h-12 text-blue-600 mx-auto" />
                <h3 className="text-xl font-bold">Cidadão</h3>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Criar e acompanhar denúncias</li>
                  <li>• Comentar e curtir posts</li>
                  <li>• Visualizar mapa de calor</li>
                  <li>• Receber notificações</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="text-center space-y-4">
                <Shield className="w-12 h-12 text-green-600 mx-auto" />
                <h3 className="text-xl font-bold">Órgão Público</h3>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Responder denúncias</li>
                  <li>• Atualizar status</li>
                  <li>• Comunicação direta</li>
                  <li>• Relatórios de gestão</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-lg">
              <CardContent className="text-center space-y-4">
                <AlertCircle className="w-12 h-12 text-red-600 mx-auto" />
                <h3 className="text-xl font-bold">Administrador</h3>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Gerenciar usuários</li>
                  <li>• Editar categorias</li>
                  <li>• Monitorar sistema</li>
                  <li>• Controle de acesso</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Engajamento */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Junte-se à Revolução da Transparência
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Órgãos públicos, prefeitos, secretários: integrem-se ao Black Box e construam 
              uma ponte direta com os cidadãos. Transformem denúncias em ações concretas.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Eye className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Transparência</h3>
                <p className="text-gray-600">Processos abertos e acompanhamento público de todas as ações</p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Eficiência</h3>
                <p className="text-gray-600">Respostas rápidas e gestão inteligente de recursos públicos</p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Participação</h3>
                <p className="text-gray-600">Engajamento cidadão ativo na melhoria urbana</p>
              </div>
            </div>

            <Button size="lg" className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-3 mt-8">
              <a href="https://forms.google.com/blackbox-orgaos" target="_blank" rel="noopener noreferrer">
                Solicitar Parceria Institucional
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Exemplo Real */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Impacto Real na Comunidade
            </h2>
            <p className="text-xl text-gray-600">
              Veja como o Black Box está transformando cidades
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="p-6 border-l-4 border-l-green-500 shadow-lg">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <img src="/lovable-uploads/92e53558-a0f8-4077-af6d-c639d8bae1e3.png" alt="Profile" className="w-12 h-12 rounded-full" />
                    <div>
                      <h4 className="font-semibold">Lucas Silva</h4>
                      <p className="text-sm text-gray-500">Rua Três Poderes, 409</p>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Resolvido</Badge>
                  </div>
                  <p className="text-gray-700">
                    "Reportei um buraco gigante na minha rua e em 5 dias foi resolvido! 
                    O órgão público respondeu diretamente pelo app. Incrível!"
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>24</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>8</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Share2 className="w-4 h-4" />
                      <span>3</span>
                    </span>
                  </div>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-black">1,247</div>
                  <div className="text-sm text-gray-600">Denúncias Resolvidas</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-black">89%</div>
                  <div className="text-sm text-gray-600">Taxa de Resposta</div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-black">15 dias</div>
                  <div className="text-sm text-gray-600">Tempo Médio</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-black">
                Arquitetura Moderna e Segura
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Frontend Responsivo</h4>
                    <p className="text-gray-600">Arquitetura em camadas para máxima performance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Backend MVC</h4>
                    <p className="text-gray-600">Padrão Model-View-Controller para robustez</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">APIs Integradas</h4>
                    <p className="text-gray-600">Comunicação eficiente entre frontend e backend</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Recuperação de Senha</h4>
                    <p className="text-gray-600">Sistema seguro e fácil de usar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Esclarecemos suas principais dúvidas
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Como meus dados pessoais são protegidos?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Utilizamos criptografia de ponta a ponta e autenticação robusta por CPF. Todos os dados são armazenados seguindo padrões de segurança LGPD, com acesso restrito e auditoria completa.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Como as denúncias são verificadas?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Cada denúncia passa por validação automática de geolocalização e análise de conteúdo. Usuários verificados por CPF aumentam a credibilidade, e o sistema possui moderação para prevenir spam.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Como funciona a resposta dos órgãos públicos?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Órgãos públicos cadastrados recebem notificações automáticas e podem responder diretamente pelo app, atualizando o status da denúncia e mantendo comunicação transparente com o cidadão.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                O app funciona offline?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Sim! Você pode criar denúncias offline que serão sincronizadas automaticamente quando houver conexão. O app armazena temporariamente fotos e dados localmente.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold">
                Como me torno um órgão público parceiro?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Entre em contato através do formulário de parceria institucional. Nossa equipe fará a validação e configurará o acesso com as permissões adequadas para sua instituição.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Pronto para Transformar sua Cidade?
            </h2>
            <p className="text-xl text-gray-300">
              Faça parte da revolução da participação cidadã. 
              Baixe o Black Box e comece a fazer a diferença hoje mesmo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-3">
                <Download className="w-5 h-5 mr-2" />
                Download Grátis
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-3">
                <a href="https://forms.google.com/blackbox-interesse" target="_blank" rel="noopener noreferrer">
                  Quero Saber Mais
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded border border-gray-700 flex items-center justify-center">
                  <img src="/lovable-uploads/2466523a-31cf-4d8a-b135-285c72ff4255.png" alt="Black Box" className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold">Black Box</span>
              </div>
              <p className="text-gray-400">
                Conectando cidadãos e órgãos públicos para uma cidade melhor.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#como-funciona" className="hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentação</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LGPD</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Black Box. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-5 h-5 bg-gray-400 rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <div className="w-5 h-5 bg-gray-400 rounded"></div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <div className="w-5 h-5 bg-gray-400 rounded"></div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
