let _nextId = 1;

class Project {
  constructor (name, creator_id) {
    this.id = Project.nextId;
    this._name = name;
    this._creator_id = creator_id;
  }

  get name() {
    return this._name;
  }
  get creator_id() {
    return this._creator_id;
  }

  static get nextId() {
    const ret = _nextId;
    _nextId++;
    return ret;
  }
}

export default Project;
