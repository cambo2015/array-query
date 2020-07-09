

export const toQuery = (s) => {
  const x = JSON.stringify(s)
  return encodeURIComponent(x)
}

export const toObj = (q) => {
  const x = decodeURIComponent(q)
  return JSON.parse(x)
}