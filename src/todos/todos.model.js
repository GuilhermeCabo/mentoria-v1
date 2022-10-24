const crypto = require('crypto');

class Todo {
  title;
  description;
  status;
  createdAt;
  id;

  constructor() {
    if (!this.id) {
      this.id = crypto.randomUUID();
    }
  }
}

module.exports = Todo;
