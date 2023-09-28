import jquery from 'jquery';
import dictionary from './dictionary.js';

window.$ = window.jQuery = jquery;

const DEFAULT_LANGUAGE = 'en'
const SUPPORTED_LANGUAGES = ['en', 'de', 'it', 'pl']

// data-translate-Key=""
$.html5Translate = function (lang) {
  $('[data-translate-key]').each(function () {
    const $this = $(this);
    $this.html(dictionary[lang][$this.data('translateKey')]);
  });
};

function changeLanguage() {
  const $this = $(this)
  const lngCode = $this.attr('data-lng')
  $.html5Translate(lngCode);
}

$(function () {
  const userLanguage = navigator?.language || navigator?.userLanguage;
  const userLanguageIsoCode = userLanguage?.split('-')[0];
  const isSupportedUserLanguage = SUPPORTED_LANGUAGES.includes(userLanguageIsoCode)
  const initialLanguage = isSupportedUserLanguage ? userLanguageIsoCode : DEFAULT_LANGUAGE
  
  $.html5Translate(initialLanguage);
  
  $('.language').on('click', changeLanguage)
});