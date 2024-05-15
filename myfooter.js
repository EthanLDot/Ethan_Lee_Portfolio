class MyFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
        .switch{
            height: fit-content;
            display: flex;
        }
        .switch input {
            display: none;
        }
        .slider{
            position: relative;
            display: inline-block;
            width: 2rem;
            height: 1.3rem;
            background-color: #2b2b2b;
            border: 1px #fff solid;
            border-radius: 1rem;
        }
        .slider:before{
            position: absolute;
            content: "";
            height: calc(1rem);
            width: calc(1rem);
            top: 10%;
            left: 0.1rem;
            background-color: white;
            border-radius: 50%;
        }
        input:checked + .slider:before{
            transform: translateX(0.8rem);
        }
        input:checked + .slider{
            border: 1px #fff solid;
        }
        footer{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 0.5rem;
        }
        footer label{
            font-size: 1rem;
        }

        @media(max-width: 480px)
        {
            footer label{
                font-size: 0.75rem;
            }
            .slider{
                width: 1.7rem;
                height: 1rem;
                border-radius: 1rem;
            }
            .slider:before{
                height: calc(0.75rem);
                width: calc(0.75rem);
            }
            input:checked + .slider:before{
                transform: translateX(0.75rem);
            }
        }
        </style>
        <footer id="site-footer">
                <p>Made with &#9829; by Ethan himself. <a href="https://github.com/EthanLDot/Ethan_Lee_Portfolio">Original Repo</a></p>
                <label class="switch">
                    <input type="checkbox" id="themeToggle" onclick="toggleTheme()">
                    Dark
                    <span class="slider"></span>
                    Light
                </label>
        </footer> 
        <noscript>
            <style>
                .switch {display:none;}
            </style>
        </noscript>
        `;
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme) {
            this.shadowRoot.querySelector('#themeToggle').checked = savedTheme === 'light';
        }
    }
}

customElements.define('my-footer', MyFooter);