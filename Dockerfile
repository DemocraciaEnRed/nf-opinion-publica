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
  FAVICON=/ext/lib/boot/favicon_sunchales.ico \
  LOGO=/ext/lib/site/footer/opinion-publica-header.png \
  LOGO_MOBILE=/ext/lib/site/footer/opinion-publica-header.png \
  NOTIFICATIONS_MAILER_EMAIL=comunicacion@sunchales.gov.ar\
  NOTIFICATIONS_MAILER_NAME='Municipio de Sunchales' \
  ORGANIZATION_EMAIL=municipalidad@sunchales.gov.ar \
  ORGANIZATION_NAME='Sunchales Participa - Municipio de Sunchales' \
  SOCIALSHARE_SITE_NAME='Sunchales Participa - Municipio de Sunchales' \
  SOCIALSHARE_SITE_DESCRIPTION='Plataforma de participación ciudadana del Municipio de Sunchales' \
  SOCIALSHARE_IMAGE=https://cldup.com/Y7mWiU4D1Q.png \
  SOCIALSHARE_DOMAIN=sunchales.gob.ar/participa \
  SOCIALSHARE_TWITTER_USERNAME=@munisunchales \
  TWEET_TEXT='Estoy tratando de mejorar esta propuesta “{topic.mediaTitle}” ¡Construyamos un mejor Sunchales para todos y todas!'
