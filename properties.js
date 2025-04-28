/*
 * Properties definition for CSS Injector extension
 */

define([], function() {
    'use strict';
    
    return {
        type: "items",
        component: "accordion",
        items: {
            settings: {
                uses: "settings",
                items: {
                    customCSSSection: {
                        label: "CSS Settings",
                        type: "items",
                        items: {
                            customCSS: {
                                ref: "customCSS",
                                label: "Custom CSS Code",
                                type: "string",
                                defaultValue: "",
                                expression: "optional",
                                component: "textarea",
                                rows: 10
                            },
                            hideExtension: {
                                ref: "hideExtension",
                                label: "Hide Extension Object",
                                type: "boolean",
                                defaultValue: false,
                                component: "switch",
                                options: [{
                                    value: true,
                                    label: "Yes"
                                }, {
                                    value: false,
                                    label: "No"
                                }]
                            },
                            cssInfoHeader: {
                                label: "Information",
                                component: "text",
                                style: "header"
                            },
                            cssInfo: {
                                label: "The CSS code entered here will be applied to the entire application. Use with caution as it may affect the appearance of other visualizations and UI elements.",
                                component: "text"
                            },
                            cssExampleHeader: {
                                label: "Examples",
                                component: "text",
                                style: "header"
                            },
                            cssExample1: {
                                label: "Change all sheet backgrounds: .qv-panel-sheet { background-color: #f0f0f0; }",
                                component: "text"
                            },
                            cssExample2: {
                                label: "Hide the Qlik toolbar: .qv-toolbar-container { display: none !important; }",
                                component: "text"
                            },
                            cssExample3: {
                                label: "Style all KPI objects: .qv-object-kpi { border: 2px solid #4CAF50; border-radius: 8px; }",
                                component: "text"
                            }
                        }
                    }
                }
            },
            appearance: {
                uses: "settings"
            }
        }
    };
});