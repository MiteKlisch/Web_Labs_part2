class Project extends BaseModel { // eslint-disable-line no-unused-vars, no-undef
    constructor () {
      super('projects');
      this.fields = this.fields.concat(['projectName', 'owner', 'description']);
    }
  }