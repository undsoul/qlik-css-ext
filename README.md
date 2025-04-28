# CSS Injector for Qlik

A custom Qlik extension that allows you to inject CSS code into your Qlik applications, enabling custom styling beyond what's available through standard Qlik theming options.

## Features

- Simple interface to add custom CSS code
- Live application of CSS changes
- CSS persists with the application
- Works in both Qlik Sense Desktop and Enterprise environments

## Installation

1. Download the extension files
2. Place them in your Qlik Sense Extensions directory:
   - For Qlik Sense Desktop: `C:\Users\[Username]\Documents\Qlik\Sense\Extensions\CSSInjector`
   - For Qlik Sense Enterprise: Import the extension through the QMC (Qlik Management Console)

## Usage

1. Edit your Qlik Sense application in edit mode
2. Drag the "CSS Injector" extension from the extensions panel onto your sheet
3. Click "Edit CSS" to open the CSS editor
4. Enter your custom CSS code
5. Click "Apply" to inject the CSS into the application
6. The CSS will now be applied to the entire application
7. Optionally, you can hide the extension object itself by going to the properties panel and setting "Hide Extension Object" to "Yes"

### Hiding the Extension Object

When you want the CSS to be applied but don't want the extension to take up space on your sheet:

1. Go to the extension's properties panel
2. Find the "Hide Extension Object" option under "CSS Settings"
3. Set it to "Yes"
4. The extension will be hidden in view mode, but the CSS will still be applied
5. In edit mode, the extension will still be visible with a note indicating it's set to be hidden

## Tips for Using CSS in Qlik

### Useful Selectors

Here are some common CSS selectors you can use in your custom CSS:

- `.qv-panel-sheet` - Target all sheets
- `.qv-object` - Target all objects
- `.qv-object-[type]` - Target objects by type (e.g., `.qv-object-kpi`, `.qv-object-barchart`)
- `.qv-toolbar-container` - Target the toolbar
- `.qv-selections-pane` - Target the selections panel

### Example CSS Snippets

```css
/* Change the background color of all sheets */
.qv-panel-sheet {
    background-color: #f0f8ff;
}

/* Add a border to all objects */
.qv-object {
    border: 1px solid #ddd;
    border-radius: 4px;
}

/* Style tables */
.qv-st-header-cell {
    background-color: #4477aa;
    color: white;
}

/* Hide the toolbar */
.qv-toolbar-container {
    display: none !important;
}
```

## Warning

Be cautious when injecting CSS as it can affect the entire application and potentially break the user interface. Always test your CSS changes thoroughly.

## Troubleshooting

If your CSS is not being applied:

1. Make sure the extension is placed on a visible part of the sheet
2. Check for syntax errors in your CSS code
3. Try using `!important` for styles that may be overridden by Qlik's own styles
4. Refresh the browser cache (Ctrl+F5)

## License

This extension is provided as-is under the MIT license.
