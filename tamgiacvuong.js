let a = "";
let i = 0;
for (;i<6;i++) {
    for (j =0 ; j < i ; j++) {
        a += "*"
    }
    a += "\n"
}
document.write("<pre>" +a + "</pre>")