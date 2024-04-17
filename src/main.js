import { createEodash } from "@eodash/eodash";
import tools from "./tools";
import basedOnWms from "./basedOnWms";
import container from "./container";

export default createEodash((_store) => ({
  id: "template-id",
  stacEndpoint:
    "https://fairicube.github.io/uc1-eodash-catalog/uc1_fairicube_catalog/catalog.json",
  routes: [],
  brand: {
    name: "FAIRiCUBE UC1 Dashboard",
    font: {
      family: "Roboto",
    },
    logo: 'logo_white.png',
    theme: {
      colors: {
        primary: "#0B4E73",
        secondary: "#0B4E73",
        background: "#fff",
        surface: "#eee",
      },
    },
  },
  template: {
    gap: 6,
    background: {
      type: "internal",
      id: Symbol(),
      widget: {
        name: "EodashMap",
      },
    },
    widgets: [
      {
        id: Symbol(),
        type: "internal",
        title: "itemfilter",
        layout: { x: 0, y: 0, w: 3, h: 12 },
        slidable: false,
        widget: {
          name: "EodashItemFilter",
        },
      },
      /*
      {
        id: Symbol(),
        type: "internal",
        title: "datepicker",
        layout: { x: 5, y: 11, w: 2, h: 1 },
        slidable: false,
        widget: {
          name: "EodashDatePicker",
          properties: {
            inline: true,
          },
        },
      },
      */
      basedOnWms,
    ],
  },
}));
