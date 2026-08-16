import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const allCategories = [...new Set(products.map((p) => p.category))]

export default function Products() {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [sort, setSort] = useState('featured')

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    )
  }

  let filtered =
    selectedCategories.length === 0
      ? products
      : products.filter((p) => selectedCategories.includes(p.category))

  if (sort === 'price-asc') filtered = [...filtered].sort((a, b) => a.price - b.price)
  if (sort === 'price-desc') filtered = [...filtered].sort((a, b) => b.price - a.price)

  return (
    <main className="flex-1 max-w-container-max mx-auto w-full px-margin-mobile md:px-lg py-xl flex gap-gutter">
      {/* Sidebar filters */}
      <aside className="hidden lg:flex flex-col w-1/4 max-w-[280px] gap-xl sticky top-2xl h-[calc(100vh-80px)] overflow-y-auto pr-md">
        <div>
          <h2 className="text-body-lg font-bold text-on-background mb-md border-b border-outline-variant pb-sm">
            Filters
          </h2>
        </div>
        <div className="flex flex-col gap-sm">
          <h3 className="text-label-md text-on-background">Categories</h3>
          {allCategories.map((cat) => (
            <div className="flex items-center gap-sm" key={cat}>
              <input
                className="rounded border-outline text-primary focus:ring-primary h-4 w-4 bg-surface-container-lowest"
                id={cat}
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
              />
              <label className="text-body-sm text-on-surface-variant cursor-pointer" htmlFor={cat}>
                {cat} ({products.filter((p) => p.category === cat).length})
              </label>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-sm">
          <h3 className="text-label-md text-on-background">Price Range</h3>
          <div className="flex items-center gap-sm">
            <input
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-sm py-sm text-body-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              placeholder="Min"
              type="number"
            />
            <span className="text-on-surface-variant">-</span>
            <input
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-sm py-sm text-body-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              placeholder="Max"
              type="number"
            />
          </div>
        </div>
      </aside>

      {/* Product grid */}
      <div className="flex-1 flex flex-col w-full">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-surface-container-lowest p-md rounded-xl border border-outline-variant mb-gutter shadow-sm">
          <div className="text-body-md text-secondary mb-sm sm:mb-0">
            Showing <span className="font-semibold text-on-background">{filtered.length}</span> of{' '}
            <span className="font-semibold text-on-background">{products.length}</span> Products
          </div>
          <div className="flex items-center gap-md">
            <label className="text-label-md text-secondary hidden sm:block" htmlFor="sort">
              Sort by:
            </label>
            <select
              className="bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-xs text-body-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer"
              id="sort"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-2xl text-on-surface-variant">
            No products match the selected filters.
          </div>
        )}
      </div>
    </main>
  )
}
