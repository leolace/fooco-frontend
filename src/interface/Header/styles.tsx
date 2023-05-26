import styled from "styled-components"

interface Props {
  isScrolledDown: boolean
}

export const HeaderContainer = styled.header<Props>`
  display: flex;
  grid-template-columns: auto auto;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundColor.tertiary};
  padding: 0.6rem 2rem;
  transition: background-color 0.3s ease-in-out;
  position: fixed;
  width: 100%;
  z-index: 3;
  transition: top 0.3s ease;
  top: ${({ isScrolledDown }) => (isScrolledDown ? "-12rem" : "0")};

  .loading {
    display: block;
    width: 100%;
  }

  .search {
    justify-self: center;
  }

  .buttons {
    display: flex;
    align-items: center;
    gap: 2rem;
    grid-column: 2 / -1;
    justify-self: end;

    a {
      width: fit-content;
    }
  }

  .buttons-logged {
    display: flex;
    align-items: center;
    gap: 2rem;
    color: ${({ theme }) => theme.textColor.title};
    font-weight: 500;

    button,
    a {
      display: flex;
      align-items: center;
      cursor: pointer;
      gap: 0.3rem;
      font-size: 1.2rem;
      flex: 1;
      padding: 0;
      font-weight: 500;
      justify-content: center;

      &:hover {
        filter: brightness(1.1);
      }
    }

    @media (max-width: 600px) {
      gap: 1rem;

      button,
      a {
        font-size: 1rem;
        gap: 0.2rem;

        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }

  & .logo {
    max-width: 13rem;
    width: 100%;
    height: 100%;
    /* justify-self: start; */
    /* align-self: center; */
    place-items: center;

    svg {
      width: 90%;
      height: 90%;
    }

    @media (max-width: 600px) {
      max-width: 6rem;
      max-height: 4rem;
      width: 100%;
      display: flex;
      justify-content: center;
      min-width: 5rem;
    }
  }

  @media (max-width: 1000px) {
    display: grid;
    /* flex-direction: column; */
    gap: 1rem;
    grid-template-columns: auto auto;
    padding: 0.4rem 1rem;

    .loading {
      width: 100%;
      grid-column: 1 / -1;
    }

    .buttons {
      /* grid-column: 1 / -1; */
      align-items: center;
      justify-content: space-between;
      justify-self: center;
    }

    & > a {
      svg {
        width: 100%;
      }
      display: block;
      /* grid-column: 1 / -1; */
      width: 100%;
      justify-self: center;
    }

    .search {
      width: 100%;
      grid-column: 1 / -1;
      grid-row: 2;
    }
  }

  @media (max-width: 600px) {
    .buttons-logged {
      svg {
        width: 50%;
        height: 50%;
      }
    }

    .buttons {
      gap: 1rem;
    }
  }
`
