import { PanelTextInfo } from "@/app/styles/Banners";
import { MyImages } from "@/app/components/images/MyImages";
import b1 from '@/app/assets/informacion/b1.jpg'

export const Derechos = () => {
    return (
        <>
            <PanelTextInfo>
                <h1>Derechos y deberes</h1>
            </PanelTextInfo>
            <div className="img-derecho">
                {MyImages(b1)}
            </div>
        </>
    )
}
