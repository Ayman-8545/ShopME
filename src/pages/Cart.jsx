import { Link } from 'react-router-dom'
import Icon from '../components/Icon'

export default function Cart({ cartItems, onUpdateQty, onRemove }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
  const tax = subtotal * 0.08
  const total = subtotal + tax

  if (cartItems.length === 0) {
    return (
      <main className="flex-grow max-w-container-max mx-auto w-full px-margin-mobile md:px-lg py-2xl">
        <div className="text-center py-2xl bg-surface-container-lowest rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.04)]">
          <h2 className="text-headline-lg text-on-surface mb-sm">Your cart is feeling light</h2>
          <p className="text-body-md text-on-surface-variant mb-lg w-full max-w-[448px] mx-auto">
            Looks like you haven't added anything yet. Discover our latest collections and find
            something you love.
          </p>
          <Link
            to="/products"
            className="bg-primary-container text-on-primary text-label-md px-lg py-3 rounded-lg hover:bg-primary transition-colors inline-flex items-center gap-2"
          >
            Start Shopping
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="flex-grow max-w-container-max mx-auto w-full px-margin-mobile md:px-lg py-xl">
      <div className="mb-lg">
        <h1 className="text-headline-lg text-on-surface">Your Cart</h1>
        <p className="text-body-md text-on-surface-variant mt-sm">
          {cartItems.length} item{cartItems.length > 1 ? 's' : ''} in your cart.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        <div className="lg:col-span-8 space-y-md">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-surface-container-lowest rounded-xl p-md flex flex-col sm:flex-row gap-lg items-center shadow-[0_4px_15px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div className="w-full sm:w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-surface-container">
                <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
              </div>
              <div className="flex-grow w-full flex flex-col h-full justify-between py-xs">
                <div className="flex justify-between items-start w-full">
                  <div>
                    <span className="text-label-sm text-secondary bg-surface-container-low px-2 py-1 rounded-full mb-2 inline-block">
                      {item.category}
                    </span>
                    <h3 className="text-body-lg font-bold text-on-surface">{item.name}</h3>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-outline hover:text-error transition-colors p-2"
                  >
                    <Icon name="delete" />
                  </button>
                </div>
                <div className="flex justify-between items-end w-full mt-4 sm:mt-0">
                  <div className="text-body-md font-semibold text-on-surface">
                    ${item.price.toFixed(2)}
                  </div>
                  <div className="flex items-center border border-outline-variant rounded-lg bg-surface h-10">
                    <button
                      className="px-3 text-secondary hover:text-primary transition-colors flex items-center justify-center h-full"
                      onClick={() => onUpdateQty(item.id, Math.max(1, item.qty - 1))}
                    >
                      <Icon name="remove" style={{ fontSize: 18 }} />
                    </button>
                    <span className="w-10 text-center text-body-md">{item.qty}</span>
                    <button
                      className="px-3 text-secondary hover:text-primary transition-colors flex items-center justify-center h-full"
                      onClick={() => onUpdateQty(item.id, item.qty + 1)}
                    >
                      <Icon name="add" style={{ fontSize: 18 }} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-4 sticky top-[calc(72px+1.5rem)] mt-lg lg:mt-0">
          <div className="bg-surface-container-lowest rounded-xl p-lg shadow-[0_8px_25px_rgba(0,0,0,0.08)] border border-surface-variant">
            <h2 className="text-headline-md text-on-surface mb-md">Order Summary</h2>
            <div className="space-y-sm mb-lg">
              <div className="flex justify-between text-body-md text-on-surface-variant">
                <span>Subtotal ({cartItems.length} items)</span>
                <span className="font-medium text-on-surface">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-body-md text-on-surface-variant">
                <span>Shipping</span>
                <span className="font-medium text-primary">Free</span>
              </div>
              <div className="flex justify-between text-body-md text-on-surface-variant">
                <span>Estimated Tax</span>
                <span className="font-medium text-on-surface">${tax.toFixed(2)}</span>
              </div>
            </div>
            <div className="border-t border-outline-variant pt-md mb-lg">
              <div className="flex justify-between text-headline-md text-on-surface">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Link
              to="/checkout"
              className="w-full bg-primary-container text-on-primary text-label-md py-3 rounded-lg hover:bg-primary transition-colors flex justify-center items-center gap-2"
            >
              Proceed to Checkout
              <Icon name="arrow_forward" className="text-[20px]" />
            </Link>
            <div className="mt-md flex items-center justify-center gap-2 text-secondary text-body-sm">
              <Icon name="lock" className="text-[16px]" />
              Secure Checkout
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
