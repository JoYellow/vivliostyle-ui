/*
 * Copyright 2015 Vivliostyle Inc.
 *
 * This file is part of Vivliostyle UI.
 *
 * Vivliostyle UI is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Vivliostyle UI is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Vivliostyle UI.  If not, see <http://www.gnu.org/licenses/>.
 */

import ko from "knockout";

var supportTouchEvents = ("ontouchstart" in window);

ko.bindingHandlers.menuButton = {
    init: function(element, valueAccessor) {
        if (ko.unwrap(valueAccessor())) {
            if (supportTouchEvents) {
                element.addEventListener("touchstart", function() {
                    ko.utils.toggleDomNodeCssClass(element, "hover active", true);
                });
                element.addEventListener("touchend", function() {
                    ko.utils.toggleDomNodeCssClass(element, "hover active", false);
                });
            } else {
                element.addEventListener("mouseover", function() {
                    ko.utils.toggleDomNodeCssClass(element, "hover", true);
                });
                element.addEventListener("mousedown", function() {
                    ko.utils.toggleDomNodeCssClass(element, "active", true);
                });
                element.addEventListener("mouseup", function() {
                    ko.utils.toggleDomNodeCssClass(element, "active", false);
                });
                element.addEventListener("mouseout", function() {
                    ko.utils.toggleDomNodeCssClass(element, "hover", false);
                });
            }
        }
    }
};
