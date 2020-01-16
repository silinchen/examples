const GITHUB_OAUTH_URL = 'https://github.com/login/oauth/authorize'
const SCOPE = 'user'
const client_id = '4cf1671783a83c86adf4'
module.exports = {
  github: {
    request_token_url: 'https://github.com/login/oauth/access_token',
    client_id,
    client_secret: 'ff3e2cde9eaf490d07fcf3b91714570df50558f1'
  },
  GITHUB_OAUTH_URL,
  OAUTH_URL: `${GITHUB_OAUTH_URL}?client_id=${client_id}&scope=${SCOPE}`
}

// token 210ad57a4636daa980f9058fe7d6ad2b786cdeea
