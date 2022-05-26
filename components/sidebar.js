class SideBar extends HTMLElement {
    constructor() {
        super();

        this.shadow = this.attachShadow({ mode: "open" });

        this.links = [
            {
                icon: "fa-brands fa-js-square",
                text: "Vanilla JS",
                to: "/index.html"
            },
            {
                icon: "fa-brands fa-react",
                text: "ReactJS",
                to: "/react.html"
            },
            {
                icon: "fa-brands fa-vue",
                text: "VueJS",
                to: "/vue.html"
            }
        ]
    }

    connectedCallback() {
        this.shadow.innerHTML = `
        <style>
            .sidebar {
                text-align: center;
                padding: 15px;
                background-color: #FFE135;
                height: 100vh;
                position: -webkit-sticky;
                position: sticky;
                top: 0;
            }
        </style>
        <nav class="sidebar">
            ${this.links.map((link, key) => {
                console.log(link.icon)
                return `<sidebar-link icon=${link.icon} text=${link.text} to=${link.to}></sidebar-link>`
            })}
        </nav>
        <script src="./link.js ></script>
        `;
    }
}

window.customElements.define("side-bar", SideBar)