const path = require('path');

export const rootPath = path.resolve(__dirname + '/../../');
console.log( rootPath );
export const configPath = path.resolve( rootPath + '/config');
export const distPath = path.resolve( rootPath + '/dist');
export const modulePath = path.resolve(rootPath + '/node_modules');
export const srcPath = path.resolve(rootPath + '/src');
