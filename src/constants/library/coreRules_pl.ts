
import { LibraryCategory } from '../types';

export const coreRules_pl: LibraryCategory = {
    id: 'core-rules',
    title: 'Zasady podstawowe',
    description: 'Fundamentalne pojęcia i akcje rządzące wszystkimi graczami.',
    type: 'rules',
    topics: [
        {
            id: 'basics',
            title: 'Podstawy wojny w Kniei',
            content: [
                {
                    subtitle: 'Witajcie w Kniei',
                    text: 'Root to gra przygodowa i wojenna, w której gracze walczą o kontrolę nad rozległą dziczą. To, co wyróżnia Root, to asymetria: każdy gracz kontroluje unikalną frakcję z własnymi, odrębnymi zdolnościami, celami i stylem gry. Potężna Markiza de Kot chce uprzemysłowić las, arystokratyczne Dynastie Orlich Gniazd dążą do odzyskania utraconego królestwa, a buntowniczy Sojusz Leśnych Stworzeń ma na celu zjednoczenie stworzeń przeciwko najeźdźcom. Zrozumienie mocnych stron swojej frakcji i słabości przeciwników jest kluczem do zwycięstwa.'
                },
                {
                    subtitle: 'Twój cel',
                    text: 'Głównym sposobem na wygraną jest zdobycie jako pierwszy 30 Punktów Zwycięstwa (PZ). Frakcje zdobywają punkty dzięki swoim unikalnym mechanizmom, takim jak budowanie struktur czy rozszerzanie wpływów. Można również zdobywać punkty, usuwając budynki i żetony wrogów lub wytwarzając przedmioty ze wspólnej talii.'
                },
                 {
                    text: 'Alternatywnie, gracz może dążyć do zwycięstwa przez Dominację. Zagrywając specjalną kartę Dominacji, zmienia swój warunek zwycięstwa na kontrolowanie określonych polan na mapie na początku swojej tury. To strategia wysokiego ryzyka i wysokiej nagrody.',
                },
                {
                    subtitle: 'Pole bitwy',
                    text: 'Gra toczy się na mapie kniei, która jest podzielona na POLANY połączone ŚCIEŻKAMI. Każda polana ma swój KOLOR (mysz, królik lub lis) i ograniczoną liczbę miejsc na budynki. Obszary między polanami to LASY, które są ważne dla niektórych frakcji. Niektóre polany zaczynają grę z RUINAMI, które blokują miejsca na budynki, dopóki nie zostaną zbadane, a ich żetony przedmiotów zabrane.'
                },
                {
                    subtitle: 'Wspólna talia',
                    text: 'Wszyscy gracze dobierają karty z jednej, wspólnej talii. Te karty są niezbędne do wielu akcji. Większość kart ma KOLOR (mysz, lis lub królik), który odpowiada polanom na mapie. Karty PTAKÓW są uniwersalne i mogą być używane jako dowolny kolor. Wiele kart ma również EFEKT PRZEKUCIA, który można aktywować, używając elementów rzemieślniczych twojej frakcji (takich jak warsztaty czy gniazda) na polanach o pasujących kolorach. Wytwarzanie zapewnia potężne jednorazowe lub stałe zdolności i jest również źródłem PZ.'
                },
                {
                    subtitle: 'Przebieg gry',
                    text: 'Tura każdego gracza jest podzielona na trzy fazy:',
                    list: [
                        'Świt: Faza „poranna”, w której wykonujesz specyficzne dla frakcji czynności przygotowawcze, takie jak dodawanie kart do Dekretu Orlich Gniazd czy umieszczanie drewna Markizy.',
                        'Dzień: Faza „dzienna”, w której wykonujesz większość swoich akcji, takich jak ruch wojowników, walka i wytwarzanie przedmiotów.',
                        'Wieczór: Faza „wieczorna”, w której dobierasz nowe karty i często zdobywasz punkty zwycięstwa.'
                    ]
                },
            ]
        },
        {
            id: 'core-actions',
            title: 'Kluczowe akcje',
            content: [
                 {
                    text: 'Chociaż każda frakcja ma unikalny sposób podejmowania akcji, większość dzieli kilka podstawowych akcji, które mogą wykonywać w swojej turze. Te akcje są fundamentalne dla interakcji z planszą i innymi graczami.'
                },
                {
                    subtitle: 'Ruch',
                    text: 'Gdy wykonujesz RUCH, weź dowolną liczbę (więcej niż zero) swoich wojowników z jednej polany i przesuń ich po łączącej ścieżce na jedną sąsiednią polanę. Aby wykonać akcję ruchu, MUSISZ KONTROLOWAĆ polanę początkową LUB docelową (lub obie).'
                },
                {
                    subtitle: 'Walka',
                    text: 'Gdy toczysz WALKĘ, wybierz polanę, na której znajdują się twoi wojownicy. Jesteś ATAKUJĄCYM. Wybierz wroga na tej polanie jako OBROŃCĘ.',
                    collapsible: {
                        summary: 'Pokaż 4 kroki walki',
                        details: [
                            'Krok 1: Obrońca Może Przygotować Zasadzkę. Obrońca może zagrać kartę zasadzki pasującą do polany. Jeśli to zrobi, zadaje 2 trafienia natychmiast. Atakujący może anulować tę zasadzkę, zagrywając własną pasującą kartę zasadzki (obie karty są wtedy odrzucane bez efektu).',
                            'Krok 2: Rzut Kośćmi. Rzuć obiema kośćmi. Atakujący zadaje trafienia równe wyższemu wynikowi; obrońca zadaje trafienia równe niższemu wynikowi. Twoja maksymalna liczba trafień z rzutu jest ograniczona do liczby twoich wojowników na tej polanie. Obrońca jest Bezbronny, jeśli nie ma wojowników, co powoduje, że atakujący zadaje jedno dodatkowe trafienie.',
                            'Krok 3: Użyj Efektów z Kart. Atakujący, a następnie obrońca, mogą użyć opcjonalnych efektów z kart, takich jak "Brutalna Taktyka" lub "Zbrojmistrze", aby dodać dodatkowe trafienia lub zmodyfikować walkę.',
                            'Krok 4: Zadaj Obrażenia. Każde trafienie usuwa jeden element przeciwnika. Strona otrzymująca trafienia wybiera kolejność, ale WSZYSCY jej wojownicy na tej polanie muszą zostać usunięci, zanim będzie można usunąć jej budynki lub żetony. Zdobywasz 1 PZ za każdy usunięty budynek lub żeton wroga.'
                        ]
                    }
                },
                {
                    subtitle: 'Przekucie',
                    text: 'Możesz PRZEKUĆ większość kart z ręki, aby uzyskać natychmiastowy lub trwały efekt. Aby przekuć kartę, musisz AKTYWOWAĆ elementy do przekuwania (np. warsztaty Markizy, gniazda Orlich Gniazd) w kolorach wymienionych w lewym dolnym rogu karty. Każdy element do przekuwania może być aktywowany tylko raz na turę.',
                    collapsible: {
                        summary: 'Pokaż szczegóły przekuwania',
                        details: [
                            'Efekty Natychmiastowe (Ikona Papierowego Pola): Po przekuciu rozpatrz efekt karty, a następnie ją odrzuć. Jeśli karta przedstawia przedmiot, weź odpowiedni przedmiot z zasobów i umieść go w swoim polu Przekutych Przedmiotów (lub odpowiedniku frakcyjnym). Jeśli wymagany przedmiot nie jest dostępny w zasobach, NIE MOŻESZ przekuć tej karty.',
                            'Trwałe Efekty (Ikona Kamiennego Pola): Po przekuciu umieść kartę w swoim obszarze rozgrywki. Jej efekt jest teraz stały. NIE MOŻESZ przekuć trwałego efektu, jeśli masz już identyczny w swoim obszarze rozgrywki.'
                        ]
                    }
                },
            ]
        },
        {
            id: 'core-concepts',
            title: 'Kluczowe pojęcia',
            content: [
                {
                    subtitle: 'Kontrola',
                    text: 'Gracz KONTROLUJE polanę, jeśli ma na niej więcej wojowników i budynków łącznie niż każdy inny gracz. Żetony i pionki (jak Włóczęga) nie wliczają się do kontroli. W przypadku remisu nikt nie kontroluje polany.'
                },
                {
                    subtitle: 'Polany, ścieżki i lasy',
                    text: 'Mapa składa się z wielu POLAN połączonych ŚCIEŻKAMI. Polana jest sąsiadująca ze wszystkimi innymi polanami połączonymi z nią ścieżką. Każda polana ma KOLOR (mysz, królik lub lis) i ograniczoną liczbę MIEJSC NA BUDYNKI (białe kwadraty). Nie możesz umieścić budynku na polanie bez wolnych miejsc. Obszary na mapie otoczone ścieżkami i polanami nazywane są LASAMI.'
                },
                {
                    subtitle: 'Ruiny',
                    text: 'Miejsca oznaczone małą literą „R” rozpoczynają grę wypełnione RUINAMI. Ruin nie można usunąć, chyba że jest to wyraźnie określone (np. przez akcję Eksploracji Włóczęgi). Blokują one miejsca na budynki do czasu ich usunięcia.'
                },
                {
                    subtitle: 'Karty: Ptaki jako jokery',
                    text: 'Możesz traktować każdą kartę ptaka jako kartę innego koloru (mysz, lis lub królik).',
                    collapsible: {
                        summary: 'Pokaż niuanse kart ptaków',
                        details: [
                            'Wymuszone Efekty: Jeśli jesteś zmuszony do odrzucenia lub oddania kart o konkretnym kolorze, MUSISZ traktować swoje karty ptaków jako karty wymaganego koloru. Nie możesz ich zatrzymać.',
                            'Odwrotna Zastępowalność: Jeśli jesteś zmuszony do zagrania, odrzucenia, dobrania lub oddania karty ptaka, NIE MOŻESZ jej zastąpić kartą innego koloru.'
                        ]
                    }
                },
                {
                    subtitle: 'Karty zasadzki',
                    text: 'W talii znajduje się pięć KART ZASADZEK (po jednej mysiej, lisiej, króliczej i dwie ptasie). Możesz zagrać kartę Zasadzki dla jej koloru, ale nie możesz jej przekuć. Jej głównym celem jest zagranie jej w walce, aby zadać dwa natychmiastowe obrażenia atakującemu.'
                },
            ]
        },
        {
            id: 'how-to-win',
            title: 'Zwycięstwo',
            content: [
                {
                    subtitle: 'Zdobywanie punktów zwycięstwa',
                    text: 'Pierwszy gracz, który zdobędzie 30 punktów zwycięstwa, natychmiast wygrywa grę. Jeśli kilku graczy zdobędzie 30 lub więcej punktów jednocześnie, wygrywa gracz aktualnie rozgrywający swoją turę. Każda frakcja ma unikalny sposób zdobywania punktów, ale każda może również zdobywać punkty, usuwając budynek lub żeton przeciwnika (1 PZ za każdy) lub wytwarzając przedmiot (PZ podane na karcie).'
                },
                {
                    subtitle: 'Zwycięstwo przez dominację',
                    text: 'W talii znajdują się cztery karty Dominacji, które pozwalają wygrać grę bez zdobywania 30 punktów zwycięstwa. Zapewniają alternatywną drogę do zwycięstwa dla graczy, którzy potrafią ustanowić kontrolę terytorialną.',
                    collapsible: {
                        summary: 'Pokaż, jak używać kart dominacji',
                        details: [
                            'Aktywacja: Podczas swojego Dnia, jeśli masz co najmniej 10 punktów zwycięstwa, możesz zagrać kartę Dominacji, aby zmienić swój warunek zwycięstwa. Musisz usunąć swój znacznik punktacji z toru punktacji i od tej pory nie możesz zdobywać punktów zwycięstwa w tradycyjny sposób.',
                            'Warunek Zwycięstwa (Kolory): Dla dominacji Myszy, Królika lub Lisa, wygrywasz natychmiast na początku swojego Świtu, jeśli kontrolujesz trzy polany o pasującym kolorze.',
                            'Warunek Zwycięstwa (Ptaki): Dla dominacji Ptaków, wygrywasz natychmiast na początku swojego Świtu, jeśli kontrolujesz dwie polany w przeciwległych narożnikach mapy.',
                            'Zagrywanie dla Koloru: Karta Dominacji może być zagrana dla swojego koloru. W takiej sytuacji, zamiast umieszczać ją na stosie kart odrzuconych, połóż ją w pobliżu mapy, aby pokazać, że jest DOSTĘPNA do wzięcia przez każdego z graczy. Podczas swojego Dnia gracz może dobrać dostępną kartę Dominacji, wydając kartę tego samego koloru.'
                        ]
                    }
                }
            ]
        }
    ]
};