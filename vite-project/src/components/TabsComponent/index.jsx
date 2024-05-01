import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductCardOne from "../ProductCardFirst"
import ProductCardSecond from "../ProductCardSecond"


const TabsComponent = () => {
  return (
    <Tabs defaultValue="first">
  <TabsList>
    <TabsTrigger value="first">First page</TabsTrigger>
    <TabsTrigger value="second">Second page</TabsTrigger>
  </TabsList>
  <TabsContent value="first">
    <ProductCardOne/>
  </TabsContent>
  <TabsContent value="second">
    <ProductCardSecond/>
  </TabsContent>
</Tabs>

  )
}

export default TabsComponent