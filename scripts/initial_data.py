import os
import pathlib
import firebase_admin
from firebase_admin import credentials, dataconnect

# Target local Data Connect emulator
os.environ["DATA_CONNECT_EMULATOR_HOST"] = "127.0.0.1:9399"

# Initialize Firebase Admin
cred_path = "/Users/minseulkim/firebase-admin-python/tests/data/service_account.json"
if os.path.exists(cred_path):
    cred = credentials.Certificate(cred_path)
    firebase_admin.initialize_app(cred, options={'projectId': 'starterproject'})
else:
    firebase_admin.initialize_app(options={'projectId': 'starterproject'})

# Initialize DataConnect client with starterproject connector
dc_client = dataconnect.client(
    dataconnect.ConnectorConfig(
        location="us-east4",
        service_id="starterproject",
        connector="default"
    )
)

# Load the raw queries from queries.gql
queries_path = pathlib.Path(__file__).parent.parent / "dataconnect" / "default-connector" / "queries.gql"
queries_raw = queries_path.read_text(encoding="utf-8")

def initial_push():
    print("Starting database initial setup using Firebase Python Admin SDK...")
    try:
        # Wiping all the data (reset)
        print("Wiping out Data!")
        dc_client.execute_graphql(
            queries_raw,
            options=dataconnect.GraphqlOptions(operation_name='DeleteAllData')
        )

        # Inputting Restaurants
        print("🎁 Adding restaurants to wishlist")
        restaurants_to_add = [
            {"name": "Mr. Pollo", "cuisine": "Colombian", "milesRequired": 4.0},
            {"name": "San Ho Won", "cuisine": "Korean", "milesRequired": 5.0},
            {"name": "Saison", "cuisine": "American", "milesRequired": 5.0},
            {"name": "Californios", "cuisine": "Mexican", "milesRequired": 5.0},
            {"name": "Picaro", "cuisine": "Mexican", "milesRequired": 3.0},
            {"name": "Canela Bistro & Wine Bar", "cuisine": "Spanish Tapas", "milesRequired": 4.0},
            {"name": "Khao Tiew", "cuisine": "Thai", "milesRequired": 3.0},
            {"name": "The Happy Crane", "cuisine": "Chinese", "milesRequired": 5.0},
            {"name": "Cotogna", "cuisine": "Italian", "milesRequired": 4.0},
            {"name": "Nari", "cuisine": "Thai", "milesRequired": 4.0},
            {"name": "Tanzie's", "cuisine": "Thai", "milesRequired": 3.0},
            {"name": "Cache", "cuisine": "French", "milesRequired": 4.0},
            {"name": "Nisei", "cuisine": "Japanese", "milesRequired": 5.0},
            {"name": "Han Il Kwan", "cuisine": "Korean", "milesRequired": 4.0},
            {"name": "Boiling Hot Pot", "cuisine": "Hot pot", "milesRequired": 3.0},
            {"name": "Praaw Thai", "cuisine": "Thai", "milesRequired": 3.0}
        ]

        for r in restaurants_to_add:
            print(f"   -> Creating reward: {r['name']} ({r['milesRequired']} miles)")
            dc_client.execute_graphql(
                queries_raw,
                options=dataconnect.GraphqlOptions(
                    operation_name='AddRestaurant',
                    variables=r
                )
            )

        print("✨ Seeding completed successfully!")
    except Exception as error:
        print(f"Database initial filling out failed with error: {error}")
        raise error

if __name__ == "__main__":
    initial_push()
