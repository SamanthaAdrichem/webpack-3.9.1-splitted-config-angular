module.exports = ({ file, options, env }) => ({
	parser: file.extname === '.sss' ? 'sugarss' : false,
	plugins: {
//		'postcss-import': { root: file.dirname },
//		'postcss-cssnext': options.cssnext ? options.cssnext : false,
//		'cssnano': options.cssnano,
		'autoprefixer': options.autoprefixer
	}
})
