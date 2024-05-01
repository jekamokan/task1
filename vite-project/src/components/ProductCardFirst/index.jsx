import { useState } from "react"
import InfoComponent from "../InfoComponent"
import SliderComponents from "../SliderComponent"

import './style.css'

const ProductCardOne = () => {
    const [colors, setColors] = useState([])
    console.log('colors', colors)
    const updateColors = (newColor) => {
        // setColors(prevColors => [...prevColors, newColor])
        setColors(prevColors => prevColors.concat(newColor));
    };

    return (
        <div className="productCardOne">
            <SliderComponents setColors={updateColors} />
            <InfoComponent colors={colors}/>
        </div>
    )
}

export default ProductCardOne