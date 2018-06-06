const Block = require('../services/block')

exports.get = (req, res, next) => {
  const block = new Block('foo', 'bar', 'zoo', 'baz')
  res.send(block.toString())
}
