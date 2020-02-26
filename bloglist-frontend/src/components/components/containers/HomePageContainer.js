import React from 'react'
import DesktopContainer from "./DesktopContainer";
import MobileHomePageContainer from "./MobileHomePageContainer";

const MasterContainer = ({children}) => {

    return(
        <div>
            <DesktopContainer>{children}</DesktopContainer>
            <MobileHomePageContainer>{children}</MobileHomePageContainer>
        </div>
    )
};

export default MasterContainer;