import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useToast } from "@/components/ui/use-toast"
import './style.css'

const Button = () => {
    const { toast } = useToast()
    return (
        <AlertDialog>
            <AlertDialogTrigger className="button-buy">Купити</AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Ви дійсно хочете купити?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Нажміть так як що хочете і ні якщо передумали =)
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Ні</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={() => {
                            toast({
                                title: "Вітаю з покупкою",
                                description: "Невдовзі оператор вам позвонить",
                            })
                        }}
                    >Так</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}
export default Button
