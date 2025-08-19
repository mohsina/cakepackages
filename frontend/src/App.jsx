import './subscription.css'
import { ArrowLeft, X, Tag, Trash2, ChevronRight } from 'lucide-react'

function Badge({ color = 'blue', children }) {
  return (
    <span className={`badge badge-${color}`}>{children}</span>
  )
}

function Row({ title, subtitle, price, badge, icon, isTotal }) {
  return (
    <div className={`row ${isTotal ? 'row-total' : ''}`}>
      <div className="row-left">
        {badge}
        <div className="row-text">
          <div className="row-title">{title}</div>
          {subtitle && <div className="row-subtitle">{subtitle}</div>}
        </div>
        {icon && <div className="row-icon">{icon}</div>}
      </div>
      <div className="row-price">{price}</div>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <div className="overlay" />
      <div className="modal">
        <div className="modal-header">
          <button className="icon-btn"><ArrowLeft size={18} /></button>
          <div className="header-text">
            <div className="title">Subscription Change</div>
            <div className="subtitle">Your subscription will be changed to <strong>Enterprise Plan EUR Yearly</strong></div>
          </div>
          <div className="coupon">
            <Tag size={16} />
            <input placeholder="Enter coupon code" />
          </div>
          <button className="icon-btn"><X size={18} /></button>
        </div>

        <div className="section">
          <div className="section-title">Plans</div>
          <Row
            title={<>
              <Badge color="green">Update</Badge>
              <span>Enterprise Plan EUR Yearly</span>
            </>}
            subtitle="Billed yearly"
            price={<span>€ 996 EUR</span>}
          />
        </div>

        <div className="divider" />

        <div className="section">
          <div className="section-title">Addons</div>
          <Row
            title={<>
              <Badge color="indigo">In Use</Badge>
              <span>250 GB Extra Storage EUR Monthly</span>
            </>}
            subtitle="Billed yearly (€100 x 12 months)"
            price={<span>€ 1200 EUR</span>}
            icon={<Trash2 size={16} />}
          />
          <div className="separator" />
          <Row
            title={<>
              <Badge color="indigo">In Use</Badge>
              <span>25 Extra Social Accounts EUR Monthly</span>
            </>}
            subtitle="Billed yearly (€20 x 12 months)"
            price={<span>€ 240 EUR</span>}
            icon={<Trash2 size={16} />}
          />
        </div>

        <div className="divider" />

        <div className="section totals">
          <Row
            title={<span>Total per year</span>}
            subtitle={<span>Next Billing on 28-Jan-2026</span>}
            price={<strong>€ 2436 EUR</strong>}
            isTotal
          />
          <div className="separator" />
          <Row
            title={<span>Current Payable Amount</span>}
            price={<strong>€ 0 EUR</strong>}
            isTotal
          />
        </div>

        <div className="footer">
          <div className="notes">
            <div className="note"><ChevronRight size={16} /> Amount will be prorated and adjusted automatically.</div>
            <div className="note"><ChevronRight size={16} /> Previously provided payment details will be used to charge.</div>
            <div className="note"><ChevronRight size={16} /> Addons will be mapped to the subscription billing period (monthly or yearly)</div>
          </div>
          <button className="proceed">Proceed</button>
        </div>
      </div>
    </div>
  )
}

export default App
