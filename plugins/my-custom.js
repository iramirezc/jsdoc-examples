// code needed to serialize BigInt
BigInt.prototype.toJSON = function() { return this.toString() }

exports.handlers = {
  parseComplete: function (e) {
    console.log(`Total files processed: ${e.sourcefiles.length}`)
  }
}

exports.defineTags = function (dictionary) {
  dictionary.defineTag('note', {
    onTagged: function (doclet, tag) {
      doclet.description = `<em><strong>NOTE:</strong>&nbsp;${tag.text}</em>`
    }
  })
}