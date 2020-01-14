module.exports = function parseStringAsrray (arrayAsString) {
  return arrayAsString.split(',').map(tech => tech.trim())
}