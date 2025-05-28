import { socialIcons } from "../constants"


const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="flex flex-col justify-center md:items-start items-center">
            {/** LEFT SIDE OF FOOTER */}
                <p className="text-[10px]">
                    3D Light Bulb Model by 
                    <a className="hover:underline" href="https://sketchfab.com/JacquelineM" target="_blank" rel="noopener noreferrer">
                        Jacqueline Martinez Rodriguez
                    </a>
                    on Sketchfab, licensed under 
                    <a className="hover:underline" href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">
                        CC BY 4.0
                    </a>
                    <br />
                    Original model:
                    <a className="hover:underline" href="https://sketchfab.com/3d-models/light-bulb-b05d65aada034ccebdc73d5982108ea2" target="_blank" rel="noopener noreferrer">
                        "Light Bulb"
                    </a>
                </p>
            </div>
            <div className="socials">
            {/** SOCIALS */}
                {socialIcons.map((icon) => {
                    const IconComponent = icon.icon
                    return (
                    <a className="icon" target="_blank" href={icon.url} key={icon.url}>
                        {IconComponent && <IconComponent size={24}/>}
                    </a>
                )
                })}
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-center md:text-end cursor-auto">
                    © {new Date().getFullYear()} Matthew Williams. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer