((() => {
  const html = `
    <div class="tile">
<<<<<<< HEAD
      <!-- TODO 4: add tile.value in the template -->
      <!-- read: https://vuejs.org/v2/guide/syntax.html#Text -->
      {{tile.value}}
    </div>
  `
Vue.component("tile",{
  template: html,
    props: {
    tile:{
      type:Number,
        required:true,
    }
    }
})
  // TODO 4: create a new Vue component
  //  - name the component "tile", with template html
  //  - padd the prop tile into the compoent
  //  - add tile.value in the template
  // read: https://v1.vuejs.org/guide/components.html
=======
      {{ tile.value }}
    </div>
  `

  Vue.component("tile", {
    template: html,
    props: {
      tile: {
        type: Object,
        required: true
      },
    },
  })
>>>>>>> a6e0f6ba9bc71c7e5511457e76b709f935786af7
}))()
