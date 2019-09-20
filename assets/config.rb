cache = true
asset_cache_buster :none
Encoding.default_external = "utf-8"
sourcemap = (environment == :production) ? false : true

http_path = "/"
css_dir = "css/components"
sass_dir = "scss"
images_dir = "image"
javascripts_dir = "js"
output_style = :expanded
relative_assets = true
line_comments = false