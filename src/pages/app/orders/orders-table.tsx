import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { OrderDetails } from "./order-details";

export function OrdersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[64px]"></TableHead>
          <TableHead className="w-[140px]">Identificador</TableHead>
          <TableHead className="w-[180px]">Realizado há</TableHead>
          <TableHead className="w-[140px]">Status</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead className="w-[140px]">Total do pedido</TableHead>
          <TableHead className="w-[164px]"></TableHead>
          <TableHead className="w-[132px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 20 }).map((_, i) => {
          return (
            <TableRow key={i}>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="xs">
                      <Search className="h-3 w-3" />
                      <span className="sr-only">Detalhes do pedido</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <OrderDetails />
                  </DialogContent>
                </Dialog>
              </TableCell>
              <TableCell className="font-mono text-xs font-medium">
                123laksr20934
              </TableCell>
              <TableCell className="text-muted-foreground">
                há 15 minutos
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="text-muted-foreground font-medium">
                    Pendente
                  </span>
                </div>
              </TableCell>
              <TableCell className="font-medium">
                Mateus Lucas Batista dos Santos
              </TableCell>
              <TableCell className="font-medium">R$ 100,00</TableCell>
              <TableCell>
                <Button variant="outline" size="xs">
                  <ArrowRight className="mr-2 h-3 w-3" />
                  Aprovar
                </Button>
              </TableCell>
              <TableCell>
                <Button variant="ghost" size="xs">
                  <X className="mr-2 h-3 w-3" />
                  Cancelar
                </Button>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
