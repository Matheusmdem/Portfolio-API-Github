import { PostContainer } from "./styles";
import githubArrow from '../../../assets/GithubArrow.svg'
import backArrow from '../../../assets/BackArrow.svg'
import github from '../../../assets/github.svg'
import calendar from '../../../assets/calendar.svg'
import comments from '../../../assets/comments.svg'
import { NavLink } from "react-router-dom";

export function PostInfo() {

  return (
    <PostContainer>
      <nav>
        <NavLink to="/" title="back" end style={{ textDecoration: 'none' }}>
          <p>
            <img src={backArrow} />
            VOLTAR
          </p>
        </NavLink>
        <a href="https://github.com/matheusmdem">
          GITHUB
          <img src={githubArrow} />
        </a>
      </nav>

      <strong>Boas Práticas</strong>

      <div className="infos">
        <span>
          <img src={github} alt="nome de usuario" />
          Matheusmdem
        </span>
        <span>
          <img src={calendar} alt="empresa" />
          Há 1 dia
        </span>
        <span>
          <img src={comments} alt="seguidores" />
          5 Comentários
        </span>
      </div>
    </PostContainer >
  )
}