var order = 1;
var current = "";
var before = "";
var src = "";
var floor = ["1층","2층","루트2층","3층","파이층"];
var id = document.getElementById("id").getAttribute("value");

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
    [2,3,2,1],
    [3],
    [2],
    [2],
    [1]
];
var isPillar = [
    [
        [],
        ['N','Y','Y','Y'],
        ['N','N','N','N'],
        ['N','N','N','N']
    ],
    [
        [],
        ['Y','N','N','N'],
        ['N','N','N','N'],
        ['N','N','N','N']
    ],
    [
        [],
        ['Y','N','N','N'],
        ['N','N','N','N'],
        ['N','N','N','N']
    ],
    [
        [],
        ['Y','N','N','N'],
        ['N','N','N','N'],
        ['N','N','N','N']
    ],
    [
        [],
        ['N','N','N','N'],
        ['N','N','N','N'],
        ['N','N','N','N']
    ]
];
var isPillar1 = [
    [
        [],
        ['Y','N','N','N'],
        ['N','N','N','N'],
        ['N','N','N','N']
    ],
    [
        [],
        ['N','N','N','N'],
        ['N','N','N','N'],
        ['N','N','N','N']
    ],
    [
        [],
        ['N','N','N','N'],
        ['N','N','N','N'],
        ['N','N','N','N']
    ],
    [
        [],
        ['N','N','N','N'],
        ['N','N','N','N'],
        ['N','N','N','N']
    ],
    [
        [],
        ['N','N','N','N'],
        ['N','N','N','N'],
        ['N','N','N','N']
    ]
];
var isPillar2 = [
    [
        [],
        ['Y','N','N','N'],
        ['N','N','N','N'],
        ['N','N','N','N']
    ],
    [
        [],
        ['N','N','N','N'],
        ['N','N','N','N'],
        ['N','N','N','N']
    ],
    [
        [],
        ['N','N','N','N'],
        ['N','N','N','N'],
        ['N','N','N','N']
    ],
    [
        [],
        ['N','N','N','N'],
        ['N','N','N','N'],
        ['N','N','N','N']
    ],
    [
        [],
        ['N','N','N','N'],
        ['N','N','N','N'],
        ['N','N','N','N']
    ]
];
var isWall = [
    [
        [],
        ['N','N','Y','N'],
        ['N','Y','N','N'],
        ['N','N','N','N']
    ],
    [
        [],
        ['N','N','N','N'],
        ['Y','N','N','N'],
        ['N','N','N','N']
    ],
    [
        [],
        ['Y','N','N','N'],
        ['N','N','N','N'],
        ['N','N','N','N']
    ],
    [
        [],
        ['Y','N','N','N'],
        ['N','N','N','N'],
        ['N','N','N','N']
    ],
    [
        [],
        ['N','N','N','N'],
        ['N','N','N','N'],
        ['N','N','N','N']
    ]
];
var isSlab = [
    [
        [],
        ['N','N','Y','N'],
        ['N','Y','N','N'],
        ['N','N','N','N']
    ],
    [
        [],
        ['Y','N','N','N'],
        ['N','N','N','N'],
        ['N','N','N','N']
    ],
    [
        [],
        ['Y','N','N','N'],
        ['N','N','N','N'],
        ['N','N','N','N']
    ],
    [
        [],
        ['Y','N','N','N'],
        ['N','N','N','N'],
        ['N','N','N','N']
    ],
    [
        [],
        ['N','N','N','N'],
        ['N','N','N','N'],
        ['N','N','N','N']
    ]
];
var isBo = [
    [
        [],
        ['N','N','N','N'],
        ['N','Y','N','N'],
        ['N','N','N','N']
    ],
    [
        [],
        ['N','N','N','N'],
        ['Y','N','N','N'],
        ['N','N','N','N']
    ],
    [
        [],
        ['Y','N','N','N'],
        ['N','N','N','N'],
        ['N','N','N','N']
    ],
    [
        [],
        ['Y','N','N','N'],
        ['N','N','N','N'],
        ['N','N','N','N']
    ],
    [
        [],
        ['N','N','N','N'],
        ['N','N','N','N'],
        ['N','N','N','N']
    ]
];

// 탭클릭함수
function tabHandler(e){
    order = 1;
    var num = this.getAttribute('value');
    buttons[num].style.visibility = "hidden";
    buttons[num].innerHTML = '';
    videos[num].setAttribute("name","main");
    videos[num].src = "video/"+floor[id]+"/"+room[id][num]+"_"+order+".mp4";
    videos[num].currentTime = 0;
    videos[num].play();
}

for(var i=0;i<vl;i++){
    videos[i].addEventListener('ended',videoEndHandler,false);
}

