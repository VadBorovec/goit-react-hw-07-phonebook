import styled from '@emotion/styled';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 24px;
`;

export const Item = styled.li`
  /* position: relative; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px;
  padding: 10px 30px 10px 10px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadows.medium};
  cursor: pointer;

  transition-property: transform, box-shadow;
  transition-duration: 0.25s;

  background-color: ${props => props.theme.colors.white};

  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.small};
  }
`;
