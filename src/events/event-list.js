import React, {Component} from 'react';
import _ from 'lodash'
import axios from 'axios'
import moment from 'moment'


class EventList extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.clickEvent = this.clickEvent.bind(this);
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    state = {
        matches: [],
        hideStats: false,
        isoCountries2: [
            {
                name: "Afghanistan",
                alpha2: "AF",
                alpha3: "AFG",
                numeric: "004"
            },
            {
                name: "Åland Islands",
                alpha2: "AX",
                alpha3: "ALA",
                numeric: "248",
                altName: "Aland Islands"
            },
            {
                name: "Albania",
                alpha2: "AL",
                alpha3: "ALB",
                numeric: "008"
            },
            {
                name: "Algeria",
                alpha2: "DZ",
                alpha3: "DZA",
                numeric: "012"
            },
            {
                name: "American Samoa",
                alpha2: "AS",
                alpha3: "ASM",
                numeric: "016"
            },
            {
                name: "Andorra",
                alpha2: "AD",
                alpha3: "AND",
                numeric: "020"
            },
            {
                name: "Angola",
                alpha2: "AO",
                alpha3: "AGO",
                numeric: "024"
            },
            {
                name: "Anguilla",
                alpha2: "AI",
                alpha3: "AIA",
                numeric: "660"
            },
            {
                name: "Antarctica",
                alpha2: "AQ",
                alpha3: "ATA",
                numeric: "010"
            },
            {
                name: "Antigua and Barbuda",
                alpha2: "AG",
                alpha3: "ATG",
                numeric: "028"
            },
            {
                name: "Argentina",
                alpha2: "AR",
                alpha3: "ARG",
                numeric: "032"
            },
            {
                name: "Armenia",
                alpha2: "AM",
                alpha3: "ARM",
                numeric: "051"
            },
            {
                name: "Aruba",
                alpha2: "AW",
                alpha3: "ABW",
                numeric: "533"
            },
            {
                name: "Australia",
                alpha2: "AU",
                alpha3: "AUS",
                numeric: "036"
            },
            {
                name: "Austria",
                alpha2: "AT",
                alpha3: "AUT",
                numeric: "040"
            },
            {
                name: "Azerbaijan",
                alpha2: "AZ",
                alpha3: "AZE",
                numeric: "031"
            },
            {
                name: "Bahamas (the)",
                alpha2: "BS",
                alpha3: "BHS",
                numeric: "044",
                altName: "Bahamas"
            },
            {
                name: "Bahrain",
                alpha2: "BH",
                alpha3: "BHR",
                numeric: "048"
            },
            {
                name: "Bangladesh",
                alpha2: "BD",
                alpha3: "BGD",
                numeric: "050"
            },
            {
                name: "Barbados",
                alpha2: "BB",
                alpha3: "BRB",
                numeric: "052"
            },
            {
                name: "Belarus",
                alpha2: "BY",
                alpha3: "BLR",
                numeric: "112"
            },
            {
                name: "Belgium",
                alpha2: "BE",
                alpha3: "BEL",
                numeric: "056"
            },
            {
                name: "Belize",
                alpha2: "BZ",
                alpha3: "BLZ",
                numeric: "084"
            },
            {
                name: "Benin",
                alpha2: "BJ",
                alpha3: "BEN",
                numeric: "204"
            },
            {
                name: "Bermuda",
                alpha2: "BM",
                alpha3: "BMU",
                numeric: "060"
            },
            {
                name: "Bhutan",
                alpha2: "BT",
                alpha3: "BTN",
                numeric: "064"
            },
            {
                name: "Bolivia (Plurinational State of)",
                alpha2: "BO",
                alpha3: "BOL",
                numeric: "068",
                altName: "Bolivia"
            },
            {
                name: "Bonaire, Sint Eustatius and Saba",
                alpha2: "BQ",
                alpha3: "BES",
                numeric: "535"
            },
            {
                name: "Bosnia and Herzegovina",
                alpha2: "BA",
                alpha3: "BIH",
                numeric: "070"
            },
            {
                name: "Botswana",
                alpha2: "BW",
                alpha3: "BWA",
                numeric: "072"
            },
            {
                name: "Bouvet Island",
                alpha2: "BV",
                alpha3: "BVT",
                numeric: "074"
            },
            {
                name: "Brazil",
                alpha2: "BR",
                alpha3: "BRA",
                numeric: "076"
            },
            {
                name: "British Indian Ocean Territory (the)",
                alpha2: "IO",
                alpha3: "IOT",
                numeric: "086",
                altName: "British Indian Ocean Territory"
            },
            {
                name: "Brunei Darussalam",
                alpha2: "BN",
                alpha3: "BRN",
                numeric: "096",
                shortName: "Brunei"
            },
            {
                name: "Bulgaria",
                alpha2: "BG",
                alpha3: "BGR",
                numeric: "100"
            },
            {
                name: "Burkina Faso",
                alpha2: "BF",
                alpha3: "BFA",
                numeric: "854"
            },
            {
                name: "Burundi",
                alpha2: "BI",
                alpha3: "BDI",
                numeric: "108"
            },
            {
                name: "Cabo Verde",
                alpha2: "CV",
                alpha3: "CPV",
                numeric: "132",
                altName: "Cape Verde"
            },
            {
                name: "Cambodia",
                alpha2: "KH",
                alpha3: "KHM",
                numeric: "116"
            },
            {
                name: "Cameroon",
                alpha2: "CM",
                alpha3: "CMR",
                numeric: "120"
            },
            {
                name: "Canada",
                alpha2: "CA",
                alpha3: "CAN",
                numeric: "124"
            },
            {
                name: "Cayman Islands (the)",
                alpha2: "KY",
                alpha3: "CYM",
                numeric: "136",
                altName: "Cayman Islands"
            },
            {
                name: "Central African Republic (the)",
                alpha2: "CF",
                alpha3: "CAF",
                numeric: "140",
                altName: "Central African Republic"
            },
            {
                name: "Chad",
                alpha2: "TD",
                alpha3: "TCD",
                numeric: "148"
            },
            {
                name: "Chile",
                alpha2: "CL",
                alpha3: "CHL",
                numeric: "152"
            },
            {
                name: "China",
                alpha2: "CN",
                alpha3: "CHN",
                numeric: "156"
            },
            {
                name: "Christmas Island",
                alpha2: "CX",
                alpha3: "CXR",
                numeric: "162"
            },
            {
                name: "Cocos (Keeling) Islands (the)",
                alpha2: "CC",
                alpha3: "CCK",
                numeric: "166",
                altName: "Cocos (Keeling) Islands",
                shortName: "Cocos Islands"
            },
            {
                name: "Colombia",
                alpha2: "CO",
                alpha3: "COL",
                numeric: "170"
            },
            {
                name: "Comoros (the)",
                alpha2: "KM",
                alpha3: "COM",
                numeric: "174",
                altName: "Comoros"
            },
            {
                name: "Congo (the Democratic Republic of the)",
                alpha2: "CD",
                alpha3: "COD",
                numeric: "180",
                altName: "Congo, (Kinshasa)",
                shortName: "Democratic Republic of the Congo"
            },
            {
                name: "Congo (the)",
                alpha2: "CG",
                alpha3: "COG",
                numeric: "178",
                altName: "Congo (Brazzaville)",
                shortName: "Republic of the Congo"
            },
            {
                name: "Cook Islands (the)",
                alpha2: "CK",
                alpha3: "COK",
                numeric: "184",
                altName: "Cook Islands"
            },
            {
                name: "Costa Rica",
                alpha2: "CR",
                alpha3: "CRI",
                numeric: "188"
            },
            {
                name: "Côte d'Ivoire",
                alpha2: "CI",
                alpha3: "CIV",
                numeric: "384",
                shortName: "Ivory Coast"
            },
            {
                name: "Croatia",
                alpha2: "HR",
                alpha3: "HRV",
                numeric: "191"
            },
            {
                name: "Cuba",
                alpha2: "CU",
                alpha3: "CUB",
                numeric: "192"
            },
            {
                name: "Curaçao",
                alpha2: "CW",
                alpha3: "CUW",
                numeric: "531",
                shortName: "Curacao"
            },
            {
                name: "Cyprus",
                alpha2: "CY",
                alpha3: "CYP",
                numeric: "196"
            },
            {
                name: "Czechia",
                alpha2: "CZ",
                alpha3: "CZE",
                numeric: "203",
                altName: "Czech Republic"
            },
            {
                name: "Denmark",
                alpha2: "DK",
                alpha3: "DNK",
                numeric: "208"
            },
            {
                name: "Djibouti",
                alpha2: "DJ",
                alpha3: "DJI",
                numeric: "262"
            },
            {
                name: "Dominica",
                alpha2: "DM",
                alpha3: "DMA",
                numeric: "212"
            },
            {
                name: "Dominican Republic (the)",
                alpha2: "DO",
                alpha3: "DOM",
                numeric: "214",
                altName: "Dominican Republic"
            },
            {
                name: "Ecuador",
                alpha2: "EC",
                alpha3: "ECU",
                numeric: "218"
            },
            {
                name: "Egypt",
                alpha2: "EG",
                alpha3: "EGY",
                numeric: "818"
            },
            {
                name: "El Salvador",
                alpha2: "SV",
                alpha3: "SLV",
                numeric: "222"
            },
            {
                name: "Equatorial Guinea",
                alpha2: "GQ",
                alpha3: "GNQ",
                numeric: "226"
            },
            {
                name: "Eritrea",
                alpha2: "ER",
                alpha3: "ERI",
                numeric: "232"
            },
            {
                name: "Estonia",
                alpha2: "EE",
                alpha3: "EST",
                numeric: "233"
            },
            {
                name: "Ethiopia",
                alpha2: "ET",
                alpha3: "ETH",
                numeric: "231"
            },
            {
                name: "Falkland Islands (the) [Malvinas]",
                alpha2: "FK",
                alpha3: "FLK",
                numeric: "238",
                altName: "Falkland Islands (Malvinas)",
                shortName: "Falkland Islands"
            },
            {
                name: "Faroe Islands (the)",
                alpha2: "FO",
                alpha3: "FRO",
                numeric: "234",
                altName: "Faroe Islands"
            },
            {
                name: "Fiji",
                alpha2: "FJ",
                alpha3: "FJI",
                numeric: "242"
            },
            {
                name: "Finland",
                alpha2: "FI",
                alpha3: "FIN",
                numeric: "246"
            },
            {
                name: "France",
                alpha2: "FR",
                alpha3: "FRA",
                numeric: "250"
            },
            {
                name: "French Guiana",
                alpha2: "GF",
                alpha3: "GUF",
                numeric: "254"
            },
            {
                name: "French Polynesia",
                alpha2: "PF",
                alpha3: "PYF",
                numeric: "258"
            },
            {
                name: "French Southern Territories (the)",
                alpha2: "TF",
                alpha3: "ATF",
                numeric: "260",
                altName: "French Southern Territories"
            },
            {
                name: "Gabon",
                alpha2: "GA",
                alpha3: "GAB",
                numeric: "266"
            },
            {
                name: "Gambia (the)",
                alpha2: "GM",
                alpha3: "GMB",
                numeric: "270",
                altName: "Gambia"
            },
            {
                name: "Georgia",
                alpha2: "GE",
                alpha3: "GEO",
                numeric: "268"
            },
            {
                name: "Germany",
                alpha2: "DE",
                alpha3: "DEU",
                numeric: "276"
            },
            {
                name: "Ghana",
                alpha2: "GH",
                alpha3: "GHA",
                numeric: "288"
            },
            {
                name: "Gibraltar",
                alpha2: "GI",
                alpha3: "GIB",
                numeric: "292"
            },
            {
                name: "Greece",
                alpha2: "GR",
                alpha3: "GRC",
                numeric: "300"
            },
            {
                name: "Greenland",
                alpha2: "GL",
                alpha3: "GRL",
                numeric: "304"
            },
            {
                name: "Grenada",
                alpha2: "GD",
                alpha3: "GRD",
                numeric: "308"
            },
            {
                name: "Guadeloupe",
                alpha2: "GP",
                alpha3: "GLP",
                numeric: "312"
            },
            {
                name: "Guam",
                alpha2: "GU",
                alpha3: "GUM",
                numeric: "316"
            },
            {
                name: "Guatemala",
                alpha2: "GT",
                alpha3: "GTM",
                numeric: "320"
            },
            {
                name: "Guernsey",
                alpha2: "GG",
                alpha3: "GGY",
                numeric: "831"
            },
            {
                name: "Guinea",
                alpha2: "GN",
                alpha3: "GIN",
                numeric: "324"
            },
            {
                name: "Guinea-Bissau",
                alpha2: "GW",
                alpha3: "GNB",
                numeric: "624"
            },
            {
                name: "Guyana",
                alpha2: "GY",
                alpha3: "GUY",
                numeric: "328"
            },
            {
                name: "Haiti",
                alpha2: "HT",
                alpha3: "HTI",
                numeric: "332"
            },
            {
                name: "Heard Island and McDonald Islands",
                alpha2: "HM",
                alpha3: "HMD",
                numeric: "334",
                altName: "Heard and Mcdonald Islands"
            },
            {
                name: "Holy See (the)",
                alpha2: "VA",
                alpha3: "VAT",
                numeric: "336",
                altName: "Holy See (Vatican City State)",
                shortName: "Vatican"
            },
            {
                name: "Honduras",
                alpha2: "HN",
                alpha3: "HND",
                numeric: "340"
            },
            {
                name: "Hong Kong",
                alpha2: "HK",
                alpha3: "HKG",
                numeric: "344",
                altName: "Hong Kong, SAR China"
            },
            {
                name: "Hungary",
                alpha2: "HU",
                alpha3: "HUN",
                numeric: "348"
            },
            {
                name: "Iceland",
                alpha2: "IS",
                alpha3: "ISL",
                numeric: "352"
            },
            {
                name: "India",
                alpha2: "IN",
                alpha3: "IND",
                numeric: "356"
            },
            {
                name: "Indonesia",
                alpha2: "ID",
                alpha3: "IDN",
                numeric: "360"
            },
            {
                name: "Iran",
                alpha2: "IR",
                alpha3: "IRN",
                numeric: "364",
                altName: "Iran, Islamic Republic of",
                shortName: "Iran"
            },
            {
                name: "Iraq",
                alpha2: "IQ",
                alpha3: "IRQ",
                numeric: "368"
            },
            {
                name: "Ireland",
                alpha2: "IE",
                alpha3: "IRL",
                numeric: "372"
            },
            {
                name: "Isle of Man",
                alpha2: "IM",
                alpha3: "IMN",
                numeric: "833"
            },
            {
                name: "Israel",
                alpha2: "IL",
                alpha3: "ISR",
                numeric: "376"
            },
            {
                name: "Italy",
                alpha2: "IT",
                alpha3: "ITA",
                numeric: "380"
            },
            {
                name: "Jamaica",
                alpha2: "JM",
                alpha3: "JAM",
                numeric: "388"
            },
            {
                name: "Japan",
                alpha2: "JP",
                alpha3: "JPN",
                numeric: "392"
            },
            {
                name: "Jersey",
                alpha2: "JE",
                alpha3: "JEY",
                numeric: "832"
            },
            {
                name: "Jordan",
                alpha2: "JO",
                alpha3: "JOR",
                numeric: "400"
            },
            {
                name: "Kazakhstan",
                alpha2: "KZ",
                alpha3: "KAZ",
                numeric: "398"
            },
            {
                name: "Kenya",
                alpha2: "KE",
                alpha3: "KEN",
                numeric: "404"
            },
            {
                name: "Kiribati",
                alpha2: "KI",
                alpha3: "KIR",
                numeric: "296"
            },
            {
                name: "Korea (the Democratic People's Republic of)",
                alpha2: "KP",
                alpha3: "PRK",
                numeric: "408",
                altName: "Korea (North)",
                shortName: "North Korea"
            },
            {
                name: "Korea Republic",
                alpha2: "KR",
                alpha3: "KOR",
                numeric: "410",
                altName: "Korea (South)",
                shortName: "South Korea"
            },
            {
                name: "Kuwait",
                alpha2: "KW",
                alpha3: "KWT",
                numeric: "414"
            },
            {
                name: "Kyrgyzstan",
                alpha2: "KG",
                alpha3: "KGZ",
                numeric: "417"
            },
            {
                name: "Lao People's Democratic Republic (the)",
                alpha2: "LA",
                alpha3: "LAO",
                numeric: "418",
                altName: "Lao PDR",
                shortName: "Laos"
            },
            {
                name: "Latvia",
                alpha2: "LV",
                alpha3: "LVA",
                numeric: "428"
            },
            {
                name: "Lebanon",
                alpha2: "LB",
                alpha3: "LBN",
                numeric: "422"
            },
            {
                name: "Lesotho",
                alpha2: "LS",
                alpha3: "LSO",
                numeric: "426"
            },
            {
                name: "Liberia",
                alpha2: "LR",
                alpha3: "LBR",
                numeric: "430"
            },
            {
                name: "Libya",
                alpha2: "LY",
                alpha3: "LBY",
                numeric: "434"
            },
            {
                name: "Liechtenstein",
                alpha2: "LI",
                alpha3: "LIE",
                numeric: "438"
            },
            {
                name: "Lithuania",
                alpha2: "LT",
                alpha3: "LTU",
                numeric: "440"
            },
            {
                name: "Luxembourg",
                alpha2: "LU",
                alpha3: "LUX",
                numeric: "442"
            },
            {
                name: "Macao",
                alpha2: "MO",
                alpha3: "MAC",
                numeric: "446",
                altName: "Macao, SAR China",
                shortName: "Macau"
            },
            {
                name: "Macedonia (the former Yugoslav Republic of)",
                alpha2: "MK",
                alpha3: "MKD",
                numeric: "807",
                altName: "Macedonia, Republic of",
                shortName: "Macedonia"
            },
            {
                name: "Madagascar",
                alpha2: "MG",
                alpha3: "MDG",
                numeric: "450"
            },
            {
                name: "Malawi",
                alpha2: "MW",
                alpha3: "MWI",
                numeric: "454"
            },
            {
                name: "Malaysia",
                alpha2: "MY",
                alpha3: "MYS",
                numeric: "458"
            },
            {
                name: "Maldives",
                alpha2: "MV",
                alpha3: "MDV",
                numeric: "462"
            },
            {
                name: "Mali",
                alpha2: "ML",
                alpha3: "MLI",
                numeric: "466"
            },
            {
                name: "Malta",
                alpha2: "MT",
                alpha3: "MLT",
                numeric: "470"
            },
            {
                name: "Marshall Islands (the)",
                alpha2: "MH",
                alpha3: "MHL",
                numeric: "584",
                altName: "Marshall Islands"
            },
            {
                name: "Martinique",
                alpha2: "MQ",
                alpha3: "MTQ",
                numeric: "474"
            },
            {
                name: "Mauritania",
                alpha2: "MR",
                alpha3: "MRT",
                numeric: "478"
            },
            {
                name: "Mauritius",
                alpha2: "MU",
                alpha3: "MUS",
                numeric: "480"
            },
            {
                name: "Mayotte",
                alpha2: "YT",
                alpha3: "MYT",
                numeric: "175"
            },
            {
                name: "Mexico",
                alpha2: "MX",
                alpha3: "MEX",
                numeric: "484"
            },
            {
                name: "Micronesia (Federated States of)",
                alpha2: "FM",
                alpha3: "FSM",
                numeric: "583",
                altName: "Micronesia, Federated States of",
                shortName: "Micronesia"
            },
            {
                name: "Moldova (the Republic of)",
                alpha2: "MD",
                alpha3: "MDA",
                numeric: "498",
                altName: "Moldova"
            },
            {
                name: "Monaco",
                alpha2: "MC",
                alpha3: "MCO",
                numeric: "492"
            },
            {
                name: "Mongolia",
                alpha2: "MN",
                alpha3: "MNG",
                numeric: "496"
            },
            {
                name: "Montenegro",
                alpha2: "ME",
                alpha3: "MNE",
                numeric: "499"
            },
            {
                name: "Montserrat",
                alpha2: "MS",
                alpha3: "MSR",
                numeric: "500"
            },
            {
                name: "Morocco",
                alpha2: "MA",
                alpha3: "MAR",
                numeric: "504"
            },
            {
                name: "Mozambique",
                alpha2: "MZ",
                alpha3: "MOZ",
                numeric: "508"
            },
            {
                name: "Myanmar",
                alpha2: "MM",
                alpha3: "MMR",
                numeric: "104"
            },
            {
                name: "Namibia",
                alpha2: "NA",
                alpha3: "NAM",
                numeric: "516"
            },
            {
                name: "Nauru",
                alpha2: "NR",
                alpha3: "NRU",
                numeric: "520"
            },
            {
                name: "Nepal",
                alpha2: "NP",
                alpha3: "NPL",
                numeric: "524"
            },
            {
                name: "Netherlands (the)",
                alpha2: "NL",
                alpha3: "NLD",
                numeric: "528",
                altName: "Netherlands"
            },
            {
                name: "New Caledonia",
                alpha2: "NC",
                alpha3: "NCL",
                numeric: "540"
            },
            {
                name: "New Zealand",
                alpha2: "NZ",
                alpha3: "NZL",
                numeric: "554"
            },
            {
                name: "Nicaragua",
                alpha2: "NI",
                alpha3: "NIC",
                numeric: "558"
            },
            {
                name: "Niger (the)",
                alpha2: "NE",
                alpha3: "NER",
                numeric: "562",
                altName: "Niger"
            },
            {
                name: "Nigeria",
                alpha2: "NG",
                alpha3: "NGA",
                numeric: "566"
            },
            {
                name: "Niue",
                alpha2: "NU",
                alpha3: "NIU",
                numeric: "570"
            },
            {
                name: "Norfolk Island",
                alpha2: "NF",
                alpha3: "NFK",
                numeric: "574"
            },
            {
                name: "Northern Mariana Islands (the)",
                alpha2: "MP",
                alpha3: "MNP",
                numeric: "580",
                altName: "Northern Mariana Islands"
            },
            {
                name: "Norway",
                alpha2: "NO",
                alpha3: "NOR",
                numeric: "578"
            },
            {
                name: "Oman",
                alpha2: "OM",
                alpha3: "OMN",
                numeric: "512"
            },
            {
                name: "Pakistan",
                alpha2: "PK",
                alpha3: "PAK",
                numeric: "586"
            },
            {
                name: "Palau",
                alpha2: "PW",
                alpha3: "PLW",
                numeric: "585"
            },
            {
                name: "Palestine, State of",
                alpha2: "PS",
                alpha3: "PSE",
                numeric: "275",
                altName: "Palestinian Territory",
                shortName: "Palestine"
            },
            {
                name: "Panama",
                alpha2: "PA",
                alpha3: "PAN",
                numeric: "591"
            },
            {
                name: "Papua New Guinea",
                alpha2: "PG",
                alpha3: "PNG",
                numeric: "598"
            },
            {
                name: "Paraguay",
                alpha2: "PY",
                alpha3: "PRY",
                numeric: "600"
            },
            {
                name: "Peru",
                alpha2: "PE",
                alpha3: "PER",
                numeric: "604"
            },
            {
                name: "Philippines (the)",
                alpha2: "PH",
                alpha3: "PHL",
                numeric: "608",
                altName: "Philippines"
            },
            {
                name: "Pitcairn",
                alpha2: "PN",
                alpha3: "PCN",
                numeric: "612"
            },
            {
                name: "Poland",
                alpha2: "PL",
                alpha3: "POL",
                numeric: "616"
            },
            {
                name: "Portugal",
                alpha2: "PT",
                alpha3: "POR",
                numeric: "620"
            },
            {
                name: "Puerto Rico",
                alpha2: "PR",
                alpha3: "PRI",
                numeric: "630"
            },
            {
                name: "Qatar",
                alpha2: "QA",
                alpha3: "QAT",
                numeric: "634"
            },
            {
                name: "Réunion",
                alpha2: "RE",
                alpha3: "REU",
                numeric: "638",
                shortName: "Reunion"
            },
            {
                name: "Romania",
                alpha2: "RO",
                alpha3: "ROU",
                numeric: "642"
            },
            {
                name: "Russia",
                alpha2: "RU",
                alpha3: "RUS",
                numeric: "643",
                altName: "Russian Federation",
                shortName: "Russia"
            },
            {
                name: "Rwanda",
                alpha2: "RW",
                alpha3: "RWA",
                numeric: "646"
            },
            {
                name: "Saint Barthélemy",
                alpha2: "BL",
                alpha3: "BLM",
                numeric: "652",
                altName: "Saint-Barthélemy",
                shortName: "Saint Barthelemy"
            },
            {
                name: "Saint Helena, Ascension and Tristan da Cunha",
                alpha2: "SH",
                alpha3: "SHN",
                numeric: "654",
                altName: "Saint Helena"
            },
            {
                name: "Saint Kitts and Nevis",
                alpha2: "KN",
                alpha3: "KNA",
                numeric: "659"
            },
            {
                name: "Saint Lucia",
                alpha2: "LC",
                alpha3: "LCA",
                numeric: "662"
            },
            {
                name: "Saint Martin (French part)",
                alpha2: "MF",
                alpha3: "MAF",
                numeric: "663",
                altName: "Saint-Martin (French part)",
                shortName: "Saint Martin"
            },
            {
                name: "Saint Pierre and Miquelon",
                alpha2: "PM",
                alpha3: "SPM",
                numeric: "666"
            },
            {
                name: "Saint Vincent and the Grenadines",
                alpha2: "VC",
                alpha3: "VCT",
                numeric: "670",
                altName: "Saint Vincent and Grenadines"
            },
            {
                name: "Samoa",
                alpha2: "WS",
                alpha3: "WSM",
                numeric: "882"
            },
            {
                name: "San Marino",
                alpha2: "SM",
                alpha3: "SMR",
                numeric: "674"
            },
            {
                name: "Sao Tome and Principe",
                alpha2: "ST",
                alpha3: "STP",
                numeric: "678"
            },
            {
                name: "Saudi Arabia",
                alpha2: "SA",
                alpha3: "SAU",
                numeric: "682"
            },
            {
                name: "Senegal",
                alpha2: "SN",
                alpha3: "SEN",
                numeric: "686"
            },
            {
                name: "Serbia",
                alpha2: "RS",
                alpha3: "SRB",
                numeric: "688"
            },
            {
                name: "Seychelles",
                alpha2: "SC",
                alpha3: "SYC",
                numeric: "690"
            },
            {
                name: "Sierra Leone",
                alpha2: "SL",
                alpha3: "SLE",
                numeric: "694"
            },
            {
                name: "Singapore",
                alpha2: "SG",
                alpha3: "SGP",
                numeric: "702"
            },
            {
                name: "Sint Maarten (Dutch part)",
                alpha2: "SX",
                alpha3: "SXM",
                numeric: "534",
                shortName: "Sint Maarten"
            },
            {
                name: "Slovakia",
                alpha2: "SK",
                alpha3: "SVK",
                numeric: "703"
            },
            {
                name: "Slovenia",
                alpha2: "SI",
                alpha3: "SVN",
                numeric: "705"
            },
            {
                name: "Solomon Islands",
                alpha2: "SB",
                alpha3: "SLB",
                numeric: "090"
            },
            {
                name: "Somalia",
                alpha2: "SO",
                alpha3: "SOM",
                numeric: "706"
            },
            {
                name: "South Africa",
                alpha2: "ZA",
                alpha3: "ZAF",
                numeric: "710"
            },
            {
                name: "South Georgia and the South Sandwich Islands",
                alpha2: "GS",
                alpha3: "SGS",
                numeric: "239"
            },
            {
                name: "South Sudan",
                alpha2: "SS",
                alpha3: "SSD",
                numeric: "728"
            },
            {
                name: "Spain",
                alpha2: "ES",
                alpha3: "ESP",
                numeric: "724"
            },
            {
                name: "Sri Lanka",
                alpha2: "LK",
                alpha3: "LKA",
                numeric: "144"
            },
            {
                name: "Sudan (the)",
                alpha2: "SD",
                alpha3: "SDN",
                numeric: "729",
                altName: "Sudan"
            },
            {
                name: "Suriname",
                alpha2: "SR",
                alpha3: "SUR",
                numeric: "740"
            },
            {
                name: "Svalbard and Jan Mayen",
                alpha2: "SJ",
                alpha3: "SJM",
                numeric: "744",
                altName: "Svalbard and Jan Mayen Islands"
            },
            {
                name: "Swaziland",
                alpha2: "SZ",
                alpha3: "SWZ",
                numeric: "748"
            },
            {
                name: "Sweden",
                alpha2: "SE",
                alpha3: "SWE",
                numeric: "752"
            },
            {
                name: "Switzerland",
                alpha2: "CH",
                alpha3: "CHE",
                numeric: "756"
            },
            {
                name: "Syrian Arab Republic",
                alpha2: "SY",
                alpha3: "SYR",
                numeric: "760",
                altName: "Syrian Arab Republic (Syria)",
                shortName: "Syria"
            },
            {
                name: "Taiwan (Province of China)",
                alpha2: "TW",
                alpha3: "TWN",
                numeric: "158",
                altName: "Taiwan, Republic of China",
                shortName: "Taiwan"
            },
            {
                name: "Tajikistan",
                alpha2: "TJ",
                alpha3: "TJK",
                numeric: "762"
            },
            {
                name: "Tanzania, United Republic of",
                alpha2: "TZ",
                alpha3: "TZA",
                numeric: "834",
                shortName: "Tanzania"
            },
            {
                name: "Thailand",
                alpha2: "TH",
                alpha3: "THA",
                numeric: "764"
            },
            {
                name: "Timor-Leste",
                alpha2: "TL",
                alpha3: "TLS",
                numeric: "626",
                shortName: "East Timor"
            },
            {
                name: "Togo",
                alpha2: "TG",
                alpha3: "TGO",
                numeric: "768"
            },
            {
                name: "Tokelau",
                alpha2: "TK",
                alpha3: "TKL",
                numeric: "772"
            },
            {
                name: "Tonga",
                alpha2: "TO",
                alpha3: "TON",
                numeric: "776"
            },
            {
                name: "Trinidad and Tobago",
                alpha2: "TT",
                alpha3: "TTO",
                numeric: "780"
            },
            {
                name: "Tunisia",
                alpha2: "TN",
                alpha3: "TUN",
                numeric: "788"
            },
            {
                name: "Turkey",
                alpha2: "TR",
                alpha3: "TUR",
                numeric: "792"
            },
            {
                name: "Turkmenistan",
                alpha2: "TM",
                alpha3: "TKM",
                numeric: "795"
            },
            {
                name: "Turks and Caicos Islands (the)",
                alpha2: "TC",
                alpha3: "TCA",
                numeric: "796",
                altName: "Turks and Caicos Islands"
            },
            {
                name: "Tuvalu",
                alpha2: "TV",
                alpha3: "TUV",
                numeric: "798"
            },
            {
                name: "Uganda",
                alpha2: "UG",
                alpha3: "UGA",
                numeric: "800"
            },
            {
                name: "Ukraine",
                alpha2: "UA",
                alpha3: "UKR",
                numeric: "804"
            },
            {
                name: "United Arab Emirates (the)",
                alpha2: "AE",
                alpha3: "ARE",
                numeric: "784",
                altName: "United Arab Emirates"
            },
            {
                name: "United Kingdom of Great Britain and Northern Ireland (the)",
                alpha2: "GB",
                alpha3: "GBR",
                numeric: "826",
                altName: "United Kingdom"
            },
            {
                name: "England",
                alpha2: "GB-ENG",
                alpha3: "ENG",
                numeric: "826",
                altName: "United Kingdom"
            },
            {
                name: "United States Minor Outlying Islands (the)",
                alpha2: "UM",
                alpha3: "UMI",
                numeric: "581",
                altName: "US Minor Outlying Islands"
            },
            {
                name: "United States of America (the)",
                alpha2: "US",
                alpha3: "USA",
                numeric: "840",
                altName: "United States of America",
                shortName: "United States"
            },
            {
                name: "Uruguay",
                alpha2: "UY",
                alpha3: "URY",
                numeric: "858"
            },
            {
                name: "Uzbekistan",
                alpha2: "UZ",
                alpha3: "UZB",
                numeric: "860"
            },
            {
                name: "Vanuatu",
                alpha2: "VU",
                alpha3: "VUT",
                numeric: "548"
            },
            {
                name: "Venezuela (Bolivarian Republic of)",
                alpha2: "VE",
                alpha3: "VEN",
                numeric: "862",
                altName: "Venezuela (Bolivarian Republic)",
                shortName: "Venezuela"
            },
            {
                name: "Viet Nam",
                alpha2: "VN",
                alpha3: "VNM",
                numeric: "704",
                shortName: "Vietnam"
            },
            {
                name: "Virgin Islands (British)",
                alpha2: "VG",
                alpha3: "VGB",
                numeric: "092",
                altName: "British Virgin Islands"
            },
            {
                name: "Virgin Islands (U.S.)",
                alpha2: "VI",
                alpha3: "VIR",
                numeric: "850",
                altName: "Virgin Islands, US",
                shortName: "U.S. Virgin Islands"
            },
            {
                name: "Wallis and Futuna",
                alpha2: "WF",
                alpha3: "WLF",
                numeric: "876",
                altName: "Wallis and Futuna Islands"
            },
            {
                name: "Western Sahara*",
                alpha2: "EH",
                alpha3: "ESH",
                numeric: "732",
                altName: "Western Sahara"
            },
            {
                name: "Yemen",
                alpha2: "YE",
                alpha3: "YEM",
                numeric: "887"
            },
            {
                name: "Zambia",
                alpha2: "ZM",
                alpha3: "ZMB",
                numeric: "894"
            },
            {
                name: "Zimbabwe",
                alpha2: "ZW",
                alpha3: "ZWE",
                numeric: "716"
            }
        ]
    }

    componentDidMount() {
        axios.get(`http://worldcup.sfg.io/matches.json`)
            .then(res => {
                const matches = res.data;
                this.setState({ matches });
            })
    }


    subComponent() {

        let groupedResults = _.groupBy(this.state.matches, (result) => moment(result.datetime).startOf('day'));
        var result = _.map(groupedResults, function(group, day){
            return {
                day: day,
                events: group
            }
        });
        return result;

    }


    componentWillUnmount() {
        this.serverRequest.abort();
    };


    render() {
        const matchList = this.subComponent();

        if(matchList[0] !== undefined){
            console.log(matchList[0].events)
        }

        var hideStats = "";
        if(this.state.hideStats === true){
            hideStats = "hide";
        }
        else{
            hideStats = "";
        }

        const TableHeader = ()  => {
                return <div>test</div>;
        };

        /*const header = matchList[0].map((match, i) => {
            console.log(match)
            return (
                <div className="element">
                    <div className="row">
                        <div className="column small">
                            <div className="cell">
                                test
                            </div>
                        </div>
                        <div className="column small">
                            <div className="cell">
                                test
                            </div>
                        </div>
                        <div className="column small">
                            <div className="cell">
                                test
                            </div>
                        </div>
                        <div className="column small">
                            <div className="cell">
                                test
                            </div>
                        </div>
                        <div className="column big">
                            <div className="cell">
                                test
                            </div>
                        </div>
                        <div className="column medium">
                            <div className="cell">
                                test
                            </div>
                        </div>
                        <div className="column medium">
                            <div className="cell">
                                test
                            </div>
                        </div>
                        <div className="column medium">
                            <div className="cell">
                                test
                            </div>
                        </div>
                        <div className="column medium">
                            <div className="cell">
                                test
                            </div>
                        </div>
                        {
                            Object.keys(match.home_team_statistics).map((key, index) => {
                                if (typeof match.home_team_statistics[key] !== 'object' && index != 0) {
                                    return (
                                        <div className={[hideStats, "column small team"].join(' ')}>
                                            <div className="cell">
                                                <div className="name">
                                                    {match.home_team_statistics[key]}
                                                </div>
                                            </div>
                                            <div className="cell">
                                                <div className="name">
                                                    {match.away_team_statistics[key]}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            )
        })*/

        const matchList2 = matchList.map((day, i) => {

            return (
                <div className="element">
                    <div className="date">
                        <div className="day">
                            {moment(day.day).format('DD')}
                        </div>
                        <div className="month">
                            {moment(day.day).format('MMMM')}
                        </div>
                    </div>

                    {day.events.map((match, j) => {
                        const isCompleted = match.status === 'completed' || match.status === 'in progress';

                        return (
                            <div>
                                <div className="row">

                                    <div className="column small">
                                        <div className="time">{moment(match.datetime).format('HH:mm')}</div>
                                    </div>
                                    <div className="column small">
                                        <div className="cell">
                                            <div
                                                className={[this.getCountryCode.call(this, match.home_team.country), "flag-icon-squared flag flag-icon flag-icon"].join(' ')}>
                                            </div>
                                        </div>
                                        <div className="cell">
                                            <div
                                                className={[this.getCountryCode.call(this, match.away_team.country), "flag-icon-squared flag flag-icon flag-icon"].join(' ')}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column small">
                                        <div className="cell">
                                            <div
                                                className={this.eventStatus(match)}>
                                                <div className="score">{match.home_team.goals}</div>
                                            </div>
                                        </div>
                                        <div className="cell">
                                            <div
                                                className={this.eventStatus(match)}>
                                                <div className="score">{match.away_team.goals}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column team small">
                                        <div className="cell">
                                            <div className="name">
                                                {match.home_team.code}
                                            </div>
                                        </div>
                                        <div className="cell">
                                            <div className="name">
                                                {match.away_team.code}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column big">
                                        <div className="time">{match.location}</div>
                                    </div>
                                    <div className="column medium">
                                        <div className="time">{match.attendance}</div>
                                    </div>

                                    { isCompleted
                                        ?
                                        <div className="column medium">
                                            <i className={[this.getWeatherCode.call(this, match.weather.description), "wi wi-day-sunny"].join(' ')}></i>
                                        </div>
                                        : ""
                                    }
                                    { isCompleted
                                        ?
                                        <div className="column medium">
                                            {match.weather.temp_celsius}
                                            <i className="wi wi-celsius"></i>

                                        </div>
                                        : ""
                                    }
                                    { isCompleted
                                        ?
                                        <div className="column medium">
                                            <i className={[this.getWindSpeed.call(this, match.weather.wind_speed), "wi"].join(' ')}></i>


                                        </div>
                                        : ""
                                    }


                                    { isCompleted
                                        ?
                                        Object.keys(match.home_team_statistics).map((key, index) => {
                                            if (typeof match.home_team_statistics[key] !== 'object' && index != 0) {
                                                return (
                                                        <div className={[hideStats, "column small team"].join(' ')}>
                                                            <div className="cell">
                                                                <div className="name">
                                                                    {match.home_team_statistics[key]}
                                                                </div>
                                                            </div>
                                                            <div className="cell">
                                                                <div className="name">
                                                                    {match.away_team_statistics[key]}
                                                                </div>
                                                            </div>
                                                        </div>
                                                )
                                            }
                                        }) : ""
                                    }

                                </div>
                            </div>
                        );
                    })}
            </div>
            )
        })

        return (
            <div>
                <button onClick={this.handleToggleClick}>
                    {this.state.hideStats ? 'ON' : 'OFF'}
                </button>
                <div className="header">
                    <span>Highlights</span>
                    <div className="nav">
                        <svg className="arrow-icon left" width="16" height="16" viewBox="0 0 24 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><path className="RightAngleBracket-icon__bracket___xPGyR" d="M22.964,17.199c0.269,0.257 0.425,0.611 0.434,0.983c0.008,0.373 -0.132,0.733 -0.389,1.003c-3.251,3.399 -13.73,14.354 -16.98,17.752c-0.536,0.56 -1.425,0.58 -1.985,0.044c-0.881,-0.843 -2.149,-2.056 -3.03,-2.898c-0.56,-0.536 -0.58,-1.425 -0.044,-1.985c2.426,-2.536 8.764,-9.162 11.645,-12.174c0.388,-0.405 0.599,-0.949 0.586,-1.51c-0.013,-0.561 -0.248,-1.094 -0.654,-1.482c-2.873,-2.741 -8.998,-8.588 -11.419,-10.899c-0.269,-0.257 -0.425,-0.611 -0.434,-0.983c-0.009,-0.372 0.131,-0.733 0.388,-1.002c0.841,-0.881 2.053,-2.151 2.895,-3.033c0.535,-0.56 1.424,-0.581 1.984,-0.046c2.942,2.808 11.6,11.073 17.003,16.23Z"></path></svg>
                        <svg className="arrow-icon right" width="16" height="16" viewBox="0 0 24 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><path className="RightAngleBracket-icon__bracket___xPGyR" d="M22.964,17.199c0.269,0.257 0.425,0.611 0.434,0.983c0.008,0.373 -0.132,0.733 -0.389,1.003c-3.251,3.399 -13.73,14.354 -16.98,17.752c-0.536,0.56 -1.425,0.58 -1.985,0.044c-0.881,-0.843 -2.149,-2.056 -3.03,-2.898c-0.56,-0.536 -0.58,-1.425 -0.044,-1.985c2.426,-2.536 8.764,-9.162 11.645,-12.174c0.388,-0.405 0.599,-0.949 0.586,-1.51c-0.013,-0.561 -0.248,-1.094 -0.654,-1.482c-2.873,-2.741 -8.998,-8.588 -11.419,-10.899c-0.269,-0.257 -0.425,-0.611 -0.434,-0.983c-0.009,-0.372 0.131,-0.733 0.388,-1.002c0.841,-0.881 2.053,-2.151 2.895,-3.033c0.535,-0.56 1.424,-0.581 1.984,-0.046c2.942,2.808 11.6,11.073 17.003,16.23Z"></path></svg>
                    </div>
                </div>
                <TableHeader />
                <div id="wrapper" className={this.state.fullView ? 'toggled' : ''}>
                    <div id="events">
                        {matchList2}
                    </div>
                    <div id="more" onClick={this.handleClick}>
                        <span>Show tournament overview</span>
                        <svg id="more-icon" className="arrow-icon" width="16" height="16" viewBox="0 0 24 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><path class="RightAngleBracket-icon__bracket___xPGyR" d="M22.964,17.199c0.269,0.257 0.425,0.611 0.434,0.983c0.008,0.373 -0.132,0.733 -0.389,1.003c-3.251,3.399 -13.73,14.354 -16.98,17.752c-0.536,0.56 -1.425,0.58 -1.985,0.044c-0.881,-0.843 -2.149,-2.056 -3.03,-2.898c-0.56,-0.536 -0.58,-1.425 -0.044,-1.985c2.426,-2.536 8.764,-9.162 11.645,-12.174c0.388,-0.405 0.599,-0.949 0.586,-1.51c-0.013,-0.561 -0.248,-1.094 -0.654,-1.482c-2.873,-2.741 -8.998,-8.588 -11.419,-10.899c-0.269,-0.257 -0.425,-0.611 -0.434,-0.983c-0.009,-0.372 0.131,-0.733 0.388,-1.002c0.841,-0.881 2.053,-2.151 2.895,-3.033c0.535,-0.56 1.424,-0.581 1.984,-0.046c2.942,2.808 11.6,11.073 17.003,16.23Z"></path></svg>
                    </div>
                </div>
            </div>
        )

        //));


    }


    eventStatus(event){
        switch(event.status){
            case 'completed': return "show";
            case 'ongoing': return "show";
            case 'upcoming': return "";
            default: return ""
        }
    }

    getCountryCode = (event) => {
        var filteredEvent = _.filter(this.state.isoCountries2, x => x.name === event);

        return (
            (() => {
                switch (event) {
                    case "To Be Determined":
                        return "no-flag";
                    default:
                        return "flag-icon-" + filteredEvent[0].alpha2.toLowerCase();
                }
            })()
        )
    };

    getWeatherCode = (weather) => {
        return (
            (() => {
                switch (weather) {
                    case "Sunny":
                        return "wi-day-sunny";
                    case "Cloudy":
                        return "wi-cloudy";
                    case "Partly Cloudy":
                        return "wi-day-cloudy";
                    case "Clear Night":
                        return "wi-night-clear";
                    case "Partly Cloudy Night":
                        return "wi-night-alt-cloudy";
                    default:
                        return "wi-stars";
                }
            })()
        )
    };

    getWindSpeed = (wind) => {
        return (
            (() => {
                switch (true) {
                    case (wind < 1):
                        return "wi-wind-beaufort-0";
                    case (wind < 6):
                        return "wi-wind-beaufort-1";
                    case (wind < 12):
                        return "wi-wind-beaufort-2";
                    case (wind < 20):
                        return "wi-wind-beaufort-3";
                    case (wind < 29):
                        return "wi-wind-beaufort-4";
                    case (wind < 39):
                        return "wi-wind-beaufort-5";
                    case (wind < 50):
                        return "wi-wind-beaufort-6";
                    case (wind < 62):
                        return "wi-wind-beaufort-7";
                    case (wind < 75):
                        return "wi-wind-beaufort-8";
                    default:
                        return "wi-wind-beaufort-0";
                }
            })()
        )
    };

    handleClick() {
        this.setState(prevState => ({
            fullView: !prevState.fullView
        }));
    }
    handleToggleClick() {
        this.setState(function(prevState) {
            return {hideStats: !prevState.hideStats};
        });
    }

    clickEvent(eventID) {
        window.open('https://www.leovegas.com/en-de/sportsbook#event/'+eventID);
    }
}


export default EventList;
