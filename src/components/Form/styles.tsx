import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};

    & > button {
      margin-top: ${theme.spacings.medium};
    }
  `}
`;
