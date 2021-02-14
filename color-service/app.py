import os
from flask import Flask, render_template_string
app = Flask(__name__) 

index_page = """<html><body style="margin: 0; padding: 0;"><div style="background-color: {{ color }}; height: 100%; width: 100%"></div></body></html>"""

@app.route('/') 
def hello(): 
    color = os.getenv('COLOR')

    if color == None:
        color = "black"

    return render_template_string(index_page, color=color)
  
if __name__ == "__main__": 
    app.run(host ='0.0.0.0', port = 5000, debug = True)  
