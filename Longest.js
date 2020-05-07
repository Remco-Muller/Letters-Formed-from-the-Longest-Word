function canForm(arr) {
    let g = arr.reduce((a,b)=> (b == 0 ? b = a:(a.length > b.length ? b = a:b)))
    return (arr.every((a)=> a == ([...a].filter((c)=> ([...g].includes(c) == true ? ([...g].filter((p)=> p == c).length >= [...a].filter((p)=> p == c).length ? true:false):false)).join().replace(/,/g, ""))) ? true:false)
}