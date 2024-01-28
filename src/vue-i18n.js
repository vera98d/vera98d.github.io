import { createI18n } from 'vue-i18n';
import translation_pl from './translation_pl';
import translation_en from './translation_en';

export const supportLocales = ['pl', 'en'];

export const i18n = createI18n({
    locale: 'pl',
    warnHtmlInMessage: 'off',
    messages: {
        pl: translation_pl,
        en: translation_en,
    },
},
);

export default i18n;