import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../hooks/useGame';
import { ICONS } from '../constants/icons';
import { StyledButton } from '../components/StyledButton';
import { IMAGES } from '../constants/images';

export const MainMenu: React.FC = () => {
    const navigate = useNavigate();
    const { isGameSaved, continueGame } = useGame();

    const handleContinue = () => {
        continueGame();
        navigate('/game');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed" style={{backgroundImage: `url('${IMAGES.BACKDROP_MAIN_MENU}')`}}>
            <div className="bg-amber-50/70 backdrop-blur-md p-8 sm:p-12 rounded-xl shadow-2xl text-center max-w-md w-full border-4 border-stone-800">
                <div className="w-48 mx-auto mb-4 text-stone-900">
                    {ICONS.LOGO}
                </div>
                <h2 className="text-lg text-stone-700 font-serif italic mb-8">A Digital Companion</h2>

                <div className="space-y-4">
                    <StyledButton onClick={() => navigate('/setup')} className="w-full">New Game</StyledButton>
                    <StyledButton onClick={handleContinue} disabled={!isGameSaved} className="w-full">Continue Game</StyledButton>
                    <StyledButton onClick={() => navigate('/library')} variant="secondary" className="w-full">Law Library</StyledButton>
                </div>

                <div className="mt-8">
                    <StyledButton onClick={() => alert('Settings not implemented yet.')} variant="icon" aria-label="Settings">
                        {ICONS.SETTINGS}
                    </StyledButton>
                </div>
            </div>
        </div>
    );
};