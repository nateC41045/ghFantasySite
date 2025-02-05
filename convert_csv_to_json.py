import csv
import json

csv_file = "players.csv"  # Update this path if needed
json_file = "players.json"

players = []

with open(csv_file, newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        players.append(row)

with open(json_file, "w", encoding="utf-8") as jsonfile:
    json.dump(players, jsonfile, indent=4)

print(f"Converted {csv_file} to {json_file}")