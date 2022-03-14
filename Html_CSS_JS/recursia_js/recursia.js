function recursia(a) {
    if (a == 0) {
        return
    }
    console.log(a)
    recursia(a-1)
    // console.log(a)

}
let a = 20
recursia(a)

