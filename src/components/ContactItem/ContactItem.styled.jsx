import styled from '@emotion/styled';

export const Name = styled.h3`
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.large};
  letter-spacing: ${props => props.theme.spacing(0.25)};

  color: ${props => props.theme.colors.gray};

  margin-left: ${props => props.theme.spacing(2)};
  margin-bottom: 0;
`;

export const Number = styled.p`
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.medium};
  letter-spacing: ${props => props.theme.spacing(0.25)};

  color: ${props => props.theme.colors.deepteal};

  margin-left: ${props => props.theme.spacing(2)};
  margin-bottom: 0;
`;
