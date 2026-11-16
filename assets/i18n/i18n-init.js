/* Shared translate.js bootstrap for CS Visual Tools. */
(function () {
  'use strict';

  if (typeof window.translate !== 'object') {
    console.error('[i18n] translate.js failed to load; keeping the original Chinese UI.');
    return;
  }

  const LANGUAGE_MAP = [
    [/^zh(-|$)/i, 'chinese_simplified'],
    [/^en(-|$)/i, 'english'],
    [/^ja(-|$)/i, 'japanese'],
    [/^ko(-|$)/i, 'korean']
  ];

  function detectBrowserLanguage() {
    const candidates = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || 'zh-CN'];

    for (const candidate of candidates) {
      const match = LANGUAGE_MAP.find(([pattern]) => pattern.test(candidate));
      if (match) return match[1];
    }
    return 'english';
  }

  // The source language is Simplified Chinese. The selected target language
  // is remembered by translate.js after the user changes the selector.
  translate.language.setLocal('chinese_simplified');
  translate.language.setDefaultTo(detectBrowserLanguage());

  // Keep the pilot intentionally small; expand after translation QA.
  translate.selectLanguageTag.languages =
    'chinese_simplified,english,japanese,korean';

  // Never translate code samples or keyboard instructions.
  ['code', 'pre', 'kbd', 'script', 'style'].forEach(function (tag) {
    translate.ignore.tag.push(tag);
  });
  ['notranslate', 'language-ignore'].forEach(function (className) {
    translate.ignore.class.push(className);
  });

  // Protect core CS vocabulary in the Chinese -> English direction.
  translate.nomenclature.append(
    'chinese_simplified',
    'english',
    [
      '红黑树=Red-Black Tree',
      '虚拟内存=Virtual Memory',
      '类加载=Class Loading',
      '垃圾回收=Garbage Collection',
      '线程池=Thread Pool',
      '哈希表=Hash Table',
      '页表=Page Table',
      '缺页中断=Page Fault',
      '锁升级=Lock Escalation',
      '根节点=Root Node',
      '叶=Leaf'
    ].join('\\n')
  );

  // Start watching dynamic DOM updates before the first translation pass.
  translate.service.use('client.edge');
  translate.listener.start();
  translate.execute();
})();
