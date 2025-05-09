import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Line, Tooltip } from "recharts";
import colors from 'tailwindcss/colors'
const data = [
  { date: '10/12', revenue: 1200 },
  { date: '11/12', revenue: 850 },
  { date: '12/12', revenue: 1100 },
  { date: '13/12', revenue: 780 },
  { date: '14/12', revenue: 800 },
  { date: '15/12', revenue: 650 },
  { date: '16/12', revenue: 1000 },
]
export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">Receita no periodo</CardTitle>
          <CardDescription >Receita diaria no periodo</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart style={{ fontSize: 12 }} data={data}>
            <XAxis dataKey='date' tickLine={false} axisLine={false} dy={16}/>
            <YAxis 
            stroke="#888" 
            axisLine={false}
            tickLine={false} 
            width={80}
            tickFormatter={(value: number) => 
            value.toLocaleString('pt-BR', { 
              style: 'currency', 
              currency: 'BRL' })
              } 
              />
            <CartesianGrid vertical={false} className="stroke-muted"/>
            <Line type='linear' strokeWidth={2} dataKey='revenue' stroke={colors['violet']['500']}/>
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}