FROM python:3.11-slim

WORKDIR /app

COPY . .

RUN pip install --no-cache-dir django djangorestframework django-cors-headers pillow qrcode

EXPOSE 8001

CMD ["python", "manage.py", "runserver", "0.0.0.0:8001"]
