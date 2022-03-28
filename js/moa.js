var order = 1;
var src = "";
var floor = ["1층", "2층", "루트2층", "3층", "파이층"];
var id = document.getElementById("id").getAttribute("value");
var detailOrder = 0;

document.getElementsByClassName("tablink")[0].click();

function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        tablinks[i].classList.remove("w3-light-grey");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.classList.add("w3-light-grey");
}

var cards = document.getElementsByClassName("moa_item_in");
var cl = cards.length;
for (var i = 0; i < cl; i++) {
    cards[i].addEventListener('click', cardHandler, false);
}

function cardHandler(e) {

    modalOpenHandler(this.getAttribute("value"));
}

var buttons = document.getElementsByClassName('button_Group');
var bl = buttons.length;

var videos = document.getElementsByClassName('video');
var vl = videos.length;
for (var i = 0; i < vl; i++) {
    videos[i].addEventListener('timeupdate', detailHandler, false);
}

var tabs = document.getElementsByClassName('tablink');
var tl = tabs.length;
for (var i = 0; i < tl; i++) {
    tabs[i].addEventListener('click', tabHandler, false);
}

var room = [
    ['메인홀', 'G전시실', '사이언스홀', '도서관'],
    ['B전시실'],
    ['O전시실'],
    ['R전시실'],
    ['교육실']
];
var last = [
    [1, 2, 1, 1],
    [2],
    [1],
    [1],
    [1]
];
var map = new Map();
map.set("0 0 1 P1", [0.50, 2.07, 3.40, 4.84, 6.04, 7.02]);    // 메인홀_1_기둥1
map.set("0 0 1 P2", [0.50, 2.09, 3.40, 4.79, 6.14, 6.93]);    // 메인홀_1_기둥2
map.set("0 1 1 P", [0.50, 2.09, 3.40, 4.79, 6.14, 6.93]);     // G전시실_1_기둥
map.set("0 1 2 P", [0.50, 2.09, 3.40, 4.79, 6.14, 6.93]);     // G전시실_2_기둥
map.set("0 1 2 W", [0.50, 2.09, 3.40, 4.79, 6.14, 7.35]);     // G전시실_2_벽체
map.set("0 1 2 B", [0.50, 2.09, 3.40, 4.79, 6.14, 7.41]);     // G전시실_2_보
map.set("0 1 2 S", [0.50, 2.09, 3.40, 4.79, 6.14, 7.45]);     // G전시실_2_슬래브
map.set("0 2 1 P", [0.50, 2.09, 3.40, 4.79, 6.14, 6.93]);     // 사이언스홀_1_기둥
map.set("0 2 1 W", [0.50, 2.09, 3.40, 4.79, 6.14, 7.10]);     // 사이언스홀_1_벽체
map.set("0 2 1 S", [0.50, 2.09, 3.40, 4.79, 6.14, 6.99]);     // 사이언스홀_1_슬래브
map.set("0 3 1 P", [0.50, 2.09, 3.40, 4.79, 6.14, 6.93]);     // 도서관_1_기둥
map.set("1 0 1 P", [0.50, 2.09, 3.40, 4.79, 6.14, 6.93]);     // B전시실_1_기둥
map.set("1 0 1 S", [0.50, 2.09, 3.40, 4.79, 6.14, 6.99]);     // B전시실_1_슬래브
map.set("1 0 2 W", [0.50, 2.09, 3.40, 4.79, 6.14, 7.10]);     // B전시실_2_벽체
map.set("1 0 2 B", [0.50, 2.09, 3.40, 4.79, 6.14, 7.41]);     // B전시실_2_보
map.set("2 0 1 P", [0.50, 2.09, 3.40, 4.79, 6.14, 6.93]);     // O전시실_1_기둥
map.set("2 0 1 S", [0.50, 2.09, 3.40, 4.79, 6.14, 6.99]);     // O전시실_1_슬래브
map.set("2 0 1 W", [0.50, 2.09, 3.40, 4.79, 6.14, 7.10]);     // O전시실_1_벽체
map.set("2 0 1 B", [0.50, 2.09, 3.40, 4.79, 6.14, 7.41]);     // O전시실_1_보
map.set("3 0 1 P", [0.50, 2.09, 3.40, 4.79, 6.14, 6.93]);     // R전시실_1_기둥
map.set("3 0 1 S", [0.50, 2.09, 3.40, 4.79, 6.14, 6.99]);     // R전시실_1_슬래브
map.set("3 0 1 W", [0.50, 2.09, 3.40, 4.79, 6.14, 7.10]);     // R전시실_1_벽체
map.set("3 0 1 B", [0.50, 2.09, 3.40, 4.79, 6.14, 7.41]);     // R전시실_1_보

