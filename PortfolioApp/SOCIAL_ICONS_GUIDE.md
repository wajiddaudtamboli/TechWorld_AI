# Social Icons & Button - Quick Reference

## 🎨 Current Design

```
┌────────────────────────────────────────────────────┐
│                                                    │
│              Hello, It's Me                       │
│           Wajid Tamboli                           │
│     And I'm a [Data | Developer]                  │
│                                                    │
│  Computer Science professional with expertise...  │
│                                                    │
│    ┌──────────────────┐  ┌───┐ ┌───┐ ┌───┐ ┌───┐│
│    │  📥 Download     │  │ 🔗 │ │ in │ │ ✉ │ │ 💬││
│    │     Resume       │  │    │ │    │ │   │ │   ││
│    └──────────────────┘  └───┘ └───┘ └───┘ └───┘│
│                                                    │
└────────────────────────────────────────────────────┘
```

## 📐 Layout Structure

```html
<div class="btn-social-wrapper">
  ├── <a class="btn-download">
  │     └── Download Resume
  └── <div class="social-icons">
        ├── <a> GitHub
        ├── <a> LinkedIn
        ├── <a> Email
        └── <a> WhatsApp
</div>
```

## 🎯 CSS Classes Reference

### Container
```css
.btn-social-wrapper {
  display: flex;           /* Horizontal layout */
  align-items: center;     /* Vertical centering */
  justify-content: center; /* Horizontal centering */
  gap: 20px;              /* Space between button & icons */
  flex-wrap: wrap;        /* Stack on small screens */
  margin-top: 25px;       /* Space from text above */
}
```

### Download Button
```css
.btn-download {
  padding: 12px 20px;
  background: var(--main-color);  /* Orange */
  border-radius: 25px;
  min-width: 160px;
}
```

### Icon Container
```css
.social-icons {
  display: flex;
  gap: 10px;  /* Space between each icon */
}
```

### Individual Icons
```css
.social-icons a {
  width: 42px;              /* Circle size */
  height: 42px;
  border: 2px solid orange;
  border-radius: 50%;       /* Makes it circular */
}
```

## 🎨 Color Scheme

| Element | Default | Hover |
|---------|---------|-------|
| **Download Button** | Orange (`#ff8c00`) | Light Orange (`#ffae42`) |
| **GitHub Icon** | Orange border | White bg + Dark icon |
| **LinkedIn Icon** | Orange border | Blue bg (`#0077b5`) |
| **Email Icon** | Orange border | Red bg (`#ea4335`) |
| **WhatsApp Icon** | Orange border | Green bg (`#25d366`) |

## 📱 Responsive Breakpoints

### Desktop (> 768px)
- Button: 12px 20px padding
- Icons: 42x42px circles
- Icon font-size: 22px
- Gap: 20px

### Mobile (< 768px)
- Button: 10px 18px padding
- Icons: 38x38px circles
- Icon font-size: 20px
- Gap: 15px
- Wraps to multiple lines if needed

## 🔧 Customization Guide

### Change Button Text
Edit in `Index.cshtml`:
```html
<a href="..." class="btn-download">
  <i class="bx bx-download"></i>
  Your Text Here  <!-- Change this -->
</a>
```

### Add New Social Icon
1. Find icon at https://boxicons.com
2. Add to HTML:
```html
<a href="your-url" target="_blank" aria-label="Platform">
  <i class="bx bxl-your-icon"></i>
</a>
```
3. Add hover color (optional):
```css
.social-icons a:hover[href*="platform"] {
  background: #yourcolor;
  border-color: #yourcolor;
}
```

### Change Icon Order
Rearrange in HTML:
```html
<div class="social-icons">
  <a href="...">LinkedIn</a>    <!-- Move these lines -->
  <a href="...">GitHub</a>       <!-- in any order -->
  <a href="...">Email</a>
  <a href="...">WhatsApp</a>
</div>
```

### Remove an Icon
Simply delete the `<a>` tag:
```html
<!-- Delete this entire line to remove an icon -->
<a href="..."><i class="bx bxl-github"></i></a>
```

## 🎭 BoxIcons Used

| Platform | Icon Class | Code |
|----------|-----------|------|
| GitHub | `bxl-github` | `<i class='bx bxl-github'></i>` |
| LinkedIn | `bxl-linkedin` | `<i class='bx bxl-linkedin'></i>` |
| Email | `bx-envelope` | `<i class='bx bx-envelope'></i>` |
| WhatsApp | `bxl-whatsapp` | `<i class='bx bxl-whatsapp'></i>` |
| Download | `bx-download` | `<i class='bx bx-download'></i>` |

## 🌐 Other Popular Social Icons

```html
<!-- Twitter/X -->
<i class='bx bxl-twitter'></i>

<!-- Facebook -->
<i class='bx bxl-facebook'></i>

<!-- Instagram -->
<i class='bx bxl-instagram'></i>

<!-- YouTube -->
<i class='bx bxl-youtube'></i>

<!-- Discord -->
<i class='bx bxl-discord'></i>

<!-- Telegram -->
<i class='bx bxl-telegram'></i>

<!-- Stack Overflow -->
<i class='bx bxl-stack-overflow'></i>

<!-- Dev.to -->
<i class='bx bxl-dev-to'></i>
```

## ✅ Quality Checklist

### Alignment
- [✅] Button and icons on same line
- [✅] Centered under intro text
- [✅] No extra left margin
- [✅] Equal spacing between elements

### Styling
- [✅] Orange theme consistent
- [✅] Circular icon backgrounds
- [✅] Proper font sizes
- [✅] Smooth transitions

### Hover Effects
- [✅] Button lifts and glows
- [✅] Icons scale and change color
- [✅] Platform-specific colors
- [✅] Smooth animations

### Responsive
- [✅] Works on desktop
- [✅] Works on tablet
- [✅] Works on mobile
- [✅] Touch-friendly sizes

### Accessibility
- [✅] Aria labels present
- [✅] Keyboard navigable
- [✅] Sufficient contrast
- [✅] Adequate tap targets

---

**Quick Reference Guide**  
Version 1.0 | October 28, 2025
