
import { Faction, FactionId, OrderType, FactionType, GamePhase } from '../types';

export const corvidConspiracy_pl: Faction = {
  id: FactionId.CORVID_CONSPIRACY,
  name: 'Krucza Konspiracja',
  reach: 3,
  type: FactionType.INSURGENT,
  tagline: 'Tajemniczy Intryganci. Manipuluj knieją z cienia, zastawiając i odkrywając swoje zbrodnicze intrygi.',
  howToWin: 'Zdobywaj punkty zwycięstwa, odwracając swoje żetony intryg. Im więcej masz już odkrytych intryg, tym więcej punktów zdobywasz za odwrócenie kolejnej.',
  mechanics: 'Kruki kręcą się wokół żetonów Intryg. Masz cztery typy: Bomby (niszczą wszystkie wrogie elementy), Wnyki (blokują ruch wroga), Haracz (kradną karty wrogom) i Najazdy (sprowadzają wojowników po usunięciu). Umieszczasz te intrygi zakryte na mapie za pomocą akcji Intrygi. Aby punktować, musisz Odwrócić intrygę na polanie, gdzie masz wojownika, zdobywając 1 PZ za każdą odkrytą intrygę na mapie (wliczając tę właśnie odwróconą). Wrogowie mogą rzucić wyzwanie twoim zakrytym intrygom akcją Zdemaskowania. Jeśli odgadną typ intrygi, pokazując pasującą kartę, usuwają intrygę i zdobywają 1 PZ. Jeśli się pomylą, kradniesz ich kartę. To tworzy grę blefu o wysoką stawkę. Twoja zdolność Ukryte Kruki czyni cię również trudnym obrońcą, zadając dodatkowe obrażenia w walce, jeśli masz zakrytą intrygę na polanie.',
  howToPlay: 'Krucza Konspiracja to frakcja szpiegów i sabotażystów, skupiona na blefowaniu i dezinformacji. Twoja podstawowa pętla rozgrywki polega na umieszczaniu zakrytych żetonów Intryg na mapie, a następnie ich odwracaniu z obecnością wojownika, aby zdobywać punkty i wywoływać efekt. Punktowanie jest wykładnicze; im więcej intryg jest już odkrytych, tym więcej punktów daje następna. To tworzy napiętą grę w kotka i myszkę, w której próbujesz przechytrzyć przeciwników i chronić swoje cenne intrygi, aż będziesz mógł je ujawnić za ogromną liczbę punktów.',
  strategy: 'Cała twoja gra to gry umysłowe. Umieszczaj intrygi w miejscach, które są najbardziej groźne dla twoich przeciwników. Intryga Bomby na ich najcenniejszej polanie zmusza ich do ryzykowania Zdemaskowania lub wycofania się. Wnyki mogą zablokować kluczową ścieżkę. Ponieważ zdobywasz punkty za *każdą* odkrytą intrygę, gdy odwracasz nową, twoje punktowanie może eksplodować w końcowej fazie gry. Użyj swojej zdolności Zwinny, aby przemieszczać wojowników na pozycje do odwracania intryg. Twoja zdolność "Ukryte Kruki" sprawia, że wrogowie dwa razy się zastanowią, zanim cię zaatakują, ponieważ otrzymają dodatkowe trafienie, jeśli masz zakrytą intrygę na polanie. Staraj się oszukać przeciwników, aby zdemaskowali niewłaściwą intrygę i ukraść im karty.',
  specialAbilities: [
    { title: 'Zwinny', description: 'Możesz się poruszać niezależnie od tego, kto kontroluje polanę początkową lub docelową.' },
    { title: 'Ukryte Kruki', description: 'Jako obrońca w walce, jeśli masz zakryty żeton intrygi na polanie bitwy, zadajesz dodatkowe trafienie.' },
    { title: 'Zdemaskowanie', description: 'Wróg z elementami na polanie z twoją zakrytą intrygą może pokazać ci pasującą kartę, aby odgadnąć typ intrygi. Jeśli odgadnie, usuwa intrygę i zdobywa 1 PZ. Jeśli nie, zabierasz mu kartę.' },
    { title: 'Żetony Intryg', description: 'Masz cztery typy intryg: Bomba (usuwa wszystkie wrogie elementy), Wnyki (uniemożliwia ruch wroga), Haracz (kradnie karty wrogom) i Najazd (po usunięciu umieszcza wojowników).' },
  ],
  setup: [
    "Zbierz Wojowników i Intrygi: Utwórz zapasy 15 wojowników i 8 zakrytych żetonów intryg (po 2 każdego rodzaju).",
    "Rozproszenie: Umieść po 1 wojowniku na jednej wybranej polanie każdego koloru (łącznie 3 wojowników).",
  ],
  turn: {
    [GamePhase.BIRDSONG]: {
      actions: [
          {
              title: 'Przeprowadź Poranne Spiski',
              description: 'Możesz wykonywać te akcje w dowolnej kolejności i liczbie (z wyjątkiem Werbunku).',
              order: OrderType.ORDERED,
              details: [
                  'Możesz wykonywać akcje Przekucia i Realizacji Intryg dowolną liczbę razy. Werbunek możesz wykonać tylko raz na turę. Te akcje można wykonywać w dowolnej kolejności.'
              ]
          },
          {
              title: 'Przekucie',
              description: 'Aktywuj żetony intryg, aby wytwarzać karty.',
              order: OrderType.UNORDERED,
              details: ["Możesz użyć swoich żetonów intryg na mapie (zarówno odkrytych, jak i zakrytych) jako elementów do wytwarzania. Każda intryga dostarcza kolor swojej polany i może być aktywowana raz na turę."]
          },
          {
              title: 'Realizacja Intryg',
              description: 'Na polanie ze swoimi wojownikami odwróć intrygę odkrytą stroną do góry, aby zdobyć punkty i rozpatrzyć jej efekt.',
              order: OrderType.UNORDERED,
              details: ['Wybierz zakrytą intrygę na polanie, gdzie masz co najmniej jednego wojownika. Odwróć ją. Zdobądź 1 PZ za KAŻDĄ odkrytą intrygę na mapie (wliczając tę właśnie odwróconą). Następnie rozpatrz efekt odwrócenia intrygi, jeśli jest to Bomba lub Haracz.',
                        'Wskazówka strategiczna: To twój główny mechanizm punktowania. Wykładniczy charakter oznacza, że odwrócenie trzeciej i czwartej intrygi to ogromne skoki punktowe.']
          },
          {
              title: 'Werbunek',
              description: 'Raz na turę możesz wydać dowolną kartę, aby umieścić wojownika.',
              order: OrderType.UNORDERED,
              details: ['Wydaj kartę, aby umieścić jednego wojownika na każdej polanie pasującej do koloru karty. Karta ptaka pozwala wybrać jeden kolor do werbunku.']
          },
      ]
    },
    [GamePhase.DAYLIGHT]: {
      actions: [
        {
          title: 'Podejmij akcje Dnia',
          description: 'Możesz podjąć do trzech akcji z poniższej listy.',
          order: OrderType.ORDERED,
          details: ['Masz budżet trzech akcji. Możesz wybierać spośród Ruchu, Intrygi, Walki lub Podmianki, w dowolnej kolejności, i możesz powtarzać tę samą akcję.']
        },
        {
          title: 'Ruch',
          description: 'Podejmij ruch.',
          order: OrderType.UNORDERED,
          details: ["Podejmij jedną akcję ruchu. Pamiętaj, że twoja zdolność Zwinny pozwala ci poruszać się niezależnie od tego, kto kontroluje polany."]
        },
        {
          title: 'Walka',
          description: 'Rozpocznij walkę.',
          order: OrderType.UNORDERED,
          details: ["Rozpocznij walkę na polanie, gdzie masz wojowników. Pamiętaj o swojej zdolności Ukryte Kruki, jeśli masz tam zakrytą intrygę."]
        },
        {
          title: 'Intryga',
          description: 'Usuń wojownika z polany, aby umieścić tam zakrytą intrygę.',
          order: OrderType.UNORDERED,
          details: ['Wybierz polanę bez żetonu intrygi. Usuń jednego ze swoich wojowników z tej polany i umieść tam zakryty żeton intrygi ze swoich zasobów. W ten sposób zastawiasz pułapki.']
        },
        {
          title: 'Podmianka',
          description: 'Zamień miejscami dowolne dwa swoje żetony intryg na mapie.',
          order: OrderType.UNORDERED,
          details: ['Ta akcja pozwala na ogromny potencjał blefu. Zamień znaną intrygę z nieznaną lub natychmiast przenieś zagrożenie na drugą stronę mapy. Intrygi mogą być odkryte lub zakryte.']
        },
      ]
    },
    [GamePhase.EVENING]: {
      actions: [
        {
          title: 'Wysiłek',
          description: 'Możesz zrezygnować z dobierania kart, aby podjąć jedną dodatkową akcję Dnia.',
          order: OrderType.ORDERED,
          details: ['Elastyczna opcja. Jeśli brakuje ci jednej akcji do wykonania zwycięskiego ruchu, możesz poświęcić dobieranie kart, aby to zrobić.']
        },
        {
          title: 'Dobierz Karty',
          description: 'Dobierz jedną kartę, plus jedną za każdą odkrytą intrygę Haraczu.',
          order: OrderType.ORDERED,
          details: ['Dobierz jedną kartę. Następnie dobierz dodatkową kartę za każdą odkrytą intrygę Haraczu na mapie. Na koniec odrzuć karty do limitu pięciu.']
        }
      ]
    }
  }
};
