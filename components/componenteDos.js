export default {

  props: {
    prop2: String
  },

  template: /*html*/ `

    <div class="p-1 m-1 border rounded">
      <h2>Componente 2:</h2>
      <p>Prop desde App: {{ prop2 }}</p>
    </div>
  `
}