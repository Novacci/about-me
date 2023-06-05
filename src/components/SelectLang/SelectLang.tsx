const SelectLang = () => {
  return (
    <>
      <label htmlFor="lang-select">Choose a pet:</label>

      <select name="pets" id="lang-select">
        <option value="">--Please choose an option--</option>
        <option value="polish">Polish</option>
        <option value="english">English</option>
      </select>
    </>
  );
};

export default SelectLang;
