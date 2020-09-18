export default {
  data() {
    return {
      footerText: 'info-bus-footerText'
    }
  },
  created() {
    console.log(
      '%ccreated: ',
      'color: MidnightBlue; background: #7c28ff; font-size: 16px;',
      'created'
    )
  },
  methods: {
    changeFooterText() {
      this.footerText += 'info-bus'
    }
  }
}
