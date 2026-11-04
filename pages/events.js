const pagesEvents = {
    'planer': {
      title: 'Planer',
      content: `
        Diese Seite enthält den Planer für Ereignisse in der 9b.
        <h2>Stundenplan</h2>
        Dies ist der Stundenplan der 9b:
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <td>Zeit</td>
                <td>Montag</td>
                <td>Dienstag</td>
                <td>Mittwoch</td>
                <td>Donnerstag</td>
                <td>Freitag</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1. Std. (07:50-08:35)</td>
                <td>Deutsch R006</td>
                <td>Mathe R313</td>
                <td>Rel/Eth R113/108</td>
                <td>Deutsch R307</td>
                <td>Sport</td>
              </tr>
              <tr>
                <td>2. Std. (08:35-09:20)</td>
                <td>L**ein R006</td>
                <td>Mathe R313</td>
                <td>Rel/Eth R113/108</td>
                <td>Deutsch R307</td>
                <td>Sport</td>
              </tr>
              <tr>
                <td>3. Std. (09:35-10:20)</td>
                <td>L**ein R006</td>
                <td>Deutsch R006</td>
                <td>Profilfach</td>
                <td>Profilfach</td>
                <td>Mathe R307</td>
              </tr>
              <tr>
                <td>4. Std. (10:20-11:05)</td>
                <td>Englisch R006</td>
                <td>Musik R006</td>
                <td>Profilfach</td>
                <td>Profilfach</td>
                <td>Englisch R307</td>
              </tr>
              <tr>
                <td>5. Std. (11:20-12:05)</td>
                <td>Geographie R209</td>
                <td>Englisch R304</td>
                <td>Mathe R313</td>
                <td>Geschichte R113</td>
                <td>Englisch R307</td>
              </tr>
              <tr>
                <td>6. Std. (12:10-12:55)</td>
                <td>Geographie R209</td>
                <td>Latein R304</td>
                <td>-</td>
                <td>Geschichte R113</td>
                <td>Profilfach</td>
              </tr>
              <tr>
                <td>7. Std. (13:10-13:55)</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>8. Std. (14:00-14:45)</td>
                <td>Biologie R118</td>
                <td>Hebräisch R303</td>
                <td>Chemie R214</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>9. Std. (14:50-15:35)</td>
                <td>Biologie R118</td>
                <td>Hebräisch R303</td>
                <td>Chemie R214</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>10. Std. (15:45-16:30)</td>
                <td>Gemeinschaftskunde R304</td>
                <td>-</td>
                <td>Physik R313</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>11. Std. (16:35-17:20)</td>
                <td>Gemeinschaftskunde R304</td>
                <td>-</td>
                <td>Physik R313</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
        Pausen befinden sich hier:
        <ul>
          <li>15-Minuten-Pause zwischen 2. + 3. Stunde (09:20-09:35)</li>
          <li>15-Minuten-Pause zwischen 4. + 5. Stunde (11:05-11:20)</li>
          <li>5-Minuten-Pause zwischen 5. + 6. Stunde (12:05-12:10)</li>
          <li>Mittagspause nach 6., während 7. und vor 8. Stunde (12:55-14:00)</li>
          <li>5-Minuten-Pause zwischen 8. + 9. Stunde (14:45-14:50)</li>
          <li>10-Minuten-Pause zwischen 9. + 10. Stunde (15:35-15:45)</li>
          <li>5-Minuten-Pause zwischen 10. + 11. Stunde (16:30-16:35)</li>
        </ul>
        <i>Notiz: In Halbjahr 2 wird Geographie durch Wirtschaft ersetzt.</i>
        <h2>Klassenarbeitsplan</h2>
        Dies ist der Klassenarbeitsplan der 9b für Halbjahr 1:
        <ul>
          <li>Montag, 12. Okt. 2026: Latein KA 1/4</li>
          <li>Freitag, 16. Okt. 2026: Englisch KA 1/4</li>
          <li>Dienstag, 20. Okt. 2026: Mathe KA 1/4</li>
          <li>Mittwoch, 21. Okt. 2026: Profilfach KA 1/4</li>
          <li>Donnerstag, 22. Okt. 2026: Deutsch KA 1/4</li>
          <li>Mittwoch, 11. Nov. 2026: Physik KA 1/2</li>
          <li>Montag, 16. Nov. 2026: Biologie KA 1/2</li>
          <li>Donnerstag, 19. Nov. 2026 (verschoben von 26.): Geschichte KA 1/2</li>
          <li>Mittwoch, 25. Nov. 2026: Religion/Ethik KA 1/2</li>
          <li>Freitag, 27. Nov. 2026: Englisch KA 2/4</li>
          <li>Mittwoch, 2. Dez. 2026: Profilfach KA 2/4</li>
          <li>Montag, 7. Dez. 2026: Latein KA 2/4</li>
          <li>Mittwoch, 9. Dez. 2026: Chemie KA 1/2</li>
          <li>Donnerstag, 10. Dez. 2026: Deutsch KA 2/4</li>
          <li>Montag, 14. Dez. 2026: Geographie KA 1/1</li>
          <li>Dienstag, 15. Dez. 2026: Musik KA 1/2</li>
          <li>Montag, 11. Jan. 2027: Gemeinschaftskunde KA 1/2</li>
          <li>Dienstag, 12. Jan. 2027: Mathe KA 2/4</li>
        </ul>
        Der Plan für Halbjahr 2 ist noch unbekannt.
        Was ist los mit diesem Dezember.
        <h2>Ereignisplaner</h2>
        Das ist der Ereignisplaner für Halbjahr 1:
        <ul>
          <li>Donnerstag, 15. Okt. 2026: Jugendhearing</li>
          <li>Freitag, 23. Okt. 2026: SMV-Sitzung 1</li>
          <li>Dienstag, 1. Dez. 2026: Prävention</li>
          <li>Freitag, 4. Dez. 2026: SMV-Sitzung 2</li>
          <li>Mittwoch, 16. Dez. - Freitag, 18. Dez. 2026: Proben Weihnachtskonzert</li>
          <li>Montag, 21. Dez. 2026: Projekte + Weihnachtskonzert</li>
          <li>Freitag, 15. Jan. 2027: SMV-Sitzung 3</li>
          <li>Mittwoch, 3. Feb. 2027: Halbjahresinfo</li>
          <li>Donnerstag, 4. Feb. 2027: Schmotziger</li>
        </ul>
        Der Plan für Halbjahr 2 ist noch unbekannt.
        Ja ich weiß auch nicht was 70% dieser Sachen sind
        <h2>Ferienplan</h2>
        Das ist der Ferienplan für das Schuljahr 2026/2027:
        <ul>
          <li>Sommerferien 2026: 30.7.2026 - 12.9.2026</li>
          <li>Herbstferien 2026: 26.10.2026 - 31.10.2026</li>
          <li>Weihnachtsferien 2026/2027: 23.12.2026 - 9.1.2027</li>
          <li>Fastnachtsferien 2027: 5.2.2027 - unbekannt</li>
          <li>Osterferien 2027: 25.3.2027 - 3.4.2027</li>
          <li>Pfingstferien 2027: 18.5.2027 - 29.5.2027</li>
          <li>Sommerferien 2027: 29.7.2027 - 11.9.2027</li>
        </ul>
        <blockquote>L**ein dumm :(</blockquote>
      `,
      categories: ['insider'],
      created: '2026-10-11',
      edited: '2026-11-04',
      related: [],
      weight: 1
    }
  };