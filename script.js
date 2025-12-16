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
            // Verifica se o alvo existe antes de rolar
            if (alvo) {
                // Ajusta -60px para compensar a altura do header fixo
                window.scrollTo({ top: alvo.offsetTop - 60, behavior: "smooth" });
            }
        });
    });

    // ===================================
    // INJEÇÃO DINÂMICA DOS MEMBROS DA EQUIPE (CORRIGIDO)
    // ===================================
    const adicionarMembrosEquipe = () => {
        const membros = [ 
            { nome: "Kelly Bispo", funcao: "CEO & Fundadora", imagem: "./imagens-turma/Kelly.png" },
            { nome: "Danielle Chagas", funcao: "Analista de Requisitos", imagem: "./imagens-turma/Dani.jpg" },
            { nome: "Gabriely Mares", funcao: "Analista de Requisitos", imagem: "./imagens-turma/Gaby.jpg" },
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
        
        // 🟢 CORREÇÃO: Garante a limpeza do HTML antes de injetar os membros
        carouselContainer.innerHTML = ''; 
        
        membros.forEach((membro) => {
            
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
    // INJEÇÃO DINÂMICA DOS PROJETOS DO PORTFÓLIO (CORRIGIDO)
    // ===================================
    const adicionarProjetosPortfolio = () => {
        
        const projetos = [
            { nome: "HR System ", descricao: "Sistema desenvolvido pra uma empresa de RH que tem como objetivo mostrar vagas de emprego onde o candidato consegue ver o cargo e o salário que estão disponíveis para a vaga que ele está se candidatando.", link: "https://projetonutry.vercel.app/index.html", imagem: "./imgens-projetos/HR-system.png" },
            { nome: "Saborear+", descricao: "Uma homepage criada para uma turma de gastronomia sobre o seu PI (Projeto Integrador), que mostra o esforço e dedicação de cada membro da equipe, representada em um lindo banquete.", link: "https://projeto-casamento-tau.vercel.app/#Montagem", imagem: "./imgens-projetos/Saborear+.png" },
            { nome: "Agendamento de Reserva Auditório", descricao: "Sistema que irá ajudar na logística do Senac em relação ao agendamento da reserva do auditório.", link: "https://projetonutry.vercel.app/index.html", imagem: "./imgens-projetos/Senac.png" },
            { nome: "NutryFit", descricao: "Um software que permite a análise do estado nutricional de pacientes com base em informações como IMC, idade, altura,peso, percentual de gordura e outras métricas.", link: "https://projetonutry.vercel.app/index.html", imagem: "./imgens-projetos/NutryFit.png" },
            { nome: "Passe Leve", descricao: "Uma aplicação que ajuda a criar cardápios semanais balanceados, levando em consideração restrições alimentares, preferências e preferências dos clientes.", link: "https://projetonutry.vercel.app/index.html", imagem: "./imgens-projetos/Passe-leve.png" },
            { nome: "Estoque Fácil", descricao: "Um programa que gerencia o estoque de alimentos em cozinhas industriais, escolas, hospitais e restaurantes, com alertas para vencimento de produtos e sugestões de propostas.", link: "https://vick-g.github.io/EstoqueFacil/", imagem: "./imgens-projetos/Estoque-Facil.png" },
            { nome: "Dieta Popular", descricao: "Um software voltado para atletas e praticantes de atividades físicas, que calcula necessidades energéticas e sugere refeições conforme os objetivos (hipertrofia, emagrecimento, etc.).", link: "https://www.ifood.com.br", imagem: "./imgens-projetos/Dieta-popular.png" },
            { nome: "Equilibra", descricao: "Um sistema em que os usuários inserem os alimentos consumidos ao longo do dia, recebendo feedback sobre a qualidade da alimentação e sugestões para uma dieta balanceada.", link: "https://www.sap.com/brazil/products/erp.html", imagem: "./imgens-projetos/Equilibra.png" },
            { nome: "ValidaAlimento", descricao: "Um programa que verifica a qualidade e validade dos alimentos disponíveis em uma instituição, melhorando por opções mais saudáveis ​​e balanceadas.", link: "https://valida-alimento.vercel.app/", imagem: "./imgens-projetos/ValidaAlimento.png" },
            { nome: "New Iformation", descricao: "Site feito com o intuito de ser uma ferramenta de aprendizagem diversificada, onde não apenas alunos, mas também professores podem utilizá-la, seja para aprender, revisar ou até mesmo aprimorar o seu conhecimento em uma área específica.", link: "https://www.salesforce.com/br/", imagem: "./imgens-projetos/New-information.png" },
            { nome: "Vitabery", descricao: "sistema feito pra uma industria de açai.", link: "https://www.google.com", imagem: "./imgens-projetos/Vitabery.png" },
            { nome: "Sabium", descricao: "Ambiente Virtual de Aprendizagem de conteúdo escolar, vestibular e de concursos, com sistemas de certificação, pagamento e gestão de conteúdo.", link: "https://www.udemy.com/", imagem: "./imgens-projetos/Sabium.png" },
            { nome: "Pyxis tour Brasil", descricao: "Sistema feito para uma agencia de viagens.", link: "https://www.strava.com/mobile", imagem: "./imgens-projetos/Pyxis.png" },
            { nome: "Beleza Suave", descricao: "Aplicação que facilita o agendamento de serviços de salão de beleza. A aplicação reduz o esforço para marcar serviços no salão, evitando ligações telefônicas ou descolamentos desnecessários.", link: "https://peu-f.github.io/SalaoBelezaSuave/", imagem: "./imgens-projetos/Beleza-suave.png" },
        ];

        const carouselContainer = document.querySelector('.portfolio-carousel');
        
        // 🟢 CORREÇÃO CRÍTICA: Limpa o conteúdo HTML estático existente para evitar duplicatas.
        carouselContainer.innerHTML = ''; 
        
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
