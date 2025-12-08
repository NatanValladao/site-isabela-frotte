export const siteConfig = {
  name: "Isabela Frotté Mello",
  shortName: "Isabela Frotté",
  title: "Psicóloga Isabela Frotté Mello (CRP 05/77920)",
  description: "Atendimento online para adolescentes, adultos e casais. Especialista em TCC e Neuropsicologia.",
  contact: {
    phone: "5522981706932",
    formattedPhone: "(22) 98170-6932",
    email: "contato@isabelafrotte.com",
    whatsappMessage: "Oi! Conheci seu trabalho através do seu site e gostaria de saber mais.",
  },
  social: {
    instagram: "https://www.instagram.com/psi.isabelafrotte",
    linkedin: "https://www.linkedin.com/in/isabelafrotte", // Ajuste se necessário
  },
  nav: [
    { label: "Início", href: "/" },
    { label: "Sobre", href: "/sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Blog", href: "/blog" },
    { label: "Contato", href: "/contato" },
  ],
} as const;
