import tough from 'tough-cookie'

export const cookiejar = new tough.CookieJar()

async function customFetch(url, opts = {}) {
  const cookies = await new Promise((rs, rj) => {
    cookiejar.getCookies(url, (err, cookies) => {
      if (err) {
        rj(err)
        return
      }

      rs(cookies || [])
    })
  })

  const response = await fetch(url, {
    ...opts,
    headers: {
      ...opts.headers,
      cookies,
    },
  })

  if (response.headers['set-cookie']) {
    await new Promise((rs, rj) => {
      cookiejar.setCookie(response.headers['set-cookie'], url, (e, s) => {
        if (e) {
          rj(e)
          return
        }

        rs(s)
      })
    })
  }

  return response
}

export default customFetch
