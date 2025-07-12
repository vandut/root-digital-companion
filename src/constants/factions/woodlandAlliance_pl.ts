
import { Faction, FactionId, OrderType, FactionType, GamePhase } from '../types';

export const woodlandAlliance_pl: Faction = {
  id: FactionId.WOODLAND_ALLIANCE,
  name: 'Sojusz Leśnych Stworzeń',
  reach: 3,
  type: FactionType.INSURGENT,
  tagline: 'Rebelia. Zyskaj sympatię uciskanych stworzeń kniei i wznieć rewoltę.',
  howToWin: 'Zdobywaj punkty zwycięstwa, rozprzestrzeniając Sympatię na mapie. Im więcej żetonów Sympatyków na mapie, tym więcej punktów zdobywasz za umieszczenie kolejnego.',
  mechanics: 'Sojusz ma kilka unikalnych komponentów. Stronnicy to tajny stos kart, który budujesz, używając akcji Mobilizacji; te karty są walutą dla twoich najpotężniejszych akcji. Żetony Sympatyków to twój główny sposób na punktowanie i ustanawianie obecności na planszy. Wydajesz stronników, aby je umieścić, a koszt wzrasta w zależności od liczby wrogich wojowników na docelowej polanie. Bazy to twoje twierdze, ustanawiane przez potężną akcję Rewolty na polanie z sympatykami. Każda z trzech baz (Lisów, Królików, Myszy) pozwala na Szkolenie Oficerów. Oficerowie to twoje punkty akcji militarnych na Wieczór. Wreszcie, twoja zdolność Wojny Partyzanckiej odwraca wyniki rzutów w walce, gdy się bronisz, czyniąc cię groźnym przeciwnikiem w ataku.',
  howToPlay: 'Sojusz Leśnych Stworzeń działa w cieniu, budując oddolną rebelię. Zaczynasz bez żadnych elementów na mapie, skupiając się najpierw na gromadzeniu kart w swoim stosie Stronników. Następnie zaczynasz Rozprzestrzeniać Sympatyków, co daje punkty i przygotowuje grunt pod przyszłe akcje. Twoim wielkim ruchem jest Rewolta, która usuwa wszystkie wrogie elementy z polany i ustanawia stałą Bazę. Bazy pozwalają szkolić Oficerów, co z kolei umożliwia podejmowanie akcji militarnych, takich jak Ruch i Walka, wieczorem. Jesteś siłą partyzancką, silną w obronie i zdolną do nagłych, gwałtownych powstań.',
  strategy: 'Twoja wczesna faza gry polega na zdobywaniu stronników i rozprzestrzenianiu sympatyków na niepopularne polany (te z dużą liczbą wrogich elementów), aby wywołać "Bunt" i zdobyć darmowych stronników od innych graczy. Unikaj bezpośredniego konfliktu, dopóki nie będziesz gotowy. Ostrożnie wybieraj miejsca na rewoltę; dobrze umieszczona baza w centralnej, łatwej do obrony polanie może zabezpieczyć region i dać ci nowy front do szkolenia i operacji wojskowych. Rozmiar twojej ręki to twoja siła życiowa — więcej kart oznacza więcej stronników, więc chroń polany, na których możesz zyskać przewagę w kartach.',
  specialAbilities: [
      { title: 'Wojna Partyzancka', description: 'Jako obrońca w walce zadajesz trafienia równe wyższemu wynikowi, a atakujący zadaje trafienia równe niższemu. Odwraca to normalne role w walce.' },
      { title: 'Stronnicy', description: 'Utrzymujesz zakryty stos kart zwany Stronnikami. Są one wydawane na twoje akcje i nie liczą się do limitu ręki. Jeśli nie masz baz, twój stos stronników jest ograniczony do pięciu kart.' },
      { title: 'Bunt', description: 'Gdy inny gracz usunie jeden z twoich żetonów sympatyków lub przesunie wojowników na polanę z sympatykami, musi dać ci kartę z ręki pasującą do polany. Jeśli nie może, musi pokazać ci swoją rękę, a ty dobierasz kartę z talii. To kluczowe źródło stronników.' },
  ],
  setup: [
      "Zbierz Wojowników: Utwórz zapas 10 wojowników.",
      "Umieść Bazy: Umieść swoje 3 bazy w polu Baz na planszy. Każda odpowiada jednemu z kolorów.",
      "Wypełnij Tor Sympatyków: Umieść wszystkie 10 żetonów Sympatyków na swoim torze.",
      "Zyskaj Stronników: Dobierz 3 karty z talii i umieść je zakryte jako swoich pierwszych stronników.",
  ],
  turn: {
    [GamePhase.BIRDSONG]: {
      actions: [
        {
          title: 'Rewolta',
          description: 'Wydaj dwóch pasujących stronników, aby umieścić bazę, usuwając wszystkie wrogie elementy.',
          order: OrderType.ORDERED,
          details: [
            "Możesz wykonać tę akcję dowolną liczbę razy. Wybierz polanę z sympatykami pasującą do bazy w twoim pudełku. Wydaj dwie karty stronników tego samego koloru.",
            "Efekt: Usuń WSZYSTKIE wrogie elementy z tej polany (zdobywasz 1 PZ za każdy budynek/żeton). Następnie umieść pasującą bazę i dodaj wojowników równych liczbie polan z sympatykami tego koloru na mapie. Wreszcie, jeden z tych wojowników zostaje Oficerem.",
            "Wskazówka strategiczna: To twój ruch zmieniający grę. Użyj go, aby zniszczyć twierdzę przeciwnika i ustanowić własną stałą obecność."
          ]
        },
        {
          title: 'Zdobywanie Sympatyków',
          description: 'Wydaj stronników, aby umieścić żeton Sympatyków, zdobywając PZ.',
          order: OrderType.ORDERED,
          details: [
            "Możesz wykonać tę akcję dowolną liczbę razy. Wybierz polanę bez sympatyków, sąsiadującą z polaną z sympatykami (lub dowolną polanę, jeśli nie masz sympatyków na mapie).",
            "Wydaj stronników pasujących do koloru docelowej polany. Koszt (1, 2 lub 3) jest podany nad skrajnym lewym żetonem sympatyków na twoim torze. Umieść żeton i zdobądź ujawnione PZ.",
            "Prawo Wojny: Jeśli na docelowej polanie jest co najmniej 3 wojowników jednego gracza, musisz wydać jednego dodatkowego pasującego stronnika.",
            "Wskazówka strategiczna: To twoja podstawowa akcja punktująca. Łącz żetony sympatyków w łańcuchy na całej planszy, aby zmaksymalizować swój zasięg."
          ]
        }
      ]
    },
    [GamePhase.DAYLIGHT]: {
      actions: [
        {
          title: 'Podejmij akcje Dnia',
          description: 'Możesz podjąć dowolne z poniższych akcji w dowolnej kolejności i liczbie.',
          order: OrderType.ORDERED,
          details: [
              'W ciągu Dnia możesz wykonywać dowolną kombinację akcji Przekucia, Mobilizacji i Szkolenia. Nie ma limitu, ile razy możesz wykonać każdą z tych akcji, o ile spełniasz ich wymagania.'
          ]
        },
        {
          title: 'Przekucie',
          description: 'Użyj żetonów Sympatyków do wytwarzania kart.',
          order: OrderType.UNORDERED,
          details: [
            "Możesz aktywować swoje żetony Sympatyków do wytwarzania. Żeton Sympatyków dostarcza kolor polany, na której się znajduje. Każdy żeton może być użyty raz na turę.",
            "Wskazówka strategiczna: Nie zaniedbuj wytwarzania. Rozprzestrzenianie sympatyków buduje również potężną sieć rzemieślniczą."
          ]
        },
        {
          title: 'Mobilizacja',
          description: 'Dodaj kartę z ręki do stosu Stronników.',
          order: OrderType.UNORDERED,
          details: [
            "Weź dowolną kartę z ręki i umieść ją zakrytą na stosie Stronników. W ten sposób zasilasz swoje potężne akcje w fazie Świtu.",
            "Wskazówka strategiczna: Musisz stale zasilać swój stos stronników. Duża ręka kart przekłada się bezpośrednio na wielką następną turę."
          ]
        },
        {
          title: 'Szkolenie',
          description: 'Wydaj kartę pasującą do bazy, aby zyskać oficera.',
          order: OrderType.UNORDERED,
          details: [
            "Wydaj kartę z ręki pasującą do koloru bazy, którą masz na mapie. Przesuń jednego wojownika z zasobów do swojego pola Oficerów.",
            "Wskazówka strategiczna: Oficerowie są twoim wąskim gardłem dla akcji militarnych. Musisz zbudować bazę, a następnie szkolić oficerów, aby móc wykonywać akcje Ruchu, Walki, Werbunku lub Organizacji wieczorem."
          ]
        }
      ]
    },
    [GamePhase.EVENING]: {
      actions: [
        {
          title: 'Operacje Militarne',
          description: 'Podejmij akcje w liczbie równej liczbie twoich oficerów.',
          order: OrderType.ORDERED,
          details: [
            'Możesz wykonać liczbę akcji militarnych równą liczbie posiadanych oficerów. Twoje opcje to Ruch, Walka, Werbunek i Przegrupowanie. Możesz je podejmować w dowolnej kolejności i powtarzać.'
          ]
        },
         {
          title: 'Ruch',
          description: 'Podejmij jeden ruch.',
          order: OrderType.UNORDERED,
          details: ['Jako operację militarną możesz wykonać jedną akcję ruchu. Musisz kontrolować polanę początkową lub docelową.']
        },
        {
          title: 'Walka',
          description: 'Rozpocznij walkę.',
          order: OrderType.UNORDERED,
          details: ['Jako operację militarną możesz rozpocząć walkę na polanie, gdzie masz wojowników. Pamiętaj, że twoja zdolność Wojny Partyzanckiej ma zastosowanie, gdy się bronisz.']
        },
        {
          title: 'Werbunek',
          description: 'Umieść wojownika na polanie z Bazą.',
          order: OrderType.UNORDERED,
          details: ['Jako operację militarną możesz umieścić jednego wojownika z zasobów na dowolnej polanie zawierającej jedną z twoich Baz.']
        },
        {
          title: 'Przegrupowanie',
          description: "Zamień wojownika na żeton sympatyków, zdobywając punkty.",
          order: OrderType.UNORDERED,
          details: [
              "To kluczowa akcja militarna. Usuń jednego ze swoich wojowników z polany bez sympatyków, aby umieścić tam żeton sympatyków ze swojej planszy.",
              "Natychmiast zdobywasz ujawnione PZ. To świetny sposób na rozprzestrzenianie sympatyków bez wydawania stronników, ale kosztuje cię to wojownika i cenną akcję militarną."
          ]
        },
        {
          title: 'Dobierz i Odrzuć Karty',
          description: 'Dobierz jedną kartę plus bonusy, a następnie odrzuć do pięciu.',
          order: OrderType.ORDERED,
          details: [
            "Dobierz jedną kartę, plus jedną za każdy odkryty bonus na twoim torze Sympatyków. Odrzuć karty do limitu pięciu. Im więcej sympatyków rozprzestrzenisz, tym lepsze dobieranie kart."
          ]
        }
      ]
    }
  }
};
