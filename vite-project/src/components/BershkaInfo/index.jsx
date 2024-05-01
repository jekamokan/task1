import BershkaDelivery from "../BershkaDelivery"
import BershkaSize from "../BershkaSize"
import BershkaToast from "../BershkaToast"
import Gallery from "../Gallery"
import SeparatorComponent from "../SeparatorComponent"
import './style.css'

const BershkaInfo = ({setSelectedImage, selectedImage}) => {
  return (
    <div className="bershakaInfo">
        <p className="bershakaInfo_combo">COMBO WINS %</p>
        <p className="bershakaInfo_title">Короткорукавна обрізана футболка з плюшем</p>
        <p className="bershakaInfo_ref">Ref 2881/732/{selectedImage}</p>
        <p className="bershakaInfo_price">17,99 €</p>
        <Gallery  setSelectedImage={setSelectedImage}/>
        <BershkaSize />
        <BershkaToast/>
        <BershkaDelivery/>
        <SeparatorComponent/>
    </div>
  )
}

export default BershkaInfo