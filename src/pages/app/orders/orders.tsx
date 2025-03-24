import { Input } from "@/components/ui/input";

import { OrdersTable } from "./orders-table";
import { Pagination } from "@/components/pagination";

export function Orders() {
  return (
    <div>
      <title>Pedidos | PizzaShop</title>
      <div className="mb-4 flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      </div>
      <div className="space-y-2.5">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros:</span>
          <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
        </form>

        <div className="rounded-md border">
          <OrdersTable />
        </div>

        <Pagination pageIndex={0} totalCount={105} perPage={10} />
      </div>
    </div>
  );
}
