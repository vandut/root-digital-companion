
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../hooks/useGame';
import { ICONS } from '../constants/icons';
import { StyledButton } from '../components/StyledButton';
import { IMAGES } from '../constants/images';
import { useTranslations } from '../hooks/useTranslations';

export const MainMenu: React.FC = () => {
    const navigate = useNavigate();
    const { isGameSaved, continueGame } = useGame();
    const UI_TEXT = useTranslations();

    const handleContinue = () => {
        continueGame();
        navigate('/game');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed" style={{backgroundImage: `url('${IMAGES.BACKDROP_MAIN_MENU}')`}}>
            <div className="bg-amber-50/70 backdrop-blur-md p-6 sm:p-12 rounded-xl shadow-2xl text-center max-w-md w-11/12 sm:w-full border-4 border-stone-800">
                <div className="w-48 mx-auto mb-4 text-stone-900">
                    {ICONS.LOGO}
                </div>
                <h2 className="text-lg text-stone-700 font-serif italic mb-6 sm:mb-8">{UI_TEXT.mainMenu.tagline}</h2>

                <div className="space-y-4">
                    <StyledButton onClick={() => navigate('/setup')} className="w-full">{UI_TEXT.mainMenu.newGame}</StyledButton>
                    <StyledButton onClick={handleContinue} disabled={!isGameSaved} className="w-full">{UI_TEXT.mainMenu.continueGame}</StyledButton>
                    <StyledButton onClick={() => navigate('/library')} variant="secondary" className="w-full">{UI_TEXT.mainMenu.lawLibrary}</StyledButton>
                </div>

                <div className="mt-6 sm:mt-8">
                    <StyledButton onClick={() => navigate('/settings')} variant="icon" aria-label={UI_TEXT.mainMenu.settingsAria}>
                        {ICONS.SETTINGS}
                    </StyledButton>
                </div>
            </div>
        </div>
    );
};
