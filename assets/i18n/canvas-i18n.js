/* Canvas labels are pixels, not DOM text; translate them explicitly. */
(function (global) {
  'use strict';

  const SOURCE_LANGUAGE = 'chinese_simplified';
  const ORIGINAL = {
    empty: '选择数据结构，输入值开始',
    leaf: '叶'
  };
  const cache = new Map();
  let activeLanguage = SOURCE_LANGUAGE;

  function getLanguage() {
    try {
      return global.translate.language.getCurrent() || SOURCE_LANGUAGE;
    } catch (_) {
      return SOURCE_LANGUAGE;
    }
  }

  function publish() {
    global.dispatchEvent(new Event('resize'));
  }

  function refresh() {
    if (!global.translate || !global.translate.request) return;

    const target = getLanguage();
    activeLanguage = target;
    if (target === SOURCE_LANGUAGE) {
      publish();
      return;
    }

    if (cache.has(target)) {
      publish();
      return;
    }

    const texts = Object.keys(ORIGINAL).map(key => ORIGINAL[key]);
    global.translate.request.translateText({
      from: SOURCE_LANGUAGE,
      to: target,
      texts
    }, function (data) {
      if (!data || data.result !== 1 || !Array.isArray(data.text)) {
        console.warn('[CanvasI18n] Translation unavailable; showing source labels.');
        publish();
        return;
      }

      const translated = {};
      Object.keys(ORIGINAL).forEach((key, index) => {
        translated[key] = data.text[index] || ORIGINAL[key];
      });
      cache.set(target, translated);
      publish();
    }, function (xhr) {
      console.warn('[CanvasI18n] Request failed:', xhr && xhr.status);
      publish();
    });
  }

  function text(key) {
    if (activeLanguage === SOURCE_LANGUAGE) return ORIGINAL[key] || key;
    const translated = cache.get(activeLanguage);
    return translated && translated[key] ? translated[key] : (ORIGINAL[key] || key);
  }

  global.CanvasI18n = { text, refresh };
})(window);
