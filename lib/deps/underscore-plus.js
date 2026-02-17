/** @babel */

const regexEscape = /[$()*+./?[\\\]^{|}-]/g
export function escapeRegExp(string) {
  if (string) {
    return string.replace(regexEscape, "\\$&")
  } else {
    return ""
  }
}

export function debounce(callback, wait) {
  let timeoutId
  return (...args) => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      callback(...args)
    }, wait)
  }
}
