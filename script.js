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

