# Quality Checklists for IS117 Final Project

## Accessibility Checklist ✅

### Semantic HTML
- [ ] All pages use proper HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- [ ] Headings follow logical hierarchy (h1 → h2 → h3, no skipping levels)
- [ ] Lists use proper `<ul>`, `<ol>`, `<li>` tags
- [ ] Forms use `<label>` elements with `for` attributes

### ARIA & Accessibility
- [ ] All images have descriptive `alt` attributes
- [ ] Decorative images have `alt=""` or are CSS backgrounds
- [ ] Navigation has `aria-label` or `aria-labelledby`
- [ ] Form inputs have associated labels
- [ ] Required form fields have `required` and `aria-required="true"`
- [ ] Form status messages use `role="status"` and `aria-live="polite"`

### Color & Contrast
- [ ] Text meets WCAG AA contrast ratio (4.5:1 for normal text, 3:1 for large)
- [ ] Links are distinguishable from surrounding text
- [ ] Hover/focus states don't rely solely on color
- [ ] Color-blind friendly palette

### Keyboard Navigation
- [ ] All interactive elements are keyboard accessible
- [ ] Focus indicators are visible on all interactive elements
- [ ] Tab order is logical and follows visual flow
- [ ] No keyboard traps

### Screen Readers
- [ ] Buttons and links have descriptive text (avoid "click here")
- [ ] External links indicate they open in new window
- [ ] Skip navigation link provided (optional but recommended)

### Lighthouse Accessibility Score
- [ ] All pages achieve 100/100 accessibility score

---

## UI/UX Design Checklist ✅

### Responsive Design
- [ ] Mobile-first approach used
- [ ] Layouts work on screens from 320px to 2560px wide
- [ ] Breakpoints at 768px (tablet) and 1024px (desktop) minimum
- [ ] Touch targets are at least 44x44px on mobile
- [ ] No horizontal scrolling at any breakpoint
- [ ] Images are responsive and properly sized

### Typography
- [ ] Fluid typography using `clamp()` function
- [ ] Base font size: 16px minimum
- [ ] Line height: 1.5+ for body text
- [ ] Readable font family (sans-serif for body)
- [ ] Proper typographic hierarchy (size, weight, spacing)
- [ ] Text is legible on all backgrounds

### Visual Design
- [ ] Consistent color palette throughout site
- [ ] CSS variables used for theming
- [ ] Whitespace used effectively
- [ ] Visual hierarchy is clear
- [ ] Design aligns with chosen brand archetype
- [ ] Professional appearance

### Navigation
- [ ] Navigation is intuitive and easy to find
- [ ] Current page indicated in navigation
- [ ] All internal links work correctly
- [ ] Smooth scrolling for anchor links
- [ ] Back to home/hub links on all subsites

### User Experience
- [ ] Loading time is under 3 seconds
- [ ] No broken links or 404 errors
- [ ] Forms have clear validation messages
- [ ] Success states clearly communicated
- [ ] CTAs are prominent and clear
- [ ] No unexpected popups or interruptions

---

## Technical & SEO Checklist ✅

### HTML Validation
- [ ] All HTML validates (W3C Validator)
- [ ] Proper DOCTYPE declaration (`<!DOCTYPE html>`)
- [ ] Closing tags for all elements
- [ ] No duplicate IDs
- [ ] Proper character encoding (`<meta charset="UTF-8">`)

### CSS Quality
- [ ] CSS validates (W3C CSS Validator)
- [ ] No unused CSS rules
- [ ] CSS organized logically
- [ ] Browser prefixes where needed
- [ ] Mobile-first media queries

### JavaScript
- [ ] No console errors
- [ ] Scripts don't block page rendering
- [ ] Graceful degradation if JS disabled
- [ ] Event listeners properly attached
- [ ] No memory leaks

### Performance
- [ ] Lighthouse Performance score: 90+
- [ ] First Contentful Paint: < 1.8s
- [ ] Largest Contentful Paint: < 2.5s
- [ ] Cumulative Layout Shift: < 0.1
- [ ] Images optimized and compressed
- [ ] CSS and JS minified for production

### SEO Fundamentals
- [ ] Lighthouse SEO score: 100/100
- [ ] Unique, descriptive `<title>` tags (50-60 characters)
- [ ] Meta descriptions on all pages (150-160 characters)
- [ ] Meta keywords included
- [ ] Heading structure is SEO-friendly
- [ ] URLs are descriptive and clean
- [ ] Internal linking between pages
- [ ] Sitemap created (optional)

### Technical Requirements
- [ ] Site hosted on GitHub Pages
- [ ] `.nojekyll` file included
- [ ] Custom domain configured (optional)
- [ ] HTTPS enabled
- [ ] All external links use `target="_blank" rel="noopener"`

