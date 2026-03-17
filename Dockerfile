# Read the doc: https://huggingface.co/docs/hub/spaces-sdks-docker
FROM nginx:alpine

# Copy the built static site into Nginx's default html directory
COPY dist /usr/share/nginx/html

# Create a custom nginx config that listens on port 7860
RUN printf 'server {\n  listen 7860;\n  location / {\n    root /usr/share/nginx/html;\n    index index.html index.htm;\n    try_files $uri $uri/ /index.html;\n  }\n}\n' > /etc/nginx/conf.d/default.conf

EXPOSE 7860

CMD ["nginx", "-g", "daemon off;"]
