import * as Separator from '@radix-ui/react-separator';

const SeparatorComponent = () => {
  return (
    <div className="w-full w-auto">
    <div className="text-black text-[15px] leading-5 font-medium">Ключова інформація</div>
    <div className="text-black text-[15px] leading-5">Тут ви знайдете всі відповіді на ваші питання</div>
    <Separator.Root className="bg-black data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />
    <div className="flex h-5 items-center">
      <div className="text-black text-[15px] leading-5">Склад, поради щодо догляду та походження"</div>
      <Separator.Root
        className="bg-black data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
        decorative
        orientation="vertical"
      />
      <div className="text-black text-[15px] leading-5">Доставка та повернення</div>
      <Separator.Root
        className="bg-black data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
        decorative
        orientation="vertical"
      />
      <div className="text-black text-[15px] leading-5">Наявність у магазині</div>
    </div>
  </div>
  )
}

export default SeparatorComponent