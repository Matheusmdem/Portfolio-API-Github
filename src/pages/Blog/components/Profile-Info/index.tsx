import { ProfileContainer, ProfileContent } from "./styles";
import githubArrow from '../../../../assets/GithubArrow.svg'
import github from '../../../../assets/github.svg'
import company from '../../../../assets/company.svg'
import followers from '../../../../assets/followers.svg'

export function Profile() {

  return (
    <ProfileContainer>
      <img src="https://github.com/matheusmdem.png" alt="Foto perfil" />
      <ProfileContent>
        <div className="header">
          <strong>Matheus Melo</strong>
          <a href="https://github.com/matheusmdem">
            GITHUB
            <img src={githubArrow} />
          </a>
        </div>
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
        <div className="infos">
          <span>
            <img src={github} alt="nome de usuario" />
            Matheusmdem
          </span>
          <span>
            <img src={company} alt="empresa" />
            Sem trabalho
          </span>
          <span>
            <img src={followers} alt="seguidores" />
            32 seguidores
          </span>
        </div>
      </ProfileContent>
    </ProfileContainer>
  )
}