python3.9 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
pip install whitenoise
python3.9 manage.py collectstatic