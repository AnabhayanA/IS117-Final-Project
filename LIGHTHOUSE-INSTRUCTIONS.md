# LIGHTHOUSE AUDIT INSTRUCTIONS

## How to Run Lighthouse Audits (Chrome DevTools)

### Step 1: Open Your Site
1. Open Google Chrome
2. Navigate to: https://anabhayana.github.io/IS117-Final-Project/

### Step 2: Open DevTools
- **Windows/Linux**: Press `F12` or `Ctrl + Shift + I`
- **Mac**: Press `Cmd + Option + I`
- Or right-click anywhere → "Inspect"

### Step 3: Run Lighthouse
1. Click the **"Lighthouse"** tab in DevTools (top menu)
   - If you don't see it, click the `>>` arrows to find it
2. Select categories to audit:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
3. Select device: **Desktop** (then repeat for Mobile)
4. Click **"Analyze page load"**
5. Wait 30-60 seconds for the audit to complete

### Step 4: Take Screenshots
1. When audit completes, **take a screenshot** of the scores
   - Use Snipping Tool (Windows), Screenshot (Mac), or browser screenshot extension
2. Save as: `lighthouse-landing-desktop.png`

### Step 5: Repeat for All Sites
Run audits for each page:
- **Landing Hub**: https://anabhayana.github.io/IS117-Final-Project/
- **Portfolio**: https://anabhayana.github.io/IS117-Final-Project/portfolio/
- **Design Style**: https://anabhayana.github.io/IS117-Final-Project/design_style/
- **Client Site**: https://anabhayana.github.io/IS117-Final-Project/client_site/

Run each on **Desktop** and **Mobile** (8 total audits)

### Expected Scores (Target)
- **Performance**: 90-95
- **Accessibility**: 95-100
- **Best Practices**: 90-95
- **SEO**: 95-100

---

## Alternative: Online Lighthouse Tool

If Chrome DevTools doesn't work, use:
1. Go to: https://pagespeed.web.dev/
2. Paste your URL
3. Click "Analyze"
4. Take screenshot of results

---

## What to Include in Presentation
1. Screenshot of best scores (show at least landing page + portfolio)
2. Mention any issues found and how you'd fix them
3. Highlight 90+ scores in all categories

---

## Quick Tips
- If Performance score is low (<90):
  - Mention: "Would optimize images and add lazy loading"
- If Accessibility has warnings:
  - Check for missing alt text, color contrast
  - Easy fixes boost score quickly
- SEO issues:
  - Add meta descriptions if missing
  - Check heading hierarchy

---

## Save Results
Create a folder: `lighthouse-results/`
Save all 8 screenshots there for submission
