import Image from "next/image";

export default function NextImage({ src, alt }: { src: string, alt: string }){
    return (
        <Image src={src}  alt={alt} width={200} height={200}/>
    );
}