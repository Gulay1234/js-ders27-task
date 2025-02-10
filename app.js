function date () {
    let p = new Date();
    let hefte = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let ay = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let hg = hefte[p.getDay()-1];
    let at = ay[p.getMonth()];
    let gn = p.getDate()
    let dt = p.getFullYear();
    let p2 = document.querySelector("#p2").innerText = "PM"
    document.querySelector("#p").innerText = `${hg}, ${at} ${gn}, ${dt} ${p2}`
    let a = new Date();
    document.querySelector("#p1").innerText = `${a.getHours()}:${a.getMinutes()}:${a.getSeconds()}`
}
setInterval(date, 1000)