import requests

def test_python_api():
    response = requests.get('http://localhost:4000')
    assert response.status_code == 200
    print("Python API Test Passed!")