import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Unit Testing</h1>
    <p>Bienvenido al curso de Unit Test con Vanilla JS y Jest</p>
  </div>
`

