import styled from "styled-components";


export const PostContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  width: 100%;
  border-radius: 10px;
  margin-top: -13rem;
  background: ${(props) => props.theme['#0B1B2B']};

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    p {
      display: flex;
      align-items: center;
      text-decoration: none;
      gap: 0.3rem;
      font-size: 0.8rem;
      font-weight: bold;
      color: ${(props) => props.theme['#3294F8']};
      border-bottom: 1px solid ${(props) => props.theme['#0B1B2B']};
      
      &:hover {
        transition: border 0.1s;
        border-bottom: 1px solid ${(props) => props.theme['#3294F8']};
      }
      
      img {
        width: 11.25px;
        color: ${(props) => props.theme['#3294F8']};
      }
    }
    
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      gap: 0.3rem;
      font-size: 0.8rem;
      font-weight: bold;
      color: ${(props) => props.theme['#3294F8']};
      border-bottom: 1px solid ${(props) => props.theme['#0B1B2B']};
      
      &:hover {
        transition: border 0.1s;
        border-bottom: 1px solid ${(props) => props.theme['#3294F8']};
      }
      
      img {
        width: 11.25px;
        color: ${(props) => props.theme['#3294F8']};
      }
    }
  }

  strong {
    color: ${(props) => props.theme['#E7EDF4']};
    font-size: 1.5rem;
  }

  .infos {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;  

    span {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      text-decoration: none;
      gap: 0.3rem;
      font-size: 1rem;
      color: ${(props) => props.theme['#AFC2D4']};

      img {
        width: 18px;
      }
    }
  }
`