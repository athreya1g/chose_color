
function SelectColor(props) {
  const onChangeHandler = (e) =>{
    props.onColorSelect(e.target.value);
  }
  return (
    <div className="divStyle">
      <label for="colors">Choose a color:</label>

      <select name="colors" id="colors" onChange={onChangeHandler}>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="blue">Blue</option>
        <option value="grenn">Green</option>
      </select>
    </div>
  );
}

export default SelectColor;