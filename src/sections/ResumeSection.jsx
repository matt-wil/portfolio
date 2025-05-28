import DownloadPdfButton from "../components/DownloadPdfButton"

const ResumeSection = () => {
  return (
    <section id="resume" className="flex-center section-padding">        
        <div className="flex md:flex-row flex-col gap-5">
                <DownloadPdfButton
                    fileName="MatthewWilliamsCV.pdf"
                    linkText="Download Resume"
                    downloadAs="MatthewWilliamsCV.pdf"
                    className="md:w-80 md:h-16 w-60 h-30"
                />
                <DownloadPdfButton
                    fileName="MatthewWilliamsLebenslauf.pdf"
                    linkText="Lebenslauf herunterladen"
                    downloadAs="MatthewWilliamsLebenslauf.pdf"
                    className="md:w-80 md:h-16 w-60 h-30"
                />

        </div>
    </section>
  )
}

export default ResumeSection