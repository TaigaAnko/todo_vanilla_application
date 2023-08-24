import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得して、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // liタグ生成
  const li = document.createElement("li");

  // divタグ生成
  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.className = "target";
  p.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親タグを未完了のリストから削除
    deleteFromIncompleteList(completeButton.parentNode.parentNode);
    // 完了リストに追加する要素
    const addTarget = completeButton.parentNode;
    // 必要のないものを削除
    const comButton = addTarget.querySelector("button");
    const delButton = completeButton.nextElementSibling;
    addTarget.removeChild(comButton);
    addTarget.removeChild(delButton);

    const li = document.createElement("li");

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      document
        .getElementById("complete-list")
        .removeChild(backButton.parentNode.parentNode);
      const deleteTarget = backButton.parentNode;
      deleteTarget.removeChild(deleteTarget.querySelector("button"));

      const li = document.createElement("li");

      li.appendChild(deleteTarget);
      deleteTarget.appendChild(completeButton);
      deleteTarget.appendChild(deleteButton);

      document.getElementById("incomplete-list").appendChild(li);
    });

    li.appendChild(addTarget);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(li);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了のリストから削除
    deleteFromIncompleteList(deleteButton.parentNode.parentNode);
  });

  // liタグの子要素に各要素を設定
  li.appendChild(div);

  // divタグの子要素に各要素を設定
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完成のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
