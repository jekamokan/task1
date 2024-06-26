import { useState } from "react";
import AccordionComponent from "../AccrodionComponent";
import Button from "../Button";
import CheckOrder from "../ChechOrder";
import Size from "../Size/indes";
import './style.css'
import { ButtonLink } from "../ButtonLink";
import { ulid } from 'ulid'

const colors = [
  {color: 'black'},
  {color: 'white'},
  {color: 'blue'},
  {color: 'beige'},
]
const InfoComponent = () => {
  const [choosedColor, setChoosedColor] = useState('')

  
  return (
    <div className="infoComponent">
      <p className="infoComponent__subtext"> Originals</p>
      <h3 className="infoComponent__title">КРОСІВКИ FORUM LOW CL</h3>
      <p className="infoComponent__price">4 998 грн.</p>
      <p className="infoComponent__underprice">ЗВЕРНИ УВАГУ! ДОСТУПНІ РОЗМІРИ ВКАЗАНІ ЗА ШКАЛОЮ UK</p>
      <p>Скористайся таблицею розмірів, аби звірити розмір по US, FR або за довжиною стопи.</p>
      <ButtonLink variant="link" ></ButtonLink>
      <p className="infoComponent__color">Палітра кольорів:</p>
      <ul className="infoComponent__list">
        {colors.map(color => (
          <li
            key={ulid()}
            style={{ background: color.color }}
            onClick={() => setChoosedColor(color.color)}>
          </li>
        ))}
      </ul>
      {choosedColor ? (<p className="infoComponent__chooesedcolor">Ви обрали: {choosedColor}</p>) : ('')}
      <p className="infoComponent__size"> Оберіть розмір:</p>
      <Size />
      <AccordionComponent />
      <Button />
      <CheckOrder />
    </div>
  );
};

export default InfoComponent;
