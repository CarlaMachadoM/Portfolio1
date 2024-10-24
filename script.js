const profile = document.querySelector('.profile');
const dropdown = document.querySelector('.dropdown__wrapper');
const cabecalho = document.querySelector('.cabecalho');

profile.addEventListener('click', () => {
    dropdown.classList.remove('none');
    dropdown.classList.toggle('hide');
    
    if (!dropdown.classList.contains('hide')) {
        dropdown.classList.add('dropdown__wrapper--fade-in');
    } else {
        dropdown.classList.remove('dropdown__wrapper--fade-in');
    }

    cabecalho.classList.toggle('no-blur');
    dropdown.classList.toggle('no-blur');
});

document.addEventListener("click", (event) => {
    const isClickInsideDropdown = dropdown.contains(event.target);
    const isProfileClicked = profile.contains(event.target);

    if (!isClickInsideDropdown && !isProfileClicked) {
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
