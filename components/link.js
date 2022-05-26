class SidebarLink extends HTMLElement {
    constructor() {
        super();

        this.icon;
        this.text;
        this.to;

        this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.icon = this.getAttribute("icon");
        this.text = this.getAttribute("text");
        this.to = this.getAttribute("to");

        this.shadow.innerHTML = `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <style>
                .sidebar-link {
                    display: flex;
                    align-items: center;
                    gap: 1em;
                    font-size: 20px;
                }

                .sidebar-link a {
                    color: black;
                    text-decoration: none;
                    font-weight: bold;  
                }
            </style>
            <div class="sidebar-link">
                <i class="fa-brands fa-js"></i>
                <a href=${this.to}>${this.text}</a>
            </div>
        `
    }
}

window.customElements.define("sidebar-link", SidebarLink);