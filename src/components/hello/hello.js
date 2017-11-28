
export default {
  data () {
    return {
      msg: 'Hello World'
    }
  },

  methods: {
    getHello() {
      this.$data.msg = 'Hello Daniel';
    }
  }
}
