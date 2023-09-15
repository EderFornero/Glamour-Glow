import styled from 'styled-components'
const DisableSvg = (): JSX.Element => {
  return (
    <Svg cursor="pointer" width="20px" height="20px" fill="red" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">

      <g fill="none" fillRule="evenodd">

        <path d="m0 0h32v32h-32z" />

        <path d="m16 0c8.836556 0 16 7.163444 16 16s-7.163444 16-16 16-16-7.163444-16-16 7.163444-16 16-16zm0 2c-7.7319865 0-14 6.2680135-14 14s6.2680135 14 14 14 14-6.2680135 14-14-6.2680135-14-14-14zm2.8284271 9.7573593c.3905243-.3905243 1.0236893-.3905243 1.4142136 0s.3905243 1.0236893 0 1.4142136l-7.0710678 7.0710678c-.3905243.3905243-1.0236893.3905243-1.4142136 0s-.3905243-1.0236893 0-1.4142136z" fill="#202327" fillRule="nonzero" />
      </g>

    </Svg>
  )
}

export default DisableSvg

const Svg = styled.svg`
  border-radius: 50%;

  &:hover{
    border: solid 1.5px #818181; 
    transition: all .3s;
    transform: scale(1.2);
  }
`
