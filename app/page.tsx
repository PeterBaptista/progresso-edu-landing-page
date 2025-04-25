"use client";

import benefits from "@/public/benefits.png";
import hero from "@/public/hero.png";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  CreditCard,
  GraduationCap,
  Menu,
  QrCode,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Icons, WhatsAppIcon } from "@/components/ui/icons";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col relative">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl">
          <div className="flex items-center gap-2">
            <Icons.logo className="h-8 w-8 fill-primary" />
            <span className="text-lg font-bold text-primary">
              Progresso Educacional
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#recursos"
              className="text-sm font-medium hover:underline"
            >
              Recursos
            </Link>
            <Link
              href="#beneficios"
              className="text-sm font-medium hover:underline"
            >
              Benefícios
            </Link>
            <Link
              href="#depoimentos"
              className="text-sm font-medium hover:underline"
            >
              Depoimentos
            </Link>
            <Link
              href="#contato"
              className="text-sm font-medium hover:underline"
            >
              Contato
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="hidden md:flex bg-primary ">Agendar Demo</Button>
            <Button size="icon" variant="ghost" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-6">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                    Gestão Escolar Descomplicada para Pequenas Instituições
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Uma plataforma feita sob medida para pequenas escolas e
                    instituições de ensino que precisam de praticidade e
                    eficiência na gestão do dia a dia.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-primary hover:bg-navy-800">
                    Solicitar Demonstração
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Conheça Mais</Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Image
                  src={hero}
                  alt="Plataforma Progresso Educacional"
                  sizes="100vw"
                  className="rounded-lg object-cover "
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="recursos"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg text-primary px-3 py-1 text-sm bg-secondary/30">
                  Recursos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                  Soluções completas para sua escola
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Pensada especialmente para pequenas instituições de ensino,
                  nossa plataforma reúne ferramentas práticas e fáceis de usar
                  para o dia a dia escolar.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12 justify-items-center">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-secondary p-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">
                  Gestão Escolar Simplificada
                </h3>
                <p className="text-center text-gray-500">
                  Tudo em um só lugar: matrículas, boletins, presença e evolução
                  dos alunos com poucos cliques.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-secondary p-3">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">
                  Agenda Escolar Digital
                </h3>
                <p className="text-center text-gray-500">
                  Pais e alunos sempre informados com acesso à agenda pelo app e
                  QR Code.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-secondary p-3">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">
                  Crachás Inteligentes
                </h3>
                <p className="text-center text-gray-500">
                  Identificação prática e segura para os alunos, com tecnologia
                  integrada para uso diário.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-secondary p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">
                  Comunicação Facilitada
                </h3>
                <p className="text-center text-gray-500">
                  Troca de mensagens eficiente entre direção, professores,
                  alunos e famílias.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-secondary p-3">
                  <QrCode className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">
                  Recursos com QR Code
                </h3>
                <p className="text-center text-gray-500">
                  Acesso rápido a documentos, agenda e outros recursos da escola
                  usando QR Codes personalizados.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-secondary p-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">
                  E muito mais!
                </h3>
                <p className="text-center text-gray-500">
                  Relatórios prontos, gestão financeira, biblioteca digital e
                  funcionalidades pensadas para sua realidade.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="beneficios"
          className="w-full py-12 md:py-24 lg:py-32 bg-navy-50"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center">
                <Image
                  src={benefits}
                  alt="Benefícios da plataforma"
                  sizes="100vw"
                  className="rounded-lg object-cover max-w-full lg:min-w-[500px]"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg text-primary px-3 py-1 text-sm bg-secondary/30">
                    Benefícios
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
                    Ideal para escolas que querem crescer com organização
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Criada com a realidade das pequenas escolas em mente, nossa
                    plataforma simplifica o dia a dia e fortalece a relação com
                    alunos e famílias.
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">
                      Menos papelada e mais tempo para o que importa: ensinar
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">
                      Comunicação clara e rápida com pais e responsáveis
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">
                      Monitoramento fácil do progresso dos alunos
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">
                      Segurança dos dados de acordo com a LGPD
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-gray-700">
                      Suporte humano, de verdade, todos os dias
                    </span>
                  </li>
                </ul>
                <div>
                  <Button className="bg-primary hover:bg-navy-800">
                    Ver Demonstração
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="depoimentos"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg text-primary px-3 py-1 text-sm bg-secondary/30">
                  Depoimentos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                  O que dizem nossas escolas parceiras
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Diretores, coordenadores e famílias compartilham como o
                  Progresso Educacional fez a diferença em suas rotinas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12 justify-items-center">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <p className="text-gray-500 italic">
                    “O Progresso Educacional transformou nossa gestão. Hoje
                    conseguimos economizar tempo e recursos, além de manter um
                    canal aberto com os pais, algo essencial para nossa escola.”
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-secondary p-1 h-12 w-12 flex items-center justify-center">
                    <span className="text-primary font-bold">MF</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Maria Fernandes</h4>
                    <p className="text-sm text-gray-500">
                      Diretora, Colégio Futuro
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <p className="text-gray-500 italic">
                    “Com os relatórios e dashboards em tempo real, consigo
                    acompanhar o progresso das turmas e planejar intervenções
                    mais estratégicas. É uma ferramenta essencial para a
                    coordenação.”
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-secondary  p-1 h-12 w-12 flex items-center justify-center">
                    <span className="text-primary font-bold">RS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Ricardo Silva</h4>
                    <p className="text-sm text-gray-500">
                      Coordenador, Escola Nova Era
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <p className="text-gray-500 italic">
                    “Acompanho todas as atividades e notas do meu filho pelo
                    celular. Saber que estou por dentro de tudo me traz
                    segurança e tranquilidade.”
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-secondary  p-1 h-12 w-12 flex items-center justify-center">
                    <span className="text-primary font-bold">CA</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Carla Almeida</h4>
                    <p className="text-sm text-gray-500">Mãe de aluno</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contato"
          className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Pronto para transformar sua escola?
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Entre em contato conosco hoje mesmo e descubra como o
                  Progresso Educacional pode ajudar sua instituição.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2 mx-auto">
                <form className="grid gap-4">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-900 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Nome"
                    type="text"
                  />
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-900 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Email"
                    type="email"
                  />
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm text-gray-900 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Telefone"
                    type="tel"
                  />
                  <Button className="w-full bg-white text-primary hover:bg-gray-100">
                    Solicitar Demonstração
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-white py-6">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6 max-w-7xl">
          <div className="flex items-center gap-2">
            <Icons.logo className="h-8 w-8 fill-primary" />
            <span className="text-lg font-bold text-primary">
              Progresso Educacional
            </span>
          </div>
          <p className="text-center text-sm text-gray-500 md:text-left">
            © 2024 Progresso Educacional. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:underline">
              Termos
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Privacidade
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Contato
            </Link>
          </div>
        </div>
      </footer>
      {/* WhatsApp Floating Button */}
      <Link
        href="https://wa.me/5500000000000" // Replace with your actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary fixed bottom-6  right-6 z-50 flex h-14 w-14 lg:h-20 lg:w-20 items-center justify-center rounded-full  text-white shadow-lg transition-all hover:bg-primary/80 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
        aria-label="Contato via WhatsApp"
      >
        <WhatsAppIcon className="fill-white h-10 w-10 lg:h-14 lg:w-14" />
      </Link>
    </div>
  );
}
