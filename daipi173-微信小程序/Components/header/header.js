Component({
  properties: {
    title:String,
    age:Number
    },
  methods: {
    tapAge(){
      console.log(this.properties.age);
    },
    tapTitle() {
      console.log(this.properties.title);
      this.triggerEvent("myEvent",{title: this.properties.title})
    }
  },
})