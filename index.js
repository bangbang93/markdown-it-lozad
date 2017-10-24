/**
 * Created by bangbang93 on 2017/10/24.
 */
'use strict';
module.exports = function (markdownIt, className = 'lozad') {
  const defaultImgRender = markdownIt.renderer.rules.image
  markdownIt.renderer.rules.image = function (tokens, idx, options, env, renderer) {
    const token = tokens[0]
    for(var i in token.attrs) {
      if (token.attrs[i][0] === 'src') {
        token.attrs[i][0] = 'data-src'
      }
    }
    let hasClass = false
    for(var i in token.attrs) {
      if (token.attrs[i][0] === 'class') {
        const classes = token.attrs[i][1].split(' ')
        classes.push(className)
        token.attrs[i][1] = classes.join(' ')
        hasClass = true
      }
    }
    if (!hasClass) {
      token.attrs.push(['class', className])
    }
    return defaultImgRender.apply(this, arguments)
  }
}
