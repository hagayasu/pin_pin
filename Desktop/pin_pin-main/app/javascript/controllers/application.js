import { Application } from '@hotwired/stimulus';

const application = Application.start();

// Configure Stimulus development experience
application.debug = false;
window.Stimulus = application;

export { application };
//= require jquery // 追記
//= require rails-ujs
//= require moment # 追加
//= require bootstrap-sprockets //追記
//= require fullcalendar # 追加
//= require activestorage
//= require_tree .

$(function () {
  $('#calendar').fullCalendar({});
});
