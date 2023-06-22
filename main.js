// 図形要素の取得
const container = document.getElementById('anime-1');
const shape = document.getElementById('anime-1-1');

// マウス移動イベントリスナーの追加
document.addEventListener('mousemove', handleMouseMove);

// マウス移動イベントの処理
function handleMouseMove(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    
    // マウスカーソルの位置をパーセントに変換
    var percentX = (mouseX / window.innerWidth) * 100;
    var percentY = (mouseY / window.innerHeight) * 100;
  

  // 図形の配置を更新
  shape.style.left = `${percentX-10}%`;
  shape.style.top = `${percentY-10}%`;
}