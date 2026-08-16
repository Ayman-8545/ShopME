import { useState } from 'react'
import Icon from '../components/Icon'

export default function Checkout({ cartItems }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    address: '',
    apt: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
  })

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
  const tax = subtotal * 0.08
  const total = subtotal + tax

  const isValid = form.firstName && form.lastName && form.address && form.city && form.zip

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-lg py-lg md:py-xl grid grid-cols-1 lg:grid-cols-12 gap-gutter">
      <div className="lg:col-span-8 flex flex-col gap-lg">
        <div className="w-full mb-md">
          <ol className="flex items-center w-full text-sm font-medium text-center text-secondary">
            {['Shipping', 'Payment', 'Review'].map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                    i === 0
                      ? 'bg-primary text-on-primary'
                      : 'border-2 border-outline-variant text-secondary'
                  }`}
                >
                  {i + 1}
                </span>
                <span className={i === 0 ? 'text-primary text-label-md' : 'text-on-surface-variant text-label-md'}>
                  {step}
                </span>
                {i < 2 && <span className="w-12 h-px bg-outline-variant mx-2" />}
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-surface-container-lowest rounded-xl p-lg md:p-xl shadow-[0_4px_15px_rgba(0,0,0,0.04)]">
          <h2 className="text-headline-lg font-semibold text-on-surface mb-lg">Shipping Details</h2>
          <form className="space-y-md" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
              <Field label="First Name" name="firstName" value={form.firstName} onChange={handleChange} placeholder="Jane" />
              <Field label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Doe" />
            </div>
            <Field label="Address Line 1" name="address" value={form.address} onChange={handleChange} placeholder="123 Commerce St" />
            <Field label="Apartment, suite, etc. (optional)" name="apt" value={form.apt} onChange={handleChange} placeholder="Apt 4B" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
              <Field label="City" name="city" value={form.city} onChange={handleChange} placeholder="New York" />
              <div>
                <label className="block text-label-sm text-on-surface-variant mb-xs">State</label>
                <select
                  name="state"
                  value={form.state}
                  onChange={handleChange}
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-body-md text-on-surface"
                >
                  <option value="">Select</option>
                  <option value="NY">New York</option>
                  <option value="CA">California</option>
                  <option value="TX">Texas</option>
                </select>
              </div>
              <Field label="ZIP Code" name="zip" value={form.zip} onChange={handleChange} placeholder="10001" />
            </div>
            <Field label="Phone Number" name="phone" value={form.phone} onChange={handleChange} placeholder="(555) 123-4567" type="tel" />
            <div className="pt-md flex justify-end">
              <button
                type="button"
                className="bg-primary-container text-on-primary text-label-md py-sm px-lg rounded-lg hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition-all duration-200 uppercase tracking-wider"
              >
                Continue to Payment
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="lg:col-span-4 relative">
        <div className="sticky top-xl bg-surface-container-lowest rounded-xl p-lg shadow-[0_4px_15px_rgba(0,0,0,0.04)] border border-surface-variant flex flex-col gap-md">
          <h3 className="text-headline-md font-semibold text-on-surface border-b border-outline-variant pb-sm">
            Order Summary
          </h3>
          <div className="flex flex-col gap-sm max-h-64 overflow-y-auto pr-2">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-start gap-sm py-sm">
                <div className="w-16 h-16 bg-surface-container-low rounded-lg overflow-hidden flex-shrink-0">
                  <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
                </div>
                <div className="flex-grow">
                  <p className="text-label-md text-on-surface line-clamp-2">{item.name}</p>
                  <p className="text-body-sm text-secondary mt-xs">Qty: {item.qty}</p>
                </div>
                <div className="text-label-md text-on-surface whitespace-nowrap">
                  ${(item.price * item.qty).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-outline-variant pt-md space-y-sm">
            <div className="flex justify-between text-body-sm text-on-surface-variant">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-body-sm text-on-surface-variant">
              <span>Shipping</span>
              <span>Calculated next step</span>
            </div>
            <div className="flex justify-between text-body-sm text-on-surface-variant">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
          </div>
          <div className="border-t border-outline-variant pt-md flex justify-between items-end">
            <span className="text-label-md text-on-surface">Total</span>
            <span className="text-headline-md font-bold text-on-surface">${total.toFixed(2)}</span>
          </div>
          <button
            disabled={!isValid}
            className={`w-full mt-md text-label-md py-sm px-lg rounded-lg uppercase tracking-wider text-center flex items-center justify-center gap-xs ${
              isValid
                ? 'bg-primary-container text-on-primary hover:bg-primary transition-colors'
                : 'bg-surface-container-highest text-secondary border border-outline opacity-50 cursor-not-allowed'
            }`}
          >
            <Icon name="lock" className="text-sm" />
            Place Order
          </button>
          {!isValid && (
            <p className="text-center text-body-sm text-secondary mt-xs">
              Complete shipping details to proceed.
            </p>
          )}
        </div>
      </div>
    </main>
  )
}

function Field({ label, name, value, onChange, placeholder, type = 'text' }) {
  return (
    <div>
      <label className="block text-label-sm text-on-surface-variant mb-xs" htmlFor={name}>
        {label}
      </label>
      <input
        className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-md py-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-body-md text-on-surface"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
    </div>
  )
}
