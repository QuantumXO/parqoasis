import $ from 'jquery';
import dictionary from './dictionary';
import 'fullpage.js/dist/jquery.fullpage.min.css';

window.$ = window.jQuery = $;
window.IScroll = require('iscroll');

require('fullpage.js/vendors/scrolloverflow.min');
// import 'fullpage.js'
require('fullpage.js');

const DEFAULT_LANGUAGE = 'en';
const SUPPORTED_LANGUAGES = ['en', 'de', 'it', 'pl'];
const TELEPHONES = {
  en: '+6285654885575',
  de: '+6285654885575',
  it: '+6281536085809',
  pl: '+6285654885575'
};


// data-translate-Key=""
$.html5Translate = function (lang) {
  $('[data-translate-key]').each(function () {
    const $this = $(this);
    $this.html(dictionary[lang][$this.data('translateKey')]);
  });
};

function changeLanguage() {
  const $this = $(this);
  const lngCode = $this.attr('data-lng');
  $.html5Translate(lngCode);
  
  handleTelephone(lngCode);
  
  localStorage.setItem('language', lngCode);
}

function handleTelephone(lngCode = 'en') {
  const phone = TELEPHONES[lngCode];
  $('#telephone').html(`<a href="tel:${phone}" class="phone">${phone}</a>`);
}

$(function () {
  const userLanguage = navigator?.language || navigator?.userLanguage;
  const userLanguageIsoCode = userLanguage?.split('-')[0];
  const isSupportedUserLanguage = SUPPORTED_LANGUAGES.includes(userLanguageIsoCode);
  const selectedUserLanguage = localStorage.getItem('language');
  let initLanguage = selectedUserLanguage;
  
  if (!selectedUserLanguage) {
    initLanguage = isSupportedUserLanguage ? userLanguageIsoCode : DEFAULT_LANGUAGE;
  }
  
  $.html5Translate(initLanguage);
  handleTelephone(initLanguage);
  
  if (window.innerWidth >= 768) {
    $('#fullpage').fullpage({
      paddingTop: '48px',
      scrollHorizontally: false,
      navigation: true,
      scrollBar: true,
      sectionSelector: '.scroll',
      scrollOverflow: true,
    });
  }
  
  $('.language').on('click', changeLanguage);
});