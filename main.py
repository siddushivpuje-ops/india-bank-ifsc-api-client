# pip install requests
import os
import requests

RAPIDAPI_KEY = os.getenv("RAPIDAPI_KEY", "YOUR_RAPIDAPI_KEY")
RAPIDAPI_HOST = "YOUR-RAPIDAPI-HOST.p.rapidapi.com"  # from your RapidAPI dashboard


def get_branch(ifsc: str):
	resp = requests.get(
		f"https://{RAPIDAPI_HOST}/api/v1/ifsc/{ifsc}",
		headers={
			"x-rapidapi-key": RAPIDAPI_KEY,
			"x-rapidapi-host": RAPIDAPI_HOST,
		},
		timeout=10,
	)
	return resp.status_code, resp.json()


if __name__ == "__main__":
	print(get_branch("SBIN0005943"))
