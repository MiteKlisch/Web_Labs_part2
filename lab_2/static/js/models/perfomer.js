class Perfomer extends BaseModel { // eslint-disable-line no-unused-vars, no-undef
    constructor () {
      super('perfomers');
      this.fields = this.fields.concat(['namePerfomer', 'position']);
    }
  }