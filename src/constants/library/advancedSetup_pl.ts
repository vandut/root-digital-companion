
import { LibraryCategory } from '../types';

export const setup_pl: LibraryCategory = {
    id: 'setup',
    title: 'Przygotowanie',
    description: 'Zasady rozpoczynania gry, w tym procedura standardowa i zaawansowana metoda draftu.',
    type: 'rules',
    topics: [
        {
            id: 'standard-setup',
            title: 'Przygotowanie standardowe',
            content: [
                {
                    subtitle: '1. Wybierz frakcje',
                    text: 'Każdy gracz wybiera frakcję. Dla zbalansowanej gry, suma wartości Zasięgu wybranych frakcji (znajdująca się na ich planszach) powinna osiągnąć lub przekroczyć zalecenie dla liczby graczy:',
                    list: [
                        '2 Graczy: 17+ Zasięgu',
                        '3 Graczy: 18+ Zasięgu',
                        '4 Graczy: 21+ Zasięgu',
                        '5 Graczy: 25+ Zasięgu',
                        '6 Graczy: 28+ Zasięgu'
                    ]
                },
                {
                    subtitle: '2. Wykonaj przygotowanie specyficzne dla frakcji',
                    text: 'W kolejności tur (ustalonej przez grupę lub według najwyższej wartości kolejności przygotowania frakcji), każdy gracz postępuje zgodnie z instrukcjami przygotowania na swojej planszy frakcji. To poprowadzi cię przez umieszczanie początkowych wojowników, budynków i żetonów.'
                },
                {
                    subtitle: '3. Umieść ruiny i przedmioty',
                    text: 'Umieść jeden żeton ruin na każdej polanie z wydrukowanym symbolem „R”. Jeśli używasz odpowiedniego rozszerzenia, umieść żetony przedmiotów pod ruinami.'
                },
                {
                    subtitle: '4. Rozdaj ręce startowe',
                    text: 'Każdy gracz dobiera trzy karty ze wspólnej talii, aby utworzyć swoją rękę startową.'
                },
                {
                    subtitle: '5. Ustal pierwszego gracza',
                    text: 'Gracz, który jako pierwszy umieścił swoje elementy (lub gracz z najwyższą wartością kolejności przygotowania), wykonuje pierwszą turę.'
                }
            ]
        },
        {
            id: 'advanced-setup-procedure',
            title: 'Przygotowanie zaawansowane',
            content: [
                { 
                    text: 'Dla doświadczonych graczy szukających większej różnorodności, ta metoda zastępuje standardowy wybór frakcji. Wprowadza draft frakcji i opcjonalne moduły, aby zapewnić zbalansowane i interesujące gry. Kroki są następujące:'
                },
                {
                    subtitle: '1. Wybierz i przygotuj mapę',
                    text: 'Gracze wspólnie wybierają mapę do gry (np. Jesienną, Zimową, Jeziora, Górską). Jeśli wybrana zostanie mapa wariantowa, należy najpierw zastosować jej specyficzne modyfikacje przygotowania.'
                },
                {
                    subtitle: '2. Wybierz talię',
                    text: 'Gracze jako grupa decydują, czy w grze używać talii standardowej, czy talii Banitów i Partyzantów.'
                },
                {
                    subtitle: '3. Przygotuj moduły opcjonalne',
                    text: 'Gracze mogą zgodzić się na dodanie do gry Punktów Terenu i/lub Zaciężnych. Jeśli tak, należy teraz postępować zgodnie z ich specyficznymi zasadami przygotowania. Te moduły dodają znaczną różnorodność i nowe zasady do gry.'
                },
                {
                    subtitle: '4. Usadź graczy',
                    text: 'Ustal kolejność siedzenia i który gracz rozpocznie grę. Zazwyczaj robi się to losowo.'
                },
                {
                    subtitle: '5. Dobierz karty początkowe',
                    text: 'Każdy gracz dobiera rękę pięciu kart. Nie zatrzymają wszystkich; ostateczną rękę startową wybiorą po przygotowaniu frakcji.'
                },
                {
                    subtitle: '6. Draft frakcji',
                    text: 'Ta metoda używa kart przygotowania frakcji, aby stworzyć zbalansowaną pulę do draftu. Zaczynając od ostatniego gracza w kolejności tur i idąc przeciwnie do ruchu wskazówek zegara, każdy gracz wybiera frakcję z puli i natychmiast ją przygotowuje, zanim następny gracz dokona wyboru.',
                    collapsible: {
                        summary: 'Pokaż kroki draftu frakcji',
                        details: [
                            'Draft przebiega według następujących kroków:',
                            '1. Rozdaj Karty Przygotowania: Podziel karty frakcji na „Militarne” (czerwona nazwa, ikona miecza) i „Powstańcze” (szara nazwa, brak ikony miecza). Potasuj karty Militarne i rozdaj jedną na środek stołu. Potasuj pozostałe Militarne ze wszystkimi Powstańczymi. Następnie rozdaj po jednej karcie na gracza, plus jedną dodatkową, do wspólnej puli draftu.',
                            '2. Wybierz Frakcje: Zaczynając od ostatniego gracza i idąc przeciwnie do ruchu wskazówek zegara, każdy gracz wybiera jedną kartę z puli. Natychmiast wykonuje kroki przygotowania opisane na tej karcie.',
                            'Zasada Specjalna (Zablokuj Ostatniego Powstańca): Jeśli ostatnia karta rozdana do puli jest Powstańcza, jest ona „zablokowana”. Nie można jej wybrać, dopóki w puli draftu dostępne są jakiekolwiek odblokowane frakcje Militarne.',
                            'Zasada Specjalna (Dwóch Graczy): Jeśli gra się w dwie osoby, usuń wszystkie karty frakcji Powstańczych przed rozdaniem jakichkolwiek kart.',
                            'Zasada Specjalna (Włóczęga): Gdy zostanie rozdane karta przygotowania Włóczęgi, rozdaj obok niej również losową kartę Postaci Włóczęgi. Gracz, który wybierze Włóczęgę, musi użyć tej postaci.',
                            'Zasada Specjalna (Polany Ojczyste): Gracz nie może przygotować się na polanie ojczystej, którą inny gracz już wybrał do swojego przygotowania.'
                        ]
                    }
                },
                {
                    subtitle: '7. Wybierz rękę startową',
                    text: 'Po przygotowaniu wszystkich frakcji, każdy gracz patrzy na pięć dobranych wcześniej kart i wybiera trzy, które zatrzyma. Pozostałe dwie karty są wtasowywane z powrotem do talii.'
                }
            ]
        }
    ]
};