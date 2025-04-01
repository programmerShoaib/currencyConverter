# currencyConverter
def convert_currency(amount, from_currency, to_currency):
# API endpoint to get the exchange rate
url = f"https://api.exchangerate-api.com/v4/latest/{from_currency}"
response = requests.get(url)
# Check if the response was successful
if response.status_code == 200:
# Get the exchange rate from the response
exchange_rate = response.json()["rates"][to_currency]
# Convert the amount to the target currency
converted_amount = amount * exchange_rate
# Return the converted amount
return converted_amount
# Test the function
print(convert_currency(100, "USD", "EUR"))
