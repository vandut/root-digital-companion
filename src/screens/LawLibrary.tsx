import React, { useRef, useEffect } from 'react';
import { useNavigate, useLocation, useParams, Link } from 'react-router-dom';
import { Faction, LibraryCategory, FactionType } from '../constants/types';
import { FactionDetail } from '../components/FactionDetail';
import { StyledButton } from '../components/StyledButton';
import { ICONS } from '../constants/icons';
import { IMAGES } from '../constants/images';
import { LibraryContainer } from '../components/LibraryContainer';
import { CollapsibleInfo } from '../components/CollapsibleInfo';
import { useTranslations } from '../hooks/useTranslations';
import { useFactions } from '../hooks/useFactions';
import { useLibraryData } from '../hooks/useLibraryData';

export const LawLibrary: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { categoryId, factionId } = useParams<{ categoryId?: string, factionId?: string }>();
    const containerRef = useRef<HTMLDivElement>(null);
    const UI_TEXT = useTranslations();
    const FACTIONS = useFactions();
    const { LIBRARY_DATA } = useLibraryData();

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = 0;
        }
    }, [categoryId, factionId]);

    const fromGame = location.state?.fromGame;

    const selectedFaction: Faction | null = factionId ? Object.values(FACTIONS).find(f => f.id === factionId) || null : null;
    const selectedCategory: LibraryCategory | null = selectedFaction 
        ? LIBRARY_DATA.find(c => c.id === 'factions') || null 
        : (categoryId ? LIBRARY_DATA.find(c => c.id === categoryId) || null : null);

    const handleHeaderAction = () => {
        if (fromGame) {
            navigate('/game', { replace: true });
        } else {
            navigate('/', { replace: true });
        }
    };

    const Breadcrumbs = () => {
        return (
            <div className="text-lg sm:text-xl font-title font-bold text-stone-300 truncate">
                {!selectedCategory ? (
                    <span className="text-white">{UI_TEXT.lawLibrary.library}</span>
                ) : (
                    <Link to="/library" state={{ fromGame }} className="text-orange-400 hover:text-orange-300 transition-colors" replace={true}>
                        {UI_TEXT.lawLibrary.library}
                    </Link>
                )}
    
                {selectedCategory && (
                    <>
                        <span className="text-stone-500 mx-2">{UI_TEXT.lawLibrary.breadcrumbSeparator}</span>
                        {!selectedFaction ? (
                            <span className="text-white">{selectedCategory.title}</span>
                        ) : (
                            <Link to={`/library/${selectedCategory.id}`} state={{ fromGame }} className="text-orange-400 hover:text-orange-300 transition-colors" replace={true}>
                                {selectedCategory.title}
                            </Link>
                        )}
                    </>
                )}
    
                {selectedFaction && (
                     <>
                        <span className="text-stone-500 mx-2">{UI_TEXT.lawLibrary.breadcrumbSeparator}</span>
                        <span className="text-white">{selectedFaction.name}</span>
                     </>
                )}
            </div>
        );
    };

    const renderContent = () => {
        if (selectedFaction) {
            return <LibraryContainer ref={containerRef}><FactionDetail faction={selectedFaction} /></LibraryContainer>;
        }
        
        if (selectedCategory) {
            if (selectedCategory.type === 'factions') {
                return (
                    <LibraryContainer ref={containerRef}>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Object.values(FACTIONS).map(faction => (
                                <li key={faction.id}>
                                    <Link
                                        to={`/library/factions/${faction.id}`}
                                        state={{ fromGame }}
                                        className="block w-full h-full text-left p-4 bg-[#F1E9DA] rounded-lg shadow-md hover:bg-[#EAE1D2] transition-all"
                                    >
                                        <span className="text-lg sm:text-xl font-title font-bold text-stone-900">{faction.name}</span>
                                        <p className="text-sm text-stone-600 mt-1">{faction.tagline}</p>
                                        <p className="text-xs text-stone-500 mt-2">
                                            <strong className="font-semibold">{UI_TEXT.common.reach}</strong> {faction.reach} &bull; <strong className="font-semibold">{UI_TEXT.common.type}</strong>{' '}
                                            <span className={faction.type === FactionType.MILITANT ? 'text-red-700' : 'text-green-700'}>
                                                {UI_TEXT.factionType[faction.type]}
                                            </span>
                                        </p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </LibraryContainer>
                );
            }
            return (
                <LibraryContainer ref={containerRef}>
                    <div className="space-y-8">
                        {selectedCategory.topics?.map(topic => (
                            <div key={topic.id}>
                                <h2 className="text-2xl sm:text-3xl font-bold font-title text-orange-900 border-b-2 border-orange-800 pb-2 mb-4">{topic.title}</h2>
                                <div className="space-y-5 text-stone-800">
                                    {topic.content.map((block, index) => (
                                        <div key={index}>
                                            {block.subtitle && <h3 className="text-lg sm:text-xl font-bold font-title text-stone-800 mb-2">{block.subtitle}</h3>}
                                            <p className={`${block.subtitle ? 'pl-4 border-l-4 border-orange-800' : ''} leading-relaxed`}>{block.text}</p>
                                            {block.list && (
                                                <ul className="list-disc list-inside space-y-1 mt-2 pl-8">
                                                    {block.list.map((item, i) => <li key={i}>{item}</li>)}
                                                </ul>
                                            )}
                                            {block.collapsible && <CollapsibleInfo content={block.collapsible} />}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </LibraryContainer>
            );
        }
        
        return (
             <LibraryContainer ref={containerRef}>
                <div className="space-y-4">
                    {LIBRARY_DATA.map((category, index) => (
                        <React.Fragment key={category.id}>
                            {index === 3 && (
                                <div className="relative py-2">
                                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                        <div className="w-full border-t border-orange-800/60"></div>
                                    </div>
                                    <div className="relative flex justify-center">
                                        <span className="bg-[#D3C6B0] px-4 font-title text-base font-bold uppercase tracking-wider text-orange-900/80">
                                            {UI_TEXT.lawLibrary.optionalModules}
                                        </span>
                                    </div>
                                </div>
                            )}
                            <Link
                                to={`/library/${category.id}`}
                                state={{ fromGame }}
                                className="block w-full text-left p-6 bg-[#F1E9DA] rounded-lg shadow-md hover:bg-[#EAE1D2] transition-all focus:outline-none focus:ring-2 focus:ring-stone-600 focus:ring-offset-2 focus:ring-offset-[#D3C6B0]"
                            >
                                <h2 className="text-xl sm:text-2xl font-title font-bold text-stone-900">{category.title}</h2>
                                <p className="text-stone-600 mt-1">{category.description}</p>
                            </Link>
                        </React.Fragment>
                    ))}
                </div>
            </LibraryContainer>
        );
    };

    return (
        <div className="h-screen flex flex-col bg-cover bg-center bg-fixed" style={{backgroundImage: `url('${IMAGES.BACKDROP_MAIN_MENU}')`}}>
            <header className="bg-stone-900 border-b-4 border-orange-900 shadow-lg z-10 flex-shrink-0">
                <div className="max-w-4xl mx-auto p-4 flex justify-between items-center gap-4">
                    <div className="flex-1 min-w-0">
                        <Breadcrumbs />
                    </div>
                    <StyledButton onClick={handleHeaderAction} variant="secondary">
                      {UI_TEXT.common.back}
                    </StyledButton>
                </div>
            </header>

            <main className="max-w-4xl mx-auto w-full flex-1 flex flex-col overflow-hidden sm:p-8">
                {renderContent()}
            </main>
        </div>
    );
};