// 탭클릭함수
function tabHandler(e) {
    order = 1;
    var num = this.getAttribute('value');
    buttons[num].style.visibility = "hidden";
    buttons[num].innerHTML = '';
    videos[num].setAttribute("name", "main");
    videos[num].src = "video/" + floor[id] + "/" + room[id][num] + "_" + order + "_1.mp4";
    videos[num].currentTime = 0;
    videos[num].play();
    videoHandler(num, "main");
}

//비디오재생중함수
function videoHandler(num, name) {
    if (name == "main") {
        var key = id + " " + num + " " + order + " ";
        if (map.has(key + "P")) {
            buttons[num].appendChild(makePillar());
        }
        if (map.has(key + "P1")) {
            buttons[num].appendChild(makePillar1());
        }
        if (map.has(key + "P2")) {
            buttons[num].appendChild(makePillar2());
        }
        if (map.has(key + "W")) {
            buttons[num].appendChild(makeWall());
        }
        if (map.has(key + "S")) {
            buttons[num].appendChild(makeSlab());
        }
        if (map.has(key + "B")) {
            buttons[num].appendChild(makeBo());
        }
        if (last[id][num] == order) {
            if (last[id][num] != 1) {
                buttons[num].appendChild(makeRestart());
            }
        } else {
            buttons[num].appendChild(makeSkip());
        }
        buttons[num].style.visibility = "visible";
    }
}

// 자재함수
function detailHandler() {
    var name = this.getAttribute("name");
    var num = this.getAttribute("value");
    var time = this.currentTime;
    if (name != "main") {
        if (name == "pillar") {
            var tmp = map.get(id + " " + num + " " + order + " P");
            if (tmp.length > detailOrder && time > tmp[detailOrder]) {
                this.pause();
                buttons[num].appendChild(makeNext());
                detailOrder++;
                buttons[num].style.visibility = "visible";
            }
        } else if (name == "pillar1") {
            var tmp = map.get(id + " " + num + " " + order + " P1");
            if (tmp.length > detailOrder && time > tmp[detailOrder]) {
                this.pause();
                buttons[num].appendChild(makeNext());
                detailOrder++;
                buttons[num].style.visibility = "visible";
            }
        } else if (name == "pillar2") {
            var tmp = map.get(id + " " + num + " " + order + " P2");
            if (tmp.length > detailOrder && time > tmp[detailOrder]) {
                this.pause();
                buttons[num].appendChild(makeNext());
                detailOrder++;
                buttons[num].style.visibility = "visible";
            }
        } else if (name == "wall") {
            var tmp = map.get(id + " " + num + " " + order + " W");
            if (tmp.length > detailOrder && time > tmp[detailOrder]) {
                this.pause();
                buttons[num].appendChild(makeNext());
                detailOrder++;
                buttons[num].style.visibility = "visible";
            }
        } else if (name == "slab") {
            var tmp = map.get(id + " " + num + " " + order + " S");
            if (tmp.length > detailOrder && time > tmp[detailOrder]) {
                this.pause();
                buttons[num].appendChild(makeNext());
                detailOrder++;
                buttons[num].style.visibility = "visible";
            }
        } else if (name == "bo") {
            var tmp = map.get(id + " " + num + " " + order + " B");
            if (tmp.length > detailOrder && time > tmp[detailOrder]) {
                this.pause();
                buttons[num].appendChild(makeNext());
                detailOrder++;
                buttons[num].style.visibility = "visible";
            }
        }

    }
}

