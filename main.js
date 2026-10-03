/* 这是整个应用的"状态"：一个数字。
   界面上显示什么，完全由它决定。 */
let count = 0;

/* 1. 拿到页面里的三个元素，存成变量，后面反复用 */
const countEl = document.getElementById("count");
const addBtn = document.getElementById("add-btn");
const resetBtn = document.getElementById("reset-btn");

/* 2. 渲染函数：把状态写进界面。
   好处是——不管谁改了 count，都调用同一个函数更新，不会出现
   "数字变了但页面上没变" 的情况。 */
function render() {
  countEl.textContent = count;
}

/* 3. 事件监听：告诉按钮"被点击时该干什么" */
addBtn.addEventListener("click", () => {
  count = count + 1;
  render();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  render();
});

/* 4. 页面刚打开时先渲染一次，保证界面和数据一致 */
render();
