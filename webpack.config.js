const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
	entry: path.resolve(__dirname, "./index.ts"),
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "index.js",
	},

	mode: "production",
	target: "node",

	// Enable sourcemaps for debugging webpack's output.
	devtool: "source-map",

	//   resolve: {
	//     // Add '.ts' and '.tsx' as resolvable extensions.
	//     extensions: [".ts", ".tsx"],
	//   },

	//   module: {
	//     rules: [
	//       {
	//         test: /.tsx$/,
	//         exclude: /node_modules/,

	//         use: [
	//           {
	//             loader: "ts-loader",

	//           },
	//         ],
	//       },
	//     ],
	//   },
	module: {
		rules: [
			{
				test: /\.(js|jsx|tsx|ts)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
            {
				test: /\.(js|jsx|tsx|ts)$/,
				exclude: /node_modules/,
				loader: "ts-loader",
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
	},

	//   externals: {
	//     'react': 'react', // Case matters here
	//     'react-dom' : 'react-dom' // Case matters here
	//   },
	//   externals: [nodeExternals()],
	plugins: [],
};
