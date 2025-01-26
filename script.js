const profile = document.querySelector('.profile');
const dropdown = document.querySelector('.dropdown__wrapper');
const cabecalho = document.querySelector('.cabecalho');
const seta = document.querySelector('.navigation__group > i'); // Seleciona o ícone da seta

// Evento de clique na foto do perfil
profile.addEventListener('click', () => {
  toggleDropdown();
});

// Evento de clique no ícone da seta
seta.addEventListener('click', () => {
  toggleDropdown();
});

// Função para alternar o estado do dropdown
function toggleDropdown() {
  dropdown.classList.remove('none');
  dropdown.classList.toggle('hide');

  if (!dropdown.classList.contains('hide')) {
    dropdown.classList.add('dropdown__wrapper--fade-in');
  } else {
    dropdown.classList.remove('dropdown__wrapper--fade-in');
  }

  cabecalho.classList.toggle('no-blur');
  dropdown.classList.toggle('no-blur');
}

document.addEventListener("click", (event) => {
  const isClickInsideDropdown = dropdown.contains(event.target);
  const isProfileClicked = profile.contains(event.target);
  const isSetaClicked = seta.contains(event.target); // Verifica se o clique foi na seta

  if (!isClickInsideDropdown && !isProfileClicked && !isSetaClicked) { 
    dropdown.classList.add('hide');
    dropdown.classList.remove('dropdown__wrapper--fade-in');
    cabecalho.classList.remove('no-blur');
    dropdown.classList.remove('no-blur');
  }
});

document.addEventListener("DOMContentLoaded", function() {
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    const infoSections = document.querySelectorAll('.info');

    dropdownItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link

            // Esconde todas as informações
            infoSections.forEach(section => {
                section.style.display = 'none';
            });

            // Mostra a informação correspondente ao item clicado
            const targetId = item.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });
});

function mostrarProjetos() {
  const container = document.getElementById('projetos-container');
  // Mostrar ou esconder os projetos com efeito
  if (container.style.display === "none") {
      container.style.display = "flex";
  } else {
      container.style.display = "none";
  }
}



document.querySelectorAll('.projeto').forEach((projeto) => {
  projeto.addEventListener('click', () => {
    const isActive = projeto.classList.contains('active');
    document.querySelectorAll('.projeto').forEach((p) => p.classList.remove('active')); // Remove o estado ativo de outros projetos
    if (!isActive) {
      projeto.classList.add('active'); // Adiciona o estado ativo ao projeto atual
    }
  });
});





