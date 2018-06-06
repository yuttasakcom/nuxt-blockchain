const Block = require('../services/Block')

exports.get = (req, res, next) => {
  const block = new Block('foo', 'bar', 'zoo', 'baz')
  const fooBlock = Block.mineBlock(Block.genesis(), 'foo')
  res.send(fooBlock.toString())
}
