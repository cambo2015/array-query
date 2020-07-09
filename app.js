

export const toQuery = (arr) => {
  const x = JSON.stringify(arr)
  return encodeURIComponent(x)
}

export const toObj = (q) => {
  const x = decodeURIComponent(q)
  return JSON.parse(x)
}