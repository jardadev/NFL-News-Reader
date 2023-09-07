from dotenv import load_dotenv
import os
from supabase import create_client, Client

# load local env variables
load_dotenv()
url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supa: Client = create_client(url, key)
