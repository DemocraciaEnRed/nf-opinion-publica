FROM democracyos/democracyos:2.11.15

MAINTAINER Democracia en Red <it@democracyos.io>

COPY ./dos-override/models/comment.js /usr/src/lib/models/comment.js
COPY ./dos-override/api-v2/db-api/comments/index.js /usr/src/lib/api-v2/db-api/comments/index.js
COPY ./dos-override/api-v2/db-api/comments/scopes.js /usr/src/lib/api-v2/db-api/comments/scopes.js

ENV LOCALE=es \
  AVAILABLE_LOCALES=es,en \
  ENFORCE_LOCALE=true \
  MODERATOR_ENABLED=true \
  MULTI_FORUM=true \
  RESTRICT_FORUM_CREATION=true \
  FAVICON=/ext/lib/boot/favicon.ico \
  LOGO=/ext/lib/site/footer/assets/opinion-publica-header.png \
  LOGO_MOBILE=/ext/lib/site/footer/assets/opinion-publica-header.png \
  NOTIFICATIONS_MAILER_EMAIL=info@confianzapublica.com.ar \
  NOTIFICATIONS_MAILER_NAME='Opinión Pública - Confianza Pública' \
  ORGANIZATION_EMAIL=info@confianzapublica.com.ar \
  ORGANIZATION_NAME='Opinión Pública - Confianza Pública' \
  SOCIALSHARE_SITE_NAME='Opinión Pública - Confianza Pública' \
  SOCIALSHARE_SITE_DESCRIPTION='Plataforma de participación ciudadana del Confianza Pública' \
  SOCIALSHARE_IMAGE=https://opinionpublica.confianzapublica.com.ar/ext/lib/boot/sharer.png \
  SOCIALSHARE_DOMAIN=opinionpublica.confianzapublica.com.ar \
  SOCIALSHARE_TWITTER_USERNAME=@confianzapubli \
  TWEET_TEXT='Te invitamos a debatir sobre el tema “{topic.mediaTitle}” en nuestro portal'