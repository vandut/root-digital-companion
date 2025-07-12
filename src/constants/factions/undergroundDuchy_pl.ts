
import { Faction, FactionId, OrderType, FactionType, GamePhase } from '../types';

export const undergroundDuchy_pl: Faction = {
  id: FactionId.UNDERGROUND_DUCHY,
  name: 'Podziemne Księstwo',
  reach: 8,
  type: FactionType.MILITANT,
  tagline: 'Podziemni Suwereni. Rozszerzaj swoją norę i przekonuj ministrów do swojej sprawy, aby udowodnić swoje prawo do rządzenia.',
  howToWin: 'Zdobywaj punkty zwycięstwa, przekonując Ministrów do swojego parlamentu i używając ich potężnych, unikalnych akcji do zdobywania punktów.',
  mechanics: 'Księstwo ma kilka połączonych ze sobą mechanik. Nora to specjalna polana poza mapą, którą można zaatakować tylko wtedy, gdy przeciwnik kontroluje wszystkie trzy twoje żetony Tuneli na mapie. Werbujesz wojowników bezpośrednio do Nory. Parlament to twój główny silnik, składający się z dziewięciu kart Ministrów. Aby pozyskać ministra, musisz go Przekonać, odkrywając karty z ręki pasujące do kolorów polan, na których masz swoje elementy. Każdy minister zapewnia potężną, darmową akcję podczas fazy Parlamentu. Jednak ta moc wiąże się z Ceną Porażki: jeśli wróg usunie jeden z twoich budynków (Cytadelę lub Targ), musisz odrzucić swojego najwyżej postawionego przekonanego ministra i na stałe usunąć jego koronę z gry. Wreszcie, Tunele, umieszczane za pomocą akcji Podkop, pozwalają na rozmieszczanie wojowników z Nory w dowolnym miejscu na mapie, co daje ci niesamowitą mobilność.',
  howToPlay: 'Podziemne Księstwo to frakcja szlachty dążąca do zdobycia poparcia ludu poprzez środki polityczne i wojskowe. Twoja tura dzieli się na dwie fazy: Akumulację, w której podejmujesz dwie standardowe akcje, takie jak Ruch, Walka czy Budowa, oraz Parlament, w którym możesz przekonać nowego ministra, a następnie użyć akcji wszystkich swoich obecnych ministrów. Zaczynasz z silną pozycją na planszy i możesz szybko rozszerzać się na całej mapie, używając akcji Podkop do tworzenia tuneli dla niespodziewanych ataków. Twoim celem jest zbudowanie potężnego parlamentu, który zapewni ci kaskadę darmowych akcji w każdej turze.',
  strategy: 'Twoja strategia powinna być równowagą między ekspansją wojskową a wpływami politycznymi. Użyj akcji Podkop do tworzenia tuneli, poszerzając swój zasięg na całej mapie. Ułatwia to spełnienie wymagań co do kolorów, aby przekonać potężnych ministrów. Chroń swoje budynki za wszelką cenę! Jedna utracona budowla może kosztować cię ministra najwyższej rangi i koronę potrzebną do przekonania innego. Skup się na przekonywaniu ministrów, którzy uzupełniają twoją sytuację na planszy i strategię. Na przykład, jeśli kontrolujesz wiele polan jednego koloru, Bankier może być ogromnym źródłem punktów. Silna obecność wojskowa jest potrzebna do ochrony twoich cytadel i targów, aby uniknąć druzgocącej Ceny Porażki.',
  specialAbilities: [
    { title: 'Nora', description: 'Masz specjalną polanę poza mapą, Norę, do której tylko ty masz dostęp. Jest ona sąsiadująca ze wszystkimi polanami z żetonem Tunelu.' },
    { title: 'Cena Porażki', description: 'Gdy któryś z twoich budynków zostanie usunięty, musisz zwrócić swoją kartę przekonanego ministra najwyższej rangi do stosu nieprzekonanych i na stałe usunąć jego koronę z gry.' },
    { title: 'Tunele', description: 'Żetony Tuneli łączą Norę z polanami na mapie, umożliwiając niespodziewane rozmieszczenie.' },
  ],
  setup: [
    "Zbierz Wojowników i Tunele: Utwórz zapasy 20 wojowników i 3 żetonów Tuneli.",
    "Przygotuj Norę: Umieść planszę Nory obok mapy.",
    "Na Powierzchni: Umieść 2 wojowników i 1 tunel na polanie w narożniku. Umieść 2 wojowników na każdej sąsiedniej polanie (ale nie w Norze).",
    "Wypełnij Tory Budynków: Umieść swoje 3 cytadele i 3 targi na planszy frakcji.",
    "Zbierz Ministrów: Umieść 9 kart Ministrów odkrytych w stosie Nieprzekonanych Ministrów.",
    "Wypełnij Pola Koron: Umieść 9 koron (po 3 każdej rangi) na planszy frakcji.",
  ],
  turn: {
    [GamePhase.BIRDSONG]: {
      actions: [
        {
          title: 'Wzmocnij Norę',
          description: 'Umieść wojowników w Norze.',
          order: OrderType.ORDERED,
          details: ['Umieść jednego wojownika w Norze, plus jednego dodatkowego za każdego przekonanego ministra z ikoną wojownika. To twój główny silnik rekrutacyjny.']
        }
      ]
    },
    [GamePhase.DAYLIGHT]: {
      actions: [
        {
          title: 'Akumulacja',
          description: 'Możesz podjąć do dwóch akcji z poniższej listy.',
          order: OrderType.ORDERED,
          details: ['Wybierz do dwóch akcji spośród: Budowa, Werbunek, Ruch, Walka lub Podkop. Możesz je wykonywać w dowolnej kolejności i powtarzać tę samą akcję.']
        },
        {
          title: 'Budowa',
          description: 'Odkryj kartę, aby umieścić cytadelę lub targ.',
          order: OrderType.UNORDERED,
          details: ["Odkryj kartę z ręki, aby umieścić jeden ze swoich budynków (cytadelę lub targ) na pasującej polanie, którą kontrolujesz. Nie odrzucaj karty. Pamiętaj o Cenie Porażki, jeśli twoje budynki zostaną usunięte."]
        },
        {
          title: 'Werbunek',
          description: 'Umieść jednego wojownika w Norze.',
          order: OrderType.UNORDERED,
          details: ["Jako akcję Akumulacji możesz umieścić jednego wojownika ze swoich zasobów w Norze. Przygotowuje ich to do rozmieszczenia przez tunele."]
        },
         {
          title: 'Ruch',
          description: 'Podejmij ruch.',
          order: OrderType.UNORDERED,
          details: ["Jako akcję Akumulacji możesz wykonać jedną akcję ruchu. Musisz kontrolować polanę początkową lub docelową."]
        },
        {
          title: 'Walka',
          description: 'Rozpocznij walkę.',
          order: OrderType.UNORDERED,
          details: ["Jako akcję Akumulacji możesz rozpocząć walkę na polanie, gdzie masz wojowników."]
        },
        {
          title: 'Podkop',
          description: 'Wydaj kartę, aby umieścić tunel i przemieścić wojowników z Nory.',
          order: OrderType.UNORDERED,
          details: ['Wydaj kartę, aby umieścić tunel na pasującej polanie bez tunelu. Możesz następnie przemieścić do czterech wojowników z Nory na tę polanę. To twoje podstawowe narzędzie ekspansji.']
        },
        {
          title: 'Parlament',
          description: 'Użyj swoich przekonanych ministrów i spróbuj przekonać nowego.',
          order: OrderType.ORDERED,
          details: ['Po dwóch akcjach Akumulacji wchodzisz w fazę Parlamentu. Tutaj możesz najpierw przekonać jednego nowego ministra, a następnie możesz raz skorzystać z akcji każdego ze swoich obecnych ministrów.']
        },
        {
          title: 'Przekonaj Ministra',
          description: 'Odkryj karty, aby przekonać ministra, zdobywając punkty.',
          order: OrderType.UNORDERED,
          details: ['Wybierz nieprzekonanego ministra. Musisz mieć dostępną koronę odpowiedniej rangi. Odkryj karty z ręki pasujące do kolorów pokazanych na karcie ministra. Dla każdej odkrytej karty musisz mieć co najmniej jeden element na polanie tego koloru. Weź kartę ministra, umieść na niej koronę i zdobądź ujawnione PZ z planszy.']
        },
        {
          title: 'Użyj Akcji Ministrów',
          description: 'Możesz raz skorzystać z akcji każdego przekonanego ministra.',
          order: OrderType.UNORDERED,
          details: ['Każdy z twoich przekonanych ministrów daje unikalną, potężną akcję. Obejmują one od dodatkowych ruchów (Kwatermistrz) i walk (Kapitan) po odkrywanie kart do darmowej budowy (Sztygar) i zdobywanie punktów za karty (Bankier). Efektywne wykorzystanie tych akcji jest kluczem do zwycięstwa.']
        },
      ]
    },
    [GamePhase.EVENING]: {
      actions: [
        {
          title: 'Odrzuć i Zwróć Karty',
          description: 'Odrzuć odkryte karty ptaków, a pozostałe odkryte karty wróć na rękę.',
          order: OrderType.ORDERED,
          details: ['Wszelkie karty ptaków, które odkryłeś do Budowy lub Przekonania, są odrzucane do stosu Zagubionych Dusz. Wszystkie inne odkryte karty (lis, mysz, królik) wracają na twoją rękę.']
        },
        {
          title: 'Przekucie',
          description: 'Aktywuj swoje Cytadele i Targi, aby wytwarzać karty.',
          order: OrderType.ORDERED,
          details: ['Możesz użyć swoich budynków na mapie jako punktów rzemiosła. Zarówno Cytadele, jak i Targi mogą być używane do wytwarzania.']
        },
        {
          title: 'Dobierz i Odrzuć Karty',
          description: 'Dobierz jedną kartę plus bonusy od ministrów, a następnie w razie potrzeby odrzuć do pięciu.',
          order: OrderType.ORDERED,
          details: ['Dobierz jedną kartę, plus jedną za każdą ikonę karty widoczną na twoich przekonanych ministrach. Odrzuć karty do limitu pięciu.']
        }
      ]
    }
  }
};
