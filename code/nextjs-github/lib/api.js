const axios = require('axios')

const github_base_url = 'https://api.github.com'

async function requestGithub(method, url, data, headers) {
  return await axios({
    method,
    url: `${github_base_url}${url}`,
    data,
    headers
  })
}

const isServer = typeof window === 'undefined'

/**
 *  GitHub请求封装
 * @param {*} 对象 { method = 'GET', url, data = {} }
 * @param {*} req
 * @param {*} res
 * @returns
 */
async function request({ method = 'GET', url, data = {} }, req, res) {
  if (!url) {
    throw Error('url muse provide')
  }

  if (isServer) {
    const session = req.session
    const githubAuth = session.githubAuth || {}
    const headers = {}
    if (githubAuth.access_token) {
      headers['Authorization'] = `${githubAuth.token_type} ${
        githubAuth.access_token
      }`
    }
    return await requestGithub(method, url, data, headers)
  } else {
    return await axios({
      method,
      url: `/github${url}`
    })
  }
}

module.exports = {
  request,
  requestGithub
}
