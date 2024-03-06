import mysql.connector
import pytest

@pytest.fixture(scope="module")
def db_connection():
    # Set up a test database connection
    connection = mysql.connector.connect(
        host="db",
        user="myuser",
        password="mypassword",
        database="mydatabase"
    )
    yield connection
    # Close the database connection after all tests are finished
    connection.close()

def test_database_connection(db_connection):
    # Test if the database connection is successful
    assert db_connection.is_connected()

def test_select_query(db_connection):
    # Test querying data from the database
    cursor = db_connection.cursor()
    cursor.execute("SELECT * FROM anacli LIMIT 10")
    result = cursor.fetchall()
    cursor.close()

    # Verify if the query returns the expected results
    assert len(result) > 0

# Add more test functions as needed to cover other database operations
