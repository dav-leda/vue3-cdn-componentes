
import ComponenteDos from './componenteDos.js'

export default {

  components: {
    ComponenteDos
  },

  props: {
    prop1: String
  },

  // En el template, a diferencia de index.html 
  // es posible poner self-closing tags: <componente-dos/>
  // Y tambien se puede usar PascalCase: <ComponenteDos/>
  
  // Resaltado de sintaxis con la extensión Inline HTML para VS Code
  // Hay que poner /*html*/ antes del backtick: 

  template: /*html*/ `

    <div class="m-2 p-1 border rounded center">

      <h1>Componente 1</h1>
    
      <componente-dos :prop2="prop1"/>
      <ComponenteDos :prop2="prop1"/>

    </div>

  `
}

