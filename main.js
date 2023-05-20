import './style.css';

const COLOR_PALETTE = {
  '#E3170A': 'Chilli red',
  '#A9E5BB': 'Celadon',
  '#FCF6B1': 'Vainilla',
  '#F7B32B': 'Xanthous',
  '#2D1E2F' : 'Dark purple'
};

const addOptionsToColorPiker = () => {

const colorpickerSelect = document.querySelector ('#colorpicker');

Object.keys(COLOR_PALETTE).forEach((color) => {
  const option = document.createElement ( 'option');
  option.value = color;
  option.innerText = COLOR_PALETTE [color];

  colorpickerSelect.append(option);
})
};

const addEventListenerToColorPicker = () => {
  const colorpickerSelect = document.querySelector ('#colorpicker');
  const colorName = document.querySelector('#color-name');
 
  colorpickerSelect.addEventListener ('change', (ev) => {
    const newColor = ev.target.value;
    document.body.style.backgroundColor = newColor;
   
   const colorNameText = `${COLOR_PALETTE [newColor]} | ${newColor}`;
   colorName.innerText = COLOR_PALETTE [newColor] ? colorNameText : '-';
  });
}

addOptionsToColorPiker();
addEventListenerToColorPicker ();





