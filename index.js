
function showValue(value) {
  // Находим элемент, в котором будет отображаться значение
  const selectedValueElement = document.getElementById('slidersImg');
  
  const img = ['black','orange' , 'pink' , 'yellow' , ]
  // Устанавливаем значение элемента
  selectedValueElement.innerHTML = `<img src="./img/${img[value - 1]}.png" alt="" >`;

  // Удаляем класс "active" у всех элементов и добавляем его только к активному элементу
  const smallPhotosElements = document.querySelectorAll('.small-photos div');
  smallPhotosElements.forEach((element) => {
    element.classList.remove('active');
  });

  // Добавляем класс "active" к выбранному элементу
  const selectedElement = document.querySelector(`.small-photos div:nth-child(${value})`);
  selectedElement.classList.add('active');
}


const rating = document.querySelectorAll('.rating');

rating.forEach(dom => {
  let id = 'rating_' + dom.dataset.name;
  for (var i = 0; i < 5; i++) {
    let className = i < dom.dataset.value ? 'active' : 'noactive';
    dom.innerHTML += `
      <svg class="c-icon ${className}" width="14" height="13" name=${id} id=${id}_${i} ${i < dom.dataset.value ? 'checked' : ''} onclick="ratingChanged(this, '${dom.dataset.name}', ${i + 1})"><use xlink:href="#star"></use></svg>
    `;
  }
});

function ratingChanged(element, id, value) {

  rating.forEach(dom => {
    let id = 'rating_' + dom.dataset.name;
    for (var i = 0; i < 5; i++) {
      let svgElement = document.getElementById(`${id}_${i}`);
      let className = i < value ? 'active' : 'noactive';
      svgElement.classList.remove('active', 'noactive');
      svgElement.classList.add(className);
    }
  });
}
