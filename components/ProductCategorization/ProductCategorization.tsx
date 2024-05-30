import Image from "next/image";

export const ListCategory = [
    {
        title : "Makeup Remover" ,
        image : "/ClearMakeUp.jpg",
    },
    {
        title : "Disinfecants Liquid" ,
        image : "/Disinfectants.jpg",
    },
    {
        title : "Nail Polish" ,
        image : "/nailpolish.jpg",
    },
    {
        title : "Hair Color" ,
        image : "/haircolor.jpg",
    },
    {
        title : "Perfume & Cologne" ,
        image :  "/perfume.jpg",
    },
    {
        title : "Mouth & Tooth" ,
        image : "/MouthAndTouth.jpg",
    },
    {
        title : "Eye Makeup" ,
        image : "/EyeMakeUp.jpg",
    },
    {
        title : "Face Makeup" ,
        image : "/FaceMakeUp.jpg",
    },
    {
        title : "Anti Sweat" ,
        image : "/AnitSweat.jpg",
    },
    {
        title : "Hair Mask" ,
        image :"/HairMask.jpg",
    },
    {
        title : "Wipes" ,
        image : "/Wipes.jpg",
    },
    {
        title : "Lip Makeup" ,
        image : "/LipMakeUp.jpg",
    }
]

const ProductCategorization = () => {

    return ( 
        <div className="w-full h-full py-10 md:px-10 px-2 relative md:mt-10 mt-0 ">
            <div className="w-full flex flex-wrap gap-14 mt-10 justify-center ">
             {
                ListCategory && (
                    ListCategory.map((category , index) => {
                        return (
                            <>
                                <div key={index} className="md:w-20 lg:w-24 w-[4rem] hover:w-[5rem] lg:hover:w-36 transition-all duration-[0.5s] text-center cursor-pointer">
                                    <Image className="w-full" src={category.image} alt="" width={100} height={100} layout="responsive"/>
                                    <h5 className="lg:text-sm text-[10px] text-zinc-600 mt-5">{category.title}</h5>
                                </div>
                            </>
                        )
                    })
                )
             }
            </div>
        </div>
     );
}
 
export default ProductCategorization;