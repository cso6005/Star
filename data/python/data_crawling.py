from bs4 import BeautifulSoup
from pprint import pprint
import requests
import pandas as pd
from html_table_parser import parser_functions

def extract():

    html = requests.get('https://www.weather.go.kr/w/obs-climate/land/city-obs.do')

    soup = BeautifulSoup(html.text, 'html.parser')

    table = soup.find('table', {'class':'table-col'})
    table = parser_functions.make2d(table)

    date = soup.find('div', {'class':'cmp-table-topinfo'})
    date = date.text[5:] 

    return table, date

def transform(table, date):

    df = pd.DataFrame(data=table[2:], columns=table[1:2])
    df = df[['이름', '현재일기', '시정km', '운량1/10', '중하운량','현재기온','체감온도','습도%']]

    df['시간'] = date

    for index, row in df.iterrows():
        if row['시정km'] == "20 이상":
            row['시정km'] = "20"
    
    df.rename(columns={'운량1/10':'운량'}, inplace=True)
    df.rename(columns={'시정km':'시정'}, inplace=True)
    df.rename(columns={'습도%':'습도'}, inplace=True)

    return df

def load(df):
    df.to_csv("weather_data.csv", index=False)

# 실행
table, date = extract()
df = transform(table, date)
load(df)