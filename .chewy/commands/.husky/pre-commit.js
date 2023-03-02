const { readFileSync } = require("fs");
const { resolve } = require("path");

const content = readFileSync(resolve('.chewy', 'commands', 'package.json'))
const hasLocalLib = content.includes('"@gochewy/lib": "../lib/"') || content.includes('"@gochewy/lib": "../lib"') || content.includes('"@gochewy/lib": "file:')

if(hasLocalLib){
    console.error('\n🛑🛑🛑 DO NOT COMMIT WITH LOCAL LIB\n🛑🛑🛑 Try running `yarn lprod` in commands directory \n\n')
    throw new Error('Attempted commit with local lib.')
}
else {
    console.log('Nice. No local lib.')
}