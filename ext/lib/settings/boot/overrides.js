import 'ext/lib/boot/overrides'

import * as ForumForm from 'lib/settings/forum-new/forum-form/forum-form'
import ForumFormExt from 'ext/lib/settings/forum-new/forum-form/forum-form'

import * as Settings from 'lib/settings/settings-profile/view.js'
import SettingsExt from 'ext/lib/settings/settings-profile/view.js'


ForumForm.default = ForumFormExt
Settings.default = SettingsExt
