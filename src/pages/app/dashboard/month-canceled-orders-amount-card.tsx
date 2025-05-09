import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ban } from "lucide-react";

export function MonthCanceledOrdersAmountCard() {
    return(
        <Card>
        <CardHeader className="flex items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-base font-semibold">
            Cancelamentos (mês)
          </CardTitle>
          <Ban className="text-muted-foreground h-4 w-4" />
        </CardHeader>
        <CardContent className="space-y-1">
          <span className="text-2xl font-bold -tracking-tight">
            32
          </span>
          <p className="text-xs text-muted-foreground">
           <span className="text-emerald-500 dark:text-emerald-400">-2%</span> em relação ao mês passado
          </p>
        </CardContent>
      </Card>
    )}