import { FaDownload } from "react-icons/fa"

const DownloadPdfButton = ({fileName, linkText, downloadAs, className }) => {
    const fileUrl = `/pdfs/${fileName}`
  return (
    <a  
        href={fileUrl}
        download={downloadAs}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={linkText}
        className={`${className ?? ''} cta-wrapper`}
    > 
        <div className="cta-button group">
            <div className="bg-circle"/>
            <p className="text">{linkText}</p>
            <div className="arrow-wrapper hover:text-black">
                <FaDownload className=""/>
            </div>
        </div>
    </a>
  )
}

export default DownloadPdfButton