// 図形要素の取得
const shapes = document.getElementsByClassName('anime-1-1');

// マウス移動イベントリスナーの追加
for (let i=0; shapes.length>i; i++) {
  document.addEventListener('mousemove', (e) => {
    handleMouseMove(e,shapes[i]);
  });
}


// マウス移動イベントの処理
function handleMouseMove(event,shapes) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    
    // マウスカーソルの位置をパーセントに変換
    var percentX = (mouseX / window.innerWidth) * 100;
    var percentY = (mouseY / window.innerHeight) * 100;
  

  // 図形の配置を更新
  shapes.style.left = `${percentX-50}%`;
  shapes.style.top = `${percentY-50}%`;
}