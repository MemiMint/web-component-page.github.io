class CustomCard extends HTMLElement {
    constructor() {
        super();
        
        this.image;
        this.name;
        this.username;

        this.shadow = this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        this.image = this.getAttribute("image");
        this.name = this.getAttribute("name");
        this.username = this.getAttribute("username");

        this.shadow.innerHTML = `
            <style>
                .card {
                    /* Add shadows to create the "card" effect */
                    width: 400px;
                    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                    transition: 0.3s;
                }
              
                /* On mouse-over, add a deeper shadow */
                .card:hover {
                    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
                }

                .container {
                    padding: 2px 16px;
                }
            </style>
            <div class="card">
                <img src=${this.image} alt="Avatar" style="width:100%">
                <div class="container">
                    <h4><b>${this.name}</b></h4>
                    <p>${this.username}</p>
                </div>
            </div>`
    }
}

window.customElements.define("custom-card", CustomCard);