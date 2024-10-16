let a;
a = "<table border='1' width='1000' cellspacing='1' cellpadding='4'>";
for (let i = 1; i <= 10; i++) {
    a = a + "<tr>";
    for (let j = 2; j <= 10; j++) {
        a = a + "<td>" + j + "x" + i + "=" + (i *j)  +  "</td>";
    }
    a = a + "</tr>";
}
a = a + "</table>";
document.write(a);