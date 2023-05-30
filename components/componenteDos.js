export default {

  props: {
    prop2: String
  },

  // Si declaro data con el mismo nombre de la prop
  // el contenido de data pisa la prop
  data: () => ({
    //prop2: 'otra cosa'
  }),


  template: /*html*/ `

    <div class="p-1 m-1 border rounded">
      <h2>Componente 2:</h2>
      <p>Prop desde App: {{ prop2 }}</p>
    </div>
  `
}