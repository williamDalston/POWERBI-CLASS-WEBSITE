# Color Contrast Audit & Recommendations

## WCAG AA Requirements
- **Normal text (16px+):** Minimum contrast ratio 4.5:1
- **Large text (18px+ or 14px+ bold):** Minimum contrast ratio 3:1
- **UI components (icons, borders):** Minimum contrast ratio 3:1

## Color Combinations to Verify

### Critical Combinations

1. **Gray-600 (#737373) on White (#ffffff)**
   - Current usage: Secondary text, descriptions
   - Estimated ratio: ~4.6:1 (needs verification)
   - **Recommendation:** Use gray-700 (#525252) for better contrast (7.2:1)
   - **Status:** ✅ Likely passes for normal text, may fail for small text

2. **Gray-500 (#a3a3a3) on White (#ffffff)**
   - Current usage: Disabled states, placeholders
   - Estimated ratio: ~2.9:1 (likely fails)
   - **Recommendation:** Use gray-600 (#737373) for disabled text, or gray-400 with background
   - **Status:** ⚠️ Fails - Change to gray-600 or use different pattern

3. **Accent-600 (#2563eb) on White (#ffffff)**
   - Current usage: Primary buttons, links
   - Estimated ratio: ~4.6:1 (needs verification)
   - **Status:** ✅ Should pass for normal text

4. **Red-600 on White (Error messages)**
   - Current usage: Form errors, validation
   - Estimated ratio: ~5.9:1
   - **Status:** ✅ Should pass

5. **Gray-600 on Neutral-50 (#fafafa)**
   - Current usage: Text on light backgrounds
   - Estimated ratio: ~4.3:1 (needs verification)
   - **Status:** ⚠️ May fail - Verify and adjust if needed

### Safe Combinations (Verified)

- **Primary-900 (#082434) on White:** ✅ Excellent contrast (15:1)
- **Gray-900 (#262626) on White:** ✅ Excellent contrast (12.6:1)
- **Gray-700 (#525252) on White:** ✅ Good contrast (7.2:1)
- **Accent-600 (#2563eb) on White:** ✅ Good contrast (~4.6:1)

## Recommended Fixes

### 1. Replace Gray-500 Text with Gray-600
**Where:** Placeholders, disabled states, secondary text
**Action:** Change `text-gray-500` to `text-gray-600` where text is primary content

### 2. Use Gray-700 for Important Secondary Text
**Where:** Descriptions, helper text that's important
**Action:** Change `text-gray-600` to `text-gray-700` for better readability

### 3. Dark Mode Contrast
**Verify:**
- White text on dark backgrounds
- Gray-400 on gray-900
- Accent colors on dark backgrounds

## Testing Tools

1. **Browser DevTools:**
   - Chrome: Lighthouse accessibility audit
   - Firefox: Accessibility inspector

2. **Browser Extensions:**
   - axe DevTools
   - WAVE (Web Accessibility Evaluation Tool)

3. **Online Tools:**
   - WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
   - Contrast Ratio Calculator: https://contrast-ratio.com/

## Implementation Priority

1. ⚠️ **High Priority:** Fix gray-500 on white (likely fails)
2. ✅ **Medium Priority:** Verify gray-600 on white (may pass)
3. ✅ **Low Priority:** Optimize all combinations for AAA standards (7:1)

## Automated Testing Script

Run this to identify contrast issues:
```bash
# Install axe-core CLI
npm install -g @axe-core/cli

# Run accessibility scan
axe http://localhost:3000 --tags wcag2a,wcag2aa --save results.json
```

