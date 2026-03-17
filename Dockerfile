# Use a lightweight Nginx image
FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
COPY dist /usr/share/nginx/html

# Expose port 7860 (Hugging Face Spaces default)
EXPOSE 7860

# Configure Nginx to listen on 7860
RUN sed -i 's/listen\(.*\)80;/listen 7860;/' /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
