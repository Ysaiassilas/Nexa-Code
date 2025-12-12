document.addEventListener("DOMContentLoaded", () => {

// ===================================
// CORTINAS DE INTRODUÇÃO (Curtain Effect)
// ===================================
const leftCurtain = document.querySelector(".left-curtain");
const rightCurtain = document.querySelector(".right-curtain");

// Função para abrir as cortinas
const openCurtains = () => {
    // Adiciona a classe 'open' após 700ms (0.7 segundo)
    setTimeout(() => {
        leftCurtain.classList.add("open");
        rightCurtain.classList.add("open");

        // Remove a div completamente do fluxo após a animação
        setTimeout(() => {
            const overlay = document.querySelector(".curtain-overlay");
            if (overlay) {
                overlay.style.display = 'none';
            }
        }, 2000); // Duração da transição no CSS
    }, 700);
};

// Chama a função de abertura logo ao carregar a página
openCurtains();

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

            // Scroll suave para o destino
            const alvo = document.querySelector(link.getAttribute("href"));
            window.scrollTo({ top: alvo.offsetTop - 60, behavior: "smooth" });
        });
    });

    // ===================================
    // INJEÇÃO DINÂMICA DOS MEMBROS DA EQUIPE (CORRIGIDO)
    // ===================================
    const adicionarMembrosEquipe = () => {
        // Agora inclui todos os membros, inclusive os 3 iniciais
        const membros = [ 
            // Membros que estavam no HTML
            { nome: "Kelly Bispo", funcao: "CEO & Fundadora", imagem: "./imagens-turma/Kelly.png" },
            { nome: "Danielle Chagas", funcao: "Analista de Requisitos", imagem: "./imagens-turma/Dani.jpg" },
            { nome: "Gabriely Mares", funcao: "Analista de Requisitos", imagem: "./imagens-turma/Gaby.jpg" },
            
            // Novos membros (que não estavam aparecendo)
            { nome: "João Victor", funcao: "Dev Full-Stack", imagem: "./imagens-turma/joao.jpg" },
            { nome: "Lucyano Andrade", funcao: "Dev Front-end", imagem: "./imagens-turma/Lucyano.png" },
            { nome: "Maria Clara Valadares", funcao: "Analista de Requisitos", imagem: "./imagens-turma/Maria.png" },
            { nome: "Pedro Augusto", funcao: "Dev Full-Stack", imagem: "./imagens-turma/PedroA.jpg" },
            { nome: "Pedro Rómulo", funcao: "Dev Full-Stack", imagem: "./imagens-turma/PedroR.jpg" },
            { nome: "Ruan Carlos", funcao: "Dev Front-end", imagem: "./imagens-turma/Rhuan.jpg" },
            { nome: "Samuel Henrique", funcao: "Dev Full-Stack", imagem: "./imagens-turma/SamuelH.png" },
            { nome: "Samuel Maia", funcao: "Dev Front-end", imagem: "./imagens-turma/SamuelM.jpg" },
            { nome: "Sophia Martini", funcao: "Dev Full-Stack", imagem: "./imagens-turma/Sophia.png" },
            { nome: "Victor Gabriel", funcao: "Dev Front-end", imagem: "./imagens-turma/Victor.png" },
            { nome: "Ysaias Silas", funcao: "Dev Front-end", imagem: "./imagens-turma/Ysaias.jpg" }
        ];

        const carouselContainer = document.querySelector('.equipe-carousel');
        
        // Limpa o conteúdo inicial do carousel (necessário para a Opção 1)
        carouselContainer.innerHTML = ''; 
        
        membros.forEach((membro) => {
            // ⚠️ Lógica Corrigida: A condição de parada 'if (index >= membrosIniciais) return;' foi removida!
            
            const membroHTML = `
                <div class="membro">
                    <img src="${membro.imagem}" alt="Foto de ${membro.nome}, ${membro.funcao}" width="150" height="150" loading="lazy" />
                    <h3>${membro.nome}</h3>
                    <p>${membro.funcao}</p>
                </div>
            `;
            carouselContainer.insertAdjacentHTML('beforeend', membroHTML);
        });
    };

    // ===================================
    // INJEÇÃO DINÂMICA DOS PROJETOS DO PORTFÓLIO
    // ===================================
    const adicionarProjetosPortfolio = () => {
        // ⚠️ Nota: Para o portfolio, o array deve conter APENAS os projetos 
        // que NÃO estão no HTML, ou todos eles, e você deve limpar o HTML 
        // (Optei por manter o seu código, que adiciona todos, 
        // resultando em duplicatas se o HTML original não for limpo).
        const projetos = [
            { nome: "Passe Leve", descricao: "Sistema feito para uma turma de nutrição como parte do nosso aprendizado.", link: "https://projetonutry.vercel.app/index.html", imagem: "./imgens-projetos/Passe-leve.png" },
            { nome: "Estoque Fácil", descricao: "Um sitema dedicado ao gerenciamento no estoque de produtos.", link: "link-do-estoque-facil", imagem: "./imgens-projetos/Estoque-Facil.png" },
            { nome: "Dieta Popular", descricao: "Sistema feito para uma turma de nutrição como parte do nosso aprendizado.", link: "https://www.ifood.com.br", imagem: "./imgens-projetos/Dieta-popular.png" },
            { nome: "Equilibra", descricao: "Sistema feito para uma turma de nutrição como parte do nosso aprendizado.", link: "https://www.sap.com/brazil/products/erp.html", imagem: "./imgens-projetos/Equilibra.png" },
            { nome: "ValidaAlimento", descricao: "Sistema feito para uma turma de nutrição como parte do nosso aprendizado.", link: "https://www.microsoft.com/pt-br/microsoft-365/sharepoint/collaboration", imagem: "./imgens-projetos/ValidaAlimento.png" },
            { nome: "New Iformation", descricao: "Sistema feito com o intuito de ser uma forma de aprendizagem diversificada.", link: "https://www.salesforce.com/br/", imagem: "./imgens-projetos/New-information.png" },
            { nome: "Vitabery", descricao: "Sistema feito pra uma industria de açai.", link: "https://www.google.com", imagem: "./imgens-projetos/Vitabery.png" },
            { nome: "Sabium", descricao: "Ambiente virtual de aprendizagem com sistema de certificado, pagamento e gestão de conteúdo.", link: "https://www.udemy.com/", imagem: "./imgens-projetos/Sabium.png" },
            { nome: "Pyxis tour Brasil", descricao: "Sistema feito para uma agencia de viagens.", link: "https://www.strava.com/mobile", imagem: "./imgens-projetos/Pyxis.png" },
            { nome: "Beleza Suave", descricao: "Desenvolvimento de API e plataforma de gestão de pagamentos segura e de alta disponibilidade.", link: "https://peu-f.github.io/SalaoBelezaSuave/", imagem: "./imgens-projetos/Beleza-suave.png" },
        ];

        const carouselContainer = document.querySelector('.portfolio-carousel');
        // Pula os 4 projetos iniciais já presentes no HTML - Removendo esta lógica para evitar duplicatas, se os 4 iniciais já foram adicionados no HTML.
        // const projetosIniciais = 4; // REMOVIDO para este exemplo.
        
        projetos.forEach(projeto => {
            const projetoHTML = `
                <div class="projeto-card">
                    <a href="${projeto.link}" target="_blank" rel="noopener noreferrer">
                        <img src="${projeto.imagem}"
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
    // INICIALIZAÇÃO DOS CARROSSEIS (SLICK) - RESPONSIVO
    // ===================================

    // Inicialização do Carrossel de Portfólio
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

    // Inicialização do Carrossel da Equipe
    $('.equipe-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4, // Exibe 4 slides em telas grandes (desktop)
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 3, slidesToScroll: 1 } },
            { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }
        ]
    });
});