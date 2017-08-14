module.exports = function () {
  const faker = require('faker');
  const _ = require('lodash');
  return {
    todos: _.times(100, function (n) {
      return {
        id: n,
        task: faker.hacker.verb()
      }
    })
  }
};