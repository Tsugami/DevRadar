/* eslint-disable camelcase */
const axios = require('axios')
const Dev = require('../models/Dev')
const parseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
  async store (req, res) {
    const { github_username, techs, latitude, longitude } = req.body

    let dev = await Dev.findOne({ github_username })
    if (!dev) {
      const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`)

      const { name = 'login', avatar_url, bio } = apiResponse.data
      const techsArray = parseStringAsArray(techs)

      const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
      }

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        location,
        techs: techsArray
      })
    }

    return res.json(dev)
  },

  async index (_, res) {
    const devs = await Dev.find()
    return res.json(devs)
  }
}
