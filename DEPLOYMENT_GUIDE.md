# Deployment & Setup Guide

## Quick Start

This guide will help you deploy your IS117 Final Project to GitHub Pages.

---

## Prerequisites

- Git installed on your system
- GitHub account
- Node.js and npm installed (already done if you followed setup)

---

## Step 1: Customize Your Sites

### Update Personal Information

1. **Landing Page** (`docs/index.html`):
   - Replace "Your Name" with your actual name
   - Update footer links to your GitHub/LinkedIn

2. **Portfolio Site** (`docs/portfolio/index.html`):
   - Update all instances of "Your Name"
   - Add your actual email, phone, GitHub, LinkedIn
   - Configure Calendly integration (see below)
   - Configure Zapier webhook (see below)

3. **Design Style Site** (`docs/design_style/index.html`):
   - Already complete, but you can customize the design movement if desired

4. **Client Site** (`docs/client_site/index.html`):
   - Already complete with GreenLeaf Landscaping example
   - You can rebrand to a different fictional client if desired

### Configure Calendly Integration

1. Sign up for free Calendly account: https://calendly.com/
2. Create a 30-minute event type
3. Get your Calendly link (e.g., `https://calendly.com/yourusername/30min`)
4. Update in `docs/portfolio/index.html`:
   ```html
   <div class="calendly-inline-widget" 
        data-url="https://calendly.com/YOUR_USERNAME/30min"
   ```

### Configure Zapier Webhook

1. Sign up for free Zapier account: https://zapier.com/
2. Create a new Zap
3. Trigger: "Webhooks by Zapier" → "Catch Hook"
4. Copy the webhook URL provided
5. Update in `docs/portfolio/scripts/portfolio.js` and `docs/client_site/scripts/client.js`:
   ```javascript
   const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/YOUR_ACTUAL_URL/';
   ```
6. Complete Zap setup:
   - Action: Email, Gmail, Slack, Google Sheets, etc.
   - Map form fields to action

---

## Step 2: Test Locally

### Option 1: Using Live Server (VS Code Extension)
1. Install "Live Server" extension in VS Code
2. Right-click on `docs/index.html`
3. Select "Open with Live Server"
4. Test all three sites

### Option 2: Using Python HTTP Server
```bash
cd /home/anabhayan/IS117_Final
python3 -m http.server 8000 --directory docs
```
Then open http://localhost:8000 in your browser

### Test Checklist:
- [ ] All navigation links work
- [ ] All three sites load correctly
- [ ] Forms submit (test with Zapier webhook)
- [ ] Responsive design works on mobile
- [ ] No console errors

---

## Step 3: Commit Your Code

```bash
cd /home/anabhayan/IS117_Final

# Add all files
git add .

# Commit with meaningful message
git commit -m "Initial commit: IS117 Final Project with 3 websites"

# If pre-commit hooks fail, fix the issues and try again
```

---

## Step 4: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `IS117_Final` (or your preferred name)
3. Description: "IS117 Final Project - Professional Web Portfolio System"
4. Leave as Public
5. **Do NOT** initialize with README (you already have one)
6. Click "Create repository"

---

## Step 5: Push to GitHub

```bash
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/IS117_Final.git

# Push to GitHub
git push -u origin main
```

If you encounter authentication issues:
- Use Personal Access Token instead of password
- Or set up SSH keys

---

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Scroll down to **Pages** (left sidebar)
4. Under "Source":
   - Branch: `main`
   - Folder: `/docs`
5. Click **Save**
6. Wait 1-2 minutes for deployment

Your sites will be available at:
- Landing: `https://YOUR_USERNAME.github.io/IS117_Final/`
- Portfolio: `https://YOUR_USERNAME.github.io/IS117_Final/portfolio/`
- Design Style: `https://YOUR_USERNAME.github.io/IS117_Final/design_style/`
- Client Site: `https://YOUR_USERNAME.github.io/IS117_Final/client_site/`

---

## Step 7: Verify Deployment

1. Visit all four URLs
2. Test navigation between sites
3. Test forms
4. Check mobile responsiveness
5. Verify no broken links

---

## Step 8: Run Lighthouse CI

### Manually Test Lighthouse Scores

1. Open each page in Chrome
2. Open DevTools (F12)
3. Go to "Lighthouse" tab
4. Select all categories
5. Click "Analyze page load"
6. Screenshot scores for presentation

### Automated Lighthouse CI

Your GitHub Actions workflow will automatically run Lighthouse CI on every push. Check:
1. Go to "Actions" tab in your repository
2. View workflow runs
3. Ensure all checks pass

