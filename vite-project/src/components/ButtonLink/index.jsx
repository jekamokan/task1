import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function ButtonLink() {
  return (
    <Link  to="https://www.robinzon-ua.com.ua/ukr/tablicja-vidpovidnosti-rozmiriv-vzuttja-v-sistemah-ssha-vropi-uk/" target="_blank">
      <Button className="p-0 underline" variant="link">Таблиця розмірів</Button>
    </Link>
  );
}

