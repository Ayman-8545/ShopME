import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Icon from '../components/Icon'
import { products } from '../data/products'

export default function ProductDetail({ onAddToCart }) {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id)) || products[0]
  const [qty, setQty] = useState(1)

  const stars = Math.round(product.rating)

  return (
    <main className="flex-grow max-w-container-max mx-auto w-full px-margin-mobile md:px-lg py-xl">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-2xl">
        {/* Image */}
        <div className="md:col-span-7 h-[400px] md:h-[500px]">
          <div className="w-full h-full rounded-xl overflow-hidden bg-surface-container-low flex items-center justify-center">
            <img className="w-full h-full object-cover" src={product.image} alt={product.name} />
          </div>
        </div>

        {/* Info */}
        <div className="md:col-span-5 flex flex-col py-md">
          <span className="text-label-sm text-secondary uppercase tracking-wider mb-xs">
            {product.category}
          </span>
          <h1 className="text-display-lg-mobile md:text-display-lg text-on-surface mb-sm">
            {product.name}
          </h1>

          <div className="flex items-center gap-md mb-lg">
            <div className="flex items-center text-primary-container">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon key={i} name="star" fill={i < stars} />
              ))}
            </div>
            <a className="text-body-sm text-secondary hover:text-primary underline" href="#reviews">
              {product.reviews} Reviews
            </a>
          </div>

          <div className="flex items-end gap-md mb-md">
            <span className="text-headline-lg text-primary-container">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-body-md text-outline line-through pb-1">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>

          <p className="text-body-md text-on-surface-variant mb-xl">{product.description}</p>

          <div className="flex items-center gap-md mb-xl">
            <div className="flex items-center border border-outline-variant rounded-lg h-12">
              <button
                className="px-md h-full text-secondary hover:bg-surface-container-low transition-colors rounded-l-lg"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
              >
                <Icon name="remove" className="text-sm" />
              </button>
              <span className="w-12 text-center text-body-md text-on-surface">{qty}</span>
              <button
                className="px-md h-full text-secondary hover:bg-surface-container-low transition-colors rounded-r-lg"
                onClick={() => setQty((q) => q + 1)}
              >
                <Icon name="add" className="text-sm" />
              </button>
            </div>
            {product.inStock ? (
              <div className="flex items-center gap-xs text-primary-container bg-primary-fixed/20 px-sm py-1 rounded-full">
                <Icon name="check_circle" className="text-[16px]" />
                <span className="text-label-sm">In Stock</span>
              </div>
            ) : (
              <div className="flex items-center gap-xs text-error bg-error-container px-sm py-1 rounded-full">
                <span className="text-label-sm">Out of Stock</span>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-md">
            <button
              disabled={!product.inStock}
              onClick={() => onAddToCart?.(product, qty)}
              className="flex-1 bg-primary-container text-on-primary h-12 rounded-lg text-label-md flex items-center justify-center gap-sm hover:bg-primary transition-colors shadow-sm hover:shadow-md hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
            >
              <Icon name="shopping_bag" className="text-[20px]" />
              <span>Add to Cart</span>
            </button>
            <button className="flex-1 border border-primary-container text-primary-container h-12 rounded-lg text-label-md flex items-center justify-center hover:bg-surface-container-low transition-colors">
              Buy Now
            </button>
          </div>

          <div className="mt-lg flex items-center gap-md text-secondary text-body-sm">
            <div className="flex items-center gap-xs">
              <Icon name="local_shipping" className="text-[18px]" />
              <span>Free Shipping</span>
            </div>
            <div className="flex items-center gap-xs">
              <Icon name="assignment_return" className="text-[18px]" />
              <span>30-Day Returns</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
