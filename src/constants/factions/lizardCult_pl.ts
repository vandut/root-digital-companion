
import { Faction, FactionId, OrderType, FactionType, GamePhase } from '../types';

export const lizardCult_pl: Faction = {
  id: FactionId.LIZARD_CULT,
  name: 'Jaszczurzy Kultyści',
  reach: 2,
  type: FactionType.MILITANT,
  tagline: 'Fanatyczni prozelici. Nawracaj wygnańców kniei i szerz swoją ewangelię poprzez przytłaczające przekonanie.',
  howToWin: 'Zdobywaj punkty zwycięstwa głównie poprzez wykonywanie rytuału Punktacji w fazie Dnia. Im więcej masz Ogrodów danego koloru, tym więcej punktów zdobywasz, wydając kartę tego koloru.',
  mechanics: 'Akcje Kultu są dyktowane przez stos kart odrzuconych, znany jako Zagubione Dusze. Najliczniejszy kolor w Zagubionych Duszach na początku twojej tury staje się kolorem Wygnańców. Ten kolor determinuje, gdzie możesz wykonywać potężne akcje Spisków, które są zasilane przez Akolitów. Zdobywasz Akolitów głównie dzięki swojej zdolności Zemsty, gdy twoi wojownicy są usuwani w obronie. Twoja faza Dnia polega na wykonywaniu Rytuałów poprzez odkrywanie kart z ręki. Za każdą odkrytą kartę otrzymujesz jedną akcję (Budowa, Werbunek lub Punktacja). Wydajesz kartę tylko wtedy, gdy wykonujesz rytuał Punktacji, co czyni zarządzanie ręką kluczowym. Twoje budynki, Ogrody, mają specjalną właściwość Pielgrzymów, która sprawia, że kontrolujesz każdą polanę, na której masz ogród, co jest ogromną przewagą w kontrolowaniu planszy.',
  howToPlay: 'Jaszczurzy Kultyści to frakcja, która kwitnie dzięki ostrożnemu planowaniu. Musisz uważnie obserwować, jakie karty odrzucasz, aby manipulować kolorem Wygnańców na swoją korzyść. Jesteś słaby w walce, więc wykorzystaj swoją zdolność "Zemsty" — tracenie obrońców daje ci akolitów do potężnych spisków. Twoja zdolność "Pielgrzymów" jest jedną z najsilniejszych w grze; jeden ogród pozwala ci kontrolować polanę. Użyj tego, aby blokować budowanie i ruch innych frakcji.',
  strategy: 'Twoim celem jest manipulowanie kolorem "Wygnańców", aby był to kolor, w którym ustanowiłeś swoją obecność i możesz budować ogrody, co pozwoli ci zdobywać duże punkty. We wczesnej fazie gry, starannie zarządzaj swoją ręką, aby odrzucać karty w kolorze, którego potrzebujesz, aby stał się kolorem Wygnańców. Twoim najpotężniejszym Spiskiem jest Uświęcenie, które pozwala zastąpić budynek wroga ogrodem, co jest ogromnym zwrotem w sytuacji na planszy i w punktacji. Twoje punktowanie jest powolne, ale może gwałtownie przyspieszyć, jeśli zbudujesz wiele ogrodów tego samego koloru i zdołasz uczynić ten kolor kolorem Wygnańców.',
  specialAbilities: [
    { title: 'Nienawiść do ptaków', description: 'Karty Ptaków nie są uniwersalne dla twoich Rytuałów. Kolor ptasi jest odrębnym kolorem, używanym do rytuału Ofiary.' },
    { title: 'Zemsta', description: 'Gdy jeden z twoich wojowników zostanie usunięty podczas obrony w walce, jest umieszczany w polu Akolitów zamiast w twoich zasobach. To zasila twoje spiski.' },
    { title: 'Pielgrzymi', description: 'Kontrolujesz każdą polanę, na której masz ogród, niezależnie od liczby wojowników i budynków. Zastępuje to normalne zasady kontroli.' },
    { title: 'Strach przed wiernymi', description: 'Jeśli jeden z twoich ogrodów zostanie usunięty, musisz odrzucić losową kartę z ręki.' },
    { title: 'Stos zagubionych dusz', description: 'Gdy wydasz lub odrzucisz kartę, trafia ona na stos Zagubionych Dusz zamiast na główny stos kart odrzuconych. Ten stos determinuje twój kolor Wygnańców.' },
  ],
  setup: [
    "Zbierz Wojowników: Utwórz zapas 25 wojowników.",
    "Umieść Wojowników i Ogród: Umieść 4 wojowników i 1 ogród na polanie w narożniku. Następnie umieść po 1 wojowniku na każdej sąsiedniej polanie.",
    "Wybierz Wygnańców: Umieść znacznik Wygnańców na dowolnym polu koloru. To twój początkowy kolor Wygnańców.",
    "Wypełnij Tory Ogrodów: Umieść pozostałe 14 ogrodów na swojej planszy frakcji.",
  ],
  turn: {
    [GamePhase.BIRDSONG]: {
      actions: [
        {
          title: 'Wyznacz wygnańców',
          description: 'Kolor z największą liczbą kart w stosie Zagubionych Dusz staje się nowym kolorem Wygnańców.',
          order: OrderType.ORDERED,
          details: [
            'Policz karty każdego koloru w stosie Zagubionych Dusz (ignoruj ptaki). Kolor, który pojawia się najczęściej, staje się nowym kolorem Wygnańców. Przesuń swój znacznik Wygnańców na ten kolor.',
            'Jeśli nowy kolor Wygnańców jest taki sam jak stary, odwróć znacznik na stronę "Znienawidzony". Spiski w Znienawidzonym kolorze kosztują jednego akolitę mniej. Jeśli jest remis w liczbie kart, znacznik nie przesuwa się.'
          ]
        },
        {
          title: 'Odrzuć zagubione dusze',
          description: 'Odrzuć wszystkie karty ze stosu Zagubionych Dusz na główny stos kart odrzuconych.',
          order: OrderType.ORDERED,
          details: ['To czyści stos na następną rundę. W tym momencie karty Dominacji stają się dostępne do wzięcia przez innych graczy.']
        },
        {
          title: 'Przeprowadź spiski',
          description: 'Wydaj akolitów, aby przeprowadzić akcje na polanach Wygnańców.',
          order: OrderType.ORDERED,
          details: [
              'Możesz wydać akolitów (wojowników z pola Akolitów), aby wykonać potężne akcje na polanach pasujących do obecnego koloru Wygnańców. Możesz wykonywać je dowolną liczbę razy, jeśli stać cię na koszt. Jeśli kolor jest Znienawidzony, koszt jest o jednego akolitę niższy.',
              'Krucjata (Koszt: 2): Rozpocznij walkę lub wykonaj ruch z polany Wygnańców.',
              'Nawrócenie (Koszt: 2): Zamień wrogiego wojownika na swojego na polanie Wygnańców.',
              'Uświęcenie (Koszt: 3): Zamień wrogi budynek na ogród na polanie Wygnańców. To twój najpotężniejszy spisek.'
          ]
        },
      ]
    },
    [GamePhase.DAYLIGHT]: {
      actions: [
        {
          title: 'Przeprowadź rytuały',
          description: 'Odkryj karty z ręki, aby podjąć jedną akcję za każdą odkrytą kartę.',
          order: OrderType.ORDERED,
          details: [
            "Odkryj dowolną liczbę kart z ręki. Za każdą odkrytą kartę możesz wykonać jeden rytuał (Budowa, Werbunek lub Punktacja). Nie wydajesz karty, chyba że wykonujesz rytuał Punktacji.",
            "Wskazówka strategiczna: Im więcej kart odkryjesz, tym więcej akcji możesz podjąć. Duży rozmiar ręki jest kluczowy dla potężnej fazy Dnia."
          ]
        },
        {
          title: 'Budowa',
          description: 'Za odkrytą kartę umieść pasujący ogród na polanie, którą kontrolujesz.',
          order: OrderType.UNORDERED,
          details: ['Odkryj kartę (np. kartę lisa). Na polanie lisów, którą kontrolujesz, możesz umieścić ogród lisów. Ta akcja nie zużywa karty. Pamiętaj, że dzięki Pielgrzymom posiadanie ogrodu oznacza, że kontrolujesz polanę.']
        },
        {
          title: 'Werbunek',
          description: 'Za odkrytą kartę umieść wojownika na pasującej polanie.',
          order: OrderType.UNORDERED,
          details: ['Odkryj kartę (np. kartę myszy). Na dowolnej polanie myszy możesz umieścić jednego wojownika z zasobów. Ta akcja również nie zużywa karty.']
        },
        {
          title: 'Punktacja',
          description: 'Wydaj odkrytą kartę, aby zdobyć punkty za pasujące ogrody.',
          order: OrderType.UNORDERED,
          details: ['Raz na turę dla każdego koloru, możesz wydać jedną ze swoich odkrytych kart (umieszczając ją w stosie Zagubionych Dusz). Zdobywasz punkty zwycięstwa w zależności od liczby posiadanych ogrodów tego koloru, zgodnie z planszą frakcji. To twój główny silnik punktowy.']
        },
        {
          title: 'Ofiara',
          description: 'Aby użyć karty ptaka do rytuału, musisz poświęcić wojownika.',
          order: OrderType.UNORDERED,
          details: ['Odkryj kartę ptaka. Weź jednego ze swoich wojowników z dowolnego miejsca na mapie i umieść go w polu Akolitów. Karta ptaka może być wtedy użyta do rytuału Budowy, Werbunku lub Punktacji dowolnego koloru (mysz, lis lub królik). To świetny sposób na zdobycie dodatkowych akolitów, jednocześnie wykonując potężną akcję.']
        },
      ]
    },
    [GamePhase.EVENING]: {
      actions: [
        {
          title: 'Zwróć odkryte karty',
          description: 'Zwróć na rękę wszystkie karty, które odkryłeś, ale nie wydałeś.',
          order: OrderType.ORDERED,
          details: ['Weź z powrotem na rękę wszystkie karty, które odkryłeś do rytuałów, ale nie wydałeś na rytuał Punktacji. Karty użyte do Punktacji pozostają w stosie Zagubionych Dusz.']
        },
        {
          title: 'Przekucie',
          description: 'Aktywuj ogrody na polanach Wygnańców, aby wytwarzać karty.',
          order: OrderType.ORDERED,
          details: ['Możesz wytwarzać karty z ręki, aktywując ogrody. Co ważne, możesz używać tylko ogrodów, które znajdują się na polanach pasujących do obecnego koloru Wygnańców.']
        },
        {
          title: 'Dobierz i odrzuć karty',
          description: 'Dobierz jedną kartę plus bonusy, a następnie w razie potrzeby odrzuć do pięciu.',
          order: OrderType.ORDERED,
          details: ['Dobierz jedną kartę, plus jedną za każdy odkryty bonus na twoim torze Ogrodów. Odrzuć karty do limitu pięciu.']
        }
      ]
    }
  }
};