const WorkImg = () => {
// スライド
const workTarget = document.getElementById('js-work-target');
const workBackTrigger = document.getElementById('js-work-BackTrigger');
const workGoTrigger = document.getElementById('js-work-GoTrigger');

const imgBox = ['url(../image/work-img1.png)','url(../image/work-img2.png)'];
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
}


export default WorkImg;