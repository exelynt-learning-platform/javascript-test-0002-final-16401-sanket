let n = 5;

for (let i = n - 1; i >= 0; i--) {

    let spaces = (n - 1 - i);
    for (let s = 0; s < spaces; s++) {
        process.stdout.write(" ");
    }

    let num = 1;
    for (let j = 0; j <= i; j++) {
        if (j > 0) process.stdout.write(" ");
        process.stdout.write(num + "");
        num = num * (i - j) / (j + 1);
    }

    for (let s = 0; s < spaces; s++) {
        process.stdout.write(" ");
    }

    console.log("");
}