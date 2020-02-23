import React from 'react'
import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";

const MasterContainer = ({children}) => {

    return(
        <div>
            <DesktopContainer>{children}</DesktopContainer>
            <MobileContainer>{children}</MobileContainer>
        </div>
    )
};

export default MasterContainer;