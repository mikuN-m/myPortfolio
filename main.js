// タブ切り替え
const $contentTarget = document.getElementsByClassName('js-target');
const $tabTrigger = document.getElementsByClassName('js-trigger');

//初期化関数
const init = () => {
  $contentTarget[0].style.display = 'block';
}
init();

const contentInit = (target,trigger) => {
  target.style.display = 'none';
  trigger.classList.remove('now');
  console.log(target,trigger);
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