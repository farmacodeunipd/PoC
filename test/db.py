import mysql.connector

def test_mysql_connection():
    try:
        conn = mysql.connector.connect(
            host='localhost',
            user='myuser',
            password='mypassword',
            database='mydatabase'
        )
        assert conn.is_connected()
        print("MySQL Connection Successful!")
    except Exception as e:
        print("MySQL Connection Failed:", e)