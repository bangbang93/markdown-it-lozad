/**
 * Created by bangbang93 on 2017/10/24.
 */
'use strict';
module.exports = function (markdownIt, className = 'lozad') {
  const defaultImgRender = markdownIt.renderer.rules.image
  markdownIt.renderer.rules.image = function (tokens, idx, options, env, renderer) {
    for(const token of tokens) {
      if (token.type !== 'image') continue
      for(const attr of token.attrs) {
        if (attr[0] === 'src') {
          attr[0] = 'data-src'
          break
        }
      }
      let hasClass = false
      for(const attr of token.attrs) {
        if (attr[0] === 'class') {
          if (attr[1].includes(className)) {
            hasClass = true
            break
          }
          const classes = attr[1].split(' ')
          classes.push(className)
          attr[1] = classes.join(' ')
          hasClass = true
          break
        }
      }
      if (!hasClass) {
        token.attrs.push(['class', className])
      }
    }
    return defaultImgRender.apply(this, arguments)
  }
}
