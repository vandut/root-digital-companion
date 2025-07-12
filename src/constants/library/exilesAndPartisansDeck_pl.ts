
import { LibraryCategory } from '../types';

export const exilesAndPartisansDeck_pl: LibraryCategory = {
    id: 'exiles-partisans-deck',
    title: 'Talia Banitów i Partyzantów',
    description: 'Alternatywna talia dla bardziej dynamicznych i agresywnych gier.',
    type: 'rules',
    topics: [
        {
            id: 'exiles-deck-overview',
            title: 'Przegląd',
            content: [
                {
                    text: 'Gracze mogą zgodzić się na zastąpienie standardowej talii 54 kart talią Banitów i Partyzantów. Ta alternatywna talia może być używana zarówno w standardowym, jak i zaawansowanym przygotowaniu i zawiera inne efekty kart, z których wiele jest bardziej interaktywnych, agresywnych i nieprzewidywalnych. Została zaprojektowana, aby zachęcać do bardziej dynamicznych gier i jest zalecana dla graczy zaznajomionych z podstawową grą.'
                }
            ]
        },
        {
            id: 'key-differences',
            title: 'Kluczowe Różnice w Porównaniu do Talii Standardowej',
            content: [
                {
                    subtitle: 'Brak Kart Dominacji',
                    text: 'Najważniejszą zmianą jest usunięcie wszystkich czterech kart Dominacji. Z tą talią zwycięstwo jest możliwe tylko przez osiągnięcie 30 punktów zwycięstwa. Zmusza to graczy do bezpośredniej konfrontacji w celu zdobywania punktów i uniemożliwia graczowi „chowanie się” w narożnych polanach, aby zapewnić sobie wygraną.'
                },
                {
                    subtitle: 'Brak Kart Zasadzek',
                    text: 'Pięć kart Zasadzek zostało usuniętych. To sprawia, że inicjowanie walki jest mniej ryzykowne dla atakującego, ponieważ nie musi się już obawiać otrzymania dwóch natychmiastowych, nieblokowalnych trafień przed rzutem kośćmi. Ta zmiana generalnie zachęca do częstszych walk.'
                },
                 {
                    subtitle: 'Nowy Rozkład Kart',
                    text: 'Liczba kart każdego koloru (Lis, Królik, Mysz, Ptak) jest nieco inna, a rozkład wytwarzanych przedmiotów został zmieniony, co zmienia krajobraz rzemieślniczy kniei.'
                }
            ]
        },
        {
            id: 'new-card-effects',
            title: 'Nowe Efekty Kart i Styl Gry',
            content: [
                {
                    subtitle: 'Bardziej Niestabilna Knieja',
                    text: 'Efekty kart w tej talii są zaprojektowane tak, aby były bardziej wpływowe i interaktywne, często bezpośrednio wpływając na innych graczy. Prowadzi to do bardziej chaotycznej i reaktywnej gry, w której pozycje na planszy mogą się gwałtownie zmieniać.'
                },
                {
                    text: 'Wiele kart dostarcza potężnych narzędzi do zakłócania planów wroga lub tworzenia nieoczekiwanych okazji. Przykłady obejmują:',
                    list: [
                        'Informatorzy: Odrzuć pasującą kartę, aby usunąć wrogiego wojownika z tej polany.',
                        'Fałszywe Rozkazy: Wydaj kartę, aby przesunąć wojowników innego gracza, potencjalnie zakłócając jego linie zaopatrzenia lub wyciągając go z kluczowej pozycji obronnej.',
                        'Partyzanci: Wytworzone ulepszenie, które pozwala zadawać dodatkowe trafienie na polanach, które kontrolujesz.',
                        'Przemytnicy: Wytworzone ulepszenie, które pozwala traktować polanę jako dowolny kolor do celów ruchu twoich wojowników.',
                    ]
                },
                 {
                    subtitle: 'Nacisk na Interakcję Między Graczami',
                    text: 'Talia zachęca graczy do zwracania bacznej uwagi na działania innych. Karty takie jak "Wizyta u Przyjaciół" (zdobądź wojowników, płacąc innemu graczowi) czy "Zwiad" (zmuś graczy z dużą ręką do oddania ci kart) tworzą sieć tymczasowych sojuszy, negocjacji i zdrad. Gra staje się mniej o realizowaniu samotnej strategii, a bardziej o adaptacji do ciągle zmieniającego się krajobrazu politycznego.'
                }
            ]
        }
    ]
};
