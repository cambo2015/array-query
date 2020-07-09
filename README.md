# array-query

### Add an array to a query! 
#### toQuery(arr:any[])->string
#### toArr(query:string[])->any[]

#### EXAMPLE:

const arr = [2,4,6,8] 
const q = toQuery(arr)
fetch(`yourBackend/api/search?&{q}`,{otherStuff}) //etc...etc...