//비디오종료함수
function videoEndHandler(e){
    var num = this.getAttribute('value');
    var name = this.getAttribute("name");
    if(name == "main"){
        if(isPillar[id][order][num] == 'Y'){
            buttons[num].appendChild(makePillar());
        }
        if(isPillar1[id][order][num] == 'Y'){
            buttons[num].appendChild(makePillar1());
        }
        if(isPillar2[id][order][num] == 'Y'){
            buttons[num].appendChild(makePillar2());
        }
        if(isWall[id][order][num] == 'Y'){
            buttons[num].appendChild(makeWall());
        }
        if(isSlab[id][order][num] == 'Y'){
            buttons[num].appendChild(makeSlab());
        }
        if(isBo[id][order][num] == 'Y'){
            buttons[num].appendChild(makeBo());
        }
        if(last[id][num] == order){
            buttons[num].appendChild(makeRestart());
        }else{
            buttons[num].appendChild(makeSkip());
        }
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
            src = "video/"+floor[id]+"/"+room[id][num]+"_"+order+"_기둥.mp4";
            name = "pillar";
            buttons[num].appendChild(makeBack());
        }else if(type == "backButton"){
            buttons[num].style.visibility = "hidden";
            src = "video/"+floor[id]+"/"+room[id][num]+"_"+order+"_1.mp4";
        }else if(type == "skipButton"){
            buttons[num].style.visibility = "hidden";
            order++;
            src = "video/"+floor[id]+"/"+room[id][num]+"_"+order+".mp4";
        }else if(type == "restartButton"){
            buttons[num].style.visibility = "hidden";
            order = 1;
            src = "video/"+floor[id]+"/"+room[id][num]+"_"+order+".mp4";
        }else if(type == "wallButton"){
            src = "video/"+floor[id]+"/"+room[id][num]+"_"+order+"_벽체.mp4";
            name = "wall";
            buttons[num].appendChild(makeBack());
        }else if(type == "slabButton"){
            src = "video/"+floor[id]+"/"+room[id][num]+"_"+order+"_슬래브.mp4";
            name = "slab";
            buttons[num].appendChild(makeBack());
        }else if(type == "boButton"){
            src = "video/"+floor[id]+"/"+room[id][num]+"_"+order+"_보.mp4";
            name = "bo";
            buttons[num].appendChild(makeBack());
        }else if(type == "pillarButton1"){
            src = "video/"+floor[id]+"/"+room[id][num]+"_"+order+"_기둥1.mp4";
            name = "pillar1";
            buttons[num].appendChild(makeBack());
        }else if(type == "pillarButton2"){
            src = "video/"+floor[id]+"/"+room[id][num]+"_"+order+"_기둥2.mp4";
            name = "pillar2";
            buttons[num].appendChild(makeBack());
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
function modalOpenHandler(){
    document.getElementById('id01').style.display='block';
    var tabs = document.getElementsByClassName("tablink");
    var tl = tabs.length;
    for(var i=0;i<tl;i++){
        if(tabs[i].getAttribute("value") == "0"){
            tabs[i].click();
        }
    }
}
function makePillar(){
    var button = document.createElement("button");
    button.setAttribute("class","pillarButton");
    button.innerText = "기둥";
    button.addEventListener('click',buttonHandler,false);
    return button;
}
function makePillar1(){
    var button = document.createElement("button");
    button.setAttribute("class","pillarButton1");
    button.innerText = "기둥C1";
    button.addEventListener('click',buttonHandler,false);
    return button;
}
function makePillar2(){
    var button = document.createElement("button");
    button.setAttribute("class","pillarButton2");
    button.innerText = "기둥C2";
    button.addEventListener('click',buttonHandler,false);
    return button;
}
function makeWall(){
    var button = document.createElement("button");
    button.setAttribute("class","wallButton");
    button.innerText = "벽체";
    button.addEventListener('click',buttonHandler,false);
    return button;
}
function makeSlab(){
    var button = document.createElement("button");
    button.setAttribute("class","slabButton");
    button.innerText = "슬래브";
    button.addEventListener('click',buttonHandler,false);
    return button;
}
function makeBo(){
    var button = document.createElement("button");
    button.setAttribute("class","boButton");
    button.innerText = "보";
    button.addEventListener('click',buttonHandler,false);
    return button;
}
function makeBack(){
    var button = document.createElement("button");
    button.setAttribute("class","backButton");
    button.innerText = "뒤로가기";
    button.addEventListener('click',buttonHandler,false);
    return button;
}
function makeSkip(){
    var button = document.createElement("button");
    button.setAttribute("class","skipButton");
    button.innerText = "SKIP >>";
    button.addEventListener('click',buttonHandler,false);
    return button;
}
function makeRestart(){
    var button = document.createElement("button");
    button.setAttribute("class","restartButton");
    button.innerText = "다시보기";
    button.addEventListener('click',buttonHandler,false);
    return button;
}