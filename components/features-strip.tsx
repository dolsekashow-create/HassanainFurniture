import { Armchair, HeartHandshake, Leaf, ShieldCheck } from 'lucide-react'

const features = [
  {
    icon: HeartHandshake,
    title: 'Made in Damietta',
    description: 'Proudly crafted by skilled artisans with generations of experience.',
  },
  {
    icon: Leaf,
    title: 'Natural Materials',
    description: 'We use carefully selected wood and premium materials.',
  },
  {
    icon: ShieldCheck,
    title: '10-Year Warranty',
    description: 'Our commitment to quality that lasts for years to come.',
  },
  {
    icon: Armchair,
    title: 'Custom Furniture',
    description: 'Tailored designs to fit your space and your style.',
  },
]

export function FeaturesStrip() {
  return (
    <section id="collections" aria-label="Why choose Hassanain" className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-y-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`flex flex-col items-center px-6 text-center ${
              index > 0 ? 'lg:border-l lg:border-border' : ''
            }`}
          >
            <feature.icon className="h-10 w-10 text-primary" strokeWidth={1.5} aria-hidden="true" />
            <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-foreground">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
