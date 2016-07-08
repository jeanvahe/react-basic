module.exports = {
 entry: ["./global.js" , "./app.js"],
 output: {
   filename: "bundle.js"
 },
 module: {
   
   loaders: [
     {
       test: [/\.js$/, /\.es6$/],
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015', 'stage-0'] 
       }
     },
   ]
 },
 resolve: {
   extensions: ['', '.js', '.es6']
 }
}
