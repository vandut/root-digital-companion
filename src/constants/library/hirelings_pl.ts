
import { LibraryCategory } from '../types';

export const hirelings_pl: LibraryCategory = {
    id: 'hirelings',
    title: 'Zaciężni',
    description: 'Użyj frakcji zaciężnych, aby wzmocnić swoje siły.',
    type: 'rules',
    topics: [
        {
            id: 'hirelings-overview',
            title: 'Przegląd zaciężnych',
            content: [
                {
                    text: 'Zaciężni to mniejsze frakcje, które mogą być kontrolowane przez graczy podczas gry. Zapewniają dodatkowe elementy na planszy i unikalne zdolności, dodając kolejną warstwę strategii. Używanie zaciężnych jest modułem opcjonalnym, wybieranym podczas Przygotowania Zaawansowanego.'
                },
            ]
        },
        {
            id: 'hirelings-setup',
            title: 'Przygotowanie zaciężnych',
            content: [
                 {
                    text: 'Aby użyć Zaciężnych, muszą oni zostać wybrani podczas Przygotowania Zaawansowanego. Procedura przygotowania jest następująca.',
                    collapsible: {
                        summary: 'Pokaż kroki przygotowania zaciężnych',
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
            title: 'Zdobywanie i tracenie zaciężnych',
            content: [
                {
                    subtitle: 'Zdobywanie z puli',
                    text: 'Gdy znacznik punktacji gracza wejdzie na pole na torze punktacji ze znacznikiem zaciężnego (pola 4, 8 i 12), przejmuje on kontrolę nad odpowiednim zaciężnym. Bierze kartę zaciężnego, umieszcza znacznik pod swoją fazą Wieczoru jako przypomnienie i rzuca kością kontroli, aby określić, ile znaczników kontroli umieścić na karcie.'
                },
                {
                    subtitle: 'Traci kontrolę',
                    text: 'Na koniec swojej tury musisz usunąć jeden znacznik kontroli z każdej karty zaciężnego zdobytej w poprzednich turach. Jeśli na karcie zaciężnego nie ma już znaczników kontroli, musisz oddać ją innemu graczowi (zazwyczaj graczowi z najwyższą liczbą punktów). Ten gracz natychmiast rzuca kością kontroli.'
                }
            ]
        },
        {
            id: 'abilities-and-actions',
            title: 'Zdolności i akcje',
            content: [
                {
                    subtitle: 'Akcja po zdobyciu',
                    text: 'Akcja, którą gracz kontrolujący musi wykonać natychmiast po przejęciu kontroli nad zaciężnym.'
                },
                {
                    subtitle: 'Zdolność stała',
                    text: 'Zdolność, która jest zawsze aktywna lub określa, kiedy się dzieje.'
                },
                {
                    subtitle: 'Akcja na początku Świtu',
                    text: 'Akcja, którą gracz kontrolujący może lub musi wykonać na początku swojego Świtu.'
                },
                {
                    subtitle: 'Akcja raz podczas dnia',
                    text: 'Akcja, którą gracz kontrolujący może wykonać raz podczas swojego Dnia.'
                },
            ]
        },
        {
            id: 'general-rules',
            title: 'Zasady ogólne',
            content: [
                {
                    subtitle: 'Kontrola',
                    text: 'Gracz kontrolujący traktuje elementy zaciężnych jak swoje *tylko* w celu ustalenia Kontroli. Możesz kontrolować polanę, mając na niej tylko elementy zaciężnych.'
                },
                {
                    subtitle: 'Status przeciwnika',
                    text: 'Zaciężni są przeciwnikami wszystkich graczy oprócz ich obecnego kontrolera (oraz jego partnerów w koalicji).'
                },
                {
                    subtitle: 'Oddzielne elementy',
                    text: 'Elementy zaciężnych NIE są elementami frakcji gracza kontrolującego. Zatem Księstwo nie może ich używać do Przekonywania, Straż nie może ich usuwać do Obozowania itd.'
                },
                {
                    subtitle: 'Oddzielne akcje',
                    text: 'Akcje ruchu i walki zaciężnych mogą poruszać lub rozpoczynać walki tylko elementami zaciężnych. Zaciężni nie mogą wykonywać akcji w inny sposób (np. akcja ruchu gracza kontrolującego, Relacje Sojusznicze Włóczęgi).'
                },
                {
                    subtitle: 'Oddzielne efekty',
                    text: 'Zaciężni nie mogą używać zdolności, przekutych efektów stałych ani kart Zasadzki gracza kontrolującego. Zatem jednostka zaciężna nie może użyć Szkutników podczas ruchu.'
                },
                {
                    subtitle: 'Punktowanie za usuwanie',
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