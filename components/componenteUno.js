
import ComponenteDos from './componenteDos.js'

export default {

  components: {
    ComponenteDos
  },

  props: {
    prop1: String
  },

  // En el template sí es posible poner self-closing tags
  // Y tambien se puede usar PascalCase
  
  // Resaltado de sintaxis con la extensión Inline HTML para VS Code
  // Hay que poner /*html*/ antes del backtick: 
  template: /*html*/ `

    <div class="m-2 p-1 border rounded center">

      <h1>Componente 1</h1>

      <slot/>
    
      <componente-dos :prop2="prop1"/>
      <ComponenteDos :prop2="prop1"/>

    </div>

  `
}

