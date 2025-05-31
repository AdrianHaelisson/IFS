// Função para o menu responsivo (hambúrguer)
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const currentYearSpan = document.getElementById('currentYear');
    const contactForm = document.getElementById('contactForm');
    const formMessageDiv = document.getElementById('formMessage');
    const showTermsLink = document.getElementById('showTerms');
    const termsModal = document.getElementById('termsModal');
    const closeTermsButton = document.getElementById('closeTerms');

    // Menu Hambúrguer
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active'); // Para animar o ícone do hambúrguer
        });
    }

    // Atualizar ano no rodapé
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Simulação de envio de formulário de contato
    if (contactForm && formMessageDiv) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Impede o envio real do formulário

            // Simples validação (apenas para exemplo)
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const terms = document.getElementById('terms').checked;

            formMessageDiv.style.display = 'block'; // Mostra a div de mensagem
            formMessageDiv.className = 'form-message'; // Reseta classes

            if (!name || !email || !message) {
                formMessageDiv.textContent = 'Por favor, preencha todos os campos obrigatórios.';
                formMessageDiv.classList.add('error');
                return;
            }
            if(!terms) {
                formMessageDiv.textContent = 'Você precisa aceitar os termos de serviço.';
                formMessageDiv.classList.add('error');
                return;
            }


            // Simula um envio bem-sucedido
            setTimeout(() => {
                formMessageDiv.textContent = 'Mensagem enviada com sucesso! Obrigado pelo contato.';
                formMessageDiv.classList.add('success');
                contactForm.reset(); // Limpa o formulário
                
                // Esconde a mensagem após alguns segundos
                setTimeout(() => {
                    formMessageDiv.style.display = 'none';
                }, 5000);

            }, 1000); // Simula um pequeno atraso de rede
        });
    }

    // Modal de Termos de Serviço
    if (showTermsLink && termsModal && closeTermsButton) {
        showTermsLink.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link (navegar para #termos)
            termsModal.style.display = 'block';
        });

        closeTermsButton.addEventListener('click', function() {
            termsModal.style.display = 'none';
        });

        // Fechar modal clicando fora dele
        window.addEventListener('click', function(event) {
            if (event.target == termsModal) {
                termsModal.style.display = 'none';
            }
        });
    }

    // Adiciona a classe 'active' ao link de navegação da página atual
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navAnchors = document.querySelectorAll('.nav-links a');
    navAnchors.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

});
