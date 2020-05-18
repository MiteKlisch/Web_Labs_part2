class DoingProject extends BaseModel { // eslint-disable-line no-unused-vars, no-undef
    constructor () {
      super('doingProjects');
      this.fields = this.fields.concat(['doingProjectName', 'perfomerProj', 'startDate', 'endDate']);
    }
  }