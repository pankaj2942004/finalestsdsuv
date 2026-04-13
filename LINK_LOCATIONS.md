# Link Rendering Locations - Search Results

## Summary
The following links are currently being rendered in **3 main locations** across the application with hardcoded anchor tags that currently point to `#` (no actual navigation).

---

## 1. **Footer Component** - [src/components/Footer.tsx](src/components/Footer.tsx)

### Academic Links Column
```jsx
academicLinks: [
  'Convocation',
  'Photo Gallery', 
  'Student Corner',
  'Tenders Notification',
  'Seminar & Conference',
  'Courses Offered',
  'Recruitments',
  'Affiliation & Affiliated colleges',
  'Old Syllabus'
]
```
**Rendered as:**
```jsx
{currentContent.academicLinks.map((link, index) => (
  <li key={index}>
    <a href="#" className="footer-link">{link}</a>
  </li>
))}
```
**Location in file:** [Footer.tsx#L25-L120](src/components/Footer.tsx#L25-L120)

---

### Overview Column
```jsx
overviewLinks: [
  'Examination',
  'Results',
  'Notification',
  'Lecturer Series',
  'Awards & Scholarships',
  'Career',
  'Downloads',
  'F.T.I',
  'Announcements',
  'Latest News',
  'UGC e-Samadhan portal'
]
```
**Rendered as:**
```jsx
{currentContent.overviewLinks.map((link, index) => (
  <li key={index}>
    <a href="#" className="footer-link">{link}</a>
  </li>
))}
```
**Location in file:** [Footer.tsx#L28-L123](src/components/Footer.tsx#L28-L123)

---

### University Links Column
```jsx
universityLinks: [
  'From VC Desk',
  'Affiliated College',
  'Act & Regulations',
  'Anti-Ragging',
  'Academic Calendar',
  'Exam Schedules',
  'Photo Gallery',
  'News Gallery',
  'Alumni',
  'Events',
  'Vacancy for the Post of Assistant Professor & Assistant Librarian/Associate Professors/Professors'
]
```
**Rendered as:**
```jsx
{currentContent.universityLinks.map((link, index) => (
  <li key={index}>
    <a href="#" className="footer-link">{link}</a>
  </li>
))}
```
**Location in file:** [Footer.tsx#L31-L131](src/components/Footer.tsx#L31-L131)

---

## 2. **Header Component - Navigation Dropdowns** - [src/components/Header.tsx](src/components/Header.tsx)

### Events Submenu
```jsx
const eventsSubMenu: SubMenuItem[] = [
  { labelEn: 'Photo Gallery', labelHi: 'फोटो गैलरी', url: '#' },
  { labelEn: 'News Gallery', labelHi: 'समाचार गैलरी', url: '#' },
  { labelEn: 'Conference/Seminar & Workshop', labelHi: 'सम्मेलन/सेमिनार और कार्यशाला', url: '#' },
  { labelEn: 'Centre of Excellence', labelHi: 'उत्कृष्टता केंद्र', url: '#' },
  { labelEn: 'NCC', labelHi: 'एनसीसी', url: '#' },
  { labelEn: 'Sports', labelHi: 'खेल', url: '#' },
  { labelEn: 'MOUs', labelHi: 'समझौता', url: '#' }
]
```
**Location in file:** [Header.tsx#L180-L187](src/components/Header.tsx#L180-L187)

**Navigation Handler:** [Header.tsx#L257-L263](src/components/Header.tsx#L257-L263)
```jsx
else if (labelEn === 'Photo Gallery' || labelHi === 'फोटो गैलरी') {
  setCurrentPage?.('photo-gallery');
}
```

---

### Examination Submenu
```jsx
const examinationSubMenu: SubMenuItem[] = [
  { labelEn: 'Exam Rules', labelHi: 'परीक्षा नियम', url: '#' },
  { labelEn: 'Exam Related Information', labelHi: 'परीक्षा से संबंधित जानकारी', url: '#' },
  { labelEn: 'Exam Schedule/Revised Exam Schedule', labelHi: 'परीक्षा समय सारणी/संशोधित परीक्षा समय सारणी', url: '#' },
  { labelEn: 'Examination Forms', labelHi: 'परीक्षा फार्म', url: '#' },
  { labelEn: 'Code Books', labelHi: 'कोड बुक', url: '#' }
]
```
**Location in file:** [Header.tsx#L149-L155](src/components/Header.tsx#L149-L155)

---

### Students Corner Submenu
```jsx
const studentsCornerSubMenu: SubMenuItem[] = [
  { labelEn: 'Syllabus', labelHi: 'पाठ्यक्रम', url: '#' },
  { labelEn: 'Result', labelHi: 'परिणाम', url: '#' },
  { labelEn: 'Anti ragging', labelHi: 'रैगिंग विरोधी', url: '#' },
  // ... more items
]
```

---

## 3. **ImportantLinksBar Component** - [src/components/ImportantLinksBar.tsx](src/components/ImportantLinksBar.tsx)

Renders 12 important links with callback handler:
```jsx
const links = [
  {
    id: 'college-affiliation',
    textEn: 'College Affiliation Portal',
    textHi: 'कॉलेज संबद्धता पोर्टल',
    url: '#'
  },
  {
    id: 'convocation-medal',
    textEn: '6th Convocation Gold Medal List',
    textHi: '6वें दीक्षांत समारोह स्वर्ण पदक सूची',
    url: '#'
  },
  // ... more items
]
```
**Location in file:** [src/components/ImportantLinksBar.tsx#L8-L50](src/components/ImportantLinksBar.tsx#L8-L50)

**Handler Callback:** [src/components/ImportantLinksBar.tsx#L70-L75](src/components/ImportantLinksBar.tsx#L70-L75)
```jsx
const handleClick = (e: React.MouseEvent, linkId: string) => {
  e.preventDefault();
  if (onLinkClick) {
    onLinkClick(linkId);
  }
};
```

---

## 4. **QuickLinks Component** - [src/components/QuickLinks.tsx](src/components/QuickLinks.tsx)

Renders 12 quick links (mostly service links):
```jsx
const quickLinks: QuickLink[] = [
  {
    id: 1,
    titleEn: 'online examination application form',
    titleHi: 'ऑनलाइन परीक्षा आवेदन फॉर्म',
    icon: 'eye',
    color: '#f5a623',
    url: '#'
  },
  // ... more items
]
```
**Location in file:** [src/components/QuickLinks.tsx#L17-L75](src/components/QuickLinks.tsx#L17-L75)

---

## Dedicated Component Pages

These links point to existing component pages:

| Link | Component File | Navigation Key |
|------|---------|-------------------|
| Convocation | [Convocation.tsx](src/components/Convocation.tsx) | `'convocation'` |
| Examination | [Examination.tsx](src/components/Examination.tsx) | `'examination'` |
| Results | [Results.tsx](src/components/Results.tsx) | `'results'` |
| From VC Desk | [FromVCDesk.tsx](src/components/FromVCDesk.tsx) | `'from-vc-desk'` |
| Affiliated College | [AffiliatedCollege.tsx](src/components/AffiliatedCollege.tsx) | `'affiliated-colleges'` |
| Photo Gallery | [PhotoGallery.tsx](src/components/PhotoGallery.tsx) | `'photo-gallery'` |
| Student Corner | [StudentCorner.tsx](src/components/StudentCorner.tsx) | `'student-corner'` |
| News Gallery | [NewsGallery.tsx](src/components/NewsGallery.tsx) | `'news-gallery'` |
| Career | [Career.tsx](src/components/Career.tsx) | `'career'` |
| Alumni | [Alumni.tsx](src/components/Alumni.tsx) | `'alumni'` |
| Anti-Ragging | [AntiRagging.tsx](src/components/AntiRagging.tsx) | `'anti-ragging'` |
| NCC | [NCC.tsx](src/components/NCC.tsx) | `'ncc'` |

---

## Current Issue

All links across the application are currently **non-functional** because:

1. **Footer links** use `href="#"` - no navigation handler
2. **Header navigation items** use `setCurrentPage?.('page-name')` but these calls are NOT connected to Footer links
3. **ImportantLinksBar** has callback handlers but Footer doesn't implement them
4. **QuickLinks** links also point to `#` with no handlers

---

## Example: Current State vs. Required

### Current Footer Link Rendering
```jsx
<a href="#" className="footer-link">Convocation</a>  // Does nothing
```

### App.tsx Current Page Routes (Already set up)
```jsx
{currentPage === 'convocation' && <Convocation />}  // Component exists
```

### How Header Navigation DOES Work (For reference)
```jsx
handleDropdownItemClick = (labelEn: string) => {
  if (labelEn === 'Photo Gallery') {
    setCurrentPage?.('photo-gallery');  // ✓ This works
  }
}
```

---

## Next Steps

To make Footer links functional, each link needs:
1. An `onClick` handler (not just `href="#"`)
2. A call to `setCurrentPage()` with the appropriate page key
3. Mapping of link text to the correct page/component

**Example implementation needed in Footer.tsx:**
```jsx
const handleFooterLinkClick = (linkText: string) => {
  const linkMap: { [key: string]: string } = {
    'Convocation': 'convocation',
    'Photo Gallery': 'photo-gallery',
    'Examination': 'examination',
    'Results': 'results',
    'From VC Desk': 'from-vc-desk',
    'Affiliated College': 'affiliated-colleges',
    // ... more mappings
  };
  
  setCurrentPage?.(linkMap[linkText]);
};

// Then in rendering:
<a href="#" onClick={() => handleFooterLinkClick(link)}>{link}</a>
```

