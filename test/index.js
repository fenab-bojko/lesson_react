let a = fetch('./index.php')
let b = a.then(res => {
    console.log(res.text())
})

b.then(body => {
    console.log(body)
})