/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define([
  'views/base',
  'stache!templates/device_not_found'
], function (BaseView, DeviceNotFoundTemplate) {
  'use strict';

  var LostModeView = BaseView.extend({
    template: DeviceNotFoundTemplate
  });

  return LostModeView;
});
