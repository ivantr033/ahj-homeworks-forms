import { Popover } from './Popover';

document.addEventListener('DOMContentLoaded', () => {
    const popoverFactory = new Popover();
    const button = document.querySelector('.btn-danger');

    if (button) {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const title = button.getAttribute('data-title');
            const content = button.getAttribute('data-content');

            popoverFactory.showPopover(title, content, button);
        });
    }
});
