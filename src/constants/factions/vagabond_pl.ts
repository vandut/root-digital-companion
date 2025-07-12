
import { Faction, FactionId, OrderType, FactionType, GamePhase } from '../types';

export const vagabond_pl: Faction = {
  id: FactionId.VAGABOND,
  name: 'Włóczęga',
  reach: 5,
  type: FactionType.INSURGENT,
  tagline: 'Samotny Wędrowiec. Wytycz własną ścieżkę, wykonując misje, pomagając lub szkodząc innym frakcjom i eksplorując ruiny.',
  howToWin: 'Zdobywaj punkty zwycięstwa, poprawiając Relacje z innymi frakcjami, wykonując Misje, pomagając sojuszniczym frakcjom i usuwając wojowników wrogich frakcji (Niesława). Możesz także utworzyć Koalicję z innym graczem i dzielić z nim zwycięstwo.',
  mechanics: 'Włóczęga to pojedynczy pionek, którego akcje są determinowane przez ekwipunek Przedmiotów. Buty pozwalają ci się poruszać, Miecze walczyć, Pochodnie eksplorować ruiny w poszukiwaniu kolejnych przedmiotów, i tak dalej. Aby użyć przedmiotu, musisz go wyczerpać (odwrócić rewersem do góry). Na początku swojej tury odświeżasz podstawową liczbę przedmiotów, plus dodatkowe za każdą posiadaną pochodnię. Jeśli odniesiesz obrażenia w walce, musisz uszkodzić przedmioty, których nie można używać, dopóki nie zostaną naprawione w lesie lub za pomocą młotka. Kluczowym mechanizmem jest tor Relacji. Pomagając innej frakcji (dając im kartę pasującą do twojej polany), poprawiasz swoje relacje, zdobywasz punkty i zabierasz jeden z ich wytworzonych przedmiotów. Sojusznicza relacja pozwala ci poruszać się i walczyć razem z wojownikami tej frakcji. Z kolei atakowanie frakcji czyni ją Wrogiem, co pozwala ci zdobywać punkty za usuwanie jej elementów, ale utrudnia poruszanie się po jej terytorium.',
  howToPlay: 'Włóczęga to pojedynczy pionek grający w grę RPG pośrodku gry wojennej. Nie masz wojowników i nie możesz kontrolować polan. Cała twoja tura jest dyktowana przez twój ekwipunek Przedmiotów. Jesteś oportunistycznym agentem chaosu lub porządku, w zależności od twojego stylu gry. Możesz być pomocnym handlarzem, groźnym wojownikiem, oddanym poszukiwaczem przygód lub mieszanką wszystkich trzech. Twoja droga do zwycięstwa jest elastyczna, polegająca na zdolności do adaptacji do zmieniającego się stanu kniei i twoich relacji z jej mieszkańcami.',
  strategy: 'Wybór postaci na początku gry mocno wpłynie na twoją strategię. Twoja wczesna gra powinna skupić się na eksploracji ruin, aby zbudować kolekcję przedmiotów. Nie bój się odnosić niewielkich obrażeń; zakończenie tury w lesie pozwala na darmową naprawę wszystkich twoich przedmiotów. Pomoc jest twoim najbardziej niezawodnym źródłem punktów i przedmiotów. Celuj w gracza, który dużo wytwarza, aby zdobyć dobre przedmioty. Utworzenie Koalicji to potężny ruch w końcowej fazie gry; jeśli zostajesz w tyle, znajdź gracza na drugim miejscu, który ma trudności, i zaoferuj mu sojusz, aby zapewnić sobie wspólne zwycięstwo.',
  specialAbilities: [
    { title: 'Samotny Wędrowiec', description: 'Twój pionek nie jest wojownikiem. Nie można go usunąć z mapy (zamiast tego odnosi obrażenia w postaci uszkodzonych przedmiotów) i nie może kontrolować polan.' },
    { title: 'Zwinny', description: 'Możesz się poruszać niezależnie od tego, kto kontroluje polanę początkową lub docelową. Ignorujesz normalne zasady ruchu.' },
    { title: 'Przedmioty', description: 'Twoje zdolności zależą od zdobytych przedmiotów. Wyczerpujesz przedmioty (odwracasz je rewersem do góry), aby podjąć akcje. Uszkodzonych przedmiotów nie można używać, dopóki nie zostaną naprawione.' },
    { title: 'Relacje', description: 'Śledzisz swoje relacje z każdą frakcją. Mogą one być Wrogie, Obojętne, Przyjazne lub Sojusznicze. Pomoc poprawia relacje, a atakowanie je pogarsza. Relacje determinują punktowanie i specjalne akcje z daną frakcją.' },
  ],
  setup: [
    "Wybierz Postać: Wybierz kartę Postaci Włóczęgi (np. Złodziej, Majsterkowicz, Strażnik).",
    "Umieść Pionek: Umieść swój pionek w dowolnym lesie na mapie.",
    "Przygotuj Misje: Potasuj talię Misji, dobierz 3 karty i umieść je odkryte.",
    "Rozłóż Ruiny i Przedmioty: Umieść przedmioty oznaczone 'R' pod żetonami Ruin, a następnie weź startowe przedmioty dla swojej postaci oznaczone 'S'.",
  ],
  turn: {
    [GamePhase.BIRDSONG]: {
      actions: [
        {
          title: 'Przygotowanie',
          description: 'Odwróć trzy wyczerpane przedmioty odkryte, plus dwa za każdą pochodnię.',
          order: OrderType.ORDERED,
          details: [
            "Na początku tury przygotowujesz swoje przedmioty. Najpierw odwróć trzy swoje wyczerpane (zakryte) przedmioty. Następnie, za każdą odkrytą pochodnię, którą posiadasz, odwróć dwa kolejne wyczerpane przedmioty.",
            "Wskazówka strategiczna: Pochodnie są niezwykle cenne, ponieważ bezpośrednio zwiększają liczbę akcji, które możesz wykonać w każdej turze. Wytworzenie lub znalezienie drugiej pochodni na wczesnym etapie gry to ogromne wzmocnienie."
          ]
        },
        {
          title: 'Zakradanie się',
          description: 'Przemieść się na sąsiednią polanę lub do lasu bez wyczerpywania przedmiotów.',
          order: OrderType.ORDERED,
          details: [
            "Możesz przemieścić swój pionek na sąsiednią polanę lub do lasu. Ten pojedynczy ruch jest darmowy i nie wymaga wyczerpywania butów.",
            "Ten ruch ignoruje również kontrolę oraz wszelkie efekty uniemożliwiające ruch (jak pułapka Kruczej Konspiracji). Jest idealny do pozycjonowania się na Dzień bez wydawania zasobów."
          ]
        }
      ]
    },
    [GamePhase.DAYLIGHT]: {
      actions: [
        {
          title: 'Podejmij akcje Dnia',
          description: 'Wyczerpuj przedmioty, aby podejmować poniższe akcje w dowolnej kolejności i liczbie.',
          order: OrderType.ORDERED,
          details: [
            'Twoja tura polega na wyczerpywaniu odkrytych przedmiotów. Każda akcja kosztuje jeden lub więcej przedmiotów. Możesz wykonywać te akcje w dowolnej kolejności, tyle razy, ile masz przedmiotów do wyczerpania.',
            'Przykład: Jeśli masz dwa odkryte miecze, możesz zainicjować dwie walki.'
          ]
        },
        {
          title: 'Ruch',
          description: 'Wyczerp but, aby przemieścić się na sąsiednią polanę.',
          order: OrderType.UNORDERED,
          details: [
            "Wyczerp jeden but. Przemieść się na sąsiednią polanę (nie do lasu).",
            "Terytorium Wroga: Jeśli przemieszczasz się na polanę z wojownikami wrogiej frakcji, musisz wyczerpać jeden dodatkowy but (łącznie dwa za ten ruch)."
          ]
        },
        {
          title: 'Walka',
          description: 'Wyczerp miecz, aby rozpocząć walkę.',
          order: OrderType.UNORDERED,
          details: [
            "Wyczerp jeden miecz. Rozpocznij walkę na swojej obecnej polanie. Twoja maksymalna liczba trafień z rzutu jest równa liczbie twoich nieuszkodzonych mieczy.",
            "Atakowanie z Sojusznikiem: Jeśli jesteś w sojuszu z frakcją i znajdujesz się na polanie z ich wojownikami, możesz użyć ich wojowników do ataku zamiast swojego pionka. To bardzo potężne.",
            "Odniesienie Obrażeń: Gdy odnosisz obrażenia, musisz uszkodzić jeden ze swoich przedmiotów za każde trafienie. Jeśli nie masz nieuszkodzonych przedmiotów, ignorujesz dalsze trafienia."
          ]
        },
        {
          title: 'Eksploracja',
          description: 'Wyczerp pochodnię, aby wziąć przedmiot z ruin.',
          order: OrderType.UNORDERED,
          details: [
            "Wyczerp jedną pochodnię. Jeśli jesteś na polanie z żetonem ruin, weź jeden przedmiot spod niego i dodaj go do swojego plecaka. Zdobywasz jeden punkt zwycięstwa. Jeśli był to ostatni przedmiot, usuń ruinę z mapy.",
            "Wskazówka strategiczna: Eksploracja to główny sposób na zdobywanie nowych przedmiotów na początku gry."
          ]
        },
        {
          title: 'Pomoc',
          description: 'Wyczerp przedmiot, aby dać kartę, poprawić relacje i wziąć przedmiot.',
          order: OrderType.UNORDERED,
          details: [
            "Wyczerp dowolny przedmiot. Wybierz gracza na swojej polanie i daj mu kartę z ręki pasującą do koloru polany. To poprawia twoje relacje z nim, dając ci 1 lub 2 PZ.",
            "Następnie możesz wziąć jeden dowolny przedmiot z pola Wytworzonych Przedmiotów tego gracza. Pomoc jest jedynym sposobem na zostanie Sojusznikiem i fantastycznym źródłem zarówno punktów, jak i przedmiotów.",
            "Wskazówka strategiczna: Pomagaj graczom, którzy wytworzyli przedmioty, których potrzebujesz. Worki, Buty i Miecze to doskonałe wczesne cele."
          ]
        },
        {
          title: 'Misja',
          description: 'Na pasującej polanie wyczerp przedmioty, aby ukończyć misję.',
          order: OrderType.UNORDERED,
          details: [
            "Jeśli twój pionek jest na polanie pasującej do koloru odkrytej karty misji, możesz wyczerpać dwa przedmioty pokazane na karcie, aby ją ukończyć.",
            "Nagroda: Wybierz jedno: dobierz dwie karty z talii LUB zdobądź 1 PZ za każdą ukończoną misję tego samego koloru (wliczając tę właśnie ukończoną)."
          ]
        },
        {
          title: 'Cios',
          description: 'Wyczerp kuszę, aby usunąć jednego wrogiego wojownika.',
          order: OrderType.UNORDERED,
          details: [
            "Wyczerp jedną kuszę. Usuń jednego wojownika innego gracza ze swojej polany. Jeśli nie ma wojowników, możesz zamiast tego usunąć jeden z jego budynków lub żetonów.",
            "Wskazówka strategiczna: To celowy, bezryzykowny atak, który uczyni frakcję Wrogiem. Użyj go, aby zlikwidować kluczowe elementy, takie jak tartak lub koszary."
          ]
        },
        {
          title: 'Naprawa',
          description: 'Wyczerp młotek, aby naprawić jeden uszkodzony przedmiot.',
          order: OrderType.UNORDERED,
          details: [
            "Wyczerp jeden młotek. Przesuń jeden przedmiot z pola Uszkodzonych do swojego Plecaka. Jest on teraz naprawiony i gotowy do użycia.",
            "Wskazówka strategiczna: Niezbędne dla każdego Włóczęgi, który wdaje się w bójki. Jeden młotek może utrzymać twój silnik w ruchu."
          ]
        },
        {
          title: 'Akcja Specjalna',
          description: 'Wyczerp przedmiot, aby użyć unikalnej zdolności swojej postaci.',
          order: OrderType.UNORDERED,
          details: [
              "Każda postać Włóczęgi ma unikalną akcję specjalną wymienioną na swojej karcie, która kosztuje wyczerpanie określonego przedmiotu. Na przykład Złodziej może wyczerpać pochodnię, aby ukraść losową kartę graczowi na swojej polanie."
          ]
        },
      ]
    },
    [GamePhase.EVENING]: {
      actions: [
        {
          title: 'Wieczorny Odpoczynek',
          description: 'Jeśli jesteś w lesie, napraw wszystkie swoje uszkodzone przedmioty za darmo.',
          order: OrderType.ORDERED,
          details: [
            "Jeśli twój pionek jest w lesie na początku twojego Wieczoru, przesuń wszystkie przedmioty z pola Uszkodzonych do Plecaka. Są one naprawione i odwrócone odkrytą stroną do góry.",
            "Wskazówka strategiczna: To niezwykle potężna zdolność. Jeśli odniesiesz dużo obrażeń, zakończenie tury w lesie to bezpieczny i skuteczny sposób na odzyskanie sił."
          ]
        },
        {
          title: 'Dobierz Karty',
          description: 'Dobierz jedną kartę, plus jedną za każdą posiadaną monetę.',
          order: OrderType.ORDERED,
          details: [
            "Dobierz jedną kartę, plus jedną dodatkową za każdą monetę, którą posiadasz. Monety są kluczem do przewagi w kartach, co można zamienić na przedmioty i PZ za pomocą akcji Pomocy."
          ]
        },
        {
          title: 'Sprawdź Limit Przedmiotów i Odrzuć Karty',
          description: 'Odrzuć karty do limitu 5, a następnie odrzuć przedmioty, jeśli przekraczasz swój limit.',
          order: OrderType.ORDERED,
          details: [
            "Najpierw odrzuć karty z ręki, aż zostanie ci pięć. Następnie sprawdź swój limit przedmiotów. Twój podstawowy limit to sześć, plus dwa za każdy posiadany worek.",
            "Jeśli liczba przedmiotów w twoim Plecaku i na polu Uszkodzonych przekracza twój limit, musisz na stałe usunąć przedmioty do wyboru, aż osiągniesz limit. Worki są kluczowe dla strategii opartej na dużej liczbie przedmiotów."
          ]
        }
      ]
    }
  }
};
