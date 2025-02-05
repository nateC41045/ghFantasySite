from flask import Flask, request, jsonify
from flask_migrate import Migrate  # Import Migrate after installation
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os
import csv
from werkzeug.utils import secure_filename

# Initialize Flask application
app = Flask(__name__)
CORS(app)  # Enable CORS for React front-end

# Configure database URI
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///fantasy_draft.db'
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['ALLOWED_EXTENSIONS'] = {'csv'}

# Initialize SQLAlchemy
db = SQLAlchemy(app)

# Initialize Flask-Migrate
migrate = Migrate(app, db)  # This line connects Migrate with Flask and SQLAlchemy

# Models
class Player(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    position = db.Column(db.String(50), nullable=False)
    team = db.Column(db.String(50), nullable=True)
    points_2024 = db.Column(db.Float, nullable=True)
    points_2025 = db.Column(db.Float, nullable=True)

class Draft(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(50), nullable=False)
    participants = db.Column(db.Integer, nullable=False)
    status = db.Column(db.String(50), nullable=False)

# Helper function to check for allowed file extensions
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

# Route to upload CSV file
@app.route('/upload_csv', methods=['POST'])
def upload_csv():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)
        # Process CSV and populate the database
        process_csv(file_path)
        return jsonify({"message": "CSV uploaded and processed successfully"}), 200
    return jsonify({"error": "Invalid file format"}), 400

# Function to process the CSV and populate the database
def process_csv(file_path):
    with open(file_path, mode='r') as file:
        csv_reader = csv.DictReader(file)  # Assumes first row is the header
        for row in csv_reader:
            # Create Player objects and add to the database
            player = Player(
                name=row['name'],
                position=row['position'],
                team=row['team'],
                points_2024=float(row['points_2024']),
                points_2025=float(row['points_2025'])
            )
            db.session.add(player)
        db.session.commit()

# Routes for Drafts
@app.route('/drafts', methods=['POST'])
def create_draft():
    data = request.json
    draft = Draft(type=data['type'], participants=data['participants'], status='pending')
    db.session.add(draft)
    db.session.commit()
    return jsonify({"message": "Draft created", "draft_id": draft.id}), 201

@app.route('/drafts/<int:draft_id>/start', methods=['POST'])
def start_draft(draft_id):
    draft = Draft.query.get_or_404(draft_id)
    draft.status = 'active'
    db.session.commit()
    return jsonify({"message": "Draft started"}), 200

@app.route('/drafts/<int:draft_id>/pick', methods=['POST'])
def make_pick(draft_id):
    data = request.json
    player_id = data['player_id']
    player = Player.query.get_or_404(player_id)
    draft = Draft.query.get_or_404(draft_id)
    
    # Logic for pick
    db.session.commit()
    return jsonify({"message": "Pick made"}), 200

# Route to retrieve all players
@app.route('/players', methods=['GET'])
def get_players():
    players = Player.query.all()
    return jsonify([
        {"id": p.id, "name": p.name, "position": p.position, "team": p.team, "points_2024": p.points_2024, "points_2025": p.points_2025}
        for p in players
    ])

# Create tables before every request
@app.before_request
def create_tables():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True)
    #app.run(host='192.168.86.1', port=5000, debug=True, threaded=False)