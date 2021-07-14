const StyleBar = ({ handleData, formData }) => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <label for="color">Color:</label>
          <input type="color" id="color" name="color" onChange={handleData} />
        </li>
        <li>
          <label for="weight">Stroke:</label>
          <input
            type="number"
            id="weight"
            name="stroke"
            min="2"
            max="200"
            value={formData.stroke}
            onChange={handleData}
          />
        </li>
        <li>
          <button id="clear">
            <i className="fa fa-trash"></i>
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default StyleBar;
