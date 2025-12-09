---
description: Workflow to edit, test, and deploy changes to the portfolio site
---

1. Edit the code in the IDE.
2. Test code validity (Build check is safer for automation than dev server):
   // turbo
   npm run build
3. (Optional) Run dev server if visual verification is needed:
   npm run dev
4. Push to GitHub:
   bash
   git add .
   git commit -m "Describe your changes"
   git push
