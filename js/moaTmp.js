var order = 1;
var current = "";
var before = "";
var src = "";
var floor = ["1층","2층","루트2층","3층","파이층"];
var id = document.getElementById("id").getAttribute("value");
var detailOrder = 1;

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
for(var i=0;i<cl;i++){
    cards[i].addEventListener('click',cardHandler,false);
}

function cardHandler(e){

    modalOpenHandler(this.getAttribute("value"));
}

var buttons = document.getElementsByClassName('button_Group');
var bl = buttons.length;

var videos = document.getElementsByClassName('video');
var vl = videos.length;

var tabs = document.getElementsByClassName('tablink');
var tl = tabs.length;
for(var i=0;i<tl;i++){
    tabs[i].addEventListener('click',tabHandler,false);
}

var room = [
    ['메인홀','G전시실','사이언스홀','도서관'],
    ['B전시실'],
    ['O전시실'],
    ['R전시실'],
    ['교육실']
];
var last = [
    [1,2,1,1],
    [2],
    [1],
    [1],
    [1]
];
var isPillar = [
    [
        [],
        [0,7,7,7],
        [0,7,0,0],
        [0,0,0,0]
    ],
    [
        [],
        [7,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [],
        [7,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [],
        [7,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ]
];
var isPillar1 = [
    [
        [],
        [7,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ]
];
var isPillar2 = [
    [
        [],
        [7,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ]
];
var isWall = [
    [
        [],
        [0,0,7,0],
        [0,7,0,0],
        [0,0,0,0]
    ],
    [
        [],
        [0,0,0,0],
        [7,0,0,0],
        [0,0,0,0]
    ],
    [
        [],
        [7,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [],
        [7,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ]
];
var isSlab = [
    [
        [],
        [0,0,7,0],
        [0,7,0,0],
        [0,0,0,0]
    ],
    [
        [],
        [7,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [],
        [7,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [],
        [7,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ]
];
var isBo = [
    [
        [],
        [0,0,0,0],
        [0,7,0,0],
        [0,0,0,0]
    ],
    [
        [],
        [0,0,0,0],
        [7,0,0,0],
        [0,0,0,0]
    ],
    [
        [],
        [7,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [],
        [7,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ],
    [
        [],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ]
];

// 탭클릭함수
function tabHandler(e){
    order = 1;
    var num = this.getAttribute('value');
    buttons[num].style.visibility = "hidden";
    buttons[num].innerHTML = '';
    videos[num].setAttribute("name","main");
    videos[num].src = "video/"+floor[id]+"/"+room[id][num]+"_"+order+"_1.mp4";
    videos[num].currentTime = 0;
    videos[num].play();
    videoHandler(num,"main");
}

//비디오재생중함수
function videoHandler(num, name){
    if(name == "main"){
        if(isPillar[id][order][num] > 0){
            buttons[num].appendChild(makePillar());
        }
        if(isPillar1[id][order][num] > 0){
            buttons[num].appendChild(makePillar1());
        }
        if(isPillar2[id][order][num] > 0){
            buttons[num].appendChild(makePillar2());
        }
        if(isWall[id][order][num] > 0){
            buttons[num].appendChild(makeWall());
        }
        if(isSlab[id][order][num] > 0){
            buttons[num].appendChild(makeSlab());
        }
        if(isBo[id][order][num] > 0){
            buttons[num].appendChild(makeBo());
        }
        if(last[id][num] == order){
            if(last[id][num] != 1){
                buttons[num].appendChild(makeRestart());
            }
        }else{
            buttons[num].appendChild(makeSkip());
        }
        buttons[num].style.visibility = "visible";
    }else{
        if(name == "pillar"){
            if(isPillar[id][order][num] > detailOrder){
                buttons[num].appendChild(makePillar("Y"));
            }
        }else if(name == "pillar1"){
            if(isPillar1[id][order][num] > detailOrder){
                buttons[num].appendChild(makePillar1("Y"));
            }
        }else if(name == "pillar2"){
            if(isPillar2[id][order][num] > detailOrder){
                buttons[num].appendChild(makePillar2("Y"));
            }
        }else if(name == "wall"){
            if(isWall[id][order][num] > detailOrder){
                buttons[num].appendChild(makeWall("Y"));
            }
        }else if(name == "slab"){
            if(isSlab[id][order][num] > detailOrder){
                buttons[num].appendChild(makeSlab("Y"));
            }
        }else if(name == "bo"){
            if(isBo[id][order][num] > detailOrder){
                buttons[num].appendChild(makeBo("Y"));
            }
        }
        detailOrder++;
        buttons[num].style.visibility = "visible";
    }
}

// 버튼클릭함수
function buttonHandler(e){
    setTimeout(() => func(), 300);
    var num = this.parentNode.getAttribute('value');
    var type = this.getAttribute('class');
    var name = "main";
    function func(){

        buttons[num].innerHTML = '';
        if(type == "pillarButton"){
            src = "video/"+floor[id]+"/"+room[id][num]+"_"+order+"_기둥_"+detailOrder+".mp4";
            name = "pillar";
            buttons[num].appendChild(makeBack());
            videoHandler(num,name);
        }else if(type == "backButton"){
            detailOrder = 1;
            buttons[num].style.visibility = "hidden";
            src = "video/"+floor[id]+"/"+room[id][num]+"_"+order+"_1.mp4";
            videoHandler(num,name);
        }else if(type == "skipButton"){
            buttons[num].style.visibility = "hidden";
            order++;
            src = "video/"+floor[id]+"/"+room[id][num]+"_"+order+"_1.mp4";
            videoHandler(num,name);
        }else if(type == "restartButton"){
            buttons[num].style.visibility = "hidden";
            order = 1;
            src = "video/"+floor[id]+"/"+room[id][num]+"_"+order+"_1.mp4";
            videoHandler(num,name);
        }else if(type == "wallButton"){
            src = "video/"+floor[id]+"/"+room[id][num]+"_"+order+"_벽체_"+detailOrder+".mp4";
            name = "wall";
            buttons[num].appendChild(makeBack());
            videoHandler(num,name);
        }else if(type == "slabButton"){
            src = "video/"+floor[id]+"/"+room[id][num]+"_"+order+"_슬래브_"+detailOrder+".mp4";
            name = "slab";
            buttons[num].appendChild(makeBack());
            videoHandler(num,name);
        }else if(type == "boButton"){
            src = "video/"+floor[id]+"/"+room[id][num]+"_"+order+"_보_"+detailOrder+".mp4";
            name = "bo";
            buttons[num].appendChild(makeBack());
            videoHandler(num,name);
        }else if(type == "pillarButton1"){
            src = "video/"+floor[id]+"/"+room[id][num]+"_"+order+"_기둥1_"+detailOrder+".mp4";
            name = "pillar1";
            buttons[num].appendChild(makeBack());
            videoHandler(num,name);
        }else if(type == "pillarButton2"){
            src = "video/"+floor[id]+"/"+room[id][num]+"_"+order+"_기둥2_"+detailOrder+".mp4";
            name = "pillar2";
            buttons[num].appendChild(makeBack());
            videoHandler(num,name);
        }
        videos[num].src = src;
        videos[num].setAttribute("name",name);
        videos[num].play();
    }
}

document.getElementById('modalClose').addEventListener('click',modalCloseHandler,false);
function modalCloseHandler(e){
    for(var i=0;i<bl;i++){
        buttons[i].style.visibility = "hidden";
    }
    for(var i=0;i<vl;i++){
        videos[i].src = "";
    }

}
function modalOpenHandler(num){
    document.getElementById('id01').style.display='block';
    var tabs = document.getElementsByClassName("tablink");
    var tl = tabs.length;
    for(var i=0;i<tl;i++){
        if(tabs[i].getAttribute("value") == num){
            tabs[i].click();
        }
    }
}
function makePillar(flag){
    var button = document.createElement("button");
    button.setAttribute("class","pillarButton");
    if(flag == "Y"){
        button.innerText = "NEXT";
    }else{
        button.innerText = "기둥";
    }
    button.addEventListener('click',buttonHandler,false);
    return button;
}
function makePillar1(flag){
    var button = document.createElement("button");
    button.setAttribute("class","pillarButton1");
    if(flag == "Y"){
        button.innerText = "NEXT";
    }else{
        button.innerText = "기둥C1";
    }
    button.addEventListener('click',buttonHandler,false);
    return button;
}
function makePillar2(flag){
    var button = document.createElement("button");
    button.setAttribute("class","pillarButton2");
    if(flag == "Y"){
        button.innerText = "NEXT";
    }else{
        button.innerText = "기둥C2";
    }
    button.addEventListener('click',buttonHandler,false);
    return button;
}
function makeWall(flag){
    var button = document.createElement("button");
    button.setAttribute("class","wallButton");
    if(flag == "Y"){
        button.innerText = "NEXT";
    }else{
        button.innerText = "벽체";
    }
    button.addEventListener('click',buttonHandler,false);
    return button;
}
function makeSlab(flag){
    var button = document.createElement("button");
    button.setAttribute("class","slabButton");
    if(flag == "Y"){
        button.innerText = "NEXT";
    }else{
        button.innerText = "슬래브";
    }
    button.addEventListener('click',buttonHandler,false);
    return button;
}
function makeBo(flag){
    var button = document.createElement("button");
    button.setAttribute("class","boButton");
    if(flag == "Y"){
        button.innerText = "NEXT";
    }else{
        button.innerText = "보";
    }
    button.addEventListener('click',buttonHandler,false);
    return button;
}
function makeBack(){
    var button = document.createElement("button");
    button.setAttribute("class","backButton");
    button.innerText = "뒤로가기";
    button.style.position = "absolute";
    button.style.left = "85%";
    button.addEventListener('click',buttonHandler,false);
    return button;
}
function makeSkip(){
    var button = document.createElement("button");
    button.setAttribute("class","skipButton");
    button.innerText = "NEXT";
    button.addEventListener('click',buttonHandler,false);
    return button;
}
function makeRestart(){
    var button = document.createElement("button");
    button.setAttribute("class","restartButton");
    button.innerText = "처음으로";
    button.addEventListener('click',buttonHandler,false);
    return button;
}