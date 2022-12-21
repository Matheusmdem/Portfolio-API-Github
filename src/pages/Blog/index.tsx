import { NavLink } from "react-router-dom";
import { Profile } from "./components/Profile-Info";
import { SearchForm } from "./components/SearchForm";
import { Card, CardsContainer } from "./styles";



export function Blog() {

  return (
    <main>
      <Profile />
      <SearchForm />

      <CardsContainer>
        <NavLink to="/post" title="posts" style={{ textDecoration: 'none' }} >
          <Card>
            <header>
              <strong>JavaScript data types and data structures</strong>
              <span>Há 1 dia</span>
            </header>
            <p>
              Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

              Dynamic typing
              JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

              let foo = 42; // foo is now a numberz
              foo = 'bar'; // foo is now a string
              foo = true; // foo is now a boolean
            </p>
          </Card>
        </NavLink>
      </CardsContainer>
    </main>
  )
}