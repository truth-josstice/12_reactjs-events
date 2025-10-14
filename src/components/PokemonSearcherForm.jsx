/* 
<PokemonSearcherForm 
    currentSearchFieldValue={pokemonToSearch}
    searchValueUpdateFunction={() => {this.setState({})}
    formSubmissionHandler={() => {}}
/> 
*/

export function PokemonSearcherForm({
  currentSearchFieldValue,
  searchValueUpdateFunction,
  formSubmissionHandler,
}) {
  return (
    <form onSubmit={(event) => {formSubmissionHandler(event)}}>
      <label htmlFor="searchField">Pokemon to search for:</label>
      <input
        type="text"
        name="searchField"
        id="searchField"
        value={currentSearchFieldValue}
        // This sends the new input field value up to the parent
        // so the parent can update its own state of that value
        onChange={(event) => {
          searchValueUpdateFunction(event.target.value)
        }}
      />
      <button type="submit">Search!</button>
    </form>
  );
}
