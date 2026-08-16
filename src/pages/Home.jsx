import { Link } from 'react-router-dom'
import Icon from '../components/Icon'
import ProductCard from '../components/ProductCard'
import { products, categories } from '../data/products'

export default function Home() {
  const featured = products.slice(0, 3)

  return (
    <main className="flex-grow">
      {/* Hero */}
      <section className="relative w-full h-[500px] md:h-[614px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center w-full h-full z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1763568258255-3072dd4579a7?w=1600&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-surface/40 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 text-center px-lg w-full max-w-container-max mx-auto flex flex-col items-center">
          <h1 className="text-display-lg-mobile md:text-display-lg text-on-surface mb-md">
            Elevate Your Everyday
          </h1>
          <p className="text-body-lg text-on-surface-variant w-full max-w-[672px] mb-xl">
            Discover a curated collection of premium products designed to bring functional elegance
            and sophisticated minimalism to your life.
          </p>
          <Link
            to="/products"
            className="bg-primary-container text-on-primary text-label-md py-3 px-8 rounded-lg hover:bg-primary transition-colors duration-200 flex items-center gap-sm"
          >
            Shop the Collection
            <Icon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="py-2xl px-lg max-w-container-max mx-auto w-full">
        <div className="flex items-center justify-between mb-xl">
          <h2 className="text-headline-lg text-on-surface">Explore Categories</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to="/products"
              className="group flex flex-col items-center justify-center p-xl bg-surface-container-lowest rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-surface-container-low group-hover:bg-primary-container/10 flex items-center justify-center mb-md transition-colors">
                <Icon
                  name={cat.icon}
                  className="text-[32px] text-secondary group-hover:text-primary-container transition-colors"
                />
              </div>
              <span className="text-label-md text-on-surface">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-2xl px-lg max-w-container-max mx-auto w-full bg-surface-container-low rounded-2xl mb-2xl">
        <div className="flex items-center justify-between mb-xl px-md">
          <h2 className="text-headline-lg text-on-surface">Featured Products</h2>
          <Link to="/products" className="text-label-md text-primary-container hover:text-primary flex items-center gap-xs">
            View All
            <Icon name="arrow_forward" className="text-[16px]" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  )
}
