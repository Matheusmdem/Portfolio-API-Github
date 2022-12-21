import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 3.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p:first-child{
      font-weight:bold;
      font-size: 1.1rem;
      color: ${(props) => props.theme['#C4D4E3']};
    }

    p:last-child{
      font-size: 0.8rem;
      color: ${(props) => props.theme['#7B96B2']};
    }
  }

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    padding: 1rem;
    border: 1px solid ${(props) => props.theme['#1C2F41']};
    background: ${(props) => props.theme['#040F1A']};
    color: ${(props) => props.theme['#E7EDF4']};

    &::placeholder {
      color: ${(props) => props.theme['#3A536B']};
    }

    &:focus {
      transition: border 0.1s;
      border: 1px solid ${(props) => props.theme['#3294F8']};
    }
  }
`