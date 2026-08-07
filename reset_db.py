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

# Load queries from queries.gql
queries_path = pathlib.Path(__file__).parent / "dataconnect" / "default-connector" / "queries.gql"
queries_raw = queries_path.read_text(encoding="utf-8")

def reset_database():
    print("🧹 Wiping out all database data using Python Admin SDK...")
    try:
        dc_client.execute_graphql(
            queries_raw,
            options=dataconnect.GraphqlOptions(operation_name='DeleteAllData')
        )
        print("✨ Database successfully cleared!")
    except Exception as e:
        print(f"❌ Failed to reset database: {e}")
        raise e

if __name__ == "__main__":
    reset_database()
