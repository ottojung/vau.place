
publish: rsync gitpush

SYNC = rsync --links --delete -P -r --chmod=o=X,g=rX

rsync: rsyncpush

rsyncpush: | tmenc website hook

hook:
	ssh website@$(MY_SERVER_NAME) 'sh ~/bin/update.sh'

website:
	$(SYNC) website-root/ website@$(MY_SERVER_NAME):root/

tmenc:
	$(SYNC) $(MY_MEDIA)/text/code/tmenc-core/src/js/ website@$(MY_SERVER_NAME):root/serve/tmenc/

gitpush:
	git push origin master
