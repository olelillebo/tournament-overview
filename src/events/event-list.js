import React, {Component} from 'react';
import _ from 'lodash'
import axios from 'axios'
import moment from 'moment'
import feedback from './feedback.json';



class EventList extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.clickEvent = this.clickEvent.bind(this);
        this.handleToggleClick = this.handleToggleClick.bind(this);

    }


    state = {
        items: feedback,
        randomItem: 0,
        commentNumber: 0,
        hideStats: false,
          googleCode: [
            {
              name: "Canada",
              code: "en-GB"
            },
            {
              name: "Croatia",
              code: "hr"
            },
            {
              name: "Czechia",
              code: "cs"
            },
            {
              name: "Denmark",
              code: "da"
            },
            {
              name: "Finland",
              code: "fi"
            },
            {
              name: "Germany",
              code: "de"
            },
            {
              name: "Ireland",
              code: "en-GB"
            },
            {
              name: "Malta",
              code: "en-GB"
            },
            {
              name: "New Zealand",
              code: "en-GB"
            },
            {
              name: "Netherlands",
              code: "nl"
            },
            {
              name: "Norway",
              code: "no"
            },
            {
              name: "Sweden",
              code: "sv"
            },
            {
              name: "United Arab Emirates",
              code: "en-GB"
            },
            {
              name: "United Kingdom",
              code: "en-GB"
            },
            {
              name: "United States",
              code: "en-GB"
            },
            {
              name: "(not set)",
              code: "en-GB"
            }
            ],
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
                name: "Netherlands",
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
                name: "United Kingdom",
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
            },
            {
                name: "(not set)",
                alpha2: "ZW",
                alpha3: "ZWE",
                numeric: "716"
            }
        ]
    }

  tick() {

    if(this.state.randomItem==this.state.commentNumber) {
          this.setState(prevState => ({
            randomItem: 0
          }));
        } else {
          this.setState(prevState => ({
            randomItem: prevState.randomItem + 1
          }));
        }
  }

     componentDidMount() {
       this.interval = setInterval(() => this.tick(), 30000);
       this.setMax();
    }

    componentWillUnmount() {
        this.serverRequest.abort();
      clearInterval(this.interval);
    };

  setMax() {
    const matchListLength = this.state.items
      .sort( (a, b) => moment(b.convertedDate, 'DD-MM-YYYY').unix() - moment(a.convertedDate, 'DD-MM-YYYY').unix() || a["Event Label"] - b["Event Label"])
      .filter(function (day1) {
        return day1["Event Label"] !== "empty string" && day1["Event Label"] !== "(not set)";
      })
      .map((day, i) => {
        return day
      });


    this.setState((prevState) => {
      return { commentNumber: matchListLength.length  }
    });
  }


    render() {
      this.updateDate();
      //this.translateFeedback();



        var hideStats = "";
        if(this.state.hideStats === true){
            hideStats = "hide";
        }
        else{
            hideStats = "";
        }

        const TableHeader = ()  => {
                return <div></div>;
        };

        const randomComment = this.state.items[this.state.randomItem];



      const allowedCountries = ["Finland", "Denmark", "Germany", "Norway", "Sweden"];

      const displayRandom = this.state.items
        .filter(function (day1) {
          return day1["Event Label"] !== "empty string" && day1["Event Label"] !== "(not set)";
        })
        .map((day, i) => {
          if(i == this.state.randomItem) {
              var originalVersion = "";
            if((allowedCountries.indexOf(day.Country) > -1)) {
                originalVersion = "("+day["Event Label"]+")";
            }

              return (
            <div>
                <div className="FeedbackWrapper">
                    <div className={[this.getReaction(day["Avg Value"]), "UserFeedbackBig"].join(' ')}>
                        <svg fill-rule="evenodd" className="UserFeedback__thumbsIcon___2PAAf" width="130" height="130" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M4.859 21.486H1.215C.544 21.486 0 20.913 0 20.207v-9.953c0-.706.544-1.279 1.215-1.279h3.644c.671 0 1.214.573 1.214 1.279v9.953c0 .706-.544 1.279-1.214 1.279zm-.334-2.511a.898.898 0 1 1-.001 1.795.898.898 0 0 1 .001-1.795zM6.584 10.447a.905.905 0 0 1 .821-.912c1.278-.088 2.119-.219 2.798-1.3 1.092-1.738 1.828-2.6 2.451-3.598.536-.861 1.084-2.512 1.153-3.364.077-.961.73-1.291 1.304-1.272.821.026 1.729.413 1.989 2.321.434 3.185-1.468 5.702-1.656 6.31-.481 1.555 4.749.444 6.083 1.074 1.831.865.6 2.029 1.012 2.793.367.679 1.409.332 1.459 1.787.046 1.339-.676 1.004-.894 2.183-.184.994.64 1.187.552 2.347-.103 1.344-1.388 1.245-1.681 1.851-.258.535.172 1.295-.077 1.787s-1.022 1.027-1.415 1.166c-1.843.653-4.988.337-6.817 0-1.986-.366-3.643-1.169-5.762-2.374-.343-.195-1.344-.807-1.343-1.211l.023-9.588z"></path></svg>
                    </div>
                    <div className="comment">
                        {day.translatedLabel}
                    </div>
                    <div className="translatedComment">
                      {originalVersion}
                    </div>
                    <div
                      className={[this.getCountryCode.call(this, day.Country), "flag flag-icon flag-icon"].join(' ')}>
                    </div>
                </div>
                <div className="timer">
                    <div className="circle-timer">
                        <div className="timer-slot">
                            <div className="timer-lt">
                            </div>
                        </div>
                        <div className="timer-slot">
                            <div className="timer-rt">
                            </div>
                        </div>
                        <div className="count">
                            <div>{this.state.randomItem} /</div>
                            <div>{this.state.commentNumber}</div>
                        </div>
                    </div>
                </div>
            </div>
            ) }
        });

       const matchListX = this.state.items
            .sort( (a, b) => moment(b.convertedDate, 'DD-MM-YYYY').unix() - moment(a.convertedDate, 'DD-MM-YYYY').unix() || a["Event Label"] - b["Event Label"])
            .filter(function (day1) {
                return day1["Event Label"] !== "empty string" && day1["Event Label"] !== "(not set)";
            })
            .map((day, i) => {

         var eventLabel = "";
         if(day.translatedVersion !== undefined) {
           eventLabel = day.translatedVersion
         } else eventLabel = day["Event Label"];
            return (
                <div className="element">
                    <div>
                        <div className="row">
                            <div className="column small">
                                <div className={[this.getReaction(day["Avg Value"]), "UserFeedback"].join(' ')}><svg fill-rule="evenodd" className="UserFeedback__thumbsIcon___2PAAf" width="20" height="20" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M4.859 21.486H1.215C.544 21.486 0 20.913 0 20.207v-9.953c0-.706.544-1.279 1.215-1.279h3.644c.671 0 1.214.573 1.214 1.279v9.953c0 .706-.544 1.279-1.214 1.279zm-.334-2.511a.898.898 0 1 1-.001 1.795.898.898 0 0 1 .001-1.795zM6.584 10.447a.905.905 0 0 1 .821-.912c1.278-.088 2.119-.219 2.798-1.3 1.092-1.738 1.828-2.6 2.451-3.598.536-.861 1.084-2.512 1.153-3.364.077-.961.73-1.291 1.304-1.272.821.026 1.729.413 1.989 2.321.434 3.185-1.468 5.702-1.656 6.31-.481 1.555 4.749.444 6.083 1.074 1.831.865.6 2.029 1.012 2.793.367.679 1.409.332 1.459 1.787.046 1.339-.676 1.004-.894 2.183-.184.994.64 1.187.552 2.347-.103 1.344-1.388 1.245-1.681 1.851-.258.535.172 1.295-.077 1.787s-1.022 1.027-1.415 1.166c-1.843.653-4.988.337-6.817 0-1.986-.366-3.643-1.169-5.762-2.374-.343-.195-1.344-.807-1.343-1.211l.023-9.588z"></path></svg></div>
                            </div>
                            <div className="column big">
                                <div className="time">{eventLabel}</div>
                            </div>
                            <div className="column medium">
                                <div className="time">{day.convertedDate}</div>
                            </div>
                            <div className="column small">
                                <div className="cell">
                                    <div
                                      className={[this.getCountryCode.call(this, day.Country), "flag flag-icon flag-icon"].join(' ')}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )
        });


        return (
            <div>
                {/*<button onClick={this.handleToggleClick}></button>*/}
                <div className="tabs">
                    <div id="fullView">{displayRandom}</div>
                    <div id="commentsView">
                        <div className="header">
                            <span>Feedback</span>
                        </div>
                        <TableHeader />
                        <div id="wrapper" className={this.state.fullView ? 'toggled' : ''}>
                            <div id="events">
                                {matchListX}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

   convertToDate(dateString){
        var year   = parseInt(dateString.substring(0,4));
        var month  = parseInt(dateString.substring(4,6));
        var day   = parseInt(dateString.substring(6,10));
        var formattedDate = new Date(year, month-1, day);
    return formattedDate;
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

  getCountry = (event) => {
    var filteredEvent = _.filter(this.state.googleCode, x => x.name === event);
    return filteredEvent[0].code;
  };


    shuffleArray(array) {
        let i = array.length - 1;
        let j = Math.floor(Math.random() * (i + 1));
        return array[j];
    }

    getReaction(reaction){
        switch(reaction){
            case "0.00": return "thumbsDown";
            case "1.00": return "thumbsUp";
            default: return ""
        }
    }

      updateDate(){
        this.state.items
          .map((match, j) => {
            const convertedDate = this.convertToDate(match.Date);
            this.state.items[j].convertedDate = moment(convertedDate).format('DD-MM-YYYY');
          })
      }

    translateFeedback() {
      const allowedCountries = ["Finland", "Denmark", "Germany", "Norway", "Sweden"];

      var oldStates = Object.assign({}, this.state)

      oldStates.items
          .map((match, j) => {

            if((match["Event Label"] !== "empty string" && match["Event Label"] !== "(not set)")&&(allowedCountries.indexOf(match.Country) > -1)) {


            let fromLang = this.getCountry(match.Country);
            let toLang = 'en';
            let text = match["Event Label"];

            const API_KEY = "AIzaSyAadGmocvKJpV08em-cD1QofqUR8zO4v0Y";

            let url = `https://translation.googleapis.com/language/translate/v2?key=${API_KEY}`;
            url += '&q=' + encodeURI(text);
            url += `&source=${fromLang}`;
            url += `&target=${toLang}`;

            fetch(url, {
              method: 'GET',
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              }
            })
              .then(res => res.json())
              .then((response) => {
                //this.state.items[j].translatedVersion = response.data.translations[0].translatedText;
               match.translatedVersion = response.data.translations[0].translatedText;


              })
              .catch(error => {
                console.log("There was an error with the translation request: ", error);
              });

          }
            return match;
        })

      this.setState(prevState => ({ items: oldStates }));
      }


    handleClick() {
        this.setState(prevState => ({
            fullView: !prevState.fullView
        }));
    }
    handleToggleClick() {
      this.translateFeedback();
    }

    clickEvent(eventID) {
        window.open('https://www.leovegas.com/en-de/sportsbook#event/'+eventID);
    }
}


export default EventList;
