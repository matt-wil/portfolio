import { logoIconsList } from "../constants"

const LogoSection = () => {
    const LogoIcon = ({ item }) => { 
        const IconComponent = item.icon;
        return (
            <div className="flex-none flex-center marquee-item">
                {IconComponent && <IconComponent size={64} aria-label={item.name}/>}
            </div>
        )
    }
  return (
    <div className="md:my-20 my-10 relative">
        <div className="gradient-edge"/>
        <div className="gradient-edge"/>

        <div className="marquee h-52">
            <div className="marquee-box md:gap-12 gap-5">
            {logoIconsList.map((item, index) => (
                    <LogoIcon key={`${item.name}-${index}-1`} item={item}/>
                ))}                
            </div>
        </div>
    </div>
  )
}

export default LogoSection