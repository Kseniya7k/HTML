'use strict';

const sectionIds = [
    'home','menu','news','about'
];

const sections = Array.from(document.getElementsByTagName('section'));
const button = document.getElementById('btn-menu');
const navbar = document.getElementsByClassName('header-links')[0];

button.addEventListener('click', function (event) {
    hideSections('menu');
});

navbar.addEventListener('click', function (event) {
    const sectionId = event.target.getAttribute('data-target');

    sectionId && hideSections(sectionId);
});

function hideSections(sectionId) {
    sections.forEach(function (sectionElement) {
        sectionElement.hidden = true;

        if (sectionElement.id === sectionId) {
            sectionElement.hidden = false;
        }
    });
}

