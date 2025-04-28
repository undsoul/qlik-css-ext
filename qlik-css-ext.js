/*
 * CSS Injector Extension for Qlik
 * 
 * This extension allows users to inject custom CSS into Qlik applications.
 * It provides a simple interface to add CSS code that will be applied to the entire application.
 */

define([
    'jquery',
    'qlik',
    'text!./template.html',
    'text!./style.css',
    './properties'
], function($, qlik, template, css, properties) {
    'use strict';

    // Add the extension's own CSS
    $("<style>").html(css).appendTo("head");

    return {
        template: template,
        definition: properties,
        paint: function($element, layout) {
            // Get the custom CSS from properties
            var customCSS = layout.customCSS || '';
            var hideExtension = layout.hideExtension || false;
            
            // Check if we already added this CSS block
            var cssId = 'css-injector-' + layout.qInfo.qId;
            var existingCss = $('#' + cssId);
            
            if (existingCss.length) {
                // Update existing CSS
                existingCss.html(customCSS);
            } else {
                // Create new CSS block
                $("<style>")
                    .attr('id', cssId)
                    .html(customCSS)
                    .appendTo("head");
            }
            
            // Handle visibility of the extension object
            if (hideExtension) {
                $element.closest('.qv-object').css({
                    'height': '0px',
                    'border': 'none',
                    'margin': '0px',
                    'padding': '0px',
                    'overflow': 'hidden',
                    'visibility': 'hidden'
                });
            } else {
                // Restore the default styling
                $element.closest('.qv-object').css({
                    'height': '',
                    'border': '',
                    'margin': '',
                    'padding': '',
                    'overflow': '',
                    'visibility': ''
                });
                
                // Show the status in the extension
                $element.find('.css-status').text(customCSS ? 'CSS is active' : 'No CSS applied');
            }
            
            // Return the visualization height
            return qlik.Promise.resolve();
        },
        controller: ['$scope', function($scope) {
            // Initialize the scope
            $scope.isEditing = false;
            
            // Toggle editing mode
            $scope.toggleEdit = function() {
                $scope.isEditing = !$scope.isEditing;
            };
            
            // Apply CSS changes
            $scope.applyChanges = function() {
                // Get the current extension object
                var app = qlik.currApp();
                var id = $scope.$parent.layout.qInfo.qId;
                
                // First get the existing properties
                app.getObject(id).then(function(object) {
                    object.getProperties().then(function(properties) {
                        // Update the CSS property
                        properties.customCSS = $scope.customCSS;
                        // Maintain the hideExtension property
                        properties.hideExtension = properties.hideExtension || false;
                        
                        // Set the updated properties
                        return object.setProperties(properties);
                    }).then(function() {
                        $scope.isEditing = false;
                        $scope.$digest(); // Update the UI
                    }).catch(function(error) {
                        console.error('Error updating properties:', error);
                    });
                });
            };
            
            // Initialize CSS from layout
            $scope.$watch('$parent.layout', function(layout) {
                if (layout) {
                    $scope.customCSS = layout.customCSS || '';
                }
            });
        }]
    };
});