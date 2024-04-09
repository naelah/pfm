python get-pip.py
python -m pip3 install whitenoise
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py collectstatic