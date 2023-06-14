import Image from 'next/image'

export const MyImages = (img) => {
    return (
        <picture>
            <source src={img} />
            <Image
                src={img}
                alt=""
                priority={true}
            />
        </picture>
    )
}
