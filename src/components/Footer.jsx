export default function Footer() {
  return (
    <footer className="bg-surface-container-highest w-full py-xl border-t border-outline-variant mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-lg max-w-container-max mx-auto">
        <div className="flex flex-col gap-sm">
          <div className="font-headline-sm text-headline-sm font-bold text-primary mb-md">
            ShopMe
          </div>
          <p className="text-on-surface-variant text-body-sm mb-md">
            Elevating your everyday with curated, premium essentials.
          </p>
        </div>
        <div className="flex flex-col gap-sm">
          <h4 className="font-label-md text-label-md text-on-surface mb-sm">Company</h4>
          <a className="text-on-surface-variant text-body-sm hover:text-primary transition-colors" href="#">About Us</a>
          <a className="text-on-surface-variant text-body-sm hover:text-primary transition-colors" href="#">Contact</a>
        </div>
        <div className="flex flex-col gap-sm">
          <h4 className="font-label-md text-label-md text-on-surface mb-sm">Support</h4>
          <a className="text-on-surface-variant text-body-sm hover:text-primary transition-colors" href="#">Shipping Policy</a>
          <a className="text-on-surface-variant text-body-sm hover:text-primary transition-colors" href="#">Returns</a>
          <a className="text-on-surface-variant text-body-sm hover:text-primary transition-colors" href="#">Terms of Service</a>
          <a className="text-on-surface-variant text-body-sm hover:text-primary transition-colors" href="#">Privacy Policy</a>
        </div>
        <div className="flex flex-col gap-sm">
          <h4 className="font-label-md text-label-md text-on-surface mb-sm">Newsletter</h4>
          <p className="text-on-surface-variant text-body-sm mb-sm">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <div className="flex gap-2">
            <input
              className="bg-surface-container-lowest border border-outline-variant rounded-lg px-3 py-2 text-body-sm focus:ring-2 focus:ring-primary-container outline-none w-full"
              placeholder="Enter your email"
              type="email"
            />
            <button className="bg-primary-container text-on-primary px-4 py-2 rounded-lg font-label-md text-label-md hover:bg-primary transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="px-lg max-w-container-max mx-auto mt-xl pt-lg border-t border-outline-variant/50 text-on-surface-variant text-body-sm text-center">
        © 2024 ShopMe E-commerce platform. All rights reserved.
      </div>
    </footer>
  )
}
