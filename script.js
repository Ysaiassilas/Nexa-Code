document.addEventListener("DOMContentLoaded", () => {
    // ===================================
    // HEADER SCROLL (Transparente -> Branco)
    // ===================================
    const header = document.querySelector("header");

    const handleHeaderScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };

    window.addEventListener("scroll", handleHeaderScroll);
    handleHeaderScroll(); 

    // ===================================
    // ANIMAÇÃO DE SCROLL (Reveal)
    // ===================================
    const handleScrollAnimation = () => {
        const elementos = document.querySelectorAll("section:not(.hero)"); 
        const triggerPoint = window.innerHeight * 0.85; 

        elementos.forEach(el => {
            const distancia = el.getBoundingClientRect().top;
            if (distancia < triggerPoint) {
                el.classList.add("show");
            }
        });
    };
    
    window.addEventListener("scroll", handleScrollAnimation);
    handleScrollAnimation(); 

    // ===================================
    // MENU RESPONSIVO
    // ===================================
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav");

    const toggleMenu = () => {
        menuToggle.classList.toggle("active");
        nav.classList.toggle("active");
        const isExpanded = menuToggle.classList.contains("active");
        menuToggle.setAttribute("aria-expanded", isExpanded);
    };

    menuToggle.addEventListener("click", toggleMenu);

    // FECHAR MENU AO CLICAR EM LINK
    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            
            if (menuToggle.classList.contains("active")) {
                toggleMenu(); 
            }

            // O scroll funciona para as novas seções
            const alvo = document.querySelector(link.getAttribute("href"));
            window.scrollTo({ top: alvo.offsetTop - 60, behavior: "smooth" });
        });
    });

    // ===================================
    // INJEÇÃO DINÂMICA DOS MEMBROS DA EQUIPE (11 adicionais)
    // ===================================
    const adicionarMembrosEquipe = () => {
        const novosMembros = [
            { nome: "Isabella Campos", funcao: "Gerente de Projetos" },
            { nome: "Pedro Ferreira", funcao: "Engenheiro DevOps" },
            { nome: "Mariana Silva", funcao: "Front-end Sênior" },
            { nome: "Bruno Reis", funcao: "Desenvolvedor Back-end" },
            { nome: "Carla Santos", funcao: "Analista de QA" },
            { nome: "Thiago Oliveira", funcao: "Especialista em Dados" },
            { nome: "Gabriela Mendes", funcao: "Marketing Digital" },
            { nome: "Felipe Costa", funcao: "Suporte Técnico" },
            { nome: "Laura Rocha", funcao: "Designer de Interação" },
            { nome: "Victor Nunes", funcao: "Estagiário de Programação" },
            { nome: "Sofia Lima", funcao: "Analista de Conteúdo" }
        ];

        const carouselContainer = document.querySelector('.equipe-carousel');

        novosMembros.forEach(membro => {
            const membroHTML = `
                <div class="membro">
                    <img src="https://via.placeholder.com/150" alt="Foto de ${membro.nome}, ${membro.funcao}" width="150" height="150" loading="lazy" />
                    <h3>${membro.nome}</h3>
                    <p>${membro.funcao}</p>
                </div>
            `;
            carouselContainer.insertAdjacentHTML('beforeend', membroHTML);
        });
    };

    // ===================================
    // INJEÇÃO DINÂMICA DOS PROJETOS DO PORTFÓLIO (15 no total)
    // ===================================
    const adicionarProjetosPortfolio = () => {
        const projetos = [
            { nome: "E-commerce Mestre", descricao: "Marketplace robusto com foco em escalabilidade e UX de compra e venda.", link: "https://www.mercadolivre.com.br" },
            { nome: "App On-Demand", descricao: "Desenvolvimento nativo com geolocalização e sistema de pagamento integrado.", link: "https://www.ifood.com.br" },
            { nome: "Sistema ERP", descricao: "Software personalizado para otimização de processos internos e gestão de recursos.", link: "https://www.sap.com/brazil/products/erp.html" },
            { nome: "Portal Corporativo", descricao: "Plataforma interna para comunicação e compartilhamento de documentos de grandes equipes.", link: "https://www.microsoft.com/pt-br/microsoft-365/sharepoint/collaboration" },
            { nome: "CRM Exclusivo", descricao: "Desenvolvimento de sistema para gestão de relacionamento com o cliente customizado.", link: "https://www.salesforce.com/br/" },
            { nome: "Website Institucional", descricao: "Criação de site focado em marca, SEO e geração de leads para uma grande empresa de tecnologia.", link: "https://www.google.com" },
            { nome: "Plataforma EAD", descricao: "Ambiente virtual de aprendizagem com sistema de certificado, pagamento e gestão de conteúdo.", link: "https://www.udemy.com/" },
            { nome: "App Fitness Tracker", descricao: "App mobile nativo com integração GPS e gamificação para monitoramento de atividades físicas.", link: "https://www.strava.com/mobile" },
            { nome: "Sistema Fintech", descricao: "Desenvolvimento de API e plataforma de gestão de pagamentos segura e de alta disponibilidade.", link: "https://www.nubank.com.br" },
            { nome: "Landing Page SEO", descricao: "Página única desenvolvida com foco em velocidade e otimização para SEO.", link: "https://neilpatel.com/" },
            { nome: "Sistema B2B", descricao: "Plataforma para agendamento de serviços com integração de calendários e faturamento automatizado.", link: "https://www.booking.com" },
            { nome: "Blog Corporativo", descricao: "Desenvolvimento de um CMS para blog com ênfase em performance de carregamento e UX para leitura.", link: "https://blog.hubspot.com/" },
            { nome: "App de Notícias", descricao: "App com feed dinâmico e notificação push, projetado para alta audiência e baixo consumo de dados.", link: "https://g1.globo.com/" },
            { nome: "Plataforma Leilão", descricao: "Sistema com lances em tempo real (websockets) e sistema de autenticação de usuários e produtos.", link: "https://www.ebay.com/" },
            { nome: "Sistema Monitoramento", descricao: "Desenvolvimento de dashboards de BI para visualização e análise de grandes volumes de dados.", link: "https://www.datarobot.com/br/" }
        ];

        const carouselContainer = document.querySelector('.portfolio-carousel');

        projetos.forEach(projeto => {
            const encodedName = encodeURIComponent(projeto.nome); 
            const projetoHTML = `
                <div class="projeto-card">
                    <a href="${projeto.link}" target="_blank" rel="noopener noreferrer">
                        <img src="https://via.placeholder.com/400x200/808080/FFFFFF?text=${encodedName}" 
                            alt="Imagem do Projeto ${projeto.nome}" loading="lazy" width="400" height="200">
                    </a>
                    <div class="card-info">
                        <h4><a href="${projeto.link}" target="_blank" rel="noopener noreferrer">${projeto.nome}</a></h4>
                        <p>${projeto.descricao}</p>
                    </div>
                </div>
            `;
            carouselContainer.insertAdjacentHTML('beforeend', projetoHTML);
        });
    };
    
    // CHAMA AS FUNÇÕES DE INJEÇÃO
    adicionarMembrosEquipe();
    adicionarProjetosPortfolio();

    // ===================================
    // INICIALIZAÇÃO DOS CARROSSEIS (SLICK)
    // ===================================

    // Inicialização do Carrossel de Portfólio (15 itens)
    $('.portfolio-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }
        ]
    });

    // Inicialização do Carrossel da Equipe (14 itens)
    $('.equipe-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }
        ]
    });
});