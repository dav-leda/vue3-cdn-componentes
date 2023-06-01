export default {

  props: {
    prop2: String
  },

  // OJO: Si declaran una propiedad de data con el mismo nombre de la prop
  // el contenido de data pisa la prop
  data: () => ({
    //prop2: 'otra cosa'
  }),


  template: /*html*/ `

    <div class="p-1 m-1 border rounded">
      <h2>Componente 2:</h2>
      <p>Prop desde App a través de Componente 1:</p>
      <p class="bold">{{ prop2 }}</p>
    </div>
  `
}