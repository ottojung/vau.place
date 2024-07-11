
publish: rsync gitpush

SYNC = rsync --links --delete --archive --partial --recursive

rsync: rsyncpush

rsyncpush: | website hook tmenc

hook:
	ssh website@$(MY_SERVER_NAME) 'sh ~/bin/update.sh'

website:
	$(SYNC) website-root/ website@$(MY_SERVER_NAME):root/

tmenc:
	$(SYNC) ./tmenc-core/src/js/ website@$(MY_SERVER_NAME):root/serve/tmenc/

gitpush:
	git push origin master
