import React from 'react';

// --- DEFINIÇÃO DE TIPOS COM TYPESCRIPT ---
// Usar interfaces ajuda a garantir que os dados passados para o componente
// tenham o formato correto, evitando erros.

// Define a estrutura para um link de navegação
interface NavLink {
  href: string;
  label: string;
}

// Define a estrutura para um link de rede social
interface SocialLink {
  href: string;
  name: string;
  icon: JSX.Element; // O ícone será um componente JSX (SVG)
}

// --- COMPONENTE DO RODAPÉ ---
// Usamos React.FC (Functional Component) para tipar o nosso componente
const Footer: React.FC = () => {

  // Dados de navegação - fáceis de editar aqui
  const navigationLinks: NavLink[] = [
    { href: '#', label: 'Início' },
    { href: '#', label: 'Nossos Serviços' },
    { href: '#', label: 'Sobre Nós' },
    { href: '#', label: 'Contato' },
  ];

  // Dados das redes sociais
  const socialLinks: SocialLink[] = [
    {
      href: "#",
      name: "Instagram",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.488 2.53c.636-.247 1.363-.416 2.427-.465C9.93 2.013 10.284 2 12.315 2zm0 1.62c-2.403 0-2.748.01-3.725.058-.942.045-1.503.207-1.92.372a3.292 3.292 0 00-1.176.762 3.292 3.292 0 00-.762 1.176c-.164.417-.327.978-.372 1.92-.048.977-.058 1.322-.058 3.725s.01 2.748.058 3.725c.045.942.207 1.503.372 1.92.165.417.38 1.815.762 1.176a3.292 3.292 0 001.176.762c.417.165.978.327 1.92.372.977.048 1.322.058 3.725.058s2.748-.01 3.725-.058c.942-.045 1.503-.207 1.92-.372a3.292 3.292 0 001.176-.762 3.292 3.292 0 00.762-1.176c.165-.417.327-.978.372-1.92.048-.977.058-1.322.058-3.725s-.01-2.748-.058-3.725c-.045-.942-.207-1.503-.372-1.92a3.292 3.292 0 00-.762-1.176 3.292 3.292 0 00-1.176-.762c-.417-.164-.978-.327-1.92-.372C15.063 3.63 14.718 3.62 12.315 3.62zM12 7.003a4.997 4.997 0 100 9.994 4.997 4.997 0 000-9.994zM12 15a3 3 0 110-6 3 3 0 010 6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      href: "#",
      name: "Facebook",
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      )
    },
  ];

  return (
    <footer className="bg-gray-800 text-white font-sans">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Coluna 1: Sobre a Clínica */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">Clínica VetAmor</h3>
            <p className="text-gray-400">Cuidando do seu melhor amigo com carinho e tecnologia. Oferecemos serviços completos para a saúde e bem-estar do seu pet.</p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contato e Endereço */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>Rua dos Animais Felizes, 123, Bairro Pet, Cidade - UF, CEP 00000-000</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span>(11) 98765-4321</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <span>contato@vetamor.com.br</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Horário e Redes Sociais */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horário</h3>
            <ul className="space-y-2 text-gray-400">
              <li><strong>Seg - Sex:</strong> 8:00 - 19:00</li>
              <li><strong>Sábado:</strong> 9:00 - 13:00</li>
              <li><strong>Domingo:</strong> Fechado</li>
              <li className="pt-1"><strong className="text-teal-400">Emergência 24h:</strong> (11) 91234-5678</li>
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Siga-nos</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                    <span className="sr-only">{link.name}</span>
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divisor e Direitos Autorais */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Clínica Veterinária VetAmor. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
