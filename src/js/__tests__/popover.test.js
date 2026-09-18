import { Popover } from '../Popover';

describe('Popover widget', () => {
    let popoverFactory;
    let button;

    beforeEach(() => {
        document.body.innerHTML = `
            <button 
                class="btn btn-danger" 
                data-title="Test Title" 
                data-content="Test Content">
                Click me
            </button>
        `;
        popoverFactory = new Popover();
        button = document.querySelector('.btn-danger');
    });

    afterEach(() => {
        document.body.innerHTML = '';
    });

    test('should render popover on click', () => {
        popoverFactory.showPopover(
            button.getAttribute('data-title'),
            button.getAttribute('data-content'),
            button
        );

        const popover = document.querySelector('.popover');
        expect(popover).not.toBeNull();
        expect(popover.querySelector('.popover-header').textContent).toBe('Test Title');
        expect(popover.querySelector('.popover-body').textContent).toBe('Test Content');
    });

    test('should toggle (remove) popover on second click', () => {
        // Primer clic -> mostrar
        popoverFactory.showPopover('Test Title', 'Test Content', button);
        expect(document.querySelector('.popover')).not.toBeNull();

        // Segundo clic -> ocultar
        popoverFactory.showPopover('Test Title', 'Test Content', button);
        expect(document.querySelector('.popover')).toBeNull();
    });
});
