
import { useSettings } from './useSettings';
import { UI_TEXT as UI_TEXT_EN } from '../constants/text_en';
import { UI_TEXT_PL } from '../constants/text_pl';

export const useTranslations = () => {
    const { settings } = useSettings();

    if (settings.language === 'pl') {
        return UI_TEXT_PL;
    }
    return UI_TEXT_EN;
};
