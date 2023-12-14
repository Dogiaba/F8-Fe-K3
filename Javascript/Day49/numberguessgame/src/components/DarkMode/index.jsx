import "../DarkMode/DarkMode.css";

function DarkMode({ handleChange, isChecked }) {
  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          id="check"
          onChange={handleChange}
          checked={isChecked}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default DarkMode;
