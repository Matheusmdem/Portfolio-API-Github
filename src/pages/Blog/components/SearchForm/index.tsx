import { SearchFormContainer } from "./styles";


export function SearchForm() {

  return (
    <SearchFormContainer >
      <div>
        <p>Publicações</p>
        <p>6 Publicações</p>
      </div>
      <input
        type="text"
        placeholder="Buscar coteúdo"
      />
    </SearchFormContainer>
  )
}