const XmlSplit = require('./xmlsplit.js');
const { readFileSync, writeFileSync, createReadStream } = require('fs');

var xmlsplit = new XmlSplit();
var inputStream = createReadStream('./input/products.xml');

inputStream.pipe(xmlsplit).on('data', function(data) {
    var xmlDocument = data.toString();
    var index = xmlDocument.indexOf('product-id') + 12;
    var newString = xmlDocument.slice(index);
    var id = newString.slice(0, newString.indexOf('"'));
    writeFileSync('./output/' + id + '.xml', xmlDocument)
})