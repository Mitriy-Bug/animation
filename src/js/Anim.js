export default class Chat {
    constructor(container) {
        this.container = container;
    }
    init() {
        this.buildCollapsible();
        this.collapsible();
    }
    buildCollapsible() {
        this.container.insertAdjacentHTML("afterbegin", `
            <div class="container container-collapsible">
                <button class="btn btn-collapsible">Collapse</button>
                <div class="collapsible-content hidden">Важный скрытый текст</div>
            </div>
        `);
    }

    collapsible() {
        const btn = this.container.querySelector(".btn-collapsible");
        if (btn) {
            btn.addEventListener("click", () => {
                const collapsible = this.container.querySelector(".collapsible-content");
                collapsible.classList.toggle("hidden");
                collapsible.classList.toggle("visible");
                btn.textContent = btn.textContent === "Collapse" ? "Expand" : "Collapse";
            });
        }
    }

}