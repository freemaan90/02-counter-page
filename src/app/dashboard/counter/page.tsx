import { CartCounter } from '@/app/shopping-cart';
import style from './page.module.css'

export const metadata = {
 title: 'Counter Page',
 description: 'Un Simple contador',
};

export default function CounterPage() {
  return (
    <div className={style.container}>
      <span>Productos en el carrito</span>
      <CartCounter value={20} />
    </div>
  )
}

