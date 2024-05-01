import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import man from '@/img/man.jpeg'
import './style.css'

const SheetComponent = () => {
    return (
        <Sheet>
            <SheetTrigger className="sheetTriger">Розмірна сітка</SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="text-center">Посібник з розмірів</SheetTitle>
                    <span className="h-px bg-slate-500 "></span>
                    <SheetDescription className={"text-black"}>
                        <h3 className="font-bold text-xl mt-5">Як правильно себе виміряти?</h3>
                        <img className="mb-10" src={man} alt="man" />
                        <div className="mb-8">
                            <p className="flex items-center gap-2 mb-3"><span className="w-5 h-5 bg-black text-white flex items-center justify-center rounded-full">1</span> Oбхват грудей</p>
                            <p className="text-xs text-gray-500">Щоб виміряти обхват грудей, обери стрічку навколо найширшої частини своєї грудної клітки.</p>
                        </div>
                        <div>
                            <p className="flex items-center gap-2 mb-3"><span className="w-5 h-5 bg-black text-white flex items-center justify-center rounded-full">2</span> Oбхват стегон</p>
                            <p className="text-xs text-gray-500">Поставте ноги разом і оберіть стрічку навколо найширшої частини вашого стегна.</p>
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}

export default SheetComponent