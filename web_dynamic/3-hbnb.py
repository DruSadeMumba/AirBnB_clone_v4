#!/usr/bin/python3
""" Starts a Flash Web Application """
import uuid
from flask import Flask, render_template
from models import storage

app = Flask(__name__)
app.url_map.strict_slashes = False
# app.jinja_env.trim_blocks = True
# app.jinja_env.lstrip_blocks = True


@app.teardown_appcontext
def close_db(error):
    """ Remove the current SQLAlchemy Session """
    storage.close()


@app.route('/3-hbnb/')
def hbnb():
    """ HBNB is alive! """
    state_objs = storage.all('State').values()
    states = {state.id: state.name for state in state_objs}
    amenities = storage.all('Amenity').values()
    places = storage.all('Place').values()
    users = {user.id: f"{user.first_name} {user.last_name}" for user in storage.all('User').values()}
    return render_template('3-hbnb.html',
                           cache_id=uuid.uuid4(),
                           states=states,
                           amenities=amenities,
                           places=places,
                           users=users)


if __name__ == "__main__":
    """ Main Function """
    app.run(host='0.0.0.0', port=5000)
