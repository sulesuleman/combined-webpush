#!/bin/bash
cd /home/ubuntu/backend
source myprojectenv/bin/activate
cd app
python3 manage.py migrate
sudo service gunicorn restart
python3 manage.py reset_integration_files
