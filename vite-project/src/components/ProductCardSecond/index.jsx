import BershkaInfo from "../BershkaInfo";
import black from "@/img/black"; 
import white from "@/img/white"; 
import grey from "@/img/grey"; 
import './style.css'
import { useState } from "react";

const ProductCardSecond = () => {
    const [selectedImage, setSelectedImage] = useState('white');
    console.log("selectedImage", selectedImage)

    let selectedColorImages;
    switch(selectedImage) {
        case 'black':
            selectedColorImages = black;
            break;
        case 'white':
            selectedColorImages = white;
            break;
        case 'grey':
            selectedColorImages = grey;
            break;
        default:
            selectedColorImages = white; // Default to white if selectedImage is not recognized
            break;
    }

    return (
        <div className="ProductCardSecond">
            <BershkaInfo selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
            {selectedColorImages.map((color, index) => (
                <img key={index} src={color} alt="color" />
            ))}
        </div>
    )
}

export default ProductCardSecond;
