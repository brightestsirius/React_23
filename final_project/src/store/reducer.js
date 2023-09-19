import { ACTION_COUNTRY_DELETE } from "./actions";

const INITIAL_STATE = {
  countries: [
    {
      name: {
        official: "Ukraine",
        common: "Україна",
      },
      currencies: {
        UAH: {
          name: "Ukrainian hryvnia",
          symbol: "₴",
        },
      },
      capital: ["Kyiv"],
      region: "Europe",
      subregion: "Eastern Europe",
      languages: {
        ukr: "Ukrainian",
      },
      flag: "🇺🇦",
      translations: {
        ara: {
          official: "أوكرانيا",
          common: "أوكرانيا",
        },
        bre: {
          official: "Ukraina",
          common: "Ukraina",
        },
        ces: {
          official: "Ukrajina",
          common: "Ukrajina",
        },
      },
    },
    {
      name: {
        official: "Kingdom of Norway",
        common: "Kongeriket Noreg",
      },
      currencies: {
        NOK: {
          name: "Norwegian krone",
          symbol: "kr",
        },
      },
      capital: ["Oslo"],
      region: "Europe",
      subregion: "Northern Europe",
      languages: {
        nno: "Norwegian Nynorsk",
        nob: "Norwegian Bokmål",
        smi: "Sami",
      },
      flag: "🇳🇴",
      translations: {
        fra: {
          official: "Royaume de Norvège",
          common: "Norvège",
        },
        hrv: {
          official: "Kraljevina Norveška",
          common: "Norveška",
        },
        hun: {
          official: "Norvég Királyság",
          common: "Norvégia",
        },
      },
    },
    {
      name: {
        official: "Canada",
        common: "Canada",
      },
      currencies: {
        CAD: {
          name: "Canadian dollar",
          symbol: "$",
        },
      },
      capital: ["Ottawa"],
      region: "Americas",
      subregion: "North America",
      languages: {
        eng: "English",
        fra: "French",
      },
      flag: "🇨🇦",
      translations: {
        ita: {
          official: "Canada",
          common: "Canada",
        },
        jpn: {
          official: "カナダ",
          common: "カナダ",
        },
        kor: {
          official: "캐나다",
          common: "캐나다",
        },
        nld: {
          official: "Canada",
          common: "Canada",
        },
      },
    },
    {
      name: {
        official: "Independent State of Papua New Guinea",
        common: "Papua Niu Gini",
      },
      currencies: {
        PGK: {
          name: "Papua New Guinean kina",
          symbol: "K",
        },
      },
      capital: ["Port Moresby"],
      region: "Oceania",
      subregion: "Melanesia",
      languages: {
        eng: "English",
        hmo: "Hiri Motu",
        tpi: "Tok Pisin",
      },
      flag: "🇵🇬",
      translations: {
        hun: {
          official: "Pápua Új-Guinea Független Állam",
          common: "Pápua Új-Guinea",
        },
        ita: {
          official: "Stato indipendente di Papua Nuova Guinea",
          common: "Papua Nuova Guinea",
        },
        por: {
          official: "Estado Independente da Papua Nova Guiné",
          common: "Papua Nova Guiné",
        },
        slk: {
          official: "Nezávislý štát Papua-Nová Guinea",
          common: "Papua-Nová Guinea",
        },
      },
    },
  ],
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ACTION_COUNTRY_DELETE:
      return {
        ...state,
        countries: state.countries.filter(
          (item) => item.name.official !== payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;
