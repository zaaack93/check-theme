document.querySelectorAll('.product-card').forEach((card) => {
    card.addEventListener('click', (event) => {
        event.preventDefault();
        const targetCard = event.currentTarget;
        targetCard.classList.add('bs-devshop__product-card__expanded');
        setTimeout(() => {
            window.location.href = targetCard.dataset.productUrl; // Set PDP URL in a data attribute
        }, 2500); // Match this to your animation duration
    });
});
class ProductCard extends HTMLElement {
    constructor() {
        super();
        this.addEventListener('click', this.expandCard);
    }

    expandCard(event) {
        event.preventDefault();
        this.classList.add('bs-devshop__product-card__expanded');
        setTimeout(() => {
            window.location.href = this.dataset.productUrl;
        }, 1500);
    }
}

customElements.define('product-card', ProductCard);