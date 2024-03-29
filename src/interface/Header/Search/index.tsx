import React from "react"
import UseMatchWindowSize from "src/hooks/UseWindowSize"
import { Container, SearchContainer } from "./styles"
import { useNavigate, useSearchParams } from "react-router-dom"
import { create } from "zustand"

interface Props {
  search: string
  setSearch: (search: string) => void
}

export const useSearchStore = create<Props>((set) => ({
  search: "",
  setSearch: (search: string) => set({ search }),
}))

const Search = () => {
  const { search, setSearch } = useSearchStore()
  const match = UseMatchWindowSize(1100)
  const [, setSearchParams] = useSearchParams()
  const nav = useNavigate()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    nav(`floresta/procurar`)
    setSearchParams({ q: search })
  }

  return (
    <Container className="search">
      <SearchContainer onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Pesquisar..."
          onChange={({ target }) => setSearch(target.value)}
          value={search}
        />
        <button className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </SearchContainer>
    </Container>
  )
}

export default Search
