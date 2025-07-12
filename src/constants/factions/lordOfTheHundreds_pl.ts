
import { Faction, FactionId, OrderType, FactionType, GamePhase } from '../types';

export const lordOfTheHundreds_pl: Faction = {
  id: FactionId.LORD_OF_THE_HUNDREDS,
  name: 'Władca Szczurów',
  reach: 9,
  type: FactionType.MILITANT,
  tagline: 'Watażka Pustkowi. Rządź przez strach i przytłaczającą siłę, zdobywając punkty za nękanie polan.',
  howToWin: 'Zdobywaj punkty wieczorem poprzez Nękanie kniei — kontrolując polany, które zawierają twoje elementy i żadnych elementów wroga. Im więcej takich polan kontrolujesz, tym więcej punktów zdobywasz.',
  mechanics: 'Ta frakcja jest dowodzona przez pojedynczy, potężny pionek Władcy, który jest trudniejszy do usunięcia niż zwykły wojownik. Twoja ekonomia akcji jest determinowana przez twój Skarbiec przedmiotów; im więcej masz przedmiotów, tym więcej akcji możesz podjąć. Twoja wartość Dowództwa (1-4) określa liczbę standardowych akcji, podczas gdy wartość Waleczności (1-4) określa, ile razy możesz użyć potężnej akcji Natarcia Lordem. W każdej turze wybierasz nowy Nastrój, tymczasową zdolność, która kształtuje twoją strategię na daną turę (np. ignorowanie pierwszego trafienia w walce). Możesz również wydawać karty, aby Podburzać Tłumy na polanach, które następnie dokonają Najazdu na wszystkie wrogie budynki i żetony na początku twojej następnej tury. Twoje główne punktowanie pochodzi z Nękania, gdzie zdobywasz PZ za każdą polanę, którą kontrolujesz i która jest wolna od elementów wroga.',
  howToPlay: 'Władca Szczurów to hiperagresywna frakcja watażków. Twoim celem jest agresywne usuwanie wrogów i ustanawianie całkowitej dominacji nad polanami, aby zmaksymalizować swoje punktowanie z Nękania każdego wieczoru. Jesteś zagrożeniem, które rośnie w siłę; w miarę zdobywania kolejnych przedmiotów do swojego Skarbca, zyskujesz więcej akcji, stając się potężniejszym. Twój Lord jest kluczowym elementem, prowadzącym natarcie za pomocą akcji Natarcia, połączonego ruchu i walki, które mogą szybko przytłoczyć przeciwników.',
  strategy: 'Agresja to twoja jedyna droga. Twoja wczesna gra powinna skupiać się na grabieży przedmiotów z ruin lub od innych graczy, aby wzmocnić swój Skarbiec. Ostrożnie wybieraj swój Nastrój, aby kontrować przeciwników lub wzmacniać swoją przewagę. Akcja Podburzania jest potężna do osłabiania dobrze bronionych polan przed głównym atakiem. Twoim celem jest stworzenie dużego, spójnego terytorium wolnego od wrogów. Jesteś głównym celem, więc bądź przygotowany do obrony swojego Lorda i swoich Warowni, które są głównym źródłem rekrutacji.',
  specialAbilities: [
    { title: 'Lord', description: 'Twój pionek Lorda to specjalny wojownik, którego nie można usunąć poza walką. Wiele z twoich akcji koncentruje się na lokalizacji Lorda.' },
    { title: 'Pogarda dla Handlu', description: 'Gdy wytwarzasz przedmiot, możesz go wziąć LUB na stałe odrzucić, aby zdobyć jego wartość w punktach zwycięstwa.' },
    { title: 'Skarbiec', description: 'Zdobyte przedmioty umieszczasz w swoim Skarbcu. Liczba przedmiotów określa twoje Dowództwo (liczbę podstawowych akcji) i Waleczność (liczbę akcji Natarcia Lordem).' },
    { title: 'Szabrownicy', description: 'Atakując, możesz zadeklarować Szabrowanie. Jeśli to zrobisz, nie zadajesz trafień z rzutu, ale jeśli po walce kontrolujesz polanę, kradniesz jeden przedmiot z pola Wytworzonych Przedmiotów obrońcy.' },
  ],
  setup: [
    "Zbierz Pionki: Utwórz zapasy 20 wojowników, 1 lorda i 6 warowni.",
    "Garnizon: Umieść swojego lorda, 4 wojowników i 1 warownię na polanie w narożniku.",
    "Umieść Przedmioty: Jeśli jeszcze tego nie zrobiono, umieść cztery przedmioty 'R' pod ruinami.",
    "Wybierz Uparty: Umieść swoją kartę Nastroju 'Uparty' (ignorujesz pierwsze trafienie na polanie Lorda) na polu karty Nastroju.",
  ],
  turn: {
    [GamePhase.BIRDSONG]: {
      actions: [
        {
          title: 'Najazd',
          description: 'Żetony Szturmu pustoszą polany, usuwając wrogie elementy i grabiąc ruiny.',
          order: OrderType.ORDERED,
          details: ['Na każdej polanie z twoim żetonem Szturmu usuń wszystkie wrogie budynki i żetony (zdobywając PZ). Następnie, jeśli jest tam ruina, weź jeden przedmiot spod niej. Po rozpatrzeniu wszystkich szturmów, rzuć kością Szturmu, aby umieścić nowy żeton Szturmu na sąsiedniej polanie.']
        },
        {
          title: 'Werbunek',
          description: 'Wzmocnij swojego Lorda i warownie.',
          order: OrderType.ORDERED,
          details: ['Umieść na polanie Lorda wojowników równych twojej wartości Waleczności. Następnie umieść jednego wojownika na każdej polanie z twoją warownią.']
        },
        {
          title: 'Powołanie Lorda',
          description: 'Jeśli twojego Lorda nie ma na mapie, wojownik zostaje awansowany na Lorda.',
          order: OrderType.ORDERED,
          details: ['Jeśli twój Lord został usunięty w poprzedniej turze, musisz wybrać jednego ze swoich wojowników na mapie, aby awansował na nowego Lorda.']
        },
        {
          title: 'Wybór Nastroju',
          description: 'Zmień nastrój swojego Lorda, zyskując nową zdolność na tę turę.',
          order: OrderType.ORDERED,
          details: ['Musisz wybrać nową kartę nastroju z dostępnych opcji. Nie możesz wybrać nastroju, który pokazuje typ przedmiotu, który aktualnie posiadasz w Skarbcu. Nastrój daje potężną zdolność pasywną na tę turę (np. Ambitny, Radosny, Rozgoryczony).']
        },
      ]
    },
    [GamePhase.DAYLIGHT]: {
      actions: [
        {
          title: 'Przekuwanie',
          description: 'Aktywuj swoje Warownie, aby wytwarzać karty.',
          order: OrderType.ORDERED,
          details: ['Możesz użyć swoich Warowni jako punktów rzemiosła. Kolor warowni to kolor polany, na której się znajduje.']
        },
        {
          title: 'Rozkazuj Szczurom',
          description: 'Podejmij akcje do wartości swojego Dowództwa.',
          order: OrderType.ORDERED,
          details: ['Twoja wartość Dowództwa (1-4, na podstawie przedmiotów w Skarbcu) to liczba akcji, które możesz podjąć z poniższej listy. Możesz je wykonywać w dowolnej kolejności i powtarzać.']
        },
        {
          title: 'Ruch',
          description: 'Podejmij akcję ruchu.',
          order: OrderType.UNORDERED,
          details: ['Wykonaj standardowy ruch. Musisz kontrolować polanę początkową lub docelową.']
        },
        {
          title: 'Walka',
          description: 'Rozpocznij walkę.',
          order: OrderType.UNORDERED,
          details: ['Rozpocznij walkę na polanie, gdzie masz wojowników.']
        },
        {
          title: 'Budowa',
          description: 'Wydaj kartę, aby umieścić warownię.',
          order: OrderType.UNORDERED,
          details: ['Wydaj kartę, aby umieścić jedną ze swoich warowni na pasującej polanie, którą kontrolujesz.']
        },
        {
          title: 'Natarcie Lordem',
          description: 'Przemieść swojego Lorda z dowolną liczbą wojowników, a następnie możesz walczyć.',
          order: OrderType.ORDERED,
          details: [
              'Możesz wykonać tę akcję tyle razy, ile wynosi twoja wartość Waleczności. Przemieść swojego Lorda i dowolną liczbę wojowników z jego polany na sąsiednią polanę. Po ruchu możesz rozpocząć walkę na polanie docelowej.',
              'Ta potężna, połączona akcja ruchu i walki, zasilana przez twoją Waleczność, jest twoim głównym narzędziem podboju.'
          ]
        }
      ]
    },
    [GamePhase.EVENING]: {
      actions: [
        {
          title: 'Podburzanie',
          description: 'Wydaj karty, aby umieścić żetony Szturmu.',
          order: OrderType.ORDERED,
          details: ['Dowolną liczbę razy możesz wydać kartę, aby umieścić żeton Szturmu na pasującej polanie, na której masz wojownika, ale nie ma jeszcze żetonu Szturmu. To przygotowuje twoją akcję Najazdu na następną turę.']
        },
        {
          title: 'Nękanie',
          description: 'Zdobywaj punkty za każdą polanę, którą kontrolujesz bez obecności wrogów.',
          order: OrderType.ORDERED,
          details: ['To twój główny silnik punktowy. Policz liczbę polan, które kontrolujesz, na których znajduje się co najmniej jeden twój element i zero elementów wroga. Zdobądź PZ zgodnie z torem Nękania na swojej planszy. Im więcej kontrolujesz, tym więcej zdobywasz.']
        },
        {
          title: 'Dobierz i Odrzuć Karty',
          description: 'Dobierz jedną kartę, a następnie odrzuć do pięciu.',
          order: OrderType.ORDERED,
          details: ['Dobierz jedną kartę z talii. Jeśli masz więcej niż pięć kart na ręce, odrzuć nadmiarowe.']
        }
      ]
    }
  }
};
