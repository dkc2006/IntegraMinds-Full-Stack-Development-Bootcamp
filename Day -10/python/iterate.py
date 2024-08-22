# take the json data here 

#https://github.com/dr5hn/countries-states-cities-database/blob/master/countries%2Bstates.json


# For now take few countries and iterate the countries and print the states along with their state properties
# ------------------------------------------------------------------------------------------------------------------------

items = [
    {
        "name": "Afghanistan",
        "iso3": "AFG",
        "iso2": "AF",
        "numeric_code": "004",
        "phone_code": "93",
        "capital": "Kabul",
        "currency": "AFN",
        "currency_name": "Afghan afghani",
        "currency_symbol": "؋",
        "tld": ".af",
        "region": "Asia",
        "region_id": "3",
        "subregion": "Southern Asia",
        "subregion_id": "14",
        "nationality": "Afghan",
        "timezones": [
            {
                "zoneName": "Asia/Kabul",
                "gmtOffset": 16200,
                "gmtOffsetName": "UTC+04:30",
                "abbreviation": "AFT",
                "tzName": "Afghanistan Time"
            }
        ],
        "translations": {
            "kr": "아프가니스탄",
            "pt-BR": "Afeganistão",
            "pt": "Afeganistão",
            "nl": "Afghanistan",
            "hr": "Afganistan",
            "fa": "افغانستان",
            "de": "Afghanistan",
            "es": "Afganistán",
            "fr": "Afghanistan",
            "ja": "アフガニスタン",
            "it": "Afghanistan",
            "cn": "阿富汗",
            "tr": "Afganistan"
        },
        "latitude": "33.00000000",
        "longitude": "65.00000000",
        "emoji": "🇦🇫",
        "emojiU": "U+1F1E6 U+1F1EB",
        "states": [
            {
                "id": 3901,
                "name": "Badakhshan",
                "state_code": "BDS",
                "latitude": "36.73477250",
                "longitude": "70.81199530",
                "type": None
            },
            {
                "id": 3871,
                "name": "Badghis",
                "state_code": "BDG",
                "latitude": "35.16713390",
                "longitude": "63.76953840",
                "type": None
            },
            {
                "id": 3875,
                "name": "Baghlan",
                "state_code": "BGL",
                "latitude": "36.17890260",
                "longitude": "68.74530640",
                "type": None
            },
            {
                "id": 3884,
                "name": "Balkh",
                "state_code": "BAL",
                "latitude": "36.75506030",
                "longitude": "66.89753720",
                "type": None
            },
            {
                "id": 3872,
                "name": "Bamyan",
                "state_code": "BAM",
                "latitude": "34.81000670",
                "longitude": "67.82121040",
                "type": None
            },
            {
                "id": 3892,
                "name": "Daykundi",
                "state_code": "DAY",
                "latitude": "33.66949500",
                "longitude": "66.04635340",
                "type": None
            },
            {
                "id": 3899,
                "name": "Farah",
                "state_code": "FRA",
                "latitude": "32.49532800",
                "longitude": "62.26266270",
                "type": None
            },
            {
                "id": 3889,
                "name": "Faryab",
                "state_code": "FYB",
                "latitude": "36.07956130",
                "longitude": "64.90595500",
                "type": None
            },
            {
                "id": 3870,
                "name": "Ghazni",
                "state_code": "GHA",
                "latitude": "33.54505870",
                "longitude": "68.41739720",
                "type": None
            },
            {
                "id": 3888,
                "name": "Ghōr",
                "state_code": "GHO",
                "latitude": "34.09957760",
                "longitude": "64.90595500",
                "type": None
            },
            {
                "id": 3873,
                "name": "Helmand",
                "state_code": "HEL",
                "latitude": "39.29893610",
                "longitude": "-76.61604720",
                "type": None
            },
            {
                "id": 3887,
                "name": "Herat",
                "state_code": "HER",
                "latitude": "34.35286500",
                "longitude": "62.20402870",
                "type": None
            },
            {
                "id": 3886,
                "name": "Jowzjan",
                "state_code": "JOW",
                "latitude": "36.89696920",
                "longitude": "65.66585680",
                "type": None
            },
            {
                "id": 3902,
                "name": "Kabul",
                "state_code": "KAB",
                "latitude": "34.55534940",
                "longitude": "69.20748600",
                "type": None
            },
            {
                "id": 3890,
                "name": "Kandahar",
                "state_code": "KAN",
                "latitude": "31.62887100",
                "longitude": "65.73717490",
                "type": None
            },
            {
                "id": 3879,
                "name": "Kapisa",
                "state_code": "KAP",
                "latitude": "34.98105720",
                "longitude": "69.62145620",
                "type": None
            },
            {
                "id": 3878,
                "name": "Khost",
                "state_code": "KHO",
                "latitude": "33.33384720",
                "longitude": "69.93716730",
                "type": None
            },
            {
                "id": 3876,
                "name": "Kunar",
                "state_code": "KNR",
                "latitude": "34.84658930",
                "longitude": "71.09731700",
                "type": None
            },
            {
                "id": 3900,
                "name": "Kunduz Province",
                "state_code": "KDZ",
                "latitude": "36.72855110",
                "longitude": "68.86789820",
                "type": None
            },
            {
                "id": 3891,
                "name": "Laghman",
                "state_code": "LAG",
                "latitude": "34.68976870",
                "longitude": "70.14558050",
                "type": None
            },
            {
                "id": 3897,
                "name": "Logar",
                "state_code": "LOG",
                "latitude": "34.01455180",
                "longitude": "69.19239160",
                "type": None
            },
            {
                "id": 3882,
                "name": "Nangarhar",
                "state_code": "NAN",
                "latitude": "34.17183130",
                "longitude": "70.62167940",
                "type": None
            },
            {
                "id": 3896,
                "name": "Nimruz",
                "state_code": "NIM",
                "latitude": "31.02614880",
                "longitude": "62.45041540",
                "type": None
            },
            {
                "id": 3880,
                "name": "Nuristan",
                "state_code": "NUR",
                "latitude": "35.32502230",
                "longitude": "70.90712360",
                "type": None
            },
            {
                "id": 3894,
                "name": "Paktia",
                "state_code": "PIA",
                "latitude": "33.70619900",
                "longitude": "69.38310790",
                "type": None
            },
            {
                "id": 3877,
                "name": "Paktika",
                "state_code": "PKA",
                "latitude": "32.26453860",
                "longitude": "68.52471490",
                "type": None
            },
            {
                "id": 3881,
                "name": "Panjshir",
                "state_code": "PAN",
                "latitude": "38.88023910",
                "longitude": "-77.17172380",
                "type": None
            },
            {
                "id": 3895,
                "name": "Parwan",
                "state_code": "PAR",
                "latitude": "34.96309770",
                "longitude": "68.81088490",
                "type": None
            },
            {
                "id": 3883,
                "name": "Samangan",
                "state_code": "SAM",
                "latitude": "36.31570060",
                "longitude": "67.96428670",
                "type": None
            },
            {
                "id": 3893,
                "name": "Sar-e Pol",
                "state_code": "SAR",
                "latitude": "36.21544020",
                "longitude": "65.93207380",
                "type": None
            },
            {
                "id": 3898,
                "name": "Takhar",
                "state_code": "TAK",
                "latitude": "36.66902490",
                "longitude": "69.47845410",
                "type": None
            },
            {
                "id": 3874,
                "name": "Urozgan",
                "state_code": "ORU",
                "latitude": "32.92756100",
                "longitude": "66.14152630",
                "type": None
            },
            {
                "id": 3885,
                "name": "Zabul",
                "state_code": "ZAB",
                "latitude": "32.19187850",
                "longitude": "67.04724380",
                "type": None
            }
        ]
    },
    {
        "name": "Aland Islands",
        "iso3": "ALA",
        "iso2": "AX",
        "numeric_code": "248",
        "phone_code": "+358-18",
        "capital": "Mariehamn",
        "currency": "EUR",
        "currency_name": "Euro",
        "currency_symbol": "€",
        "tld": ".ax",
        "region": "Europe",
        "region_id": "150",
        "subregion": "Northern Europe",
        "subregion_id": "154",
        "nationality": "Alandish",
        "timezones": [
            {
                "zoneName": "Europe/Mariehamn",
                "gmtOffset": 7200,
                "gmtOffsetName": "UTC+02:00",
                "abbreviation": "EET",
                "tzName": "Eastern European Time"
            }
        ],
        "translations": {
            "kr": "올란드 제도",
            "pt-BR": "Ilhas de Aland",
            "pt": "Ilhas de Aland",
            "nl": "Ålandeilanden",
            "hr": "Ålandski otoci",
            "fa": "جزایر آلاند",
            "de": "Åland",
            "es": "Alandia",
            "fr": "Åland",
            "ja": "オーランド諸島",
            "it": "Isole Aland",
            "cn": "奥兰群岛",
            "tr": "Åland Adaları"
        },
        "latitude": "60.11666700",
        "longitude": "19.90000000",
        "emoji": "🇦🇽",
        "emojiU": "U+1F1E6 U+1F1FD",
        "states": []
    }
]


