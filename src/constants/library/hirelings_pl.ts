
import { LibraryCategory } from '../types';

export const hirelings_pl: LibraryCategory = {
    id: 'hirelings',
    title: 'Zaciężni',
    description: 'Użyj frakcji zaciężnych, aby wzmocnić swoje siły.',
    type: 'rules',
    topics: [
        {
            id: 'hirelings-overview',
            title: 'Przegląd Zaciężnych',
            content: [
                {
                    text: 'Zaciężni to mniejsze frakcje, które mogą być kontrolowane przez graczy podczas gry. Zapewniają dodatkowe elementy na planszy i unikalne zdolności, dodając kolejną warstwę strategii. Używanie zaciężnych jest modułem opcjonalnym, wybieranym podczas Przygotowania Zaawansowanego.'
                },
            ]
        },
        {
            id: 'hirelings-setup',
            title: 'Przygotowanie Zaciężnych',
            content: [
                 {
                    text: 'Aby użyć Zaciężnych, muszą oni zostać wybrani podczas Przygotowania Zaawansowanego. Procedura przygotowania jest następująca.',
                    collapsible: {
                        summary: 'Pokaż Kroki Przygotowania Zaciężnych',
                        details: [
                            'Krok 1: Zbierz Elementy. Potasuj wszystkie karty zaciężnych. Rozdaj trzy karty zaciężnych i odłóż resztę do pudełka. Zbierz elementy dla rozdanych kart zaciężnych do wspólnej puli.',
                            'Krok 2: Degradacja. Jeśli grasz z trzema graczami, odwróć jednego losowego zaciężnego na jego stronę Zdegradowaną. Jeśli grasz z czterema graczami, odwróć dwóch losowych zaciężnych. Jeśli grasz z pięcioma lub więcej graczami, odwróć wszystkich trzech zaciężnych.',
                            'Krok 3: Przygotuj Zaciężnych. Zaczynając od ostatniego gracza w kolejności tur i idąc przeciwnie do ruchu wskazówek zegara, gracze przygotowują po jednym z rozdanych zaciężnych, zgodnie z opisem na ich karcie.',
                            'Krok 4: Rozmieść Znaczniki Zaciężnych. Umieść trzy znaczniki zaciężnych — oznaczone „4”, „8” i „12” — na polach "4," "8” i “12” toru punktacji na mapie.',
                            'Krok 5: Zwróć Odpowiednie Frakcje. Dana frakcja nie może być używana w grze, jeśli jej odpowiedni zaciężny jest w grze. Zwróć odpowiednie plansze frakcji, elementy i karty przygotowania do pudełka.'
                        ]
                    }
                }
            ]
        },
        {
            id: 'gaining-losing-hirelings',
            title: 'Zdobywanie i Tracenie Zaciężnych',
            content: [
                {
                    subtitle: 'Zdobywanie z Puli',
                    text: 'Gdy znacznik punktacji gracza wejdzie na pole na torze punktacji ze znacznikiem zaciężnego (pola 4, 8 i 12), przejmuje on kontrolę nad odpowiednim zaciężnym. Bierze kartę zaciężnego, umieszcza znacznik pod swoją fazą Wieczoru jako przypomnienie i rzuca kością kontroli, aby określić, ile znaczników kontroli umieścić na karcie.'
                },
                {
                    subtitle: 'Traci Kontrolę',
                    text: 'Na koniec swojej tury musisz usunąć jeden znacznik kontroli z każdej karty zaciężnego zdobytej w poprzednich turach. Jeśli na karcie zaciężnego nie ma już znaczników kontroli, musisz oddać ją innemu graczowi (zazwyczaj graczowi z najwyższą liczbą punktów). Ten gracz natychmiast rzuca kością kontroli.'
                }
            ]
        },
        {
            id: 'abilities-and-actions',
            title: 'Zdolności i Akcje',
            content: [
                {
                    subtitle: 'Akcja Po Zdobyciu',
                    text: 'Akcja, którą gracz kontrolujący musi wykonać natychmiast po przejęciu kontroli nad zaciężnym.'
                },
                {
                    subtitle: 'Zdolność Stała',
                    text: 'Zdolność, która jest zawsze aktywna lub określa, kiedy się dzieje.'
                },
                {
                    subtitle: 'Akcja na Początku Świtu',
                    text: 'Akcja, którą gracz kontrolujący może lub musi wykonać na początku swojego Świtu.'
                },
                {
                    subtitle: 'Akcja Raz Podczas Dnia',
                    text: 'Akcja, którą gracz kontrolujący może wykonać raz podczas swojego Dnia.'
                },
            ]
        },
        {
            id: 'general-rules',
            title: 'Zasady Ogólne',
            content: [
                {
                    subtitle: 'Kontrola',
                    text: 'Gracz kontrolujący traktuje elementy zaciężnych jak swoje *tylko* w celu ustalenia Kontroli. Możesz kontrolować polanę, mając na niej tylko elementy zaciężnych.'
                },
                {
                    subtitle: 'Status Przeciwnika',
                    text: 'Zaciężni są przeciwnikami wszystkich graczy oprócz ich obecnego kontrolera (oraz jego partnerów w koalicji).'
                },
                {
                    subtitle: 'Oddzielne Elementy',
                    text: 'Elementy zaciężnych NIE są elementami frakcji gracza kontrolującego. Zatem Księstwo nie może ich używać do Przekonywania, Straż nie może ich usuwać do Obozowania itd.'
                },
                {
                    subtitle: 'Oddzielne Akcje',
                    text: 'Akcje ruchu i walki zaciężnych mogą poruszać lub rozpoczynać walki tylko elementami zaciężnych. Zaciężni nie mogą wykonywać akcji w inny sposób (np. akcja ruchu gracza kontrolującego, Relacje Sojusznicze Włóczęgi).'
                },
                {
                    subtitle: 'Oddzielne Efekty',
                    text: 'Zaciężni nie mogą używać zdolności, przekutych efektów stałych ani kart Zasadzki gracza kontrolującego. Zatem jednostka zaciężna nie może użyć Szkutników podczas ruchu.'
                },
                {
                    subtitle: 'Punktowanie za Usuwanie',
                    text: 'Gracz kontrolujący zaciężnych nie otrzymuje punktów zwycięstwa, jeśli usuną oni elementy przeciwnika. Gracze nadal zdobywają PZ za usuwanie budynków i żetonów zaciężnych.'
                },
                 {
                    subtitle: 'Inne',
                    text: 'Interakcje takie jak ruch z Promem czy aktywowanie Buntu Sojuszu przez ruch zaciężnymi nadal mają miejsce tak, jakby to gracz kontrolujący wykonywał akcję.'
                }
            ]
        }
    ]
};
