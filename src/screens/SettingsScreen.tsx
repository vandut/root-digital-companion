
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSettings } from '../hooks/useSettings';
import { IMAGES } from '../constants/images';
import { StyledButton } from '../components/StyledButton';
import { Card } from '../components/Card';
import { CustomCheckbox } from '../components/CustomCheckbox';

export const SettingsScreen: React.FC = () => {
    const navigate = useNavigate();
    const { settings, updateSetting } = useSettings();

    return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url('${IMAGES.BACKDROP_MAIN_MENU}')` }}>
            <div className="bg-amber-50/80 backdrop-blur-md p-8 rounded-xl shadow-2xl w-11/12 sm:w-full max-w-lg border-4 border-stone-800">
                <h1 className="text-3xl font-title mb-6 uppercase tracking-wider text-stone-900 text-center">Settings</h1>
                
                <Card className="bg-amber-100/60" padding="p-0">
                    <CustomCheckbox
                        id="prevent-screen-lock"
                        label="Prevent Screen Lock"
                        description="Keeps the screen on during gameplay."
                        checked={settings.preventScreenLock}
                        onChange={(checked) => updateSetting('preventScreenLock', checked)}
                        className="p-4"
                    />
                </Card>
                
                <div className="mt-8">
                    <StyledButton onClick={() => navigate('/', { replace: true })} variant="secondary" className="w-full">
                        Back to Main Menu
                    </StyledButton>
                </div>
            </div>
        </div>
    );
};
