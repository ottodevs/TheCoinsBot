'use strict'

const fs = require('fs')

// This file automatically require's all files in this folder

module.exports = (state) => {
	// Note that files are read in alphabetic order
	fs.readdirSync(__dirname).forEach((file) => {
		// Ignore this file and invalid ones
		if(file == 'index.js' || file.substr(0, 1) == '.' || file.substr(-3) != '.js') {
			return
		}

		require('./' + file)(state)
	})
}
