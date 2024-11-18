export function LocationSelectorForm() {
  return (
    <form className="form-container">
      <label htmlFor="location">Location</label>
      <select id="location" name="location">
        <option disabled>Choose a city...</option>
        <option>City 1</option>
        <option>City 2</option>
        <option>City 3</option>
        <option>City 4</option>
        <option>City 5</option>
        <option>City 6</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
