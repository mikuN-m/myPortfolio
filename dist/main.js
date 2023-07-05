//マウスの位置を％で取得


// タブ切り替え
const $contentTarget = document.getElementsByClassName('js-nav-target');
const $tabTrigger = document.getElementsByClassName('js-trigger');

//初期化関数
const init = () => {
  $contentTarget[0].style.display = 'block';
}
init();

const contentInit = (target,trigger) => {
  target.style.display = 'none';
  trigger.classList.remove('now');
}


//click
const clickHander = (trigger,target) => {
  trigger.addEventListener('click', () => {
    for (let i=0; $tabTrigger.length>i; i++) {
      contentInit($contentTarget[i],$tabTrigger[i]);
    }

    target.style.display = 'block'
    trigger.classList.add('now');
  });
}

for (let i=0; $tabTrigger.length>i; i++) {
  clickHander($tabTrigger[i],$contentTarget[i]);
}


// work
const workTarget = document.getElementById('js-work-target');
const workBackTrigger = document.getElementById('js-work-BackTrigger');
const workGoTrigger = document.getElementById('js-work-GoTrigger');

const imgBox = ['url(../stylesheets/image/work-img1.png)','url(../stylesheets/image/work-img2.png)'];
let showNum = 0;

const show = () => {
  workTarget.style.backgroundImage = imgBox[showNum];
}

const clickGo = () => {
  if (showNum == imgBox.length-1) {
    showNum = 0;
  } else {
    showNum++;
  }
  show();
}

const clickBack = () => {
  if (showNum == 0) {
    showNum = imgBox.length-1
  } else {
    showNum--;
  }
  show();
}

workGoTrigger.addEventListener('click', () => {
  clickGo();
});
workBackTrigger.addEventListener('click', () => {
  clickBack();
});