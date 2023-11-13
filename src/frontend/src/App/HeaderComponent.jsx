import React from 'react';
import { Text,Image } from '@fluentui/react-northstar'
import CotivitiLogo from '../images/Logo_External_CotivitiGPS_Neg1.png'

const HeaderComponent = (props) => {
    
    return (
        <div style={{backgroundColor: "rgb(48, 0, 111)", color: "white", padding: "10px" }}>
            <Image src={CotivitiLogo} alt="Cotiviti" style={{height: 26}} />
            &nbsp;
            &nbsp;
            <Text size="large" content="CHAT WITH DATA" />
            {/* <Header content='Business Process Automation Accelerator' className="header" style={{ fontSize: "20px", color: "white", backgroundColor: "rgb(0, 120, 212)" }} /> */}
            </div>
        // <div className="header" style={{fontFamily: props.theme.siteVariables.bodyFontFamily,  backgroundColor: props.theme.siteVariables.colorScheme.brand.background, color : props.theme.siteVariables.colorScheme.brand.foreground, fontSize: props.theme.siteVariables.fontSizes.larger}}>
        //     Business Process Automation Accelerator
        // </div>
    )
}

export default HeaderComponent
