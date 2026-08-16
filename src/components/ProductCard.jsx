import Icon from './Icon'

export default function ProductCard({ product }) {
  const { name, category, price, oldPrice, image, badge } = product

  return (
    <div className="group bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden flex flex-col shadow-[0_4px_15px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 relative">
      <div className="relative w-full aspect-[4/5] bg-surface-container-low overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={image}
          alt={name}
        />
        {badge && (
          <div className="absolute top-sm left-sm flex flex-col gap-xs">
            <span className="bg-primary-container text-on-primary-container font-label-sm text-[10px] px-sm py-xs rounded-full uppercase tracking-wider">
              {badge}
            </span>
          </div>
        )}
        <button className="absolute top-sm right-sm p-sm bg-surface-container-lowest/80 backdrop-blur-sm rounded-full text-secondary hover:text-error transition-colors shadow-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300 z-10">
          <Icon name="favorite" className="text-[20px]" />
        </button>
        <div className="absolute inset-x-0 bottom-0 p-sm opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 z-10 bg-gradient-to-t from-black/20 to-transparent">
          <button className="w-full bg-primary-container text-on-primary rounded-lg py-sm font-label-md text-label-md hover:bg-primary transition-colors shadow-md">
            Quick Add
          </button>
        </div>
      </div>
      <div className="p-md flex flex-col flex-1 bg-surface-container-lowest z-20">
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider mb-xs">
          {category}
        </span>
        <h3 className="text-body-lg font-semibold text-on-background line-clamp-2 mb-sm flex-1">
          {name}
        </h3>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-sm">
            <span className="text-body-md font-bold text-on-background">${price.toFixed(2)}</span>
            {oldPrice && (
              <span className="text-body-sm text-outline line-through">${oldPrice.toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
