import SectionHeading from '../components/SectionHeading';
import MenuCategory from '../components/MenuCategory';

const PASTRY_IMG = 'https://media.base44.com/images/public/69c897869cc68a413bb19ed7/01438b77f_generated_7b1f4926.png';
const POUROVER_IMG = 'https://media.base44.com/images/public/69c897869cc68a413bb19ed7/cc2211990_generated_51a7ddbb.png';

const espressoItems = [
  { name: 'Espresso', description: 'A bold, concentrated shot of rich flavor.', price: '3.50' },
  { name: 'Cortado', description: 'Equal parts espresso and velvety steamed milk.', price: '4.50' },
  { name: 'Flat White', description: 'Smooth micro-foam over a double ristretto.', price: '5.00' },
  { name: 'Americano', description: 'Espresso lengthened with hot water for a clean finish.', price: '4.00' },
  { name: 'Parliament Latte', description: 'Our signature — house espresso, oat milk, and a hint of maple.', price: '5.75', featured: true },
  { name: 'Cappuccino', description: 'Classic espresso topped with thick, airy foam.', price: '4.75' },
  { name: 'Mocha', description: 'Espresso meets rich, dark chocolate and steamed milk.', price: '5.50' },
];

const pourOverItems = [
  { name: 'Ethiopian Yirgacheffe', description: 'Bright, floral, with notes of bergamot and stone fruit.', price: '6.00' },
  { name: 'Colombian Huila', description: 'Sweet and balanced with caramel and red apple notes.', price: '5.75' },
  { name: 'Guatemalan Antigua', description: 'Full-bodied, cocoa-forward with a smoky finish.', price: '6.00' },
  { name: 'Seasonal Rotation', description: 'Ask about our current single-origin selection.', price: 'Varies' },
];

const pastryItems = [
  { name: 'Butter Croissant', description: 'Flaky, golden, and baked fresh every morning.', price: '3.75' },
  { name: 'Pain au Chocolat', description: 'Rich dark chocolate wrapped in buttery layers.', price: '4.25' },
  { name: 'Almond Croissant', description: 'Toasted almond cream in a twice-baked croissant.', price: '4.50' },
  { name: 'Daily Pastry Selection', description: 'Rotating seasonal baked goods from our kitchen.', price: 'Varies' },
];

export default function MenuPage() {
  return (
    <div>
      {/* Header */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="The Menu"
            title="Handcrafted with Care"
            description="Every item on our menu is prepared with precision, from our specialty espresso drinks to our freshly baked pastries."
          />
        </div>
      </section>

      {/* Espresso Bar */}
      <section className="px-6 pb-16 lg:pb-20">
        <div className="max-w-5xl mx-auto">
          <MenuCategory
            title="Espresso Bar"
            subtitle="Our foundation — precision-pulled shots crafted from our house blend."
            items={espressoItems}
          />
        </div>
      </section>

      {/* Pour Over with Image */}
      <section className="px-6 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[3/4] lg:sticky lg:top-32">
              <img
                src={POUROVER_IMG}
                alt="Pour over coffee being prepared"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-4">
              <MenuCategory
                title="Pour Overs"
                subtitle="Single-origin coffees brewed to order — rotating with the seasons."
                items={pourOverItems}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pastries with Image */}
      <section className="px-6 pb-20 lg:pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:order-2 rounded-2xl overflow-hidden shadow-lg aspect-square lg:sticky lg:top-32">
              <img
                src={PASTRY_IMG}
                alt="Fresh artisanal pastries and croissants"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:order-1 pt-4">
              <MenuCategory
                title="Fresh Pastries"
                subtitle="Baked in-house daily — flaky, golden, and irresistible."
                items={pastryItems}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}