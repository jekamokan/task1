import './style.css'
const BershkaDelivery = () => {
    return (
        <div className="bershkaDelivery">
            <div className="bershkaDelivery__block">
                <p className="bershkaDelivery__text-shop">Забрати в магазині
                    <span>безкоштовно</span>
                </p>
            </div>
            <div className="bershkaDelivery__block">
                <p className="bershkaDelivery__text-home">
                    Стандартна доставка до дому 
                    <span>безкоштовно</span>
                </p>
                <p className="bershkaDelivery__text-info">при замовленні від 45€</p>
            </div>
        </div>
    )
}

export default BershkaDelivery