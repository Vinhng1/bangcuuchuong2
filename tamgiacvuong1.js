let a =""
document.write("<div style='width: 40px' align='right'>")
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        a += "*"
    }
    a += "\n"

}
document.write("<pre>" + a + "</pre>")

