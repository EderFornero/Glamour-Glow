// css
import styled from 'styled-components'
import NotFoundImage from '../../Images/not-found-image.png'
// react router dom
import { useGoBack } from '../../hooks/index'

const NotFound = (): JSX.Element => {
  const goBack = useGoBack()
  return (
    <DivGoBack>
      <ButtonGoBack onClick={goBack}>GO BACK</ButtonGoBack>
    </DivGoBack>
  )
}

export default NotFound

const DivGoBack = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  

  &::before{
  content: "";
  inset: 0;
  background: url(${NotFoundImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  position: absolute;
  filter: blur(4.5px);
  z-index: -1;  
  }

  @media (max-width: 520px){ 
    &::before{
      background-size: 90% 90%;
    }
  }
`
const ButtonGoBack = styled.button`
  border: 0.125em solid var(--primary-color);
  border-radius: 1em;
  box-sizing: border-box; 
  background-color: var(--primary-color);
  color: var(--neutral-color);
  cursor: pointer;
  display: inline-block;
  font-size: 25px;
  font-weight: 600;
  line-height: normal;
  min-height: 22px;
  min-width: 40px;
  outline: none;
  padding: 1em 2.3em;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);

  &:hover {
 background-color: var(--secondary-color);
 box-shadow: var(--secondary-color) 0 8px 15px;
 transform: translateY(-2px);
 }
`
