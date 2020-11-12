
const getErrorMessage = (err) => {
  const {message} = err;
  const node = document.createElement(`div`);
  node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
  node.style.position = `absolute`;
  node.style.left = 0;
  node.style.right = 0;
  node.style.fontSize = `30px`;

  node.textContent = `Статус ответа: ` + message;
  document.body.insertAdjacentElement(`afterbegin`, node);
};

export {getErrorMessage};
