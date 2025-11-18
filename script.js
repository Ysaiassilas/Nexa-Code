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
        // Inclui a seção Hero para que ela não seja animada
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

            const alvo = document.querySelector(link.getAttribute("href"));
            // Ajuste do scroll: 60px para compensar a altura do header fixo
            window.scrollTo({ top: alvo.offsetTop - 60, behavior: "smooth" });
        });
    });

    // O EFEITO DE DIGITAÇÃO FOI REMOVIDO.
});