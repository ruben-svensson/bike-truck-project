import { useEffect, useState } from 'react'
import styled from 'styled-components'
const Title = styled.h1`
  font-size:42px;
`

const StatsContainer = styled.div`
  padding: 20px;
  min-width:200px;

  > div {
    margin: 20px 0;
    background-color: #2e2747;
    padding:4px;
  }

  & > div:first-child, & > div:last-child {
    margin-top: 0;
  }
`

const VideoWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  background:black;
  align-items: center;
  justify-content: center;
  padding: 20px;

  & > video {
    max-width: 100%;
    display: flex;
    flex-grow: 1;
    background:black;
    align-items: center;
    justify-content: center;
  }
`

export default function Home() {
  const [distance, setDistance] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDistance(distance + (Math.random() * 0.001))
    }, 10)

    return () => clearInterval(interval)
  })

  return (
    <>
      <StatsContainer>
        <div>
          <h5>
            Distance travled today
          </h5>
          <h3>
            {distance.toFixed(2)}KM
          </h3>
          <p></p>
        </div>
        <div>
          <h5>
            Total distance travled
          </h5>
          <h3>
            {distance.toFixed(2)}KM
          </h3>
          <p></p>
        </div>
      </StatsContainer>
      <VideoWrapper>
        <video autoPlay controls>
          <source src="" type="video/mp4"></source>
        </video>
      </VideoWrapper>
    </>
  )
}
