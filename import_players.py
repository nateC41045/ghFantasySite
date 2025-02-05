import csv
from app import db, Player, app

def import_players(csv_filename):
    with app.app_context():
        db.create_all()  # Ensure the database is initialized

        # Open the CSV file
        with open(csv_filename, newline='', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)

            for row in reader:
                player = Player(
                    name=row['name'],
                    position=row['position'],
                    team=row['team'],  # Changed from salary to team
                    points_2024=float(row['points_2024']) if row['points_2024'] else None,
                    points_2025=float(row['points_2025']) if row['points_2025'] else None,
                    rank=0
                )
                db.session.add(player)
        
        db.session.commit()
        print("Player data imported successfully!")

# Run the import function
if __name__ == "__main__":
    import_players("players.csv")