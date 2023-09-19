import style from './Loader.module.css'

const Loader = (): JSX.Element => {
  return (
    <div className={style.loader}>
      <div className={style.line}></div>
    </div>
  )
}

export default Loader
