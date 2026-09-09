import {
  lazy,
  Suspense,
} from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import "./styles/base.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/tools.css";
import "./styles/content.css";
import "./styles/responsive.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));

// Tools
const Tools = lazy(() => import("./pages/Tools"));
const BoxShadow = lazy(() => import("./pages/tools/BoxShadow"));
const TextShadow = lazy(() => import("./pages/tools/TextShadow"));
const Gradient = lazy(() => import("./pages/tools/Gradient"));
const Color = lazy(() => import("./pages/tools/Color"));
const BorderRadius = lazy(() => import("./pages/tools/BorderRadius"));
const CSSFilter = lazy(() => import("./pages/tools/CSSFilter"));
const Transform = lazy(() => import("./pages/tools/Transform"));
const Flexbox = lazy(() => import("./pages/tools/Flexbox"));
const Grid = lazy(() => import("./pages/tools/Grid"));
const Typography = lazy(() => import("./pages/tools/Typography"));
const Button = lazy(() => import("./pages/tools/Button"));
const Glassmorphism = lazy(() => import("./pages/tools/Glassmorphism"));
const Neumorphism = lazy(() => import("./pages/tools/Neumorphism"));
const CSSAnimation = lazy(() => import("./pages/tools/CSSAnimation"));

// Legal pages
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));

// Resources
const Resources = lazy(() => import("./pages/Resources"));
const Guides = lazy(() => import("./pages/resources/Guides"));
const BoxShadowGuide = lazy(
  () => import("./pages/resources/guides/BoxShadowGuide"),
);
const GradientsGuide = lazy(
  () => import("./pages/resources/guides/GradientsGuide"),
);
const FlexboxGuide = lazy(
  () => import("./pages/resources/guides/FlexboxGuide"),
);
const GridGuide = lazy(
  () => import("./pages/resources/guides/GridGuide"),
);
const BorderRadiusGuide = lazy(
  () => import("./pages/resources/guides/BorderRadiusGuide"),
);
const FilterGuide = lazy(
  () => import("./pages/resources/guides/FilterGuide"),
);
const TransformGuide = lazy(
  () => import("./pages/resources/guides/TransformGuide"),
);
const TypographyGuide = lazy(
  () => import("./pages/resources/guides/TypographyGuide"),
);
const AnimationGuide = lazy(
  () => import("./pages/resources/guides/AnimationGuide"),
);
const References = lazy(
  () => import("./pages/resources/References"),
);
const Snippets = lazy(
  () => import("./pages/resources/Snippets"),
);

// Inspiration
const Inspiration = lazy(
  () => import("./pages/resources/Inspiration"),
);
const MinimalInterfaces = lazy(
  () =>
    import(
      "./pages/resources/inspiration/MinimalInterfaces"
    ),
);
const ModernCards = lazy(
  () =>
    import(
      "./pages/resources/inspiration/ModernCards"
    ),
);
const HeroSections = lazy(
  () =>
    import(
      "./pages/resources/inspiration/HeroSections"
    ),
);
const Navigation = lazy(
  () =>
    import(
      "./pages/resources/inspiration/Navigation"
    ),
);
const Buttons = lazy(
  () =>
    import(
      "./pages/resources/inspiration/Buttons"
    ),
);
const Forms = lazy(
  () =>
    import(
      "./pages/resources/inspiration/Forms"
    ),
);
const CSSEffects = lazy(
  () =>
    import(
      "./pages/resources/inspiration/CSSEffects"
    ),
);
const ResponsiveLayouts = lazy(
  () =>
    import(
      "./pages/resources/inspiration/ResponsiveLayouts"
    ),
);

// Developer
const Developer = lazy(
  () => import("./pages/Developer"),
);

function RouteFallback() {
  return (
    <div className="route-fallback" aria-label="Loading">
      <span className="route-fallback-spinner" aria-hidden="true" />
      <span>Loading…</span>
    </div>
  );
}

function AppRoutes() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/resources"
          element={<Resources />}
        />

        <Route
          path="/tools"
          element={<Tools />}
        />

        <Route
          path="/tools/box-shadow"
          element={<BoxShadow />}
        />

        <Route
          path="/tools/text-shadow"
          element={<TextShadow />}
        />

        <Route
          path="/tools/gradient"
          element={<Gradient />}
        />

        <Route
          path="/tools/color"
          element={<Color />}
        />

        <Route
          path="/tools/border-radius"
          element={<BorderRadius />}
        />

        <Route
          path="/tools/filter"
          element={<CSSFilter />}
        />

        <Route
          path="/tools/transform"
          element={<Transform />}
        />

        <Route
          path="/tools/flexbox"
          element={<Flexbox />}
        />

        <Route
          path="/tools/grid"
          element={<Grid />}
        />

        <Route
          path="/tools/typography"
          element={<Typography />}
        />

        <Route
          path="/tools/button"
          element={<Button />}
        />

        <Route
          path="/tools/glassmorphism"
          element={<Glassmorphism />}
        />

        <Route
          path="/tools/neumorphism"
          element={<Neumorphism />}
        />

        <Route
          path="/tools/animation"
          element={<CSSAnimation />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />

        <Route
          path="/terms"
          element={<Terms />}
        />

        <Route
          path="/disclaimer"
          element={<Disclaimer />}
        />

        <Route
          path="/cookie-policy"
          element={<CookiePolicy />}
        />

        <Route
          path="/developer"
          element={<Developer />}
        />

        <Route
          path="/resources/guides"
          element={<Guides />}
        />

        <Route
          path="/resources/guides/box-shadow"
          element={<BoxShadowGuide />}
        />

        <Route
          path="/resources/guides/gradients"
          element={<GradientsGuide />}
        />

        <Route
          path="/resources/guides/flexbox"
          element={<FlexboxGuide />}
        />

        <Route
          path="/resources/guides/grid"
          element={<GridGuide />}
        />

        <Route
          path="/resources/guides/border-radius"
          element={<BorderRadiusGuide />}
        />

        <Route
          path="/resources/guides/filter"
          element={<FilterGuide />}
        />

        <Route
          path="/resources/guides/transform"
          element={<TransformGuide />}
        />

        <Route
          path="/resources/guides/typography"
          element={<TypographyGuide />}
        />

        <Route
          path="/resources/guides/animation"
          element={<AnimationGuide />}
        />

        <Route
          path="/resources/references"
          element={<References />}
        />

        <Route
          path="/resources/snippets"
          element={<Snippets />}
        />

        <Route
          path="/resources/inspiration"
          element={<Inspiration />}
        />

        <Route
          path="/resources/inspiration/minimal-interfaces"
          element={<MinimalInterfaces />}
        />

        <Route
          path="/resources/inspiration/modern-cards"
          element={<ModernCards />}
        />

        <Route
          path="/resources/inspiration/hero-sections"
          element={<HeroSections />}
        />

        <Route
          path="/resources/inspiration/navigation"
          element={<Navigation />}
        />

        <Route
          path="/resources/inspiration/buttons"
          element={<Buttons />}
        />

        <Route
          path="/resources/inspiration/forms"
          element={<Forms />}
        />

        <Route
          path="/resources/inspiration/css-effects"
          element={<CSSEffects />}
        />

        <Route
          path="/resources/inspiration/responsive-layouts"
          element={<ResponsiveLayouts />}
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </Suspense>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="app-shell">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />

        <Header />

        <AppRoutes />

        <Footer />
      </div>
    </BrowserRouter>
  );
}