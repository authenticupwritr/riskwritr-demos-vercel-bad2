[Uploading README.md…]()
# RiskWritr Demos

Interactive demo suite for RiskWritr - Intelligent Submission Quality for Commercial Insurance.

## Live Demos

- **UpWritr**: Business Intelligence & Exposure Analysis
- **CoverWritr**: Coverage Recommendations & Gap Analysis  
- **ProWritr**: Professional Proposal Generation
- **CloseWritr**: Presentation Strategy & Objection Handling

## Deploy to Vercel

### Quick Deploy (3 minutes)

1. **Push to GitHub:**
   ```bash
   cd riskwritr-demos
   git init
   git add .
   git commit -m "Initial commit - RiskWritr demos"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
   - Click "Deploy"
   - Done! Your demos will be live in ~2 minutes

3. **Your Live URLs:**
   - Landing: `https://your-project.vercel.app`
   - UpWritr: `https://your-project.vercel.app/upwritr`
   - CoverWritr: `https://your-project.vercel.app/coverwritr`
   - ProWritr: `https://your-project.vercel.app/prowritr`
   - CloseWritr: `https://your-project.vercel.app/closewritr`

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Adding Links to PowerPoint

Once deployed, you can add clickable links to your PowerPoint:

1. **In PowerPoint:**
   - Select text or shape
   - Right-click → Hyperlink
   - Paste your Vercel URL
   - Click OK

2. **Recommended Slides to Add Links:**
   - Slide 8: "How UpWritr Works" → Link to live UpWritr demo
   - Slide 12: "What Agents See" → Link to all demos landing page

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## Created For

Applied Systems / Cytora Solutions Consultant Interview  
December 2024