# Task 1: Iterate the lists and list the states along with state properties

# import sys
# import io

# sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')


# for country in items:

#     print("Country: ", country["name"])
#     for state in country ["states"]:
#         print("id: ", state ["id"])
#         print("name: ", state ["name"])
#         print("state_code: ", state["state_code"])
#         print("latitude: ", state["latitude"])
#         print("longitude: ", state["longitude"])
#         print("type: ", state["type"])
#         print("\n")


'''
1. id
2. name
3. state_code
4. latitude
5. longitude
6. type
'''


# ----------------------------------------------------------------


# Task 2 : Similar to the above one, iterate the country and iterate the "Translations" and list the translations both key and value

# for country in items:
#     print("Country: ", country["name"])
#     for key, value in country ["translations"].items():
#         print (key, value)
#     print("\n")
    




# --------------------------------------------------------------------------------------------------------------------------------

# Task 3: Instead of hardcoding the json data inside the python, read the json file and iterate the country and list the states along with their state properties



# import json
# with open("Day -10/python/country-state.json") as file:
#     for idx, country in enumerate(items):
#         print("Country: ",idx, country["name"])
#         for state in country["states"]:
#             print("id: ", state["id"])
#             print("name: ", state["name"])
#             print("state_code: ", state["state_code"])
#             print("latitude: ", state["latitude"])
#             print("longitude: ", state["longitude"])
#             print("type: ", state["type"])
#             print("\n") 

