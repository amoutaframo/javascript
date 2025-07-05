let x = 10;
    console.log(x);

    x += 5;  // x = 15 x=x+5
    console.log("x += 5:", x);

    x -= 2;  // x = 13
    console.log("x -= 2:", x);

    x *= 2;  // x = 26
    console.log("x *= 2:", x);

    x /= 2;  // x = 13
    console.log("x /= 2:", x);

    x %= 4;  // x = 1
    console.log("x %= 4:", x);

    let a = true ;
    let b = false;
    a &&= b; // false  a=a && b
    console.log("a &&= b:", a);

    let c = false;
    let d = true;
    c ||= d; // true
    console.log("c ||= d:", c);

    let e = null;
    e ??= "Default Value";
    console.log("e ??= 'Default Value':", e);