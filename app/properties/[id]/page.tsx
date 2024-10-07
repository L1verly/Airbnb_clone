import propertyPic from "@/public/demoPropertyImages/exampleProperty.webp"
import Image from "next/image"
import profilePic from "@/public/profile_pic.webp"
import ReservationSidebar from "@/app/components/properties/ReservationSidebar"

const PropertyDetailPage = () => {
  return (
    <main className="max-w-[1120px] mx-auto px-6 pb-6">
        <div className="mb-4 w-full h-[64vh] overflow-hidden rounded-xl relative bg-black">
            <Image
                fill
                src={propertyPic}
                alt='Mountain house'
                className="object-cover w-full h-full hover:opacity-85 transition"
            />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="py-6 pr-6 col-span-3">
                <h1 className="mb-4 text-4xl">Property name</h1>

                <span className="mb-6 block text-lg text-gray-600">
                    4 guests - 2 bedrooms - 1 bathroom
                </span>

                <hr />

                <div className="py-6 flex items-center space-x-4">
                    <Image
                        src={profilePic}
                        width={50}
                        className="rounded-full"
                        alt="Host"
                    />

                    <p className="flex flex-col">
                        <span className="font-medium">Hosted by John Doe</span>
                        <span className="text-gray-400">9 years hosting</span>
                    </p>
                </div>

                <hr />

                <p className="mt-6 text-lg">
                    suombyvujkbkblbnnnnnnnnnnnnnnnnnnnnnnnll;j;obvjhbgvfcvhm,l;m;lnl;
                </p>
            </div>

            <ReservationSidebar />
        </div>
    </main>
  )
}

export default PropertyDetailPage