# 🎯 Quick Customization Checklist

Use this checklist to personalize your portfolio website!

## ✅ Essential Updates (Do These First!)

### 1. Personal Information
- [ ] **Name**: Update in `src/components/Hero.jsx` (line 82)
- [ ] **Title/Role**: Update in `src/components/Hero.jsx` (line 85)
- [ ] **Description**: Update in `src/components/Hero.jsx` (lines 88-92)
- [ ] **Footer Copyright**: Update in `src/components/Footer.jsx` (line 101)

### 2. Contact Details
- [ ] **Email**: Update in `src/components/Contact.jsx` (line 32) and `src/components/Footer.jsx` (line 70)
- [ ] **Phone**: Update in `src/components/Contact.jsx` (line 37) and `src/components/Footer.jsx` (line 77)
- [ ] **Location**: Update in `src/components/Contact.jsx` (line 42) and `src/components/Footer.jsx` (line 84)

### 3. Social Media Links
Update these in ALL three files:
- `src/components/Hero.jsx` (lines 97-117)
- `src/components/Contact.jsx` (lines 70-88)
- `src/components/Footer.jsx` (lines 24-42)

- [ ] **GitHub**: Replace `https://github.com` with your profile
- [ ] **LinkedIn**: Replace `https://linkedin.com` with your profile
- [ ] **Twitter/X**: Replace `https://twitter.com` with your profile

## 📝 Content Updates

### 4. About Section (`src/components/About.jsx`)
- [ ] Update personal description (lines 20-33)
- [ ] Update education details (lines 39-44)
- [ ] Update interests (lines 46-51)
- [ ] Update goals (lines 53-58)
- [ ] Update statistics:
  - [ ] Year (line 10)
  - [ ] Projects count (line 11)
  - [ ] CGPA (line 12)
  - [ ] Technologies count (line 13)

### 5. Skills Section (`src/components/Skills.jsx`)
- [ ] Update Frontend skills (lines 8-14)
- [ ] Update Backend skills (lines 18-24)
- [ ] Update Tools & Others (lines 28-34)
- [ ] Update Core CS skills (lines 38-44)
- [ ] Update competencies tags (lines 93-104)

### 6. Projects Section (`src/components/Projects.jsx`)
For each project (lines 7-62), update:
- [ ] Project title
- [ ] Description
- [ ] Emoji icon
- [ ] Technology tags
- [ ] Category (fullstack/frontend/backend/ai)
- [ ] GitHub link
- [ ] Demo link

### 7. Experience Section (`src/components/Experience.jsx`)
- [ ] Update work experiences (lines 5-38)
- [ ] Update achievements (lines 40-59)
- [ ] Add/remove timeline items as needed

## 🎨 Optional Customizations

### 8. Colors (`src/index.css`)
- [ ] Change primary color hue (line 4) - Try values 0-360
- [ ] Change secondary color hue (line 5) - Try values 0-360

Example color hues:
- Red: 0
- Orange: 30
- Yellow: 60
- Green: 120
- Cyan: 180
- Blue: 240
- Purple: 260 (current)
- Pink: 320

### 9. Profile Image (`src/components/Hero.jsx`)
- [ ] Add your photo to `public` folder
- [ ] Replace SVG gradient (lines 129-138) with:
```jsx
<div className="profile-image">
  <img src="/your-photo.jpg" alt="Your Name" />
</div>
```

### 10. Meta Tags (`index.html`)
- [ ] Update description (line 7)
- [ ] Update keywords (line 8)
- [ ] Add favicon (replace `/vite.svg` on line 5)

## 🚀 Before Deployment

- [ ] Test all navigation links
- [ ] Test contact form
- [ ] Check all social media links
- [ ] Test on mobile device
- [ ] Test on different browsers
- [ ] Run `npm run build` to check for errors
- [ ] Review all content for typos

## 📋 File Reference

Quick reference for which files to edit:

| What to Update | File Location |
|----------------|---------------|
| Name & Hero | `src/components/Hero.jsx` |
| About Me | `src/components/About.jsx` |
| Skills | `src/components/Skills.jsx` |
| Projects | `src/components/Projects.jsx` |
| Experience | `src/components/Experience.jsx` |
| Contact Info | `src/components/Contact.jsx` |
| Footer | `src/components/Footer.jsx` |
| Colors | `src/index.css` |
| Meta Tags | `index.html` |

## 💡 Pro Tips

1. **Start with essential updates** - Get your name and contact info right first
2. **Update one section at a time** - Don't try to change everything at once
3. **Save frequently** - The dev server auto-reloads on save
4. **Test as you go** - Check the browser after each major change
5. **Keep backups** - Save copies of files before major changes
6. **Use real data** - Replace all placeholder content with your actual information

---

**Happy Customizing! 🎉**
