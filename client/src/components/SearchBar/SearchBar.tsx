// props
import type { SearchBarProps } from '../../interfaces/props'
// hooks
import { useSearchBarInOwnComponent } from '../../hooks'
// css
import style from './SearchBar.module.css'

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }: SearchBarProps) => {
  const { searchQuery, handleOnSearch } = useSearchBarInOwnComponent({ onSearch })
  return (
    <div className={style['div-input-wrapper']}>
    <input
        type="text"
        value={searchQuery}
        onChange={(e) => { handleOnSearch(e.target.value) } }
        placeholder="Search users by name"
      />
  </div>
  )
}

export default SearchBar
