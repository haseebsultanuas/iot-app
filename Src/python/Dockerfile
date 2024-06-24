# syntax=docker/dockerfile:1

FROM python:3.11.0a2

WORKDIR /usr/app

COPY ./ /usr/app
# COPY ./python/health_monitoring.py /usr/app

# COPY ./python/requirements.txt /usr/app

RUN pip install -r requirements.txt