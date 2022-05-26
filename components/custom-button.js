class CustomButton extends HTMLElement {
    constructor() {
        super();

        this.text;

        this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.text = this.getAttribute("text")

        this.shadow.innerHTML = `
            <style>
                .custom-button {
                    padding: 10px;
                    border-radius: 4px;
                    box-shadow: 4px 4px 4px -4px rgba(0,0,0,.2);
                    font-size: 14px;
                    color: black;
                    background-color: #FFE135;
                }
            </style>
            <div class="custom-button">
                <p>${this.text}</p>
            </div>
        `
    }
}

window.customElements.define("custom-button", CustomButton);