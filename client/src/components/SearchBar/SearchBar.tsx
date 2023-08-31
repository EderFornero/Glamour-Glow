// props
import type { SearchBarProps } from '../../interfaces/props'
// hooks
import { useSearchBarInOwnComponent } from '../../hooks'
// css
import style from './SearchBar.module.css'

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, updateShowCards }: SearchBarProps) => {
  const { searchQuery, handleOnSearch } = useSearchBarInOwnComponent({ onSearch, updateShowCards })

  return (
    <div className={style['div-input-wrapper']}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => { handleOnSearch(e.target.value); updateShowCards(e.target.value.length > 0); }}
        placeholder="Search by Service Provider"
      />
    </div>
  )
}

export default SearchBar
