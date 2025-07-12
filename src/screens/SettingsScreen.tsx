
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSettings } from '../hooks/useSettings';
import { IMAGES } from '../constants/images';
import { StyledButton } from '../components/StyledButton';
import { Card } from '../components/Card';
import { CustomCheckbox } from '../components/CustomCheckbox';
import { CustomSelect } from '../components/CustomSelect';
import { Language } from '../context/SettingsContext';
import { useTranslations } from '../hooks/useTranslations';

const UKFlag: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 36" className={className} strokeWidth="1">
      <path fill="#00247d" d="M0 0h60v36H0z"/>
      <path stroke="#fff" strokeWidth="6" d="m0 0 60 36m0-36L0 36"/>
      <path stroke="#cf142b" strokeWidth="4" d="m0 0 60 36m0-36L0 36"/>
      <path stroke="#fff" strokeWidth="10" d="M30 0v36M0 18h60"/>
      <path stroke="#cf142b" strokeWidth="6" d="M30 0v36M0 18h60"/>
    </svg>
);

const PLFlag: React.FC<{ className?: string }> = ({ className = '' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 5" className={className}>
        <rect width="8" height="5" fill="#fff"/>
        <rect y="2.5" width="8" height="2.5" fill="#DC143C"/>
    </svg>
);


export const SettingsScreen: React.FC = () => {
    const navigate = useNavigate();
    const { settings, updateSetting } = useSettings();
    const UI_TEXT = useTranslations();

    const languageOptions = [
        {
            value: 'en',
            label: (
                <span className="flex items-center">
                    <UKFlag className="w-5 h-3 mr-2 border border-stone-400" />
                    <span>{UI_TEXT.settings.languages.en}</span>
                </span>
            )
        },
        {
            value: 'pl',
            label: (
                <span className="flex items-center">
                    <PLFlag className="w-5 h-3 mr-2 border border-stone-400" />
                    <span>{UI_TEXT.settings.languages.pl}</span>
                </span>
            )
        },
    ];

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('${IMAGES.BACKDROP_MAIN_MENU}')` }}>
            <div className="bg-amber-50/80 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-2xl w-11/12 sm:w-full max-w-lg border-4 border-stone-800">
                <h1 className="text-2xl sm:text-3xl font-title mb-6 uppercase tracking-wider text-stone-900 text-center">{UI_TEXT.settings.title}</h1>
                
                <div className="space-y-4">
                    <Card className="bg-amber-100/60" padding="p-0">
                        <CustomCheckbox
                            id="prevent-screen-lock"
                            label={UI_TEXT.settings.preventScreenLock}
                            description={UI_TEXT.settings.preventScreenLockDesc}
                            checked={settings.preventScreenLock}
                            onChange={(checked) => updateSetting('preventScreenLock', checked)}
                            className="p-4"
                        />
                    </Card>
                    <Card className="bg-amber-100/60" padding="p-4">
                        <CustomSelect
                            id="language-select"
                            label={UI_TEXT.settings.language}
                            options={languageOptions}
                            value={settings.language}
                            onChange={(value) => updateSetting('language', value as Language)}
                        />
                        <p className="text-xs text-stone-600 mt-2">{UI_TEXT.settings.languageDesc}</p>
                    </Card>
                </div>
                
                <div className="mt-8">
                    <StyledButton onClick={() => navigate('/', { replace: true })} variant="secondary" className="w-full">
                        {UI_TEXT.settings.backToMainMenu}
                    </StyledButton>
                </div>
            </div>
        </div>
    );
};
