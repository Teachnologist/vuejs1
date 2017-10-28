((() => {
<<<<<<< HEAD
    const html = `
    <div class="game">
   
      <div class="game-container">
      <div class="board">
      
      <tile v-for="item in board" v-bind:tile="item" v-bind:key="item.id">
      
      </tile>

        </div>
      <!--  <transition-group name="tile" tag="div" class="board">
          <tile v-for="tile in board" :tile="tile" :key="tile.id"></tile>
        </transition-group>
       <div class="board shadow-board">
=======

  // TODO 2: register event handle
  const html = `
    <div class="game">
      <!-- TODO 2: register event handler for new-game() event -->
      <!-- read: https://vuejs.org/v2/guide/components.html#Using-v-on-with-Custom-Events -->
      <game-menu></game-menu>
      <div class="game-container">
        <div class="board">
          <tile v-for="tile in board" :tile="tile" :key="tile.id"></tile>
        </div>
        <div class="board shadow-board">
>>>>>>> a6e0f6ba9bc71c7e5511457e76b709f935786af7
          <div v-for="n in board.length" :key="n" class="tile shadow-tile"></div>
        </div>-->
      </div>
    </div>
  `

<<<<<<< HEAD
    Vue.component("game", {
        template: html,
        mixins: [window.app.mixins.control],
        data () {
            return {
                board: [],
                gameOver: false,
            }
        },
=======
  Vue.component("game", {
    template: html,
    data () {
      return {
        board: [],
      }
    },

    mounted() {
      this.setupBoard()
    },

    methods: {

      setupBoard() {
        this.newGame()
      },

      seedTwo() {
        let getRandomItem = () => {
          let randomIndex = Math.floor(Math.random() * this.board.length)

          return this.board[randomIndex]
        }
>>>>>>> a6e0f6ba9bc71c7e5511457e76b709f935786af7

        watch: {
            allTilesFull(boardFull, _) {
                if (boardFull) {
                    this.checkGameState()
                }
            },
        },

        mounted() {
            this.setupBoard()
        },

<<<<<<< HEAD
        computed: {
            allTilesFull() {
                return !this.board.filter(tile => tile.value === 0).length > 0
            },
        },
=======
        randomItem.value = 2
>>>>>>> a6e0f6ba9bc71c7e5511457e76b709f935786af7

        methods: {
            firstItem(){
              return (typeof this.board[0] != "undefined") ? this.board[0]:9;
            },
            fakeItem(){
              return 3;
            },

            checkGameState() {
                this.moveUp("gamestate")
                this.moveDown("gamestate")
                this.moveLeft("gamestate")
                this.moveRight("gamestate")
                if (!this.mergeGameStateList.length > 0 || !this.slideGameStateList.length > 0) {
                    this.gameOver = true
                }
                this.mergeGameStateList = []
                this.slideGameStateList = []
            },

            setupBoard() {
                this.newGame()
                this.registerControl()
            },

            seedTwo() {
                if (this.allTilesFull) { return }

                let getRandomItem = () => {
                    let randomIndex = Math.floor(Math.random() * this.board.length)

                    return this.board[randomIndex]
                }

                let randomItem = getRandomItem()

                while (randomItem.value != 0) {
                    randomItem = getRandomItem()
                }

                randomItem.value = 2
            },

            newGame() {
                this.resetBoard()
                this.resetScore()
                this.seedTwo()
                this.seedTwo()
                this.gameOver = false
            },

            resetBoard() {
                this.board = Array.apply(null, { length: 16 })
                    .map(function (_, index) {
                        return {
                            id: index,
                            value: 0
                        }
                    })
            },

            resetScore() {
                this.$store.dispatch("resetScore")
            }
        }
    })
}))()
