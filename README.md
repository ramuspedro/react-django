# Django Restful Project with Docker

## Getting markdown styles
- https://dillinger.io/

## Create the project
- In the root file create: *Dockerfile, requirements.txt, docker-compose.yml*

* Build the image
```sh
$ docker-compose run web django-admin.py startproject project .
```

* Change the ownership of the new files
```sh
$ sudo chown -R $user .
```

* Configure project/settings.py
```
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
```

* Run: *docker-compose up*

* To run the migration on django: *docker-compose run web python manage.py migrate*
or
* Enter on container and run *python manage.py migrate* (https://docs.djangoproject.com/pt-br/2.0/intro/tutorial02/)

* Access the app: *http://localhost:8000/*

* Creating a app like blog *docker-compose run web python manage.py startapp blog*

* Create superuser: *python manage.py createsuperuser*

* Migrate blog model *python manage.py makemigrations blog*

## Redo the project
- To erase what you've done so far:
```sh
$ docker-compose down
```

- remove the image of the project
```sh
$ docker rmi image_id --force

$ sudo rm -R manage.py project
```