---

## Step 9: Update README

Update the URLs in `README.md` with your actual GitHub Pages URLs:

```markdown
## Live Sites
- Landing Page: `https://YOUR_USERNAME.github.io/IS117_Final/`
- Portfolio: `https://YOUR_USERNAME.github.io/IS117_Final/portfolio/`
- Design Style: `https://YOUR_USERNAME.github.io/IS117_Final/design_style/`
- Client Site: `https://YOUR_USERNAME.github.io/IS117_Final/client_site/`
```

Commit and push:
```bash
git add README.md
git commit -m "Update README with live site URLs"
git push
```

---

## Step 10: Create Presentation

1. Use Canva, Google Slides, or PowerPoint
2. Follow `PRESENTATION_TEMPLATE.md` structure
3. Include screenshots of all three sites
4. Include Lighthouse score screenshots
5. Add your actual contact information
6. Practice timing (5 minutes max)

### Get AI Collaboration Insights

Run these prompts with your AI assistant:

```
Describe our collaboration throughout this IS117 final project. How would you characterize my prompting strategy, communication style, and the way I've used AI assistance? What were my strengths in working with you?
```

```
Based on our collaboration, how can I improve my prompting strategy and AI collaboration skills? What best practices should I adopt for future projects involving AI assistants?
```

Include the insights in Slide 6 of your presentation.

---

## Step 11: Submit to Canvas

Submit the following on Canvas:

1. **GitHub Repository URL**
   - Example: `https://github.com/YOUR_USERNAME/IS117_Final`

2. **Live Site URLs** (all 4):
   - Landing page
   - Portfolio site
   - Design style site
   - Client site

3. **Presentation Link**
   - Google Slides link (set to "Anyone with link can view")
   - OR upload PDF to repository and submit that URL

4. **Self-Assessment**
   - Complete all checklists in `QUALITY_CHECKLISTS.md`
   - Include in repository or submit separately

---

## Troubleshooting

### GitHub Pages Not Working
- Ensure you selected `/docs` folder, not root
- Check that branch is `main`, not `master`
- Wait 2-3 minutes after enabling
- Clear browser cache

### 404 Errors on Subpages
- Verify folder structure: `docs/portfolio/index.html`, etc.
- Check file names are lowercase
- Ensure all files are committed and pushed

### Styles Not Loading
- Check CSS file paths are relative
- Verify all CSS files are in `docs/` directory
- Check browser console for errors

### Forms Not Working
- Verify Zapier webhook URL is correct
- Check browser console for CORS errors
- Test with Zapier webhook testing page first

### Lighthouse Scores Low
- Optimize images (compress, resize)
- Minify CSS and JavaScript
- Remove unused code
- Add meta descriptions
- Fix accessibility issues

---

## Optional Enhancements

### Custom Domain
1. Buy domain from Namecheap, GoDaddy, etc.
2. Add CNAME file to `docs/` with your domain
3. Configure DNS settings in domain registrar
4. Update GitHub Pages settings

### Google Analytics
1. Create GA4 property
2. Add tracking code to all HTML files
3. Monitor traffic after deployment

### Contact Form Enhancement
- Integrate with FormSpree, Netlify Forms, or EmailJS
- Add reCAPTCHA for spam protection
- Set up autoresponder emails

---

## Final Checklist Before Submission

- [ ] All personal information updated
- [ ] Calendly integration configured
- [ ] Zapier webhook configured and tested
- [ ] All sites deployed and accessible
- [ ] All navigation links working
- [ ] Forms tested and working
- [ ] Lighthouse scores checked (90+)
- [ ] Presentation completed
- [ ] AI collaboration analysis included
- [ ] Quality checklists completed
- [ ] README updated with live URLs
- [ ] Repository clean and organized

---

## Need Help?

- **Office Hours:** Check Canvas for schedule
- **Discord:** Join class server for peer support
- **Documentation:** Review course materials
- **AI Assistant:** Ask for code reviews and debugging help

---

## Timeline Recommendation

**3-4 Days Before Deadline:**
- Customize all content
- Configure integrations
- Test thoroughly

**2 Days Before Deadline:**
- Deploy to GitHub Pages
- Run Lighthouse audits
- Fix any issues

**1 Day Before Deadline:**
- Create presentation
- Practice delivery
- Complete checklists
- Submit on Canvas

**Day of Presentation:**
- Final review
- Have backup PDF ready
- Arrive early to test equipment

---

Good luck! You've got this! 🚀
