
import './App.css';
import ColorDiv from './component/color_div/color_div';
import SelectColor from './component/select_color/select_color';
import { useState } from 'react';


function App() {
  const [color, setColor] = useState("white");
  const onColorSelect = (selectedColor) => {
    setColor(selectedColor);
  }
  return (
    <div className="App">
      <ColorDiv color={color}></ColorDiv>
      <SelectColor onColorSelect={onColorSelect}></SelectColor>
    </div>
  );
}

export default App;
