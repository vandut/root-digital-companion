
import { LibraryCategory } from '../types';

export const landmarks_pl: LibraryCategory = {
    id: 'landmarks',
    title: 'Punkty Terenu',
    description: 'Unikalne punkty terenu, które zmieniają zasady na polanach, które zajmują.',
    type: 'rules',
    topics: [
        {
            id: 'landmarks-overview',
            title: 'Używanie Punktów Terenu',
            content: [
                {
                    text: 'Punkty Terenu to opcjonalny moduł, wybierany podczas Przygotowania Zaawansowanego, który dodaje do mapy unikalne lokacje. Każdy punkt terenu wprowadza specjalną zasadę dla swojej polany, tworząc nowe strategiczne możliwości i wyzwania.'
                },
                {
                    subtitle: 'Zasady Ogólne',
                    text: 'Punkty Terenu nie należą do żadnej frakcji i nie są uważane za elementy wroga. Nie można ich atakować, przesuwać ani usuwać, chyba że specjalna zasada na karcie punktu terenu wyraźnie na to pozwala.'
                },
                {
                    subtitle: 'Procedura Przygotowania',
                    text: 'Punkty Terenu są dodawane do gry podczas procedury Przygotowania Zaawansowanego.',
                    collapsible: {
                        summary: 'Pokaż Kroki Przygotowania Punktów Terenu',
                        details: [
                            'Krok 1: Wybierz. Jako grupa zdecydujcie, czy gracie z jednym, czy dwoma punktami terenu. Usuńcie wszystkie karty punktów terenu, których nie chcecie używać.',
                            'Krok 2: Rozdaj i Zbierz. Potasujcie wybrane karty punktów terenu, rozdajcie wybraną ich liczbę i zbierzcie odpowiednie elementy wskazane na każdej z tych kart.',
                            'Krok 3: Przygotuj. Ostatni gracz w kolejności przygotowuje jeden z rozdanych punktów terenu, zgodnie z opisem na jego karcie. Jeśli gracie z dwoma punktami terenu, drugi od końca gracz przygotowuje drugi punkt terenu, zgodnie z opisem na jego karcie.',
                            'Uwaga dotycząca konfliktów na mapie: Jeśli używacie Map Wariantowych, umieszczenie Punktów Terenu może zignorować lub zastąpić umieszczenie Wieży (Mapa Górska) i Promu (Mapa Jeziora).'
                        ]
                    }
                }
            ]
        },
        {
            id: 'specific-landmarks',
            title: 'Konkretne Punkty Terenu',
            content: [
                {
                    subtitle: 'Zaginione Miasto',
                    text: 'Polana z tym punktem terenu ma wszystkie cztery kolory (mysz, lis, królik i ptak). Kiedy gracz atakuje na tej polanie, zadaje jedno dodatkowe trafienie.'
                },
                {
                    subtitle: 'Legendarna Kuźnia',
                    text: 'Polana z tym punktem terenu ma wszystkie cztery kolory (mysz, lis, królik i ptak). Kiedy gracz wytwarza przedmiot, używając tej polany, może traktować kartę, którą wytwarza, jako mającą dowolny kolor. Wytwarzając przedmiot w Kuźni, zdobywa jeden dodatkowy punkt zwycięstwa.'
                },
                {
                    subtitle: 'Wieża',
                    text: 'Polana z Wieżą nazywana jest Przełęczą. Na koniec Wieczoru każdego gracza, jeśli kontroluje on Przełęcz, zdobywa jeden punkt zwycięstwa.'
                },
                {
                    subtitle: 'Prom',
                    text: 'Polana z Promem jest traktowana jako sąsiadująca ze wszystkimi innymi polanami połączonymi z rzeką (Polany Przybrzeżne). Raz na turę gracz może przemieścić dowolną liczbę swoich elementów z polany Promu na dowolną inną Polanę Przybrzeżną. Prom przemieszcza się wraz z elementami. Gracz wykonujący ruch musi kontrolować polanę początkową LUB docelową. Po ruchu gracz dobiera kartę. Promu nie można atakować ani usunąć.'
                }
            ]
        }
    ]
};
