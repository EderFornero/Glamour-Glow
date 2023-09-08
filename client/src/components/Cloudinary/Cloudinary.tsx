import { useEffect, useRef } from 'react'
// redux
import { useDispatch } from 'react-redux'
// css
import styled from 'styled-components'
import { setUploadImage } from '../../redux/actions'

const Cloudinary = (): void => {
  const dispatch = useDispatch()
  const createWidget = (): void => {
    if ('cloudinary' in window) {
      return (window.cloudinary as any).createUploadWidget(
        {
          cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
          uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
          maxFiles: 1,
          sources: ['local', 'image_search', 'unsplash'],
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
        (widgetRef.current as any) = createWidget()
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
      (widgetRef.current as any).open()
    }
  }

  return (
    <StyledDiv>
      <StyledDivButton>
        <StyledButtons onClick={openWidget} id="upload-button">
          Upload Profile Image
          </StyledButtons>
      </StyledDivButton>
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

export default Cloudinary
