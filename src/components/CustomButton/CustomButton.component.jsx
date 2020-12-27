import React from 'react'
import { CustomButtonContainer } from "./CustomButton.styles";

export const CustomButton = ({children, ...otherProps}) => {
  return (
    <CustomButtonContainer {...otherProps}>
      {children}
    </CustomButtonContainer>
  )
}
