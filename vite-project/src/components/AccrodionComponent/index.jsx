import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const AccordionComponent = () => {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>Детальніше</AccordionTrigger>
                <AccordionContent>
                    <ul >
                        <li>- Шнурки; регульована за допомогою липучки стрічка</li>
                        <li>- Верх виготовлений зі шкіри</li>
                        <li>- Гумова підошва</li>
                        <li>- Колір: Хмарно-білий / Хмарно-білий / Основне чорне</li>
                        <li>- Артикуль: FY7757</li>
                    </ul>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Опис</AccordionTrigger>
                <AccordionContent>
                    <h4 style={{ fontSize: 30, textTransform: 'uppercase', fontWeight: 'bold', lineHeight: "35px", marginBottom: 10 }}>Низькі кросівки з вібрацією баскетбольної гри.</h4>
                    <p>Не просто взуття, а справжнє заявлення: adidas Forum зробив свій дебют у 1984 році і, після баскетбольного майданчика, завоював музичну сцену. Ця версія повертає стиль 80-х, вібрацію баскетбольної гри та липучкову стрічку класики, упаковуючи всі ці особливості в легку низьку силуетку.</p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Найважливіше</AccordionTrigger>
                <AccordionContent>
                    <p style={{ marginBottom: 20 }}><b>РЕМЕНІ В ОБЛАСТІ КОЛІНА</b> <br />
                        X-подібне нашивання та знімний ремінь на липучці забезпечують додаткову фіксацію і стиль.
                    </p>
                    <p style={{ marginBottom: 20 }}>
                        <b>ДЕТАЛІ З НІЛОНОВОЇ СІТКИ</b><br />
                        Деталь з нейлонової сітки на проміжній підошві створює приємну ноту ностальгії.
                    </p>
                    <p>
                        <b>ПІДСИЛЕНА ГУМОВА ЗОВНІШНЯ ПІДОШВА</b><br />
                        Гумова зовнішня підошва особливо міцна і забезпечує хороше зчеплення.
                    </p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

    )
}

export default AccordionComponent