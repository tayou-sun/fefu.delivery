FROM nginx:1.19.2-alpine

COPY conf.d/default.conf.template /etc/nginx/conf.d/default.template
COPY nginx.conf /etc/nginx/

CMD sh -c "envsubst \"`env | awk -F = '{printf \" \\\\$%s\", $1}'`\" < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
