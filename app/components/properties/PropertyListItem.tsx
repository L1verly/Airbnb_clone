import Image from "next/image"
import propertyPic from "@/public/demoPropertyImages/exampleProperty.webp"
const PropertyListItem = () => {
  return (
    <div className="cursor-pointer">
        <div className="relative overflow-hidden aspect-square rounded-xl">
            <Image
                fill
                src={propertyPic}
                alt='Mountain house'
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 20vw"
                className="hover:scale-110 object-cover transition h-full w-full"
            />
        </div>

        <div className="mt-2">
            <p className="text-lg font-bold">Property name</p>
        </div>
        
        <div className="mt-2">
            <p className="text-sm"><span className="font-semibold">200$</span> night</p>
        </div>
    </div>
  )
}

export default PropertyListItem