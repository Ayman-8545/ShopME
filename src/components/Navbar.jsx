import { Link, useLocation } from 'react-router-dom'
import Icon from './Icon'

const links = [
  { label: 'Shop', to: '/' },
  { label: 'Categories', to: '/products' },
  { label: 'Deals', to: '/products' },
  { label: 'Orders', to: '/cart' },
]

export default function Navbar({ cartCount = 0 }) {
  const location = useLocation()

  return (
    <header className="bg-surface-container-lowest sticky top-0 w-full z-50 shadow-[0_8px_25px_rgba(0,0,0,0.08)]">
      <div className="flex items-center justify-between px-lg py-md max-w-container-max mx-auto">
        <Link to="/" className="font-headline-md text-headline-md font-bold text-primary">
          ShopMe
        </Link>

        <nav className="hidden md:flex items-center gap-gutter">
          {links.map((link) => {
            const active = location.pathname === link.to
            return (
              <Link
                key={link.label}
                to={link.to}
                className={
                  active
                    ? 'text-primary font-bold border-b-2 border-primary pb-1 transition-all active:scale-95'
                    : 'text-on-surface-variant font-medium hover:text-primary transition-colors duration-200 active:scale-95'
                }
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-sm">
          <div className="hidden md:flex items-center bg-surface-container-low rounded-full px-4 py-2 border border-outline-variant focus-within:ring-2 focus-within:ring-primary-container focus-within:border-primary-container transition-all">
            <Icon name="search" className="text-on-surface-variant mr-2" />
            <input
              className="bg-transparent border-none focus:ring-0 text-body-sm text-on-surface w-48 outline-none"
              placeholder="Search products..."
              type="text"
            />
          </div>
          <Link
            to="/cart"
            className="p-2 text-on-surface-variant hover:text-primary transition-colors duration-200 active:scale-95 relative"
          >
            <Icon name="shopping_cart" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full" />
            )}
          </Link>
          <Link
            to="/login"
            className="p-2 text-on-surface-variant hover:text-primary transition-colors duration-200 active:scale-95"
          >
            <Icon name="person" />
          </Link>
        </div>
      </div>
    </header>
  )
}
