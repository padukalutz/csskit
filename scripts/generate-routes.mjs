import fs from 'node:fs'
import path from 'node:path'

const distDir = path.resolve('dist')
const sourceFile = path.join(distDir, 'index.html')

const routes = [
  '/tools',
  '/tools/box-shadow',
  '/tools/text-shadow',
  '/tools/gradient',
  '/tools/color',
  '/tools/border-radius',
  '/tools/filter',
  '/tools/transform',
  '/tools/flexbox',
  '/tools/grid',
  '/tools/typography',
  '/tools/button',
  '/tools/glassmorphism',
  '/tools/neumorphism',
  '/tools/animation',

  '/about',
  '/contact',

  '/privacy-policy',
  '/terms',
  '/disclaimer',
  '/cookie-policy',

  '/developer',

  '/resources',
  '/resources/guides',
  '/resources/guides/box-shadow',
  '/resources/guides/gradients',
  '/resources/guides/flexbox',
  '/resources/guides/grid',
  '/resources/guides/border-radius',
  '/resources/guides/filter',
  '/resources/guides/transform',
  '/resources/guides/typography',
  '/resources/guides/animation',

  '/resources/references',
  '/resources/snippets',

  '/resources/inspiration',
  '/resources/inspiration/minimal-interfaces',
  '/resources/inspiration/modern-cards',
  '/resources/inspiration/hero-sections',
  '/resources/inspiration/navigation',
  '/resources/inspiration/buttons',
  '/resources/inspiration/forms',
  '/resources/inspiration/css-effects',
  '/resources/inspiration/responsive-layouts',
]

if (!fs.existsSync(sourceFile)) {
  throw new Error('dist/index.html was not found. Run the Vite build first.')
}

const html = fs.readFileSync(sourceFile, 'utf8')

for (const route of routes) {
  const routeDir = path.join(distDir, route.slice(1))

  fs.mkdirSync(routeDir, { recursive: true })
  fs.writeFileSync(
    path.join(routeDir, 'index.html'),
    html,
    'utf8',
  )
}

console.log(`Generated ${routes.length} route entry points.`)
