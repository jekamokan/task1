import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

const BershkaToast = () => {
  const { toast } = useToast()

  return (
    <Button
    className="bg-green-400 text-white mb-10 font-bold"
      variant="outline"
      onClick={() => {
        toast({
          title: "Дякуємо за замовлення ",
          description: `Дата вашої покупки ${new Date().toLocaleString()}`,
          action: (
            <ToastAction altText="Goto schedule to undo">Закрити</ToastAction>
          ),
        })
      }}
    >
      Додати до кошика
    </Button>
  )
}
export default  BershkaToast;