function myFunction() {
    document.getElementById('demo2').innerHTML = '你好, JavaScript!';
    document.getElementById('demo2').style.color = 'red';

    // console.log 是在網頁的 F12 中出現，方便偵錯
    console.log("Hello Javascript!");

    // window.alert 是跳出一個視窗出來
    window.alert("Hello Javascript!");

    // document.write 是把 document 都清空並且寫一個新的東西進去
    document.write("<h1>Hello, World!</h1>");

    let x = 5.0;

    // toFixed 是修復到小數點第幾位的意思
    let y = x.toFixed(5);

    // toPrecision 是指定數字的長度，包含小數點的左跟右
    let z = x.toPrecision(2);
    document.getElementById('demo').innerHTML = x;
}