Component({
  options: {
    multipleSlots: true
  },
  properties: {
    content: String,
    age: Number
  },
  methods: {
    clickMe(){
      this.triggerEvent("myevent",{content:this.properties.content});
    }
  }
});