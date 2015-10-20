define('ember-blog/models/post', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    title: DS['default'].attr('string'),
    author: DS['default'].attr('string'),
    text: DS['default'].attr('string'),
    createdDate: DS['default'].attr('date')
  });

});