
publish: rsync gitpush

SYNC = rsync --links --delete -P -r

rsync: tmenc website

website:
	$(SYNC) website-root/ website@$(MY_SERVER_NAME):root

tmenc: website
	$(SYNC) $(MY_MEDIA)/text/code/tmenc-core/src/js/ website@$(MY_SERVER_NAME):root/serve/tmenc/

gitpush:
	git push origin master