// 버튼클릭함수
function buttonHandler(e) {
    setTimeout(() => func(), 300);
    var num = this.parentNode.getAttribute('value');
    var type = this.getAttribute('class');
    var name = "main";

    function func() {
        buttons[num].innerHTML = '';

        if (type == "nextButton") {
            buttons[num].appendChild(makeBack());
            videos[num].play();
        } else {
            if (type == "pillarButton") {
                detailOrder = 0;
                src = "video/" + floor[id] + "/" + room[id][num] + "_" + order + "_기둥.mp4";
                name = "pillar";
                buttons[num].appendChild(makeBack());
                videoHandler(num, name);
            } else if (type == "backButton") {
                detailOrder = 0;
                buttons[num].style.visibility = "hidden";
                src = "video/" + floor[id] + "/" + room[id][num] + "_" + order + "_1.mp4";
                videoHandler(num, name);
            } else if (type == "skipButton") {
                buttons[num].style.visibility = "hidden";
                order++;
                src = "video/" + floor[id] + "/" + room[id][num] + "_" + order + "_1.mp4";
                videoHandler(num, name);
            } else if (type == "restartButton") {
                buttons[num].style.visibility = "hidden";
                order = 1;
                src = "video/" + floor[id] + "/" + room[id][num] + "_" + order + "_1.mp4";
                videoHandler(num, name);
            } else if (type == "wallButton") {
                detailOrder = 0;
                src = "video/" + floor[id] + "/" + room[id][num] + "_" + order + "_벽체.mp4";
                name = "wall";
                buttons[num].appendChild(makeBack());
                videoHandler(num, name);
            } else if (type == "slabButton") {
                detailOrder = 0;
                src = "video/" + floor[id] + "/" + room[id][num] + "_" + order + "_슬래브.mp4";
                name = "slab";
                buttons[num].appendChild(makeBack());
                videoHandler(num, name);
            } else if (type == "boButton") {
                detailOrder = 0;
                src = "video/" + floor[id] + "/" + room[id][num] + "_" + order + "_보.mp4";
                name = "bo";
                buttons[num].appendChild(makeBack());
                videoHandler(num, name);
            } else if (type == "pillarButton1") {
                detailOrder = 0;
                src = "video/" + floor[id] + "/" + room[id][num] + "_" + order + "_기둥1.mp4";
                name = "pillar1";
                buttons[num].appendChild(makeBack());
                videoHandler(num, name);
            } else if (type == "pillarButton2") {
                detailOrder = 0;
                src = "video/" + floor[id] + "/" + room[id][num] + "_" + order + "_기둥2.mp4";
                name = "pillar2";
                buttons[num].appendChild(makeBack());
                videoHandler(num, name);
            }
            videos[num].src = src;
            videos[num].setAttribute("name", name);
            videos[num].play();
        }
    }
}

document.getElementById('modalClose').addEventListener('click', modalCloseHandler, false);

function modalCloseHandler(e) {
    for (var i = 0; i < bl; i++) {
        buttons[i].style.visibility = "hidden";
    }
    for (var i = 0; i < vl; i++) {
        videos[i].src = "";
    }

}

function modalOpenHandler(num) {
    document.getElementById('id01').style.display = 'block';
    var tabs = document.getElementsByClassName("tablink");
    var tl = tabs.length;
    for (var i = 0; i < tl; i++) {
        if (tabs[i].getAttribute("value") == num) {
            tabs[i].click();
        }
    }
}

function makePillar(flag) {
    var button = document.createElement("button");
    button.setAttribute("class", "pillarButton");
    button.innerText = "기둥";
    button.addEventListener('click', buttonHandler, false);
    return button;
}

function makePillar1(flag) {
    var button = document.createElement("button");
    button.setAttribute("class", "pillarButton1");
    button.innerText = "기둥C1";
    button.addEventListener('click', buttonHandler, false);
    return button;
}

function makePillar2(flag) {
    var button = document.createElement("button");
    button.setAttribute("class", "pillarButton2");
    button.innerText = "기둥C2";
    button.addEventListener('click', buttonHandler, false);
    return button;
}

function makeWall(flag) {
    var button = document.createElement("button");
    button.setAttribute("class", "wallButton");
    button.innerText = "벽체";
    button.addEventListener('click', buttonHandler, false);
    return button;
}

function makeSlab(flag) {
    var button = document.createElement("button");
    button.setAttribute("class", "slabButton");
    button.innerText = "슬래브";
    button.addEventListener('click', buttonHandler, false);
    return button;
}

function makeBo(flag) {
    var button = document.createElement("button");
    button.setAttribute("class", "boButton");
    button.innerText = "보";
    button.addEventListener('click', buttonHandler, false);
    return button;
}

function makeBack() {
    var button = document.createElement("button");
    button.setAttribute("class", "backButton");
    button.innerText = "뒤로가기";
    button.style.position = "absolute";
    button.style.left = "85%";
    button.addEventListener('click', buttonHandler, false);
    return button;
}

function makeSkip() {
    var button = document.createElement("button");
    button.setAttribute("class", "skipButton");
    button.innerText = "NEXT";
    button.addEventListener('click', buttonHandler, false);
    return button;
}

function makeRestart() {
    var button = document.createElement("button");
    button.setAttribute("class", "restartButton");
    button.innerText = "처음으로";
    button.addEventListener('click', buttonHandler, false);
    return button;
}

function makeNext() {
    var button = document.createElement("button");
    button.setAttribute("class", "nextButton");
    button.innerText = "NEXT";
    button.addEventListener('click', buttonHandler, false);
    return button;
}