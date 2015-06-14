var _ = require('highland'),
	h = require('virtual-dom/h'),
	createElement = require('virtual-dom/create-element'),
	diff = require('virtual-dom/diff'),
	patch = require('virtual-dom/patch')

var tree,
	rootNode

module.exports = {
	_: _,

	applyToDom: function (done) {
		tree = h('div')
		rootNode = createElement(tree)
		document.body.appendChild(rootNode)

		done()
	},

	updateDom: function (newTree) {
		var patches = diff(tree, newTree)
		rootNode = patch(rootNode, patches)
		tree = newTree
	}
}