# -----------------

# import sys
# import json

# # Set stdout to use UTF-8 encoding
# sys.stdout.reconfigure(encoding='utf-8')

# # Load JSON data from the file
# with open("Day -10/python/country-state.json", "r", encoding="utf-8") as file:
#     items = json.load(file)

# # Iterate through each country and list its states
# for idx, country in enumerate(items):
#     print("Country:", idx, country["name"])
    
#     # Iterate through the states in the country
    # for state in country.get("states", []):
    #     print("id:", state.get("id", "N/A"))
    #     print("name:", state.get("name", "N/A"))
    #     print("state_code:", state.get("state_code", "N/A"))
    #     print("latitude:", state.get("latitude", "N/A"))
    #     print("longitude:", state.get("longitude", "N/A"))
    #     print("type:", state.get("type", "N/A"))
    #     print("\n")


# ------------------------------------------------------------------------------------
# Task 4 : Do the all the above task using the while loop as well

import sys
import io

# Set stdout encoding to utf-8 to handle Unicode characters
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

idx = 0

# Task 4: Iterate using a while loop
while idx < len(items):
    country = items[idx]
    print("Country: ", idx, country["name"])
    
    # Iterate through the states in the current country
    for state in country.get("states", []):
        print("id:", state.get("id", "N/A"))
        print("name:", state.get("name", "N/A"))
        print("state_code:", state.get("state_code", "N/A"))
        print("latitude:", state.get("latitude", "N/A"))
        print("longitude:", state.get("longitude", "N/A"))
        print("type:", state.get("type", "N/A"))
        print("\n")
    
    # Increment the index to move to the next country
    idx += 1