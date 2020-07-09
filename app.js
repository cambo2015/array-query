/*const DEBUG = false

export const print = (x) => document.getElementById("text").innerText = x
*/

export const toQuery = (s) => {
  const x = JSON.stringify(s)
  return encodeURIComponent(x)
}

export const toObj = (q) => {
  const x = decodeURIComponent(q)
  return JSON.parse(x)
}

/*if (DEBUG) {
  const arr = [1, 2, 3, 4, 5]
  const uri = toQuery(arr)
  print(uri)
  console.log(toObj(uri))
}*/