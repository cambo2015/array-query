# array-query

### Convert an array to a query string!
* toQuery(arr:any[])->string
### Convert it back to an array
* toArr(query:string[])->any[]

#### EXAMPLE:
<br/>
array to query

``` const arr = [2,4,6,8] 
const q = toQuery(arr)
fetch(`yourBackend/api/search?{q}`,{otherStuff}) //etc...etc... 
```

<br/>

query to arr 
* get the query string
* then:
* const arr = toArr(query)

<br/>
## License
### MIT



