import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "lucide-react";

import { Pie, PieChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts";
import colors from 'tailwindcss/colors'
const data = [
  { product: 'Pepperoni', amount: 30 },
  { product: 'Quatro Queijos', amount: 40 },
  { product: 'Portuguesa', amount: 50 },
  { product: 'Moda', amount: 20 },
  { product: 'Nutela', amount: 15 },
 
]
export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">Produtos Populares</CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <PieChart style={{ fontSize: 12 }} >
            <Pie 
                data={data} 
                dataKey='amount' 
                nameKey='product' 
                cx='50%' 
                cy='50%'
                outerRadius={86}
                innerRadius={64}
                strokeWidth={8}
                
            >
                {data.map((_,index)=>{
                    return(
                        
                    )
                })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}