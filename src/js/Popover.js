export class Popover {
    constructor() {
        this.popovers = [];
    }

    showPopover(title, content, element) {
        // Si el elemento ya tiene un popover activo, lo quitamos (toggle)
        const existingPopover = this.popovers.find(p => p.element === element);
        if (existingPopover) {
            existingPopover.popoverElement.remove();
            this.popovers = this.popovers.filter(p => p.element !== element);
            return;
        }

        // Crear el contenedor del popover
        const popoverElement = document.createElement('div');
        popoverElement.classList.add('popover');

        popoverElement.innerHTML = `
            <h3 class="popover-header">${title}</h3>
            <div class="popover-body">${content}</div>
            <div class="popover-arrow"></div>
        `;

        document.body.appendChild(popoverElement);

        // Obtener las coordenadas del elemento disparador
        const { top, left, width } = element.getBoundingClientRect();

        // Posicionamiento en píxeles
        const popoverWidth = popoverElement.offsetWidth;
        const popoverHeight = popoverElement.offsetHeight;

        // Calculamos el top (arriba del elemento) y left (centrado horizontalmente)
        const popoverTop = top + window.scrollY - popoverHeight - 8;
        const popoverLeft = left + window.scrollX + (width / 2) - (popoverWidth / 2);

        popoverElement.style.top = `${popoverTop}px`;
        popoverElement.style.left = `${popoverLeft}px`;

        this.popovers.push({
            element,
            popoverElement,
        });
    }
}
