import { useEffect, useRef } from 'react'
// redux
import { useDispatch } from 'react-redux'
// css
import styled from 'styled-components'
import { setUploadImage } from '../../redux/actions'
import { useLocation, useParams } from 'react-router-dom'

const Cloudinary = (): JSX.Element => {
  const dispatch = useDispatch()
  const location = useLocation()
  const { id } = useParams()
  const createWidget = (): void => {
    if ('cloudinary' in window) {
      return (window.cloudinary as any).createUploadWidget(
        {
          cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
          uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
          maxFiles: 1,
          sources: ['local', 'unsplash'],
          searchBySites: ['https://unsplash.com/', 'https://pixabay.com/'],
          resourceType: 'image',
          googleApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
          styles: {
            palette: {
              window: '#3d36be',
              windowBorder: '#6e66ff',
              tabIcon: '#5effb1',
              menuIcons: '#fff',
              textDark: '#fff',
              textLight: '#fff',
              inactiveTabIcon: '#ccc',
              sourceBg: 'rgba(0, 0, 0, 0.25)',
              action: '#5effb1',
              link: '#5effb1'
            },
            frame: {
              background: '#18181890'
            }
          }
        },
        (error: any, result: any) => {
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          if (!error && result && result.event === 'success') {
            dispatch(setUploadImage(result.info.secure_url))
          }
        }
      )
    }
  }
  // widget config
  const widgetRef = useRef()

  useEffect(() => {
    const onIdle = (): void => {
      // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
      if (!widgetRef.current) {
        // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
        ; (widgetRef.current as any) = createWidget()
      }
    }

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(onIdle)
    } else {
      setTimeout(onIdle, 0)
    }
  }, [])

  const openWidget = (): void => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (widgetRef.current) {
      ; (widgetRef.current as any).open()
    }
  }

  const updateBusinessImage = location.pathname === `/admin/seller/${id}`
  return (
    <StyledDiv>
      {
        updateBusinessImage
          ? <UpdateImageButton onClick={openWidget} id='upload-button'>
            Update Image
          </UpdateImageButton>
          : <StyledDivButton>
            <StyledButtons onClick={openWidget} id='upload-button'>
              Upload Profile Image
            </StyledButtons>
          </StyledDivButton>
      }
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledDivButton = styled.div`
  display: flex;
  justify-content: center;
  font-size: 15px;
  margin-bottom: 5px;
`

const StyledButtons = styled.div`
  background: none;
  cursor: pointer;
  color: #000;
  border: 0.125em solid var(--accent-color);
  border-radius: 6px;
  padding: 5px;

  &:hover {
    box-shadow: var(--accent-color) 0 5px 10px;
    transform: translateY(-2px);
  }
`

const UpdateImageButton = styled.div`
width: auto;
font-size: 15px;
text-align: center;
 background-color: var(--accent-color);
 padding: 14px 20px;
 color: #fff;
 text-transform: uppercase;
 letter-spacing: 2px;
 cursor: pointer;
 border-radius: 10px;
 border: 2px dashed var(--accent-color);
 box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
 transition: .4s;

 &:hover {
 transition: .4s;
 border: 2px dashed var(--accent-color);
 background-color: #fff;
 color: var(--accent-color);
 }

 &:active {
 background-color: #87dbd0;
}

@media (max-width: 500px){
  width: 120px;
  height: auto;
  padding: 6px 0 6px 0;
  letter-spacing: 0;
  font-size: 14px;
}
`

export default Cloudinary
