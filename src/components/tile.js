(
    (() => {
  const html = `
    <!-- TODO 1: Implement class binding for 'tile-empty' class from emptyTile computed property value
                Implement style binding for css style 'backgroundColor' from backgroundColor computed property value -->
    <!-- read: https://v1.vuejs.org/guide/class-and-style.html#Binding-HTML-Classes
               https://v1.vuejs.org/guide/class-and-style.html#Binding-Inline-Styles -->
                <div class="tile"  v-bind:style="{'backgroundColor':backgroundColor}" v-bind:class="{'tile-empty':!emptyTile}">
      {{ displayingValue }}
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

    data() {
      return {
        colors: [
          "",
          "#90CCC8",
          "#90C2CE",
          "#8FB2D1",
          "#8FA1D3",
          "#8F8ED6",
          "#A28DD8",
          "#B78CDB",
          "#CE8CDD",
          "#E08BD9",
          "#E28AC3",
          "#E589AC",
          "#E78792",
          "#EA9686",
          "#ECB185",
          "#EFCE84",
          "#F1ED82",
        ]
      }
    },

    watch: {
      value(newValue, oldValue){
        //if the newValue is diffierent than oldValue do animation
          //newValue > oldValue
          console.log("watch: "+newValue +" > " + oldValue);
          if(newValue > oldValue){
            console.dir(this.$el);
              setTimeout(() => {
                  Velocity(this.$el, {scale: 1.2}, {duration: 50, complete: () => {
                  Velocity(this.$el, {scale: 1.0}, {duration: 50})
          }})
          }, 50)
          }

      }
      // TODO 3: add watcher on value to animate the scale of the tile when its value increases
      // hint: you can use this method for the tile animation

      // read: https://vuejs.org/v2/guide/computed.html#Watchers
    },

    computed: {
      value() {
        return this.tile.value
      },

      displayingValue() {
        if (this.value > 0) {
          return this.value
        }

        return null
      },
/*returns true or false based on displayingValue*/
      emptyTile() {
        return this.displayingValue === null
      },

      backgroundColor() {
        return this.colors[this.value.toString(2).length - 1]
      }

    }
  })
}))()
