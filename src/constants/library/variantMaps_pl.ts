
import { LibraryCategory, MapId } from '../types';

export const variantMaps_pl: LibraryCategory = {
    id: 'variant-maps',
    title: 'Warianty map',
    description: 'Zasady dla map Zimowej, Jeziora i Górskiej.',
    type: 'rules',
    topics: [
        {
            id: 'map-variants',
            title: 'Warianty map',
            content: [
                {
                    subtitle: 'Mapa Zimowa',
                    text: 'Mapa Zimowa ma inny układ polan i ścieżek. Jej główną unikalną zasadą jest Rwąca Rzeka: rzeka dzieli lasy, podobnie jak ścieżki. Tworzy to więcej mniejszych obszarów leśnych na mapie, co wpływa na sąsiedztwo dla frakcji takich jak Księstwo i Straż.',
                    mapId: MapId.WINTER
                },
                {
                    text: 'Ten proces losuje układ planszy w każdej grze, wymagając od graczy adaptacji strategii na bieżąco.',
                    collapsible: {
                        summary: 'Pokaż przygotowanie Mapy Zimowej',
                        details: [
                            "Kluczową cechą Mapy Zimowej są losowe kolory polan, które są ustalane podczas przygotowania. Nie używasz nadrukowanych kolorów na planszy.",
                            "Aby przygotować kolory:",
                            "1. Zbierz 12 znaczników kolorów polan (po trzy z każdego koloru: lis, mysz i królik).",
                            "2. Odwróć wszystkie znaczniki rewersem do góry i dokładnie je wymieszaj, aby żaden gracz nie wiedział, który jest który.",
                            "3. Umieść jeden wymieszany, zakryty znacznik na każdej z 12 polan na mapie.",
                            "4. Gdy wszystkie znaczniki zostaną umieszczone, odwróć je wszystkie. Kolor pokazany na znaczniku jest teraz kolorem tej polany na całą grę."
                        ]
                    },
                    mapId: MapId.WINTER
                },
                {
                    subtitle: 'Mapa Jeziora',
                    text: "Centrum tej mapy stanowi duże Jezioro, które działa jak specjalna rzeka łącząca wszystkie Polany Przybrzeżne. Polany stykające się z jeziorem to Polany Przybrzeżne, a lasy stykające się z jeziorem to Lasy Przybrzeżne. Jezioro jest traktowane jak rzeki łączące każdą polanę przybrzeżną z każdą inną i dzieli również lasy.",
                    mapId: MapId.LAKE
                },
                {
                    text: "Prom pozwala na potężny ruch. Raz na turę gracz z elementami na polanie Promu może je przenieść na dowolną inną polanę przybrzeżną. Ten ruch ignoruje normalne sąsiedztwo, a pionek Promu przemieszcza się wraz z elementami. Po użyciu Promu gracz dobiera jedną kartę. Promu nie można atakować ani usunąć.",
                    collapsible: {
                        summary: 'Pokaż przygotowanie Mapy Jeziora',
                        details: [
                            "Modyfikacje przygotowania: Umieść pionek Promu na polanie w narożniku, która jest jednocześnie polaną przybrzeżną."
                        ]
                    },
                    mapId: MapId.LAKE
                },
                {
                    subtitle: 'Mapa Górska',
                    text: "Ta mapa zawiera nieprzekraczalne góry, Zamknięte Ścieżki i Wieżę. Zamknięte Ścieżki blokują wszelki ruch i sąsiedztwo i nie można ich używać ani umieszczać na nich elementów.",
                    mapId: MapId.MOUNTAIN
                },
                {
                    text: "Raz na turę podczas Dnia, gracz z elementami na polanie połączonej zamkniętą ścieżką może wydać kartę dowolnego koloru, aby na stałe usunąć ten znacznik ścieżki i zdobyć jeden punkt zwycięstwa.",
                    mapId: MapId.MOUNTAIN
                },
                {
                    text: "Centralna polana z pionkiem Wieży nazywana jest Przełęczą. Na koniec Wieczoru gracza, jeśli kontroluje on Przełęcz, zdobywa jeden punkt zwycięstwa.",
                    collapsible: {
                        summary: 'Pokaż przygotowanie Mapy Górskiej',
                        details: [
                            "Modyfikacje przygotowania: Umieść 6 znaczników Zamkniętych Ścieżek na 6 ścieżkach o ciemniejszym kolorze. Umieść pionek Wieży na centralnej polanie z nadrukowanymi dwiema wieżami."
                        ]
                    },
                    mapId: MapId.MOUNTAIN
                }
            ]
        }
    ]
};