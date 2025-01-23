import { YMaps } from "react-yandex-maps";
import { ContactsMap } from "./yandex-maps";
import { divIds } from "../../shared/consts";

import "./contacts.scss"

export const ContactsWidget = () => {
    console.log("ContactsWidget рендерится");
  return (
    <YMaps> {/* Перенесли YMaps сюда */}
      <div className="chapter" id={divIds.contacts}>
        <h3>Наши контакты</h3>

        <div className="contact-widget">
            <div>
                <h3>Кофейня "HOT & COLD"</h3>
                <div>
                    г.Москва
                </div>
            </div>
            <ContactsMap />
        </div>
      </div>
    </YMaps>
  );
};