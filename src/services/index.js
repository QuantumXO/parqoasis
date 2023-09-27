import jquery from 'jquery';
import dictionary from './dictionary.js';

window.$ = window.jQuery = jquery;

const DEFAULT_LANGUAGE = 'en'
const SUPPORTED_LANGUAGES = ['en', 'de', 'it', 'pl']

$.html5Translate = function (dict, lang) {
  $('[data-translate-key]').each(function () {
    const $this = $(this);
    $this.html(dict[lang][$this.data('translateKey')]);
  });
};

$(function () {
  const userLanguage = navigator?.language || navigator?.userLanguage;
  const userLanguageIsoCode = userLanguage?.split('-')[0];
  const isSupportedUserLanguage = SUPPORTED_LANGUAGES.includes(userLanguageIsoCode)
  const initialLanguage = isSupportedUserLanguage ? userLanguageIsoCode : DEFAULT_LANGUAGE
  
  $.html5Translate(dictionary, initialLanguage);
});