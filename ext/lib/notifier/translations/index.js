const translations = require('democracyos-notifier/lib/translations')

const t = translations.t

const overrides = {
  'templates.email.greeting': 'Hola, {userName}, iniciaste el proceso de registro para participar en opinión pública',
  'templates.email.signature': 'Opinión Pública',

  'templates.welcome-email.subject': 'Bienvenido a Opinión Pública',
  'templates.welcome-email.body': 'Para finalizarlo hacé <a href="{validateUrl}">click aquí.</a>',
  'templates.welcome-email.ps': 'En caso de no haberte registrado, por favor ignorá este correo.',

  'templates.comment-reply.subject': '{authorReply} respondió tu comentario',
  'templates.comment-reply.body': 'Tienes una nueva respuesta a tu comentario.',
  'templates.comment-reply.body2': 'Por favor <a href=\"{url}\">cliquea aquí</a> para verla.',

  'templates.topic-published.subject': 'Nuevo tema publicado',
  'templates.topic-published.body': 'Un nuevo tema fue publicado:',
  'templates.topic-published.body2': 'Por favor <a href=\"{url}\">cliquea aquí</a> para verlo.'
}

Object.assign(t.es, overrides)
Object.assign(t.en, overrides)
