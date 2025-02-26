import { formatCurrency } from "../Helper"
import { MenuItems, OrderItem } from "../type"

type OrderContentsProps = {
    order: OrderItem[],
    removeItem : (id: MenuItems['id']) => void
}
export default function OrderContents({ order, removeItem }: OrderContentsProps) {
    return (
        <div>
            <h2 className="font-black text-4xl ">Consumo</h2>
            <div className="space-y-4 mt-5">
                {order.length === 0 ? <p className="text-center">La orden esta vacia</p> :
                    (order.map(item => (
                        <div key={item.id} className=" flex justify-between items-center border-t border-gray-200 last-of-type:border-b py-5 ">
                            <div>
                                <p className="text-lg">
                                    {item.name} - {formatCurrency(item.price)}
                                </p>
                                <p className="font-black">
                                    Cantiad : {item.quantity} - {formatCurrency(item.price * item.quantity)}
                                </p>
                            </div>

                            <button className="bg-red-600 h-8 w-8 rounded-full font-black text-white " onClick={()=>removeItem(item.id)}>
                                X
                            </button>

                        </div>
                    )))
                }
            </div>
        </div>
    )
}
