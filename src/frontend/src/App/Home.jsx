import { Text, Button } from '@fluentui/react-northstar';
// import { useEffect, useState } from 'react';
// import axios from 'axios'

export default function Home(props) {

    // const [isOAIDeployed, setIsOAIDeployed] = useState(false)

    // useEffect(() => {
    //     axios.get("/api/isdeployed").then(v => {
    //         setIsOAIDeployed(v.data.isDeployed)
    //     })
    // }, [])

    // const renderOAIOptions = () => {
    //     if (isOAIDeployed) {
    //         return (
    //             <>
                    
    //                 |
    //                 <Button id="VECTOR_SEARCH" onClick={(e) => props.onClick(e)} text style={{ color: "rgb(0, 120, 212)" }} content="OpenAI Vector Search Application" />
    //             </>
                
            
    //         )
    //     }
    // }

    return (
        <div style={{ paddingLeft: "0px", paddingTop: "50px" }}>
            <Text weight="semibold" style={{ fontSize: "25px", display: "block", marginBottom: "20px" }}>Welcome to the Business Process Automation Accelerator</Text>
            <Text style={{ display: "block", marginBottom: "10px" }}>
                Cotiviti BPA Application for Azure AI and OCR services empowers you to create sophisticated AI/ML pipelines by leveraging the power of Azure's AI and OCR capabilities. With Azure AI, you can tap into a range of pre-trained models and services to enhance your pipeline's performance. Create a new pipeline by selecting “Configure a New Pipeline” below. After the input file type is selected, new Services will appear within your pipeline builder from (Azure Language, Form Recognizer, Speech, etc..), based on the file type (e.g. audio files). As files are transformed or converted, from images or audio to text, new Services will become available to be added to the pipeline builder. For example, Language Services options for data that has been transformed to text.
            </Text>
            <Text style={{ display: "block", marginBottom: "10px" }}>
                Azure AI offers a comprehensive suite of services, including Azure Language, Form Recognizer, Speech, and more. These services enable you to process and analyze various types of data, such as text, images, and audio, within your pipeline. For example, Azure Language services can help you perform language detection, sentiment analysis, and text translation. Form Recognizer allows you to extract structured data from forms and documents. Speech services facilitate speech recognition and text-to-speech conversion.
            </Text>



            <Text weight="semibold" style={{ fontSize: "18px", display: "block", marginBottom: "20px" }}>What would you like to do?</Text>
            {/* <div style={{display:"flex", paddingTop : "50px"}}> */}
            <Button id="CONFIGURE_PIPELINE" onClick={(e) => props.onClick(e)} text style={{ color: "rgb(0, 120, 212)", paddingLeft: "0px" }} content="Create/Update/Delete Pipelines" />
            |
            <Button id="CURRENT_PIPELINE" onClick={(e) => props.onClick(e)} text style={{ color: "rgb(0, 120, 212)" }} content="View The Existing Pipeline " />
            |
            <Button id="UPLOAD_DOCUMENTS" onClick={(e) => props.onClick(e)} text style={{ color: "rgb(0, 120, 212)" }} content="Ingest Documents" />
            |
            <Button id="VIEW_INSIGHTS" onClick={(e) => props.onClick(e)} text style={{ color: "rgb(0, 120, 212)" }} content="Sample Search Application" />
            |
            <Button id="ENTERPRISE_SEARCH" onClick={(e) => props.onClick(e)} text style={{ color: "rgb(0, 120, 212)" }} content="Enterprise Search Demo" />
            |
            <Button id="OPENAI_VIEWER" onClick={(e) => props.onClick(e)} text style={{ color: "rgb(0, 120, 212)" }} content="Result Viewer" />
            {/* {renderOAIOptions()} */}

            {/* </div> */}
        </div>

    )
}
