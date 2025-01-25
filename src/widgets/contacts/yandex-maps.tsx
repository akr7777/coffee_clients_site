import { useMemo } from "react";
import { Map, Placemark } from "react-yandex-maps";

import "./contacts.scss"

export const ContactsMap = () => {
  
  const mapState = useMemo(() => ({
    center: [55.596702, 37.723547],
    zoom: 17
  }), []);

  return (
    <Map defaultState={mapState} width="100%" height="400px">
      <Placemark
        geometry={[55.596702, 37.723547]}
        options={{
          preset: "islands#redIcon", // Красная метка (можно изменить)
        }}
        properties={{
          hintContent: "Hot&Cold",
          balloonContentHeader: "<b>Hot&Cold</b>", // Заголовок балуна
          balloonContent: "Лучшая кофейня на районе",
          // balloonContentBody: "Лучшая кофейня на районе", // Основной текст
          // balloonContentFooter: "Адрес: ул. Примерная, 12", // Дополнительная информация
        }}
      />
    </Map>
  )
}