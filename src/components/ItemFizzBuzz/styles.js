import { lightSpeedIn } from 'react-animations'
import styled, { keyframes } from 'styled-components'
const bounceAnimation = keyframes`${lightSpeedIn}`

export const Span = styled.span`
  animation: 1s ${bounceAnimation};
`
