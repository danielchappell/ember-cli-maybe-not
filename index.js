/* eslint-env node */
'use strict';

var path = require('path');
var merge = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-maybe-not',
    treeForAddon: function(tree) {
        var maybeNotTree = path.dirname(require.resolve('maybe-not'));
        var trees = tree ? merge([maybeNotTree, tree]) : maybeNotTree;

        return this._super.treeForAddon.call(this, trees);
    }
};
