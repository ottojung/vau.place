
publish: rsync gitpush

SYNC = rsync --links --delete -P -r

rsync: rsyncpush
	ssh website@$(MY_SERVER_NAME) 'chmod -R o+rx,g+rx root/serve/ ; chmod o+x,g+x . ; chmod o+x,g+x root ; chmod o+x,g+x root/serve'

rsyncpush: tmenc website

website:
	$(SYNC) website-root/ website@$(MY_SERVER_NAME):root

tmenc: website
	$(SYNC) $(MY_MEDIA)/text/code/tmenc-core/src/js/ website@$(MY_SERVER_NAME):root/serve/tmenc/

gitpush:
	git push origin master
