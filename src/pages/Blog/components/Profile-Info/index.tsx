import { ProfileContainer, ProfileContent } from "./styles";
import githubArrow from '../../../../assets/GithubArrow.svg'
import github from '../../../../assets/github.svg'
import company from '../../../../assets/company.svg'
import followers from '../../../../assets/followers.svg'
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

interface ProfileProps {
  avatar_url?: string;
  followers?: string;
  company?: string;
  bio?: string;
  login?: string;
  name?: string;
  html_url?: string;
}

export function Profile() {
  const [userProfile, setUserProfile] = useState<ProfileProps>()

  useEffect(() => {
    (async () => {
      const response = await api.get('/matheusmdem')
      setUserProfile(response.data)
    })()

    return () => { }
  }, [])

  return (
    <ProfileContainer>
      <img src={userProfile?.avatar_url} alt="Foto perfil" />
      <ProfileContent>
        <div className="header">
          <strong>{userProfile?.name}</strong>
          <a href={userProfile?.html_url} target="_blank">
            GITHUB
            <img src={githubArrow} />
          </a>
        </div>
        <p>{userProfile?.bio}</p>
        <div className="infos">
          <span>
            <img src={github} alt="nome de usuario" />
            {userProfile?.login}
          </span>
          <span>
            <img src={company} alt="empresa" />
            {userProfile?.company}
          </span>
          <span>
            <img src={followers} alt="seguidores" />
            {`${userProfile?.followers} seguidore(s)`}
          </span>
        </div>
      </ProfileContent>
    </ProfileContainer>
  )
}