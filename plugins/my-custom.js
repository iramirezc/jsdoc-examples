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
      const note = `<p><em><strong>NOTE:</strong>&nbsp;${tag.text}</em></p>`

      if (doclet.classdesc) {
        doclet.classdesc = `${doclet.classdesc}${note}`
      } else {
        doclet.description = `${doclet.description || ''}${note}`
      }
    }
  })
}