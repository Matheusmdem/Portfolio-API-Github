import styled from 'styled-components'

export const CardsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 47.9%;
  height: 260px;
  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme['#112131']};
  border: 2px solid ${(props) => props.theme['#112131']};
  text-decoration: none;

  &:hover {
    transition: border 0.2s;
    border: 2px solid ${(props) => props.theme['#3A536B']};
  }

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    
    strong {
      width: 100%;
      color: ${(props) => props.theme['#E7EDF4']};
      font-size: 1.1rem;
    }

    span {
      width: 90px;
      font-size: 0.8rem;
      text-align: end;
      color: ${(props) => props.theme['#7B96B2']};
    }
  }

  p {
    color: ${(props) => props.theme['#AFC2D4']};
    overflow: hidden;
    text-overflow: ellipsis;
  }
`