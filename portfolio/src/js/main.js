(()=>{
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
const imgBox = ['url(./image/work-img1.png)','url(./image/work-img2.png)'];
let showNum = 0;
const workNumBox = document.getElementById('js-work-num-box');
const imgLen = imgBox.length;
const workNum = document.getElementsByClassName('work-num');

// スライド
const show = () => {
  workTarget.style.backgroundImage = imgBox[showNum];
}
const workNumShow = () => {
  for (let i=0; i<workNum.length; i++){
    workNum[i].classList.remove('work-num-show');
  }
  workNum[showNum].classList.add('work-num-show');
}

const clickGo = () => {
  if (showNum == imgBox.length-1) {
    showNum = 0;
  } else {
    showNum++;
  } 
  workNumShow();
  show();
}

const clickBack = () => {
  if (showNum == 0) {
    showNum = imgBox.length-1
  } else {
    showNum--;
  }
  workNumShow();
  show();
}

workGoTrigger.addEventListener('click', () => {
  clickGo();
});
workBackTrigger.addEventListener('click', () => {
  clickBack();
});


// modal
const modal = document.getElementsByClassName('js-modal-target');
const modalBack = document.getElementById('js-modal-bac');

workTarget.addEventListener('click', () => {
  modal[0].style.display = 'block';
})

modalBack.addEventListener('click', () => {
  modal[0].style.display = 'none';
})

})();
