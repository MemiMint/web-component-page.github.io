class Navbar extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.shadow.innerHTML = `
            <style>
                .navbar {
                    width: 100vw;
                    padding: 10px;
                    background-color: #FFE135;
                    position: sticky;
                    top: 0;
                    right: 0;
                    z-index: 2;
                    font-size: 20px;
                    box-shadow: 0 4px 4px -4px rgba(0,0,0,.2);
                }
            </style>
            <header class="navbar">
                <b>Web components (this is a useless navbar)</b>
            </header>
        `;
    }
}

window.customElements.define("nav-bar", Navbar);

