from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.after_request
def add_header(response):
    # Cache static assets for 1 year (31536000 seconds)
    if request.path.startswith('/static'):
        response.headers['Cache-Control'] = 'public, max-age=31536000'
    return response

@app.route('/robots.txt')
def robots():
    content = "User-agent: *\nDisallow:\nSitemap: https://amaziweb.pythonanywhere.com/sitemap.xml"
    return content, 200, {'Content-Type': 'text/plain'}

@app.route('/sitemap.xml')
def sitemap():
    content = """<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://amaziweb.pythonanywhere.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>"""
    return content, 200, {'Content-Type': 'application/xml'}

if __name__ == '__main__':
    app.run(debug=True, port=5000)
