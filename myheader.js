class MyHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
        :host {
            display: flex;
            list-style: none;
            align-items: center;
            justify-content: space-between;
            padding: 0 1em;
            box-sizing: border-box;
        }
        :host > * {
            background-color: var(--header);
            
        }
        a{
            text-decoration: none;
        }
        h1{
            margin: 10px 0;
        }
        h1 > a {
            font-size: 2rem;
            color: var(--text-color, white);
        }
        nav a{
            font-size: 1rem;
            margin-left: 1em;
            color: var(--text-unfocused, white);
            background-color: var(--header);
        }
        nav a:hover {
            transition: color 0.5s linear;
            color: var(--text-color, white);
        }
        @media (max-width: 480px) {
        
            /* hamburger menu */ 
            #mainMenuOpen {
              display:block;
              font-size:1.8em;
              line-height:1;
              border:0;
            }
        
            #mainMenuOpen:after {
              content:"\u2630";
              color: var(--text-color, white);
            }
        
            #mainMenuOpen + nav {
              position:fixed;
                  top: calc(10vh + 1em);
                  right: 0;
                  background-color: transparent;
            }
        
            #mainMenuOpen + nav div {
              display:flex;
              flex-direction: column;
              position:relative;
              top: -100vh;        
              transition:top 0.5s;
            }
        
            #mainMenuOpen:focus + nav div,
            #mainMenuOpen + nav:focus-within div {              
              top: 0vh;
            }
        
            #mainMenuOpen + nav a {
                padding: 10px;
                text-align: center;
                margin: 0;
            } 
        }     
        </style>
        <h1><a href="/">Ethan Lee</a></h1>
        <button type="button" id="mainMenuOpen" tabindex="-1" hidden></button>
        <nav>
            <div>
                <a href="/about_me.html">About Me</a>
                <a href="/portfolio.html">Portfolio</a>
                <a href="/contact_form.html">Contact</a>
            </div>
        </nav>
        `;
    }
}

customElements.define('my-header', MyHeader);