---

## Legal & Compliance Checklist ✅

### Copyright & Attribution
- [ ] All images are original, licensed, or public domain
- [ ] Stock photos credited if required
- [ ] Fonts properly licensed
- [ ] Third-party code attributed
- [ ] No copyrighted content used without permission

### Privacy & Data
- [ ] Privacy notice if collecting user data
- [ ] Form submissions handle data responsibly
- [ ] No personal data exposed in code/URLs
- [ ] Zapier webhook URLs secured
- [ ] GDPR considerations addressed (if applicable)

### Professional Standards
- [ ] No offensive or inappropriate content
- [ ] Testimonials are real or clearly marked as examples
- [ ] Contact information is functional
- [ ] No misleading claims or false advertising
- [ ] Professional language throughout

### Integrations
- [ ] Calendly integration configured properly
- [ ] Zapier webhook tested and working
- [ ] API keys not exposed in client-side code
- [ ] Third-party scripts loaded securely

---

## Presentation Checklist ✅

### Content Requirements
- [ ] Slide 1: Hook with unique value proposition (30 sec)
- [ ] Slide 2: Personal brand case study with archetype & persuasion (1.5 min)
- [ ] Slide 3: Client work case study with sales funnel (1.5 min)
- [ ] Slide 4: Technical mastery - Lighthouse scores & CI/CD (1 min)
- [ ] Slide 5: Top 3 course learnings (30 sec)
- [ ] Slide 6: AI collaboration analysis (30 sec)
- [ ] Slide 7: Call to action with contact info (30 sec)

### AI Collaboration Section
- [ ] Asked AI: "Describe our collaboration and my prompting strategy"
- [ ] Asked AI: "How can I improve my collaboration and prompting strategy?"
- [ ] Included insights from AI responses
- [ ] Reflected on AI collaboration experience

### Design & Delivery
- [ ] Total time: 5 minutes or less
- [ ] Professional visual design
- [ ] Minimal bullet points, maximum visuals
- [ ] Screenshots of all three sites included
- [ ] Lighthouse score screenshots included
- [ ] Contact information clearly displayed
- [ ] Practiced presentation multiple times
- [ ] PDF backup prepared

### Technical
- [ ] All links in presentation tested
- [ ] Screenshots are high quality
- [ ] Text is readable from distance
- [ ] Presentation uploaded to repository
- [ ] Presentation link included in README

---

## CI/CD & Quality Gates Checklist ✅

### GitHub Repository
- [ ] Repository initialized with Git
- [ ] `.gitignore` file configured
- [ ] README.md with project description
- [ ] Clear folder structure (`docs/` for GitHub Pages)
- [ ] All code committed and pushed

### Automated Testing
- [ ] HTMLHint configured (`.htmlhintrc`)
- [ ] Stylelint configured (`.stylelintrc.json`)
- [ ] Lighthouse CI configured (`lighthouserc.json`)
- [ ] Pre-commit hooks set up with Husky
- [ ] Lint-staged configured

### GitHub Actions
- [ ] Workflow file created (`.github/workflows/lighthouse-ci.yml`)
- [ ] Workflow runs on push to main branch
- [ ] Linting passes on all commits
- [ ] Lighthouse CI runs successfully
- [ ] All quality gates passing

### Deployment
- [ ] GitHub Pages enabled from `docs/` folder
- [ ] All sites accessible via GitHub Pages URLs
- [ ] No 404 errors on deployed sites
- [ ] Assets loading correctly
- [ ] Cross-site navigation working

---

## Final Submission Checklist ✅

### Canvas Submission
- [ ] GitHub repository URL submitted
- [ ] All live site URLs submitted:
  - [ ] Landing page URL
  - [ ] Portfolio site URL
  - [ ] Design style site URL
  - [ ] Client site URL
- [ ] Presentation deck link submitted
- [ ] All checklists completed

### Documentation
- [ ] README.md updated with project info
- [ ] PRESENTATION_TEMPLATE.md filled out
- [ ] Quality checklists reviewed
- [ ] Installation/setup instructions clear

### Final Review
- [ ] Tested all sites on multiple devices
- [ ] Tested all sites in multiple browsers
- [ ] All forms tested and working
- [ ] All links verified
- [ ] Spelling and grammar checked
- [ ] Code comments added where helpful
- [ ] No debug code or console.logs left in production

---

## Scoring Rubric Reference

**Remember, you're being graded on:**
- Quality of three websites (functionality, design, responsiveness)
- Technical implementation (accessibility, SEO, performance)
- Integration of required elements (Calendly, Zapier, persuasion principles)
- Presentation quality and delivery
- Strategic thinking and professional positioning
- CI/CD setup and quality gates

**Total Points:** 100

Good luck! 🎓
