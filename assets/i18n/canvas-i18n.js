/* Canvas labels are pixels, not DOM text; keep their translations deterministic. */
(function (global) {
  'use strict';

  const LABELS = {
    chinese_simplified: {
      empty: '选择数据结构，输入值开始',
      leaf: '叶'
    },
    english: {
      empty: 'Choose a data structure and enter values to begin',
      leaf: 'Leaf'
    },
    japanese: {
      empty: 'データ構造を選択し、値を入力して開始',
      leaf: '葉'
    },
    korean: {
      empty: '자료 구조를 선택하고 값을 입력하여 시작',
      leaf: '리프'
    }
  };

  function text(key) {
    const language = global.translate && global.translate.language
      ? global.translate.language.getCurrent()
      : 'chinese_simplified';
    const dictionary = LABELS[language] || LABELS.chinese_simplified;
    return dictionary[key] || LABELS.chinese_simplified[key] || key;
  }

  global.CanvasI18n = { text };
})(window);
